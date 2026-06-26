import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const rootDir = resolve(__dirname, '..');
const envPath = resolve(rootDir, '.env');
const outputPath = resolve(rootDir, 'public/firebase-config.js');

const parseEnv = (content) => {
  return content.split(/\r?\n/).reduce((values, line) => {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) return values;

    const separatorIndex = trimmed.indexOf('=');
    if (separatorIndex === -1) return values;

    const key = trimmed.slice(0, separatorIndex).trim();
    const rawValue = trimmed.slice(separatorIndex + 1).trim();
    values[key] = rawValue.replace(/^['"]|['"]$/g, '');
    return values;
  }, {});
};

const requiredKeys = [
  'VITE_FIREBASE_API_KEY',
  'VITE_FIREBASE_AUTH_DOMAIN',
  'VITE_FIREBASE_PROJECT_ID',
  'VITE_FIREBASE_STORAGE_BUCKET',
  'VITE_FIREBASE_MESSAGING_SENDER_ID',
  'VITE_FIREBASE_APP_ID',
];

let envValues;
try {
  envValues = parseEnv(readFileSync(envPath, 'utf8'));
} catch {
  throw new Error(`No se pudo leer ${envPath}. Crea .env antes de ejecutar dev/build.`);
}

const missingKeys = requiredKeys.filter((key) => !envValues[key]);
if (missingKeys.length > 0) {
  throw new Error(`Faltan variables Firebase en .env: ${missingKeys.join(', ')}`);
}

const firebaseConfig = {
  apiKey: envValues.VITE_FIREBASE_API_KEY,
  authDomain: envValues.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: envValues.VITE_FIREBASE_PROJECT_ID,
  storageBucket: envValues.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: envValues.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: envValues.VITE_FIREBASE_APP_ID,
};

mkdirSync(dirname(outputPath), { recursive: true });
writeFileSync(
  outputPath,
  `self.firebaseConfig = ${JSON.stringify(firebaseConfig, null, 2)};\n`,
  'utf8'
);

console.log('Firebase service worker config generated.');
