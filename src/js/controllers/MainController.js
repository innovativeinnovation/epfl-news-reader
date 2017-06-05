/*
 * (c ECOLE POLYTECHNIQUE FEDERALE DE LAUSANNE, Switzerland, VPSI, 2017.
 * See the LICENSE file for more details.
 */

(function($$) {
  'use strict';

  EPFLNews.MainController = function() {};

  EPFLNews.MainController.prototype.init = function() {

    // Render Main View
    var mainView = new EPFLNews.MainView();
    mainView.render();

    var url = 'https://actu.epfl.ch/api/jahia/channels/mediacom/news/en/';
    var params = {
      format: 'json',
      limit: 50,
    };

    if ('caches' in window) {
      caches.match(url + '?' + $$.param(params)).then(function(response) {
        if (response) {
          response.json().then(function updateFromCache(json) {
            mainView.updateListNews(json);
            EPFLNews.App.initImagesLazyLoad(Dom7('.page[data-page="main"]'));
          });
        }
      });
    }

    $$.get(url, params, function(data) {
      mainView.updateListNews(JSON.parse(data));
      EPFLNews.App.initImagesLazyLoad(Dom7('.page[data-page="main"]'));
    });

  };

})(Dom7);
