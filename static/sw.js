self.addEventListener('install', (event) => {
    event.waitUntil(
      caches.open('nutriplanner-v1').then((cache) => {
        return cache.addAll([
          '/',
          '/index.html',
          '/SECONDPAGE.CSS',
          '/dieta.js',
          '/manifest.json',
          '/icon.png'
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