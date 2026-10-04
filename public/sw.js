/*
 * Hand-written service worker (no library).
 *
 * MAINTENANCE: PRECACHE below is a hand-written list. tests/unit/pwa.test.ts
 * fails if it misses any path from the asset map, any file under
 * public/images or public/icons, or a page route. Bump CACHE_VERSION when
 * the shell changes so old caches are deleted on activate.
 *
 * Pages are listed as clean URLs (no .html): Vercel and `serve` both do that.
 * Hashed /_next/static/ files cannot be listed, so on install the cached pages
 * are scanned for the /_next/static/ URLs they reference (scripts, CSS, route
 * chunks) and those are cached too; anything else is cached at runtime.
 */
const CACHE_VERSION = "ph-v3";

const PRECACHE = [
  "/",
  "/eras",
  "/about",
  "/play/intro",
  "/play/arg1810",
  "/play/pueblo",
  "/play/realista",
  "/finish/intro",
  "/finish/arg1810",
  "/finish/pueblo",
  "/finish/realista",
  "/404",
  "/manifest.webmanifest",
  "/icons/apple-touch-icon.png",
  "/icons/icon-192.png",
  "/icons/icon-512.png",
  "/icons/icon-maskable-512.png",
  "/images/backgrounds/biblioteca.svg",
  "/images/backgrounds/cabildo-abierto.svg",
  "/images/backgrounds/cabildo-lleno.svg",
  "/images/backgrounds/cabildo-vacio.svg",
  "/images/backgrounds/casa-pena-adentro.svg",
  "/images/backgrounds/casa-pena-afuera.svg",
  "/images/backgrounds/domingo-20.svg",
  "/images/backgrounds/error404.svg",
  "/images/backgrounds/jueves-24.svg",
  "/images/backgrounds/libro-magico.svg",
  "/images/backgrounds/lunes-21.svg",
  "/images/backgrounds/martes-22.svg",
  "/images/backgrounds/miercoles-23.svg",
  "/images/backgrounds/oficina-lezica.svg",
  "/images/backgrounds/plaza-victoria.svg",
  "/images/backgrounds/pulperia.svg",
  "/images/backgrounds/fuerte.svg",
  "/images/backgrounds/sabado-19.svg",
  "/images/backgrounds/viernes-18.svg",
  "/images/backgrounds/viernes-25.svg",
  "/images/characters/belgrano.svg",
  "/images/characters/beruti.svg",
  "/images/characters/cisneros.svg",
  "/images/characters/french.svg",
  "/images/characters/vecino.svg",
  "/images/characters/villota.svg",
  "/images/characters/castelli.svg",
  "/images/characters/donado.svg",
  "/images/characters/lezica.svg",
  "/images/characters/obispo-lue.svg",
  "/images/characters/paso.svg",
  "/images/characters/pena.svg",
  "/images/characters/profe.svg",
  "/images/characters/profe-ayuda.svg",
  "/images/characters/raul-404.svg",
  "/images/characters/saavedra.svg",
  "/images/choices/eleccion-politico.svg",
  "/images/choices/eleccion-pueblo.svg",
  "/images/choices/eleccion-realista.svg",
  "/images/eras/era-arg1810.svg",
  "/images/eras/era-revolucion-industrial.svg",
  "/images/eras/era-segunda-guerra.svg",
  "/images/icons/back-arrow.svg",
  "/images/icons/logo.svg",
  "/images/objects/book.svg",
  "/images/objects/escarapela.svg",
];

// Finds every /_next/static/ URL referenced by the precached pages (including
// chunk paths in the inline flight data) and caches it.
async function precacheNextAssets(cache) {
  const found = new Set();
  const re = /(?:\/_next\/)?static\/[^"'\\\s<>)(]+\.(?:js|css|woff2?)/g;
  for (const url of PRECACHE) {
    if (url.startsWith("/images/") || url.startsWith("/icons/")) continue;
    try {
      const res = await cache.match(url);
      if (!res) continue;
      const text = await res.text();
      for (const m of text.matchAll(re)) {
        found.add(m[0].startsWith("/_next/") ? m[0] : "/_next/" + m[0]);
      }
    } catch {
      // ignore: runtime caching is the fallback
    }
  }
  await Promise.allSettled([...found].map((u) => cache.add(u)));
}

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_VERSION).then((cache) =>
      // One failing URL must not abort the installation.
      Promise.allSettled(PRECACHE.map((url) => cache.add(url)))
        .then(() => precacheNextAssets(cache))
    ).then(() => self.skipWaiting())
  );
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches
      .keys()
      .then((keys) =>
        Promise.all(keys.filter((k) => k !== CACHE_VERSION).map((k) => caches.delete(k)))
      )
      .then(() => self.clients.claim())
  );
});

const STATIC_PATH = /^\/(_next\/static|images|icons)\//;
const STATIC_EXT = /\.(css|js|svg|png|jpg|jpeg|webp|ico|woff2?|ttf|otf)$/i;

async function putInCache(request, response) {
  if (response && response.ok) {
    const cache = await caches.open(CACHE_VERSION);
    await cache.put(request, response.clone());
  }
  return response;
}

async function networkFirst(request) {
  try {
    return await putInCache(request, await fetch(request));
  } catch (err) {
    const cached =
      (await caches.match(request)) ||
      (await caches.match(new URL(request.url).pathname)) ||
      (await caches.match("/"));
    if (cached) return cached;
    throw err;
  }
}

async function cacheFirst(request) {
  const cached = await caches.match(request);
  if (cached) return cached;
  return putInCache(request, await fetch(request));
}

self.addEventListener("fetch", (event) => {
  const request = event.request;
  if (request.method !== "GET") return;
  const url = new URL(request.url);
  if (url.origin !== self.location.origin) return;

  if (request.mode === "navigate") {
    event.respondWith(networkFirst(request));
  } else if (STATIC_PATH.test(url.pathname) || STATIC_EXT.test(url.pathname)) {
    event.respondWith(cacheFirst(request));
  }
});
