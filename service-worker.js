"use strict";var dataCacheName="epfl-news-data-0.0.3",cacheName="epfl-news-0.0.3",filesToCache=["/epfl-news-reader/","/epfl-news-reader/index.html","/epfl-news-reader/img/favicon.ico","/epfl-news-reader/img/favicon.png","/epfl-news-reader/css/epfl-news-0.0.3.min.css","/epfl-news-reader/js/epfl-news-0.0.3.min.js"];self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return e.addAll(filesToCache)}))}),self.addEventListener("activate",function(e){return e.waitUntil(caches.keys().then(function(e){return Promise.all(e.map(function(e){if(e!==cacheName&&e!==dataCacheName)return caches.delete(e)}))})),self.clients.claim()}),self.addEventListener("fetch",function(e){e.request.url.indexOf("https://actu.epfl.ch/api/jahia/")>-1?e.respondWith(caches.open(dataCacheName).then(function(n){return fetch(e.request).then(function(t){return n.put(e.request.url,t.clone()),t})})):e.respondWith(caches.match(e.request).then(function(n){return n||fetch(e.request)}))});