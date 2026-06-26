importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js');

// Configuración Firebase (se actualizará con tus valores reales)
firebase.initializeApp({
    apiKey: "AIzaSyAeugvkxFv7pk21juKWCeAMpsG2w-pGwzo",
    authDomain: "porreta-app.firebaseapp.com",
    projectId: "porreta-app",
    storageBucket: "porreta-app.firebasestorage.app",
    messagingSenderId: "377909387939",
    appId: "1:377909387939:web:1a7c43647046f4667dd516"
});

const messaging = firebase.messaging();

// Manejo de notificaciones en background
messaging.onBackgroundMessage((payload) => {
  console.log('📩 Mensaje recibido en background:', payload);
  
  // No mostrar notificación aquí si payload.notification existe
  // porque Firebase ya la muestra automáticamente
  if (payload.notification) {
    console.log('✅ Notificación automática de Firebase');
    return; // Firebase muestra la notificación automáticamente
  }
  
  // Solo si es un mensaje de solo datos (sin notification)
  const notificationTitle = payload.data?.title || 'Porreta';
  const notificationOptions = {
    body: payload.data?.body || '',
    icon: '/Porreta/icon-192.png',
    badge: '/Porreta/icon-192.png',
    tag: payload.data?.roundId || 'default',
    data: payload.data
  };

  return self.registration.showNotification(notificationTitle, notificationOptions);
});

// Click en notificación - abrir o enfocar la app
self.addEventListener('notificationclick', (event) => {
  console.log('🔔 Click en notificación - abriendo Porreta');
  event.notification.close();

  const appUrl = new URL('/Porreta/', self.location.origin).href;

  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true }).then((clientList) => {
      for (const client of clientList) {
        if (client.url.startsWith(appUrl) && 'focus' in client) {
          return client.focus();
        }
      }

      if (clients.openWindow) {
        return clients.openWindow(appUrl);
      }
    })
  );
});
