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

// Click en notificación
self.addEventListener('notificationclick', (event) => {
  console.log('🔔 Click en notificación:', event.notification.data);
  event.notification.close();
  
  const communityId = event.notification.data?.communityId;
  const targetPath = communityId 
    ? `/Porreta/community/${communityId}` 
    : '/Porreta/';
  
  event.waitUntil(
    clients.matchAll({
      type: 'window',
      includeUncontrolled: true
    }).then((clientList) => {
      console.log('🔍 Buscando clientes de la PWA... encontrados:', clientList.length);
      
      // Buscar si la PWA ya está abierta (incluso en segundo plano)
      for (const client of clientList) {
        const clientUrl = new URL(client.url);
        console.log('  - Cliente:', clientUrl.href);
        
        // Verificar si es nuestra PWA (por pathname que incluye /Porreta)
        if (clientUrl.pathname.startsWith('/Porreta')) {
          console.log('✅ PWA encontrada, enfocando y navegando');
          const fullUrl = `${clientUrl.origin}${targetPath}`;
          // Enfocar primero
          return client.focus().then(() => {
            // Intentar navegar
            if (client.navigate) {
              console.log('  → Navegando a:', fullUrl);
              return client.navigate(fullUrl);
            } else {
              // Si navigate no está disponible, usar postMessage
              console.log('  → Usando postMessage para navegar');
              client.postMessage({
                type: 'NOTIFICATION_CLICK',
                communityId: communityId
              });
              return client;
            }
          });
        }
      }
      
      // Si no hay PWA abierta, abrir una nueva ventana
      // Esto abrirá la PWA instalada si existe, o el navegador si no
      console.log('🆕 PWA cerrada, abriendo...');
      const fullUrl = `${self.location.origin}${targetPath}`;
      console.log('  → URL:', fullUrl);
      return clients.openWindow(fullUrl);
    }).catch(err => {
      console.error('❌ Error manejando click:', err);
    })
  );
});
