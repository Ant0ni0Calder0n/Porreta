import * as functions from 'firebase-functions/v1';
import * as admin from 'firebase-admin';

admin.initializeApp();

const db = admin.firestore();
const messaging = admin.messaging();

type NotificationPreference = 'newRounds' | 'deadlineReminders' | 'winnersAndBote';
type NotificationLogStatus = 'success' | 'partial' | 'failure' | 'skipped';

interface NotificationLogInput {
  type: string;
  status: NotificationLogStatus;
  userId?: string;
  userNick?: string;
  communityId?: string;
  communityName?: string;
  roundId?: string;
  roundName?: string;
  title: string;
  body: string;
  tokenCount: number;
  successCount: number;
  failureCount: number;
  error?: string;
}

type SportsDbRequest = {
  endpoint?: string;
  id?: string;
  round?: string;
  season?: string;
};

const allowsNotification = (userData: admin.firestore.DocumentData, preference: NotificationPreference): boolean => {
  const settings = userData.notificationSettings || {};
  return settings[preference] !== false;
};

const madridDateParts = (date: Date) => {
  const parts = new Intl.DateTimeFormat('en-CA', {
    timeZone: 'Europe/Madrid',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    hourCycle: 'h23',
  }).formatToParts(date);

  return parts.reduce<Record<string, string>>((values, part) => {
    if (part.type !== 'literal') {
      values[part.type] = part.value;
    }
    return values;
  }, {});
};

const madridDateKey = (date: Date): string => {
  const parts = madridDateParts(date);
  return `${parts.year}-${parts.month}-${parts.day}`;
};

const notificationStatusFor = (successCount: number, failureCount: number): NotificationLogStatus => {
  if (successCount > 0 && failureCount > 0) return 'partial';
  if (successCount > 0) return 'success';
  return 'failure';
};

async function writeNotificationLog(log: NotificationLogInput) {
  try {
    await db.collection('notificationLogs').add({
      ...log,
      createdAt: admin.firestore.Timestamp.now(),
    });
  } catch (error) {
    console.error('❌ Error guardando log de notificación:', error);
  }
}

async function removeInvalidTokens(userId: string, nick: string, tokens: string[], responses: admin.messaging.SendResponse[]) {
  const tokensToRemove: string[] = [];

  responses.forEach((resp, idx) => {
    if (!resp.success) {
      const errorCode = resp.error?.code;
      console.log(`  - Token ${idx}: Error ${errorCode} - ${resp.error?.message}`);

      if (errorCode === 'messaging/registration-token-not-registered' ||
          errorCode === 'messaging/invalid-registration-token' ||
          errorCode === 'messaging/invalid-argument') {
        tokensToRemove.push(tokens[idx]);
      }
    }
  });

  if (tokensToRemove.length > 0) {
    await db.collection('users').doc(userId).update({
      fcmTokens: admin.firestore.FieldValue.arrayRemove(...tokensToRemove)
    });
    console.log(`🧹 Eliminados ${tokensToRemove.length} tokens inválidos de ${nick}`);
  }
}

export const sendTestNotification = functions.https.onCall(async (_data, context) => {
  if (!context.auth?.uid) {
    throw new functions.https.HttpsError('unauthenticated', 'Debes iniciar sesión para enviar una notificación de prueba');
  }

  const userId = context.auth.uid;
  const userDoc = await db.collection('users').doc(userId).get();

  if (!userDoc.exists) {
    throw new functions.https.HttpsError('not-found', 'Usuario no encontrado');
  }

  const userData = userDoc.data()!;
  const tokens: string[] = userData.fcmTokens || [];
  const testNotificationTitle = '🔔 Prueba de Porreta';
  const testNotificationBody = 'Si ves esto, tus notificaciones funcionan correctamente.';

  if (tokens.length === 0) {
    await writeNotificationLog({
      type: 'test_notification',
      status: 'skipped',
      userId,
      userNick: userData.nick || 'Usuario',
      title: testNotificationTitle,
      body: testNotificationBody,
      tokenCount: 0,
      successCount: 0,
      failureCount: 0,
      error: 'El usuario no tiene tokens FCM guardados',
    });

    return { successCount: 0, failureCount: 0 };
  }

  const response = await messaging.sendEachForMulticast({
    tokens,
    notification: {
      title: testNotificationTitle,
      body: testNotificationBody
    },
    data: {
      type: 'test_notification',
      title: testNotificationTitle,
      body: testNotificationBody
    }
  });

  await removeInvalidTokens(userId, userData.nick || 'Usuario', tokens, response.responses);

  await writeNotificationLog({
    type: 'test_notification',
    status: notificationStatusFor(response.successCount, response.failureCount),
    userId,
    userNick: userData.nick || 'Usuario',
    title: testNotificationTitle,
    body: testNotificationBody,
    tokenCount: tokens.length,
    successCount: response.successCount,
    failureCount: response.failureCount,
  });

  return {
    successCount: response.successCount,
    failureCount: response.failureCount
  };
});

