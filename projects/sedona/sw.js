importScripts('/lib/cache-polyfill.js');

self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('sedona').then(function(cache) {
      return cache.addAll([
      '/',
      '/index.html',
      '/build/css/style.min.css',
      '/build/js/build.min.js'
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request).then(function(response) {
    return response || fetch(event.request);
    })
  );
});



// '/index.html?homescreen=1',
// '/?homescreen=1',
