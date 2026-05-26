# LR Digital Servicios

Web comercial de Lucas Rey / LR Digital para vender servicios digitales a negocios: paginas web, catalogos digitales, menus digitales, tiendas simples, sistemas simples y mantenimiento.

## Rutas

- `/`: landing comercial principal.
- `/servicios`: misma landing, mantenida por compatibilidad.

## Configuracion

Los datos comerciales se editan en `src/config/business.js`:

- `whatsappNumber`
- `email`
- `siteUrl`
- `ogImage`
- `defaultWhatsappMessage`

El numero actual de WhatsApp esta configurado como `5491154097209`.

## Ejecutar en local

```bash
npm install
npm run dev
```

## Build de produccion

```bash
npm run build
```

## Deploy en Vercel

- Framework: Vite
- Build command: `npm run build`
- Output directory: `dist`

El archivo `vercel.json` reescribe cualquier ruta hacia `index.html`, para que `/`, `/servicios` y otras URLs internas funcionen correctamente.
