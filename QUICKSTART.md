# Guía Rápida de Inicio - Porreta PWA

## 🚀 Pasos Mínimos para Empezar (15 minutos)

### 1️⃣ Configurar Firebase (5 min)

```powershell
# Ir a https://console.firebase.google.com/
# 1. Crear proyecto "porreta-app"
# 2. Activar Authentication (Email/Password)
# 3. Crear Firestore Database (modo producción)
# 4. Activar Cloud Messaging
# 5. Registrar app Web y copiar config
```

### 2️⃣ Configurar Variables (2 min)

```powershell
# Copiar .env.example a .env
copy .env.example .env

# Editar .env con tus credenciales de Firebase
# (las que copiaste en el paso anterior)
```

### 3️⃣ Actualizar Service Worker (1 min)

```powershell
# Editar public/firebase-messaging-sw.js
# Reemplazar la configuración con tus credenciales
```

### 4️⃣ Instalar y Desplegar (7 min)

```powershell
# Instalar dependencias
npm install
cd functions
npm install
cd ..

# Instalar Firebase CLI
npm install -g firebase-tools

# Login en Firebase
firebase login

# Inicializar proyecto
firebase init
# Seleccionar: Firestore, Functions, Hosting
# Usar proyecto existente

# Desplegar reglas
firebase deploy --only firestore:rules

# OPCIONAL: Desplegar funciones (requiere plan Blaze)
firebase deploy --only functions

# Construir proyecto
npm run build

# Subir a GitHub
git init
git add .
git commit -m "Initial commit"
git remote add origin https://github.com/TU-USUARIO/Porreta.git
git push -u origin main

# Instalar gh-pages
npm install --save-dev gh-pages

# Añadir script en package.json:
# "deploy": "npm run build && gh-pages -d dist"

# Desplegar
npm run deploy
```

### 5️⃣ Activar GitHub Pages

```
1. Ve a tu repositorio en GitHub
2. Settings > Pages
3. Source: gh-pages branch
4. Guarda
5. Tu app estará en: https://TU-USUARIO.github.io/Porreta/
```

## ✅ Verificación

- [ ] Puedo abrir la URL y ver la app
- [ ] Puedo registrarme con email/password
- [ ] Puedo crear una comunidad
- [ ] Otro usuario puede unirse a mi comunidad
- [ ] Puedo crear una ronda
- [ ] Puedo hacer una apuesta
- [ ] Como admin, puedo publicar resultados

## 🔧 Comandos Útiles

```powershell
# Desarrollo local
npm run dev

# Ver logs de funciones
firebase functions:log

# Redesplegar solo frontend
npm run deploy

# Redesplegar solo funciones
firebase deploy --only functions

# Ver estado de despliegue
firebase deploy:list
```

## ⚠️ Problemas Comunes

### "Module not found: react"
```powershell
npm install
```

### "Firebase is not defined"
- Verifica que `.env` tenga todas las variables
- Reinicia el servidor de desarrollo

### "Permission denied" en Firestore
```powershell
firebase deploy --only firestore:rules
```

### Notificaciones no funcionan
- Solo funcionan en HTTPS (producción)
- El usuario debe aceptar permisos
- iOS tiene soporte limitado

## 📱 Instalar en Móvil

**Android Chrome:**
- Abre la URL > Aparecerá "Añadir a inicio"
- O menú ⋮ > "Instalar app"

**iOS Safari:**
- Abre URL > Botón compartir > "Añadir a inicio"

## 💰 Sobre los Costos

### Gratis Total (Sin Cloud Functions programadas)
- Comenta `sendReminderNotifications` en functions/src/index.ts
- Todo lo demás funciona gratis
- Los recordatorios no se enviarán automáticamente

### ~$0/mes (Con Cloud Functions - Plan Blaze)
- Activa plan Blaze en Firebase Console
- Incluye capa gratuita generosa
- Para ~20 usuarios: probablemente $0
- Configura alerta de facturación en $5

## 🎯 ¡Listo!

Tu app está funcionando. Comparte la URL con tus amigos y ¡a apostar!

URL de la app: `https://TU-USUARIO.github.io/Porreta/`
