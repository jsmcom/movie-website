const CACHE_NAME = 'movie-cache-v1';
const urlsToCache = [
  '/movie-website/',
  '/movie-website/index.html',
  '/movie-website/style.css',
  '/movie-website/script.js',
  '/movie-website/manifest.json'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});