export const fetchSportsDb = functions.https.onCall(async (data: SportsDbRequest, context) => {
  if (!context.auth?.uid) {
    throw new functions.https.HttpsError('unauthenticated', 'Debes iniciar sesión para consultar TheSportsDB');
  }

  const endpoint = data.endpoint;
  const id = data.id;
  const season = data.season;
  const round = data.round;

  if (!endpoint || !id || !/^\d+$/.test(id)) {
    throw new functions.https.HttpsError('invalid-argument', 'Petición TheSportsDB inválida');
  }

  const params = new URLSearchParams({ id });
  if (endpoint === 'eventsround') {
    if (!round || !/^\d+$/.test(round) || !season || !/^\d{4}(-\d{4})?$/.test(season)) {
      throw new functions.https.HttpsError('invalid-argument', 'Jornada o temporada inválida');
    }
    params.set('r', round);
    params.set('s', season);
  } else if (endpoint === 'eventsseason') {
    if (!season || !/^\d{4}(-\d{4})?$/.test(season)) {
      throw new functions.https.HttpsError('invalid-argument', 'Temporada inválida');
    }
    params.set('s', season);
  } else if (endpoint !== 'lookupevent') {
    throw new functions.https.HttpsError('invalid-argument', 'Endpoint TheSportsDB no permitido');
  }

  const response = await fetch(`https://www.thesportsdb.com/api/v1/json/123/${endpoint}.php?${params.toString()}`);
  if (!response.ok) {
    throw new functions.https.HttpsError('unavailable', 'TheSportsDB no respondió correctamente');
  }

  return await response.json();
});

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
        if (
          userData.communities &&
          userData.communities[communityId] &&
          allowsNotification(userData, 'newRounds')
        ) {
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
        const notificationTitle = '🚀 Nueva ronda!';
        const notificationBody = `"${after.name}" en ${communityName}. ¡Haz tu apuesta!`;

        if (member.tokens.length === 0) {
          console.log(`⚠️ Usuario ${member.nick} no tiene tokens FCM`);
          await writeNotificationLog({
            type: 'new_round_visible',
            status: 'skipped',
            userId: member.id,
            userNick: member.nick,
            communityId,
            communityName,
            roundId,
            roundName: after.name || '',
            title: notificationTitle,
            body: notificationBody,
            tokenCount: 0,
            successCount: 0,
            failureCount: 0,
            error: 'El usuario no tiene tokens FCM guardados',
          });
          continue;
        }

        const message = {
          notification: {
            title: notificationTitle,
            body: notificationBody,
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
          await writeNotificationLog({
            type: 'new_round_visible',
            status: notificationStatusFor(response.successCount, response.failureCount),
            userId: member.id,
            userNick: member.nick,
            communityId,
            communityName,
            roundId,
            roundName: after.name || '',
            title: notificationTitle,
            body: notificationBody,
            tokenCount: member.tokens.length,
            successCount: response.successCount,
            failureCount: response.failureCount,
          });
          
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
          await writeNotificationLog({
            type: 'new_round_visible',
            status: 'failure',
            userId: member.id,
            userNick: member.nick,
            communityId,
            communityName,
            roundId,
            roundName: after.name || '',
            title: notificationTitle,
            body: notificationBody,
            tokenCount: member.tokens.length,
            successCount: 0,
            failureCount: member.tokens.length,
            error: error instanceof Error ? error.message : String(error),
          });
        }
      }

      console.log(`✅ Notificaciones completadas: ${successCount} éxitos, ${failureCount} fallos`);
      return null;
    } catch (error) {
      console.error('❌ Error en función de notificaciones:', error);
      return null;
    }
  });

