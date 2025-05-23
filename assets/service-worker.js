self.addEventListener('install', (event) => {
    console.log('[Service Worker] Installed');
    event.waitUntil(
      caches.open('v1').then((cache) => {
        return cache.addAll([
          '/',
          '/index.html',
          '/main.js',
          '/style.css',
          '/img/icon-192.png',
          '/img/icon-512.png'
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', (event) => {
    event.respondWith(
      caches.match(event.request).then((response) => {
        return response || fetch(event.request);
      })
    );
  });
  