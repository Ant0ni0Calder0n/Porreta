# Cómo Crear Iconos PNG para la PWA

Los archivos SVG incluidos son solo referencias. Para mejor compatibilidad, especialmente en iOS, necesitas iconos PNG reales.

## Opción 1: Usar una Herramienta Online (Más Fácil)

### Con Favicon.io (Gratis)
1. Ve a https://favicon.io/favicon-generator/
2. Configura:
   - Text: P
   - Background: #1976d2
   - Font: Arial Bold
   - Font Size: 80-90
   - Color: #ffffff
3. Descarga el paquete
4. Extrae `android-chrome-192x192.png` y `android-chrome-512x512.png`
5. Renombra a `icon-192.png` e `icon-512.png`
6. Copia a la carpeta `public/`

### Con RealFaviconGenerator (Gratis)
1. Ve a https://realfavicongenerator.net/
2. Sube una imagen base (puede ser el logo de tu grupo)
3. Configura los tamaños necesarios
4. Descarga el paquete
5. Extrae los iconos de 192x192 y 512x512
6. Renombra y copia a `public/`

## Opción 2: Crear con GIMP (Software Libre)

1. Descarga GIMP: https://www.gimp.org/
2. Archivo > Nuevo > 512x512 píxeles
3. Rellena fondo con color #1976d2
4. Herramienta Texto > Escribe "P"
5. Font: Arial Bold, tamaño ~320pt
6. Color texto: blanco (#ffffff)
7. Centra el texto
8. Exportar como `icon-512.png`
9. Imagen > Escalar imagen > 192x192
10. Exportar como `icon-192.png`

## Opción 3: Crear con Photoshop

Similar a GIMP:
1. Nuevo documento 512x512px
2. Fondo #1976d2
3. Texto "P" en Arial Bold blanco, ~320pt
4. Centrar
5. Guardar como PNG
6. Escalar a 192x192 y guardar también

## Opción 4: Usar Canva (Online, Gratis)

1. Ve a https://www.canva.com/
2. Crear diseño personalizado 512x512px
3. Fondo azul #1976d2
4. Añade texto "P" en blanco, grande, centrado
5. Descarga como PNG
6. Usa un redimensionador online para crear versión 192x192

## Opción 5: Convertir SVG a PNG con Herramienta Online

1. Ve a https://cloudconvert.com/svg-to-png
2. Sube `public/icon-512.svg`
3. Configura tamaño: 512x512
4. Convierte y descarga como `icon-512.png`
5. Repite con `icon-192.svg` a 192x192
6. Copia ambos a `public/`

## Actualizar vite.config.ts

Una vez tengas los PNG, actualiza `vite.config.ts`:

```typescript
manifest: {
  icons: [
    {
      src: 'icon-192.png',  // Cambiar de .svg a .png
      sizes: '192x192',
      type: 'image/png'      // Cambiar de svg+xml a png
    },
    {
      src: 'icon-512.png',
      sizes: '512x512',
      type: 'image/png'
    }
  ]
}
```

## ¿Son Obligatorios los PNG?

**No**, pero recomendado:
- Los SVG funcionan en Android moderno
- iOS puede tener problemas con SVG
- PNG garantiza máxima compatibilidad

## Diseño Recomendado

Para el ícono de Porreta, usa:
- **Fondo**: Azul #1976d2
- **Letra**: "P" en blanco
- **Font**: Arial Bold o similar sans-serif
- **Tamaño letra**: 60-70% del tamaño del canvas
- **Centrado**: Horizontal y vertical

O usa tu propio diseño (logo del grupo, escudo, etc.).

## Verificar Iconos

Después de desplegar:
1. Abre la app en el navegador
2. F12 > Application > Manifest
3. Verifica que los iconos aparezcan correctamente
4. Instala la PWA y verifica el ícono en la pantalla de inicio
