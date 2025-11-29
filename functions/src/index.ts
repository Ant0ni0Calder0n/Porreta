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
