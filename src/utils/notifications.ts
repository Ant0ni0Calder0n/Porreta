import { getToken } from 'firebase/messaging';
import { doc, setDoc, arrayUnion, getDoc } from 'firebase/firestore';
import { messaging, db } from '../firebase';

// Clave VAPID pública (obtenida de Firebase Console -> Project Settings -> Cloud Messaging)
const VAPID_KEY = 'BG0owZ2spXe7RKBKEoDljfW0wF0YzqXCLBOhj1IVCATZKI-eAcihsw1ua2u1pF7iDbX_VSWbXzHbGcwEqGg0HTg';

export async function requestNotificationPermission(userId: string): Promise<boolean> {
  try {
    console.log('Solicitando permiso de notificaciones...');
    
    // Verificar si el navegador soporta notificaciones
    if (!('Notification' in window)) {
      console.warn('Este navegador no soporta notificaciones');
      return false;
    }

    // Solicitar permiso
    const permission = await Notification.requestPermission();
    console.log('Permiso de notificaciones:', permission);

    if (permission !== 'granted') {
      console.log('Permiso de notificaciones denegado');
      return false;
    }

    // Registrar Service Worker y obtener token FCM
    await registerFCMToken(userId);
    return true;
  } catch (error) {
    console.error('Error al solicitar permisos:', error);
    return false;
  }
}

async function registerFCMToken(userId: string): Promise<void> {
  try {
    // Registrar el Service Worker manualmente
    const registration = await navigator.serviceWorker.register('/Porreta/firebase-messaging-sw.js', {
      scope: '/Porreta/'
    });

    console.log('Service Worker registrado:', registration);

    // Esperar a que esté activo
    await navigator.serviceWorker.ready;

    // Obtener token FCM
    const token = await getToken(messaging, {
      vapidKey: VAPID_KEY,
      serviceWorkerRegistration: registration
    });

    if (token) {
      console.log('✅ Token FCM obtenido:', token);

      try {
        // Guardar token en Firestore usando arrayUnion (evita duplicados automáticamente)
        const userRef = doc(db, 'users', userId);
        
        // Usar setDoc con merge para crear el documento si no existe
        await setDoc(userRef, {
          fcmTokens: arrayUnion(token)
        }, { merge: true });
        
        console.log('💾 Token FCM guardado/actualizado en Firestore');
        
        // Verificar que se guardó
        const userSnap = await getDoc(userRef);
        if (userSnap.exists()) {
          const tokens = userSnap.data()?.fcmTokens || [];
          console.log('📊 Tokens actuales en Firestore:', tokens.length, tokens);
        } else {
          console.error('❌ El documento de usuario no existe después de guardar');
        }
      } catch (error) {
        console.error('❌ Error guardando token en Firestore:', error);
      }
    } else {
      console.warn('⚠️ No se pudo obtener el token FCM');
    }
  } catch (error) {
    console.error('Error al registrar token FCM:', error);
    throw error;
  }
}

// Verificar si ya se concedieron permisos
export function hasNotificationPermission(): boolean {
  return 'Notification' in window && Notification.permission === 'granted';
}
