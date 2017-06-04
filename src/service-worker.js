'use strict';

var dataCacheName = 'epfl-news-reader-data';
var cacheName     = 'epfl-news-reader';
var filesToCache  = '<FILES_TO_CACHE>';

self.addEventListener('install', function(e) {
  console.log('INFO: ServiceWorker install');
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log('INFO: ServiceWorker caching app shell');
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('activate', function(e) {
  console.log('INFO: ServiceWorker activate');
  e.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(
        keyList.map(function(key) {
          if (key !== cacheName && key !== dataCacheName) {
            console.log('INFO: ServiceWorker removing old cache', key);
            return caches.delete(key);
          }
        })
      );
    })
  );
  return self.clients.claim();
});

self.addEventListener('fetch', function(e) {
  console.log('INFO: ServiceWorker fetch', e.request.url);
  var dataUrl = 'https://actu.epfl.ch/api/jahia/';
  if (e.request.url.indexOf(dataUrl) > -1) {
    e.respondWith(
      caches.open(dataCacheName).then(function(cache) {
        return fetch(e.request).then(function(response) {
          cache.put(e.request.url, response.clone());
          return response;
        });
      })
    );
  } else {
    e.respondWith(
      caches.match(e.request).then(function(response) {
        return response || fetch(e.request);
      })
    );
  }
});
