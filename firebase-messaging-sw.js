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
  console.log('Mensaje recibido en background:', payload);
  
  const notificationTitle = payload.notification?.title || 'Porreta';
  const notificationOptions = {
    body: payload.notification?.body || '',
    icon: '/icon-192.png',
    badge: '/icon-192.png',
    tag: payload.data?.roundId || 'default',
    data: payload.data
  };

  return self.registration.showNotification(notificationTitle, notificationOptions);
});

// Click en notificación
self.addEventListener('notificationclick', (event) => {
  console.log('Notificación clickeada:', event.notification.data);
  event.notification.close();

  //Obtener la URL de la notificación
  const urlToOpen = event.notification.data?.url || '/';
  const fullUrl = new URL(urlToOpen, self.location.origin).href;
  
  event.waitUntil(
    clients.matchAll({ type: 'window', includeUncontrolled: true })
    .then((windowClients) => {
      // Si hay una ventana abierta
      if (windowClients.length > 0) {
        const client = windowClients[0];
        // Enviar mensaje a la app para que navegue
        client.postMessage({
          type: 'NOTIFICATION_CLICK',
          url: urlToOpen
        });
        // Enfocar la ventana
        return client.focus();
      }
      // Si no hay una ventana abierta, abrir una nueva
      if (clients.openWindow) {
        return clients.openWindow(fullUrl);
      }
    })
  );
});
