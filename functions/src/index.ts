import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

admin.initializeApp();

const db = admin.firestore();
const messaging = admin.messaging();

// Cloud Function que se dispara cuando se crea o actualiza una ronda
// Envía notificaciones cuando la ronda es visible (creación directa o cambio de estado)
export const onRoundVisibilityChange = functions.firestore
  .document('rounds/{roundId}')
  .onWrite(async (change, context) => {
    const after = change.after.data();
    const before = change.before.exists ? change.before.data() : null;
    const roundId = context.params.roundId;

    // Si el documento fue eliminado, salir
    if (!after) {
      console.log(`Ronda ${roundId} eliminada, no se envían notificaciones`);
      return null;
    }

    // Determinar si debemos enviar notificación:
    // 1. Ronda nueva con isVisible = true (before es null y after.isVisible es true)
    // 2. Ronda existente que cambió de false a true (before.isVisible === false && after.isVisible === true)
    const shouldNotify = after.isVisible === true && (!before || before.isVisible === false);

    if (!shouldNotify) {
      console.log(`Ronda ${roundId} no requiere notificación (isVisible=${after.isVisible})`);
      return null;
    }

    const communityId = after.communityId;

    try {
      console.log(`📢 Enviando notificaciones para ronda ${roundId} (comunidad: ${communityId})`);

      // Obtener información de la comunidad
      const communityDoc = await db.collection('communities').doc(communityId).get();
      if (!communityDoc.exists) {
        console.error('❌ Comunidad no encontrada:', communityId);
        return null;
      }

      const communityName = communityDoc.data()?.name || 'tu comunidad';

      // Obtener todos los usuarios
      const usersSnapshot = await db.collection('users').get();
      const communityMembers: Array<{ id: string; tokens: string[]; nick: string }> = [];

      // Filtrar solo miembros de esta comunidad
      for (const userDoc of usersSnapshot.docs) {
        const userData = userDoc.data();
        if (userData.communities && userData.communities[communityId]) {
          communityMembers.push({
            id: userDoc.id,
            tokens: userData.fcmTokens || [],
            nick: userData.nick || 'Usuario',
          });
        }
      }

      console.log(`👥 Enviando notificaciones a ${communityMembers.length} miembros de la comunidad`);

      // Enviar notificaciones a todos los miembros
      let successCount = 0;
      let failureCount = 0;

      for (const member of communityMembers) {
        if (member.tokens.length === 0) {
          console.log(`⚠️ Usuario ${member.nick} no tiene tokens FCM`);
          continue;
        }

        const message = {
          notification: {
            title: '🚀 Nueva ronda disponible!',
            body: `"${after.name}" en ${communityName}. ¡Haz tu apuesta!`,
          },
          data: {
            roundId,
            communityId,
            type: 'new_round_visible',
            roundName: after.name || '',
          },
          tokens: member.tokens,
        };

        try {
          const response = await messaging.sendEachForMulticast(message);
          
          if (response.successCount > 0) {
            successCount += response.successCount;
            console.log(`✅ Notificación enviada a ${member.nick} (${response.successCount}/${member.tokens.length} tokens)`);
          }

          if (response.failureCount > 0) {
            failureCount += response.failureCount;
            console.log(`⚠️ ${response.failureCount} fallos para ${member.nick}`);
            
            // Detectar y eliminar SOLO tokens definitivamente inválidos
            const tokensToRemove: string[] = [];
            response.responses.forEach((resp, idx) => {
              if (!resp.success) {
                const errorCode = resp.error?.code;
                console.log(`  - Token ${idx}: Error ${errorCode} - ${resp.error?.message}`);
                
                // Solo eliminar si es error permanente, no errores temporales
                if (errorCode === 'messaging/registration-token-not-registered' || 
                    errorCode === 'messaging/invalid-registration-token' ||
                    errorCode === 'messaging/invalid-argument') {
                  tokensToRemove.push(member.tokens[idx]);
                  console.log(`  🗑️ Token marcado para eliminación: ${errorCode}`);
                } else {
                  console.log(`  ⏭️ Error temporal, no se elimina token: ${errorCode}`);
                }
              }
            });

            // Eliminar tokens inválidos de Firestore
            if (tokensToRemove.length > 0) {
              await db.collection('users').doc(member.id).update({
                fcmTokens: admin.firestore.FieldValue.arrayRemove(...tokensToRemove)
              });
              console.log(`🧹 Eliminados ${tokensToRemove.length} tokens inválidos de ${member.nick}`);
            }
          }
        } catch (error) {
          console.error(`❌ Error enviando notificación a ${member.nick}:`, error);
          failureCount += member.tokens.length;
        }
      }

      console.log(`✅ Notificaciones completadas: ${successCount} éxitos, ${failureCount} fallos`);
      return null;
    } catch (error) {
      console.error('❌ Error en función de notificaciones:', error);
      return null;
    }
  });

