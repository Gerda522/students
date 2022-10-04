// Når websitet indlæses, cache ressourcer nævnt i listen
const cacheName = "cache-students";
self.addEventListener("install", function (event) {
  event.waitUntil(
    caches.open(cacheName).then(function (cache) {
      return cache.addAll([
        "/studetns/",
        "/students/index.html",
        "/students/morten.png",
        "/students/nina.png",
        "/students/olivia.png",
        "/students/javascript.js",
        "/students/mystyle.css",
      ]);
    })
  );
});

// Hvis ressource ikke er tilgængelig online, så søg i cachen
// efter et match.
self.addEventListener("fetch", function (event) {
  event.respondWith(
    fetch(event.request).catch(() =>
      caches.open(cacheName).then((cache) => cache.match(event.request))
    )
  );
});
