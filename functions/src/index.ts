import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

admin.initializeApp();

const db = admin.firestore();
const messaging = admin.messaging();

// Función programada para enviar notificaciones 1 hora antes del deadline
// export const sendReminderNotifications = functions.pubsub
//   .schedule('every 15 minutes')
//   .onRun(async (context) => {
//     const now = admin.firestore.Timestamp.now();
//     const oneHourLater = new Date(now.toDate().getTime() + 60 * 60 * 1000);
//     const oneHourFifteenLater = new Date(now.toDate().getTime() + 75 * 60 * 1000);

//     try {
//       // Buscar rondas que expiran en ~1 hora
//       const roundsSnapshot = await db
//         .collection('rounds')
//         .where('status', '==', 'open')
//         .where('deadline', '>=', now)
//         .where('deadline', '<=', admin.firestore.Timestamp.fromDate(oneHourFifteenLater))
//         .get();

//       for (const roundDoc of roundsSnapshot.docs) {
//         const round = roundDoc.data();
//         const roundId = roundDoc.id;
//         const communityId = round.communityId;

//         // Obtener apuestas de esta ronda
//         const betsSnapshot = await db
//           .collection('bets')
//           .where('roundId', '==', roundId)
//           .get();

//         const userIdsWithBets = new Set(betsSnapshot.docs.map((doc) => doc.data().userId));

//         // Obtener miembros de la comunidad
//         const usersSnapshot = await db.collection('users').get();
        
//         for (const userDoc of usersSnapshot.docs) {
//           const userId = userDoc.id;
//           const userData = userDoc.data();
          
//           // Verificar si el usuario es miembro de esta comunidad
//           if (!userData.communities || !userData.communities[communityId]) {
//             continue;
//           }

//           // Si ya apostó, saltar
//           if (userIdsWithBets.has(userId)) {
//             continue;
//           }

//           // Verificar si ya se envió notificación
//           const notifSnapshot = await db
//             .collection('notifications_log')
//             .where('targetUserId', '==', userId)
//             .where('roundId', '==', roundId)
//             .where('type', '==', 'reminder')
//             .get();

//           if (!notifSnapshot.empty) {
//             continue;
//           }

//           // Enviar notificación
//           const tokens = userData.fcmTokens || [];
//           if (tokens.length > 0) {
//             const message = {
//               notification: {
//                 title: '¡Recuerda apostar!',
//                 body: 'Quedan menos de 1 hora para que cierre una ronda. ¡No te olvides de hacer tu apuesta!',
//               },
//               data: {
//                 roundId,
//                 communityId,
//                 type: 'reminder',
//               },
//               tokens,
//             };

//             try {
//               await messaging.sendMulticast(message);
              
//               // Registrar notificación enviada
//               await db.collection('notifications_log').add({
//                 targetUserId: userId,
//                 roundId,
//                 type: 'reminder',
//                 sentAt: admin.firestore.Timestamp.now(),
//               });
//             } catch (error) {
//               console.error('Error enviando notificación:', error);
//             }
//           }
//         }
//       }

//       console.log('Recordatorios procesados');
//     } catch (error) {
//       console.error('Error en función de recordatorios:', error);
//     }

//     return null;
//   });

// Función trigger cuando se publican resultados
export const onResultsPublished = functions.firestore
  .document('rounds/{roundId}')
  .onUpdate(async (change, context) => {
    const before = change.before.data();
    const after = change.after.data();
    const roundId = context.params.roundId;

    // Verificar si se publicaron resultados
    if (before.status !== 'results_posted' && after.status === 'results_posted' && after.results) {
      const communityId = after.communityId;
      const results = after.results;

      try {
        // Obtener todas las apuestas
        const betsSnapshot = await db
          .collection('bets')
          .where('roundId', '==', roundId)
          .get();

        // Calcular ganadores
        const winners: string[] = [];
        
        for (const betDoc of betsSnapshot.docs) {
          const bet = betDoc.data();
          let isWinner = true;

          for (let i = 0; i < bet.predictions.length; i++) {
            const pred = bet.predictions[i];
            const result = results[i];

            if (pred.type === 'exact') {
              if (pred.homeGoals !== result.homeGoals || pred.awayGoals !== result.awayGoals) {
                isWinner = false;
                break;
              }
            } else {
              if (pred.pick !== result.result) {
                isWinner = false;
                break;
              }
            }
          }

          if (isWinner) {
            winners.push(bet.userId);
          }
        }

        // Obtener tokens de todos los miembros de la comunidad
        const usersSnapshot = await db.collection('users').get();
        const communityMembers: any[] = [];

        for (const userDoc of usersSnapshot.docs) {
          const userData = userDoc.data();
          if (userData.communities && userData.communities[communityId]) {
            communityMembers.push({
              id: userDoc.id,
              tokens: userData.fcmTokens || [],
              nick: userData.nick,
            });
          }
        }

        // Enviar notificaciones
        if (winners.length > 0) {
          // Hay ganadores
          const winnerNicks = communityMembers
            .filter((m) => winners.includes(m.id))
            .map((m) => m.nick)
            .join(', ');

          for (const member of communityMembers) {
            if (member.tokens.length > 0) {
              const isWinner = winners.includes(member.id);
              const message = {
                notification: {
                  title: isWinner ? '¡Felicidades, ganaste!' : 'Resultados publicados',
                  body: isWinner
                    ? '¡Has acertado todos los pronósticos!'
                    : `Ganadores: ${winnerNicks}`,
                },
                data: {
                  roundId,
                  communityId,
                  type: 'results',
                },
                tokens: member.tokens,
              };

              try {
                await messaging.sendMulticast(message);
              } catch (error) {
                console.error('Error enviando notificación:', error);
              }
            }
          }
        } else {
          // ¡¡BOTE!!
          for (const member of communityMembers) {
            if (member.tokens.length > 0) {
              const message = {
                notification: {
                  title: '¡¡BOTE!!',
                  body: 'Nadie ha acertado esta ronda. ¡Bote acumulado!',
                },
                data: {
                  roundId,
                  communityId,
                  type: 'jackpot',
                },
                tokens: member.tokens,
              };

              try {
                await messaging.sendMulticast(message);
              } catch (error) {
                console.error('Error enviando notificación:', error);
              }
            }
          }
        }

        console.log('Notificaciones de resultados enviadas');
      } catch (error) {
        console.error('Error en función de resultados:', error);
      }
    }

    return null;
  });
