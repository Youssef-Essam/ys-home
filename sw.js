// Offline support: keeps a copy of the app files so it opens with no internet.
// Data syncing is handled separately by Firestore's own offline cache.
const CACHE = "split-v1";
const SHELL = ["./", "./index.html", "./config.js", "./manifest.webmanifest", "./icon-192.png", "./icon-512.png", "./apple-touch-icon.png"];

self.addEventListener("install", (e) => {
  e.waitUntil((async () => {
    const cache = await caches.open(CACHE);
    await cache.addAll(SHELL);
    // Also pre-cache every built JS/CSS file (list generated at build time).
    try {
      const list = await (await fetch("./precache.json", { cache: "no-store" })).json();
      await cache.addAll(list.filter((f) => f.startsWith("./assets/")));
    } catch {}
    self.skipWaiting();
  })());
});

self.addEventListener("activate", (e) => {
  e.waitUntil((async () => {
    for (const k of await caches.keys()) if (k !== CACHE) await caches.delete(k);
    await self.clients.claim();
  })());
});

// Stale-while-revalidate for our own files: instant from cache, refreshed in background.
self.addEventListener("fetch", (e) => {
  const req = e.request;
  const url = new URL(req.url);
  if (req.method !== "GET" || url.origin !== location.origin) return;
  e.respondWith((async () => {
    const cache = await caches.open(CACHE);
    const key = req.mode === "navigate" ? "./index.html" : req;
    const cached = await cache.match(key, { ignoreSearch: req.mode === "navigate" });
    const network = fetch(req).then((res) => {
      if (res.ok) cache.put(key, res.clone());
      return res;
    }).catch(() => null);
    if (cached) { e.waitUntil(network); return cached; }
    return (await network) || new Response("Offline", { status: 503 });
  })());
});
