self.addEventListener('install', function (e) {
    e.waitUntil(
        caches.open('airhorner').then(function (cache) {
            return cache.addAll([
                '/',
                '/index.html',
                '/idelib.js',
                '/favicon.png'
            ]);
        })
    );
});

self.addEventListener('fetch', function (event) {

    event.respondWith(
        caches.match(event.request).then(function (response) {
            console.log(event.request.url + " was loaded via cache");
            return response || fetch(event.request);
        })
    );
});