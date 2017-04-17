'use strict';

var dataCacheName = 'epfl-news-reader-data';
var cacheName     = 'epfl-news-reader';
var filesToCache = [
  '/',
  '/index.html',
  '/css/framework7.material.min.css',
  '/css/framework7.material.colors.min.css',
  '/css/app.css',
  '/js/framework7.min.js',
  '/js/handlebars.runtime.min.js',
  '/js/templates/all.js',
  '/js/utils/Constants.js',
  '/js/controllers/MainController.js',
  '/js/views/MainView.js',
  '/js/app.js',
];

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
  var dataUrl = 'https://actu.epfl.ch/feeds/json/';
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
