// Basic service worker for Common Thread Field Kit

self.addEventListener('install', (event) => {
  // Activate immediately after install
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  // Take control of open pages
  event.waitUntil(clients.claim());
});

// For now we are not doing any special caching.
// This hook is here so the app qualifies as a PWA.
self.addEventListener('fetch', (event) => {
  // Default: just pass requests through to the network
});
