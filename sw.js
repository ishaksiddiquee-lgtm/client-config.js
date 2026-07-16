const CACHE_NAME = 'puzzle-cache-v3';
const APP_SHELL = [
  './',
  './index.html',
  './css/style.css',
  './js/api.js',
  './js/socket.js',
  './js/emoji.js',
  './js/secret.js',
  './js/game.js',
  './js/pwa.js',
  './icon.png',
  './icon-192.png',
  './icon-512.png',
  './icon-maskable.png',
  './favicon-32.png',
  './manifest.json'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(APP_SHELL))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key)))
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  event.respondWith(
    caches.match(event.request).then((cached) => cached || fetch(event.request))
  );
});
