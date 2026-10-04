# Pasea historias

Juego tipo novela visual con preguntas sobre historia argentina (Escuela Urquiza, 2018). El jugador recorre episodios históricos, conversa con próceres y un "Profe" explica cada respuesta.

Esta versión es una reescritura en Next.js (App Router, TypeScript, exportación estática). La versión legacy en PHP está en el commit `16f084c`.

## Scripts

- `npm run dev`: servidor de desarrollo.
- `npm run build`: build de producción; genera el sitio estático en `out/`.
- `npm run lint`: ESLint.
- `npx tsc --noEmit`: chequeo de tipos.
- `npm test`: tests unitarios (Vitest, `tests/unit/`).
- `npm run test:e2e`: build y tests end-to-end (Playwright, `e2e/`) contra `out/` servido en el puerto 4400.

## Testing

- Unitarios: `npm test`.
- End-to-end (solo Chromium): instalar el navegador una vez con `npx playwright install chromium` y correr `npm run test:e2e`. Los tests importan el contenido de `src/content/chapters` para saber qué opción es correcta e identifican los botones por su texto visible. El service worker se bloquea en los tests.
- Si no se puede descargar Chromium, usar Microsoft Edge instalado: `PW_CHANNEL=msedge npm run test:e2e` (en PowerShell: `$env:PW_CHANNEL="msedge"; npm run test:e2e`).

## Deploy en Vercel

1. Importar el repositorio en Vercel.
2. Framework preset: Next.js.
3. Dejar la configuración por defecto y desplegar.
