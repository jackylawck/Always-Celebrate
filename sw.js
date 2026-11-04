/**
 * Service Worker for Always Celebrate (常慶功)
 * Enterprise Offline Cache (v2.3.1 Textbook Grade)
 * Pure Client-Side • Zero Data Retention • Offline-First
 */

const CACHE_NAME = 'always-celebrate-v2.3.1';

const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './style.css',
  './app.js',
  './manifest.json',
  './AlwaysCelebrate-192.png',
  './AlwaysCelebrate-512.png',
  './js/celebrate.js'
];

// 安裝階段：原子化快取所有關鍵靜態資源
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => cache.addAll(ASSETS_TO_CACHE))
      .then(() => self.skipWaiting())
  );
});

// 啟用階段：清除所有舊版過期快取 (過濾後精準刪除)
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => {
        return Promise.all(
          keys
            .filter((key) => key !== CACHE_NAME)
            .map((key) => caches.delete(key))
        );
      })
      .then(() => self.clients.claim())
  );
});

// 攔截請求：Cache-First 離線優先策略
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      if (cachedResponse) {
        return cachedResponse;
      }
      return fetch(event.request).catch(() => {
        // 斷網離線導航時，安全回退至首頁
        if (event.request.mode === 'navigate') {
          return caches.match('./index.html');
        }
      });
    })
  );
});
