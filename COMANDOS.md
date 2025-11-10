# 🚀 COMANDOS RÁPIDOS - Porreta PWA

## 📥 Primera Instalación

```powershell
# Ir al directorio del proyecto
cd "C:\Users\antonio.corrales\Downloads\Porreta"

# Instalar dependencias frontend
npm install

# Instalar dependencias Cloud Functions
cd functions
npm install
cd ..

# Instalar Firebase CLI globalmente (solo una vez)
npm install -g firebase-tools

# Login en Firebase
firebase login

# Inicializar Firebase en el proyecto
firebase init
# Selecciona: Firestore, Functions, Hosting
# Usa proyecto existente
```

## 🔧 Configuración Inicial

```powershell
# 1. Copiar template de variables
copy .env.example .env

# 2. Editar .env con tus credenciales de Firebase
# (usa notepad, VS Code, o tu editor favorito)
notepad .env

# 3. Editar service worker con tus credenciales
notepad public/firebase-messaging-sw.js
```

## 🔥 Despliegue Firebase

```powershell
# Desplegar solo reglas de Firestore
firebase deploy --only firestore:rules

# Desplegar solo Cloud Functions (requiere plan Blaze)
firebase deploy --only functions

# Desplegar todo Firebase
firebase deploy

# Ver logs de las funciones
firebase functions:log
```

## 🏗️ Build y Deploy

```powershell
# Construir proyecto para producción
npm run build

# Inicializar git (solo primera vez)
git init
git add .
git commit -m "Initial commit"
git branch -M main

# Conectar con GitHub (reemplaza TU-USUARIO)
git remote add origin https://github.com/TU-USUARIO/Porreta.git
git push -u origin main

# Instalar gh-pages (solo primera vez)
npm install --save-dev gh-pages

# Desplegar a GitHub Pages
npm run deploy
```

## 🧪 Desarrollo Local

```powershell
# Servidor de desarrollo (http://localhost:5173)
npm run dev

# Build para producción
npm run build

# Preview del build
npm run preview
```

## 🔍 Debugging

```powershell
# Ver logs en tiempo real
firebase functions:log --only sendReminderNotifications

# Ver estado de despliegues
firebase deploy:list

# Ejecutar shell de funciones (testing local)
firebase functions:shell
```

## 📦 Actualizaciones

```powershell
# Después de hacer cambios en el código:

# 1. Commit cambios
git add .
git commit -m "Descripción de los cambios"
git push

# 2. Redesplegar frontend
npm run build
npm run deploy

# 3. Redesplegar functions (si cambiaron)
firebase deploy --only functions
```

## 🛠️ Comandos de Utilidad

```powershell
# Ver versión de Node
node --version

# Ver versión de npm
npm --version

# Ver versión de Firebase CLI
firebase --version

# Actualizar Firebase CLI
npm install -g firebase-tools@latest

# Limpiar caché de npm
npm cache clean --force

# Reinstalar dependencias
rm -r node_modules
npm install
```

## 📊 Gestión Firebase

```powershell
# Listar proyectos Firebase
firebase projects:list

# Cambiar proyecto activo
firebase use TU-PROYECTO-ID

# Ver información del proyecto actual
firebase projects:info

# Abrir consola de Firebase en el navegador
firebase open
```

## 🔐 Autenticación Firebase

```powershell
# Login
firebase login

# Logout
firebase logout

# Ver usuario actual
firebase login:list

# Login con token CI (para servidores)
firebase login:ci
```

## 📱 Testing PWA

```powershell
# Servidor local con HTTPS (necesario para PWA)
# Opción 1: Usar ngrok
npx ngrok http 5173

# Opción 2: Desplegar a Firebase Hosting preview
firebase hosting:channel:deploy preview
```

## 🗄️ Base de Datos

```powershell
# Exportar datos de Firestore
firebase firestore:export backup/

# Importar datos a Firestore
firebase firestore:import backup/

# Borrar colección (cuidado!)
firebase firestore:delete --all-collections
```

## 🚨 En Caso de Emergencia

```powershell
# Si algo no funciona, reinicia todo:

# 1. Limpiar y reinstalar
rm -r node_modules dist
npm install

# 2. Limpiar caché
npm cache clean --force

# 3. Rebuild
npm run build

# 4. Redesplegar
npm run deploy

# 5. Ver logs
firebase functions:log
```

## 📋 Checklist Pre-Despliegue

```powershell
# Ejecuta estos comandos para verificar:

# ✅ Variables configuradas
cat .env

# ✅ Build exitoso
npm run build

# ✅ Tests locales (abre navegador)
npm run dev

# ✅ Firebase configurado
firebase projects:info

# ✅ Reglas desplegadas
firebase deploy --only firestore:rules --dry-run

# ✅ Git configurado
git status
```

## 🔗 URLs Importantes

```powershell
# Consola Firebase
start https://console.firebase.google.com/

# Tu app en GitHub Pages (reemplaza TU-USUARIO)
start https://TU-USUARIO.github.io/Porreta/

# Repositorio GitHub
start https://github.com/TU-USUARIO/Porreta

# Documentación Firebase
start https://firebase.google.com/docs
```

## 💡 Tips PowerShell

```powershell
# Ver contenido de archivo
Get-Content .env

# Editar archivo
notepad .env

# Crear directorio
mkdir carpeta

# Listar archivos
ls

# Cambiar directorio
cd ruta

# Directorio actual
pwd

# Limpiar consola
cls

# Ver historial de comandos
Get-History
```

## 🎯 Comandos Más Usados

```powershell
# Desarrollo diario
npm run dev                              # Servidor local
npm run build                            # Build producción
npm run deploy                           # Desplegar a GitHub Pages

# Firebase
firebase deploy --only firestore:rules   # Actualizar reglas
firebase deploy --only functions         # Actualizar funciones
firebase functions:log                   # Ver logs

# Git
git add .                                # Añadir cambios
git commit -m "mensaje"                  # Commit
git push                                 # Subir a GitHub
```

## 📞 Obtener Ayuda

```powershell
# Ayuda de npm
npm help

# Ayuda de Firebase
firebase help

# Ayuda de un comando específico
firebase help deploy

# Ver todas las opciones de un comando
npm run build --help
```

---

## 🚀 Inicio Rápido (Copy-Paste)

```powershell
# Todo en uno (primera vez):
npm install && cd functions && npm install && cd .. && firebase login && firebase init

# Configurar (edita estos archivos):
# - .env
# - public/firebase-messaging-sw.js

# Desplegar (todo en uno):
firebase deploy --only firestore:rules && npm run build && npm run deploy

# ¡Listo! Tu app está en: https://TU-USUARIO.github.io/Porreta/
```

---

## 📝 Notas

- Todos los comandos asumen que estás en la raíz del proyecto
- Reemplaza `TU-USUARIO` con tu usuario de GitHub
- Los comandos con `start` abren el navegador (solo Windows)
- Para Linux/Mac, usa `open` en lugar de `start`
