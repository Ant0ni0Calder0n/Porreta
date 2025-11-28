importScripts("https://www.gstatic.com/firebasejs/10.7.1/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.7.1/firebase-messaging-compat.js");
firebase.initializeApp({
  apiKey: "AIzaSyAeugvkxFv7pk21juKWCeAMpsG2w-pGwzo",
  authDomain: "porreta-app.firebaseapp.com",
  projectId: "porreta-app",
  storageBucket: "porreta-app.firebasestorage.app",
  messagingSenderId: "377909387939",
  appId: "1:377909387939:web:1a7c43647046f4667dd516"
});
const c = firebase.messaging();
c.onBackgroundMessage((i) => {
  var o, e, t;
  console.log("Mensaje recibido en background:", i);
  const n = ((o = i.notification) == null ? void 0 : o.title) || "Porreta", a = {
    body: ((e = i.notification) == null ? void 0 : e.body) || "",
    icon: "/icon-192.png",
    badge: "/icon-192.png",
    tag: ((t = i.data) == null ? void 0 : t.roundId) || "default",
    data: i.data
  };
  return self.registration.showNotification(n, a);
});
self.addEventListener("notificationclick", (i) => {
  var o;
  console.log("Notificación clickeada:", i.notification.data), i.notification.close();
  const n = ((o = i.notification.data) == null ? void 0 : o.url) || "/", a = new URL(n, self.location.origin).href;
  i.waitUntil(
    clients.matchAll({ type: "window", includeUncontrolled: !0 }).then((e) => {
      if (console.log("Ventanas abiertas:", e.length), e.length > 0) {
        const t = e[0];
        if (t.postMessage({
          type: "NOTIFICATION_CLICK",
          url: n
        }), "focus" in t)
          return t.focus();
      }
      if (clients.openWindow)
        return console.log("Abriendo nueva ventana en URL:", a), clients.openWindow(a);
    }).catch((e) => {
      console.error("Error al manejar el click en la notificación:", e);
    })
  );
});
