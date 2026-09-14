const resources = [
    "/",
    "/cart.tic",
    "/index.html",
    "/manifest.json",
    "/tic80.js",
    "/tic80.wasm",
    "/worker.js"
];

self.addEventListener("install", (e) => {
    e.waitUntil(
        caches
            .open("tic-80")
            .then((cache) => {
                cache.addAll(resources);
            })
            .catch((err) => console.error(err))
    );
});

self.addEventListener("fetch", (e) => {
    e.respondWith(
      caches.match(e.request).then((res) => {
        return res || fetch(e.request);
      })
    );
});