// Cloud Function programada que se ejecuta cada 30 minutos.
// Envía recordatorios cada 2 horas a usuarios sin apuesta durante el día del cierre.
export const sendDeadlineReminders = functions.pubsub
  .schedule('every 30 minutes')
  .timeZone('Europe/Madrid')
  .onRun(async (context) => {
    console.log('⏰ Iniciando envío de recordatorios de deadline');

    try {
      const now = admin.firestore.Timestamp.now();
      const nowDate = now.toDate();
      const nowMadridParts = madridDateParts(nowDate);
      const nowMadridHour = Number(nowMadridParts.hour);
      const todayMadridKey = madridDateKey(nowDate);
      const twoHoursAgo = admin.firestore.Timestamp.fromMillis(now.toMillis() - 2 * 60 * 60 * 1000);

      if (nowMadridHour < 10) {
        console.log('✅ Antes de las 10:00 en España, no se envían recordatorios');
        return null;
      }

      // Buscar rondas visibles futuras y filtrar en código las que cierran hoy en España.
      const roundsSnapshot = await db.collection('rounds')
        .where('isVisible', '==', true)
        .where('deadline', '>=', now)
        .get();

      if (roundsSnapshot.empty) {
        console.log('✅ No hay rondas visibles futuras');
        return null;
      }

      const roundsToProcess = roundsSnapshot.docs.filter((roundDoc) => {
        const roundData = roundDoc.data();
        return roundData.status === 'open' && madridDateKey(roundData.deadline.toDate()) === todayMadridKey;
      });

      if (roundsToProcess.length === 0) {
        console.log('✅ No hay rondas abiertas que cierren hoy en España');
        return null;
      }

      console.log(`📊 Encontradas ${roundsToProcess.length} rondas abiertas que cierran hoy en España`);

      for (const roundDoc of roundsToProcess) {
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
        const membersWithoutBets: Array<{
          id: string;
          tokens: string[];
          nick: string;
          reminderRef: admin.firestore.DocumentReference;
        }> = [];

        for (const userDoc of usersSnapshot.docs) {
          const userData = userDoc.data();
          const userId = userDoc.id;
          const tokens = userData.fcmTokens || [];

          // Solo usuarios que pertenecen a esta comunidad Y no han apostado
          if (
            userData.communities &&
            userData.communities[communityId] &&
            !userIdsWithBets.has(userId) &&
            allowsNotification(userData, 'deadlineReminders') &&
            tokens.length > 0
          ) {
            const reminderRef = db.collection('notificationReminderLogs').doc(`${roundId}_${userId}`);
            const reminderDoc = await reminderRef.get();
            const lastSentAt = reminderDoc.exists
              ? reminderDoc.data()?.lastSentAt as admin.firestore.Timestamp | undefined
              : undefined;

            if (!lastSentAt || lastSentAt.toMillis() <= twoHoursAgo.toMillis()) {
              membersWithoutBets.push({
                id: userId,
                tokens,
                nick: userData.nick || 'Usuario',
                reminderRef,
              });
            }
          }
        }

        if (membersWithoutBets.length === 0) {
          console.log(`✅ No hay miembros pendientes que deban recibir recordatorio ahora`);
          continue;
        }

        console.log(`👥 Enviando recordatorios a ${membersWithoutBets.length} usuarios sin apuesta`);

        const notificationTitle = '⏰ ¡No apostaste!';
        const notificationBody = `Hoy cierra "${roundData.name}" en ${communityName}. Aún estás a tiempo de apostar.`;

        let successCount = 0;
        let failureCount = 0;

        // Enviar notificación a cada usuario sin apuesta
        for (const member of membersWithoutBets) {
          try {
            const tokensToRemove: string[] = [];

            const message = {
              notification: {
                title: notificationTitle,
                body: notificationBody
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

            await writeNotificationLog({
              type: 'deadline_reminder',
              status: notificationStatusFor(response.successCount, response.failureCount),
              userId: member.id,
              userNick: member.nick,
              communityId,
              communityName,
              roundId,
              roundName: roundData.name || '',
              title: notificationTitle,
              body: notificationBody,
              tokenCount: member.tokens.length,
              successCount: response.successCount,
              failureCount: response.failureCount,
            });

            if (response.successCount > 0) {
              await member.reminderRef.set({
                userId: member.id,
                roundId,
                communityId,
                lastSentAt: now,
                updatedAt: now,
              }, { merge: true });
            }

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
            await writeNotificationLog({
              type: 'deadline_reminder',
              status: 'failure',
              userId: member.id,
              userNick: member.nick,
              communityId,
              communityName,
              roundId,
              roundName: roundData.name || '',
              title: notificationTitle,
              body: notificationBody,
              tokenCount: member.tokens.length,
              successCount: 0,
              failureCount: member.tokens.length,
              error: error instanceof Error ? error.message : String(error),
            });
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
