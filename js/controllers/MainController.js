/*
 * (c) All rights reserved. ECOLE POLYTECHNIQUE FEDERALE DE LAUSANNE,
 * Switzerland, VPSI, 2017.
 * See the LICENSE file for more details.
 */

(function($$) {
  'use strict';

  EPFLNews.MainController = function() {};

  EPFLNews.MainController.prototype.init = function() {

    // Render Main View
    var mainView = new EPFLNews.MainView();
    mainView.render();

    var url = 'https://actu.epfl.ch/feeds/json/';
    var params = {
      channel: 'mediacom',
      len: 50,
      lang: 'en',
    };

    if ('caches' in window) {
      caches.match(url + '?' + $$.param(params)).then(function(response) {
        if (response) {
          response.json().then(function updateFromCache(json) {
            mainView.updateListNews(json);
          });
        }
      });
    }

    $$.get(url, params, function(data) {
      mainView.updateListNews(JSON.parse(data));
    });

  };

})(Dom7);
