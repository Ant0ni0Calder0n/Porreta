# Porreta - PWA de Apuestas Privada

**Aplicación web progresiva (PWA) instalable para Android e iOS** que permite a grupos de amigos hacer apuestas semanales sobre partidos de fútbol de forma privada y completamente gratuita.

## 🎯 Características Principales

- ✅ **PWA instalable** en Android e iOS (fuera de tiendas de apps)
- ✅ **Autenticación** con correo y contraseña
- ✅ **Comunidades privadas** con contraseña de acceso
- ✅ **Rondas semanales** con 3 partidos (2 exactos + 1 de 1/X/2)
- ✅ **Detección de apuestas duplicadas** con confirmación
- ✅ **Notificaciones push** 1 hora antes del cierre
- ✅ **Notificaciones de resultados** (ganadores o ¡BOTE!)
- ✅ **100% gratuito** sin suscripciones ni pagos

## 📋 Requisitos Previos

- Node.js 18 o superior
- Cuenta de Google (para Firebase)
- Cuenta de GitHub (para despliegue)
- Git instalado

## 🚀 Instalación y Despliegue (Paso a Paso)

### Paso 1: Crear Proyecto Firebase

1. Ve a [Firebase Console](https://console.firebase.google.com/)
2. Haz clic en "Agregar proyecto"
3. Nombra tu proyecto (ej: "porreta-app")
4. **NO actives Google Analytics** (opcional, pero recomendado para simplicidad)
5. Haz clic en "Crear proyecto"

### Paso 2: Configurar Firebase Authentication

1. En la consola de Firebase, ve a **Build > Authentication**
2. Haz clic en "Comenzar"
3. Selecciona "Correo electrónico/contraseña"
4. Activa la primera opción (Correo electrónico/contraseña)
5. Guarda

### Paso 3: Configurar Firestore Database

1. En la consola de Firebase, ve a **Build > Firestore Database**
2. Haz clic en "Crear base de datos"
3. Selecciona "Comenzar en **modo de producción**"
4. Elige una ubicación cercana (ej: europe-west3)
5. Haz clic en "Habilitar"

### Paso 4: Configurar Cloud Messaging (FCM)

1. En la consola de Firebase, ve a **Build > Cloud Messaging**
2. En la pestaña "Cloud Messaging API", verifica que esté habilitada
3. Si te pide habilitar la API, haz clic en el enlace y habilítala en Google Cloud Console
4. Vuelve a Firebase Console

### Paso 5: Obtener Credenciales Web de Firebase

1. En la página principal de tu proyecto, haz clic en el ícono **</>** (Web)
2. Registra tu app con un nombre (ej: "Porreta Web")
3. **NO marques** "También configurar Firebase Hosting"
4. Haz clic en "Registrar app"
5. **COPIA** la configuración que aparece (firebaseConfig):
   ```javascript
   apiKey: "AIza...",
   authDomain: "tu-proyecto.firebaseapp.com",
   projectId: "tu-proyecto",
   storageBucket: "tu-proyecto.appspot.com",
   messagingSenderId: "123456789",
   appId: "1:123456789:web:abc123"
   ```
6. Haz clic en "Continuar a la consola"

### Paso 6: Obtener Clave VAPID para Notificaciones

1. Ve a **Project Settings** (ícono de engranaje) > **Cloud Messaging**
2. Baja hasta la sección **"Web Push certificates"**
3. Haz clic en **"Generate key pair"**
4. **COPIA** la clave que aparece (ejemplo: `BNxxx...`)

### Paso 7: Configurar Variables de Entorno

1. Abre el proyecto en tu editor de código
2. Crea un archivo `.env` en la raíz (copia desde `.env.example`):
   ```
   VITE_FIREBASE_API_KEY=tu-api-key
   VITE_FIREBASE_AUTH_DOMAIN=tu-proyecto.firebaseapp.com
   VITE_FIREBASE_PROJECT_ID=tu-proyecto-id
   VITE_FIREBASE_STORAGE_BUCKET=tu-proyecto.appspot.com
   VITE_FIREBASE_MESSAGING_SENDER_ID=tu-sender-id
   VITE_FIREBASE_APP_ID=tu-app-id
   VITE_FIREBASE_VAPID_KEY=tu-clave-vapid
   ```
3. Reemplaza todos los valores con los de tu proyecto Firebase

### Paso 8: Configurar Service Worker

1. Abre `public/firebase-messaging-sw.js`
2. Reemplaza la configuración de Firebase con tus valores reales:
   ```javascript
   firebase.initializeApp({
     apiKey: "TU_API_KEY",
     authDomain: "tu-proyecto.firebaseapp.com",
     projectId: "tu-proyecto-id",
     storageBucket: "tu-proyecto.appspot.com",
     messagingSenderId: "tu-sender-id",
     appId: "tu-app-id"
   });
   ```

### Paso 9: Instalar Dependencias

Abre una terminal en la raíz del proyecto y ejecuta:

```powershell
npm install
```

Luego instala las dependencias de las Cloud Functions:

```powershell
cd functions
npm install
cd ..
```

### Paso 10: Desplegar Reglas de Firestore

1. Instala Firebase CLI globalmente:
   ```powershell
   npm install -g firebase-tools
   ```

2. Inicia sesión en Firebase:
   ```powershell
   firebase login
   ```

3. Inicializa Firebase en el proyecto:
   ```powershell
   firebase init
   ```
   
4. Selecciona (con espacio):
   - Firestore
   - Functions
   - Hosting
   
5. Selecciona "Use an existing project" y elige tu proyecto

6. Para Firestore:
   - Rules: `firestore.rules` (ya existe)
   - Indexes: `firestore.indexes.json` (ya existe)

7. Para Functions:
   - Lenguaje: TypeScript
   - ESLint: No
   - Instalar dependencias: No (ya lo hiciste)
   - Carpeta: `functions` (ya existe)

8. Para Hosting:
   - Public directory: `dist`
   - Single-page app: **Yes**
   - GitHub actions: No

9. Despliega las reglas:
   ```powershell
   firebase deploy --only firestore:rules
   ```

### Paso 11: Desplegar Cloud Functions

**NOTA IMPORTANTE**: Las funciones programadas (scheduled functions) requieren el plan Blaze (pago por uso) en Firebase. Sin embargo, la capa gratuita de Google Cloud incluye suficientes recursos para el uso típico de ~20 usuarios.

1. Actualiza el proyecto a plan Blaze:
   - Ve a Firebase Console > ⚙️ Project Settings > Usage and billing
   - Haz clic en "Modify plan"
   - Selecciona "Blaze" (Pay as you go)
   - No te preocupes: incluye capa gratuita generosa

2. Despliega las funciones:
   ```powershell
   firebase deploy --only functions
   ```

**ALTERNATIVA GRATUITA** (si no quieres usar Blaze):
- Comenta o elimina la función `sendReminderNotifications` en `functions/src/index.ts`
- Los usuarios deberán recordar apostar manualmente (o ver recordatorio en la app al abrirla)

### Paso 12: Construir el Proyecto

```powershell
npm run build
```

### Paso 13: Desplegar en GitHub Pages

1. **Crea un repositorio en GitHub**:
   - Ve a [github.com/new](https://github.com/new)
   - Nombre: `Porreta` (mismo nombre que en vite.config.ts)
   - **Público** (necesario para GitHub Pages gratis)
   - No inicialices con README

2. **Conecta tu repositorio local**:
   ```powershell
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin https://github.com/TU-USUARIO/Porreta.git
   git push -u origin main
   ```

3. **Instala gh-pages**:
   ```powershell
   npm install --save-dev gh-pages
   ```

4. **Añade script de deploy** en `package.json`:
   ```json
   "scripts": {
     "deploy": "npm run build && gh-pages -d dist"
   }
   ```

5. **Despliega**:
   ```powershell
   npm run deploy
   ```

6. **Activa GitHub Pages**:
   - Ve a tu repositorio en GitHub
   - Settings > Pages
   - Source: `gh-pages` branch
   - Guarda

7. Tu app estará disponible en: `https://TU-USUARIO.github.io/Porreta/`

### Paso 14: Probar la Aplicación

1. Abre la URL en tu navegador móvil
2. Regístrate con un correo y contraseña
3. Crea una comunidad con contraseña
4. Comparte el nombre de la comunidad y contraseña con tus amigos

## 📱 Instalar PWA en Dispositivos

### Android (Chrome)

1. Abre la URL de la app en Chrome
2. Aparecerá un banner "Añadir a pantalla de inicio"
3. O usa el menú ⋮ > "Instalar app" o "Añadir a pantalla de inicio"
4. La app se instalará como una aplicación nativa

### iOS (Safari)

1. Abre la URL de la app en Safari
2. Toca el botón de compartir (cuadro con flecha hacia arriba)
3. Desplázate y selecciona "Añadir a pantalla de inicio"
4. Dale un nombre y toca "Añadir"
5. La app aparecerá en tu pantalla de inicio

### Activar Notificaciones

- **Android**: Al abrir la app, aparecerá un permiso para notificaciones. Acéptalo.
- **iOS**: Las notificaciones push web tienen soporte limitado. La app mostrará recordatorios visuales al abrirla.

## 🎮 Cómo Usar la App

### Para Todos los Usuarios

1. **Registro**: Crea cuenta con correo, contraseña y nick
2. **Crear Comunidad**: Dale nombre y establece contraseña de acceso
3. **Unirse**: Introduce el nombre exacto de la comunidad y contraseña
4. **Crear Ronda**: Cualquier usuario puede crear rondas semanales
   - Define 3 partidos (2 resultados exactos + 1 de 1/X/2)
   - Establece hora límite para apostar
5. **Hacer Apuesta**: Introduce tus pronósticos antes del límite
6. **Ver Apuestas**: Todas las apuestas son visibles para todos en la comunidad

### Para Administradores

- El creador de la comunidad es **administrador**
- Solo el admin puede **publicar resultados reales**
- Al publicar resultados, la app calcula ganadores automáticamente
- Si nadie acierta: **¡BOTE!** (todos reciben notificación)

## 🔔 Sistema de Notificaciones

### Notificación 1 Hora Antes

- Se envía automáticamente a usuarios que NO han apostado
- Solo se envía una vez por ronda
- Funciona vía Cloud Functions (requiere plan Blaze)

### Notificación de Resultados

- Se envía cuando el admin publica resultados
- **Ganadores**: Reciben felicitación personalizada
- **Sin ganadores**: Todos reciben notificación de "¡BOTE!"

## 🔒 Seguridad y Privacidad

- Las contraseñas se cifran con bcrypt (en Cloud Functions)
- Reglas de Firestore garantizan que solo miembros accedan a su comunidad
- Solo admins pueden modificar resultados
- Los tokens FCM se almacenan de forma segura

## 🛠️ Desarrollo Local

Para probar en local:

```powershell
npm run dev
```

La app se abrirá en `http://localhost:5173`

**NOTA**: Las notificaciones push NO funcionarán en localhost. Necesitas HTTPS (producción).

## 📊 Límites de la Capa Gratuita

### Firebase (Plan Spark - Gratuito)
- Authentication: Ilimitado
- Firestore: 1 GB almacenamiento, 50K lecturas/día
- Hosting: 10 GB transferencia/mes

### Firebase (Plan Blaze - Pago por uso)
- **Incluye capa gratuita**:
  - 2M invocaciones de funciones/mes
  - 400K GB-segundos de compute/mes
  - 200K CPU-segundos/mes
- Para ~20 usuarios con uso normal: **probablemente $0/mes**
- Configura alertas de facturación en Google Cloud Console

### GitHub Pages
- 1 GB de espacio
- 100 GB transferencia/mes
- Suficiente para miles de usuarios

## 🐛 Solución de Problemas

### "Service Worker registration failed"
- Verifica que `firebase-messaging-sw.js` tenga la configuración correcta
- Debe estar en la carpeta `public/`

### "Permission denied" en Firestore
- Despliega las reglas: `firebase deploy --only firestore:rules`
- Verifica que el usuario esté autenticado

### Notificaciones no llegan
- Verifica que el usuario haya aceptado permisos
- Comprueba que las Cloud Functions estén desplegadas
- Revisa logs: `firebase functions:log`

### La app no se instala como PWA
- Verifica que estés usando HTTPS (no localhost)
- Comprueba que `manifest.json` sea válido
- Los iconos deben estar en `public/`

## 📝 Estructura del Proyecto

```
Porreta/
├── public/
│   ├── firebase-messaging-sw.js    # Service worker para notificaciones
│   ├── icon-192.svg                # Ícono PWA 192x192
│   └── icon-512.svg                # Ícono PWA 512x512
├── src/
│   ├── components/                 # Componentes React
│   │   ├── Login.tsx
│   │   ├── Signup.tsx
│   │   ├── Communities.tsx
│   │   ├── CommunityDashboard.tsx
│   │   ├── CreateRound.tsx
│   │   ├── RoundDetail.tsx
│   │   ├── CreateBet.tsx
│   │   └── PublishResults.tsx
│   ├── contexts/
│   │   └── AuthContext.tsx         # Contexto de autenticación
│   ├── firebase.ts                 # Configuración Firebase
│   ├── types.ts                    # Tipos TypeScript
│   ├── App.tsx                     # Componente principal
│   ├── main.tsx                    # Punto de entrada
│   └── index.css                   # Estilos globales
├── functions/
│   └── src/
│       └── index.ts                # Cloud Functions
├── firestore.rules                 # Reglas de seguridad Firestore
├── firebase.json                   # Configuración Firebase
├── vite.config.ts                  # Configuración Vite
├── package.json
└── README.md

```

## 🎯 Casos de Uso de Prueba

### 1. Crear y Unirse a Comunidad

1. Usuario A: Regístrate como "Ana"
2. Crea comunidad "Amigos del Bar" con contraseña "bar2024"
3. Usuario B: Regístrate como "Luis"
4. Únete a "Amigos del Bar" con contraseña "bar2024"
5. Ambos deben ver la comunidad en su lista

### 2. Crear Ronda y Apostar

1. Ana crea una ronda:
   - Partido 1 (exacto): Real Madrid vs Barcelona
   - Partido 2 (exacto): Sevilla vs Valencia
   - Partido 3 (1X2): Betis vs Villarreal
   - Hora límite: Mañana a las 20:00
2. Luis hace su apuesta antes del límite
3. Ana también hace su apuesta
4. Ambos pueden ver las apuestas del otro

### 3. Detección de Duplicados

1. Luis apuesta: 2-1, 1-1, 1 (Local)
2. Ana intenta apostar exactamente igual
3. Aparece modal: "Ya existe una apuesta idéntica"
4. Ana puede confirmar o cambiar su apuesta

### 4. Publicar Resultados

1. Llega la hora límite (esperar o simular cambiando el deadline en Firestore)
2. Ana (admin) va a la ronda
3. Click en "Publicar Resultados"
4. Introduce resultados reales: 2-1, 1-1, 1
5. Todos reciben notificación:
   - Si Luis acertó: "¡Felicidades, ganaste!"
   - Si nadie acertó: "¡¡BOTE!!"

### 5. Notificación 1 Hora Antes (Requiere Cloud Functions)

1. Crea una ronda con deadline en 1 hora
2. NO hagas apuesta
3. Espera a que pase el scheduler (cada 15 min)
4. Deberías recibir notificación push

Para simular sin esperar:
- Ve a Firebase Console > Functions
- Ejecuta `sendReminderNotifications` manualmente en la pestaña "Logs"

## 🔄 Actualizaciones Futuras

Si necesitas actualizar la app:

1. Haz cambios en el código
2. Commit y push a GitHub:
   ```powershell
   git add .
   git commit -m "Descripción de cambios"
   git push
   ```
3. Despliega:
   ```powershell
   npm run deploy
   ```

Los usuarios recibirán la actualización automáticamente al recargar la app.

## 📞 Soporte

Si encuentras problemas:
1. Revisa la consola del navegador (F12 > Console)
2. Revisa logs de Firebase Functions: `firebase functions:log`
3. Verifica las reglas de Firestore en Firebase Console

## 📄 Licencia

Este proyecto es de código abierto. Úsalo libremente para tu grupo de amigos.

## ⚽ ¡Disfruta apostando con tus amigos!

Recuerda: **esto es solo para diversión entre amigos**. No involucra dinero real ni apuestas con fines de lucro.
