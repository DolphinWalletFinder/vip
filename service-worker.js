const CACHE_NAME = "dolphin-cache-v1";
const urlsToCache = [
  "/vip/pages/login.html",
  "/vip/pages/profile.html",
  "/vip/pages/license.html",
  "/vip/pages/results.html",
  "/vip/pages/scan.html",
  "/vip/pages/success.html",
  "/vip/pages/transaction.html",
  "/vip/assets/style-neon.css",
  "/vip/assets/wallets.js",
  "/vip/js/login-api.js"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});
