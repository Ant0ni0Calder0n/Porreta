import { doc, setDoc, arrayUnion } from 'firebase/firestore';
import { app } from '../firebase';
import { db } from '../firebaseDb';

// Clave VAPID pública (obtenida de Firebase Console -> Project Settings -> Cloud Messaging)
const VAPID_KEY = 'BG0owZ2spXe7RKBKEoDljfW0wF0YzqXCLBOhj1IVCATZKI-eAcihsw1ua2u1pF7iDbX_VSWbXzHbGcwEqGg0HTg';
let foregroundListenerReady = false;

export type NotificationPermissionStatus = NotificationPermission | 'unsupported';

export function getNotificationPermissionStatus(): NotificationPermissionStatus {
  if (!('Notification' in window)) {
    return 'unsupported';
  }

  return Notification.permission;
}

export async function requestNotificationPermission(userId: string): Promise<boolean> {
  try {
    // Verificar si el navegador soporta notificaciones
    if (!('Notification' in window)) {
      console.warn('Este navegador no soporta notificaciones');
      return false;
    }

    // Solicitar permiso
    const permission = await Notification.requestPermission();

    if (permission !== 'granted') {
      return false;
    }

    // Registrar Service Worker y obtener token FCM
    await registerFCMToken(userId);
    await setupForegroundNotifications();
    return true;
  } catch (error) {
    console.error('Error al solicitar permisos:', error);
    return false;
  }
}

export async function setupForegroundNotifications(): Promise<void> {
  if (foregroundListenerReady || !('Notification' in window) || Notification.permission !== 'granted') {
    return;
  }

  foregroundListenerReady = true;
  const [{ getMessaging, onMessage }] = await Promise.all([
    import('firebase/messaging')
  ]);
  const messaging = getMessaging(app);

  onMessage(messaging, async (payload) => {
    const registration = await navigator.serviceWorker.getRegistration('/Porreta/')
      || await navigator.serviceWorker.register('/Porreta/firebase-messaging-sw.js', { scope: '/Porreta/' });

    const title = payload.notification?.title || payload.data?.title || 'Porreta';
    const body = payload.notification?.body || payload.data?.body || '';

    await registration.showNotification(title, {
      body,
      icon: '/Porreta/icon-192.png',
      badge: '/Porreta/icon-192.png',
      tag: payload.data?.roundId || payload.data?.type || 'porreta',
      data: payload.data
    });
  });
}

export async function sendTestNotification(): Promise<{ successCount: number; failureCount: number }> {
  const { getFunctions, httpsCallable } = await import('firebase/functions');
  const functions = getFunctions(app);
  const callable = httpsCallable<void, { successCount: number; failureCount: number }>(functions, 'sendTestNotification');
  const result = await callable();
  return result.data;
}

async function registerFCMToken(userId: string): Promise<void> {
  try {
    const { getMessaging, getToken } = await import('firebase/messaging');
    const messaging = getMessaging(app);

    // Registrar el Service Worker manualmente
    const registration = await navigator.serviceWorker.register('/Porreta/firebase-messaging-sw.js', {
      scope: '/Porreta/'
    });

    // Esperar a que esté activo
    await navigator.serviceWorker.ready;

    // Obtener token FCM
    const token = await getToken(messaging, {
      vapidKey: VAPID_KEY,
      serviceWorkerRegistration: registration
    });

    if (token) {
      try {
        // Guardar token en Firestore usando arrayUnion (evita duplicados automáticamente)
        const userRef = doc(db, 'users', userId);
        
        // Usar setDoc con merge para crear el documento si no existe
        await setDoc(userRef, {
          fcmTokens: arrayUnion(token)
        }, { merge: true });
        
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
  return getNotificationPermissionStatus() === 'granted';
}
