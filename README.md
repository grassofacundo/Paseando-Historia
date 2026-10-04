# Pasea historias

Juego tipo novela visual con preguntas sobre historia argentina (Escuela Urquiza, 2018). El jugador recorre episodios históricos, conversa con próceres y un "Profe" explica cada respuesta.

Esta versión es una reescritura en Next.js (App Router, TypeScript, exportación estática). La versión legacy en PHP está en el commit `16f084c`.

## Scripts

- `npm run dev`: servidor de desarrollo.
- `npm run build`: build de producción; genera el sitio estático en `out/`.
- `npm run lint`: ESLint.
- `npx tsc --noEmit`: chequeo de tipos.

## Deploy en Vercel

1. Importar el repositorio en Vercel.
2. Framework preset: Next.js.
3. Dejar la configuración por defecto y desplegar.
