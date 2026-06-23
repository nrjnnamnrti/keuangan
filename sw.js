```javascript
const CACHE_NAME = 'keluargaapp-v1';
const urlsToCache = [
  './',
  './index.html',
  './manifest.json',
  './icon-192px.png',
  './icon-512px.png'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        if (response) { return response; }
        return fetch(event.request);
      }
    )
  );
});
