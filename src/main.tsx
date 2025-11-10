import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { onMessageListener } from './firebase'

// Registrar service worker para notificaciones
if ('serviceWorker' in navigator) {
  navigator.serviceWorker
    .register('/firebase-messaging-sw.js')
    .then((registration) => {
      console.log('Service Worker registrado:', registration);
    })
    .catch((error) => {
      console.error('Error registrando Service Worker:', error);
    });
}

// Escuchar mensajes en foreground
onMessageListener()
  .then((payload: any) => {
    console.log('Mensaje recibido:', payload);
    if (Notification.permission === 'granted') {
      new Notification(payload.notification?.title || 'Porreta', {
        body: payload.notification?.body || '',
        icon: '/icon-192.png'
      });
    }
  })
  .catch((err) => console.log('Error:', err));

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
