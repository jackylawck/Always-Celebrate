/**
 * Service Worker for Always Celebrate (常慶功)
 * Enterprise Offline Cache (v2.1.0)
 * Pure Client-Side • Zero Data Retention • Offline-First
 */

const CACHE_NAME = 'always-celebrate-v2.1.0';

const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './manifest.json',
  './AlwaysCelebrate-192.png',
  './AlwaysCelebrate-512.png',
  './js/blossoms.js'
];

// 安裝階段：快取所有核心靜態資源
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    }).then(() => self.skipWaiting())
  );
});

// 啟用階段：清除所有舊版過期快取
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
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
        // 斷網或無快取時回退至首頁
        if (event.request.mode === 'navigate') {
          return caches.match('./index.html');
        }
      });
    })
  );
});