// Cloud Function programada que se ejecuta cada 30 minutos
// Envía recordatorios a usuarios que no han apostado en rondas próximas a cerrarse
export const sendDeadlineReminders = functions.pubsub
  .schedule('every 30 minutes')
  .timeZone('Europe/Madrid')
  .onRun(async (context) => {
    console.log('⏰ Iniciando envío de recordatorios de deadline');

    try {
      const now = admin.firestore.Timestamp.now();
      const oneAndHalfHoursFromNow = admin.firestore.Timestamp.fromMillis(now.toMillis() + 1.5 * 60 * 60 * 1000);
      const twoHoursFromNow = admin.firestore.Timestamp.fromMillis(now.toMillis() + 2 * 60 * 60 * 1000);

      // Buscar rondas visibles con deadline entre 1.5 y 2 horas desde ahora
      // (ventana de 30 minutos = se envía solo una vez por ronda)
      const roundsSnapshot = await db.collection('rounds')
        .where('isVisible', '==', true)
        .where('deadline', '>=', oneAndHalfHoursFromNow)
        .where('deadline', '<=', twoHoursFromNow)
        .get();

      if (roundsSnapshot.empty) {
        console.log('✅ No hay rondas próximas a cerrarse en las próximas 2 horas');
        return null;
      }

      console.log(`📊 Encontradas ${roundsSnapshot.size} rondas próximas a cerrarse`);

      for (const roundDoc of roundsSnapshot.docs) {
        const roundData = roundDoc.data();
        const roundId = roundDoc.id;
        const communityId = roundData.communityId;

        console.log(`🎯 Procesando ronda ${roundId} (comunidad: ${communityId})`);

        // Obtener información de la comunidad
        const communityDoc = await db.collection('communities').doc(communityId).get();
        if (!communityDoc.exists) {
          console.error(`❌ Comunidad ${communityId} no encontrada`);
          continue;
        }

        const communityData = communityDoc.data()!;
        const communityName = communityData.name || 'tu comunidad';

        // Obtener todas las apuestas de esta ronda
        const betsSnapshot = await db.collection('bets')
          .where('roundId', '==', roundId)
          .get();

        const userIdsWithBets = new Set(betsSnapshot.docs.map(doc => doc.data().userId));
        console.log(`📈 ${userIdsWithBets.size} usuarios ya han apostado en esta ronda`);

        // Obtener todos los usuarios de la comunidad
        const usersSnapshot = await db.collection('users').get();
        const membersWithoutBets: Array<{ id: string; tokens: string[]; nick: string }> = [];

        usersSnapshot.forEach((userDoc) => {
          const userData = userDoc.data();
          const userId = userDoc.id;
          
          // Solo usuarios que pertenecen a esta comunidad Y no han apostado
          if (
            userData.communities &&
            userData.communities.includes(communityId) &&
            !userIdsWithBets.has(userId)
          ) {
            const tokens = userData.fcmTokens || [];
            if (tokens.length > 0) {
              membersWithoutBets.push({
                id: userId,
                tokens: tokens,
                nick: userData.nick || 'Usuario',
              });
            }
          }
        });

        if (membersWithoutBets.length === 0) {
          console.log(`✅ Todos los miembros de la comunidad ya han apostado`);
          continue;
        }

        console.log(`👥 Enviando recordatorios a ${membersWithoutBets.length} usuarios sin apuesta`);

        const notificationTitle = '⏰ ¡No apostaste!';
        const notificationBody = `Faltan menos de 2 horas para finalizar "${roundData.name}" en ${communityName}`;

        let successCount = 0;
        let failureCount = 0;

        // Enviar notificación a cada usuario sin apuesta
        for (const member of membersWithoutBets) {
          try {
            const tokensToRemove: string[] = [];

            const message = {
              notification: {
                title: notificationTitle,
                body: notificationBody,
                icon: '🚀',
              },
              data: {
                type: 'deadline_reminder',
                roundId: roundId,
                communityId: communityId,
                roundName: roundData.name,
              },
            };

            const response = await messaging.sendEachForMulticast({
              tokens: member.tokens,
              ...message,
            });

            // Procesar respuestas individuales por token
            response.responses.forEach((resp, idx) => {
              if (resp.success) {
                successCount++;
                console.log(`✅ Notificación enviada a ${member.nick} (token ${idx + 1}/${member.tokens.length})`);
              } else {
                failureCount++;
                const errorCode = resp.error?.code;
                console.warn(`⚠️ Error enviando a ${member.nick} (token ${idx + 1}): ${errorCode}`);

                // Solo eliminar tokens con errores permanentes
                if (
                  errorCode === 'messaging/registration-token-not-registered' ||
                  errorCode === 'messaging/invalid-registration-token' ||
                  errorCode === 'messaging/invalid-argument'
                ) {
                  tokensToRemove.push(member.tokens[idx]);
                  console.log(`🗑️ Token marcado para eliminación: ${member.tokens[idx].substring(0, 20)}...`);
                }
              }
            });

            // Limpiar tokens inválidos
            if (tokensToRemove.length > 0) {
              await db.collection('users').doc(member.id).update({
                fcmTokens: admin.firestore.FieldValue.arrayRemove(...tokensToRemove),
              });
              console.log(`🧹 ${tokensToRemove.length} tokens eliminados del usuario ${member.nick}`);
            }
          } catch (error) {
            console.error(`❌ Error enviando recordatorio a ${member.nick}:`, error);
            failureCount += member.tokens.length;
          }
        }

        console.log(`✅ Recordatorios de ronda ${roundId}: ${successCount} éxitos, ${failureCount} fallos`);
      }

      console.log('✅ Proceso de recordatorios completado');
      return null;
    } catch (error) {
      console.error('❌ Error en función de recordatorios:', error);
      return null;
    }
  });
