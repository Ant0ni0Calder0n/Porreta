import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.ico', 'icon-192.svg', 'icon-512.svg', 'firebase-messaging-sw.js'],
      manifest: {
        name: 'Porreta - Apuestas',
        short_name: 'Porreta',
        description: 'App de apuestas privada para amigos',
        theme_color: '#1976d2',
        background_color: '#ffffff',
        display: 'standalone',
        scope: '/Porreta/',
        start_url: '/Porreta/',
        icons: [
          {
            src: '/Porreta/icon-192.png',
            sizes: '192x192',
            type: 'image/svg+xml'
          },
          {
            src: '/Porreta/icon-512.png',
            sizes: '512x512',
            type: 'image/svg+xml'
          }
        ]
      },
      workbox: {
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/fonts\.googleapis\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'google-fonts-cache',
              expiration: {
                maxEntries: 10,
                maxAgeSeconds: 60 * 60 * 24 * 365
              }
            }
          }
        ]
      }
    })
  ],
  base: '/Porreta/'
})
