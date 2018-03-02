/*
 * (c ECOLE POLYTECHNIQUE FEDERALE DE LAUSANNE, Switzerland, VPSI, 2017-2018.
 * See the LICENSE file for more details.
 */

(function($$) {
  'use strict';

  EPFLNews.MainController = function() {};

  EPFLNews.MainController.prototype.init = function() {

    // Get the model and set language
    var languageModel = new EPFLNews.LanguageModel();
    EPFLNews.language = languageModel.getLanguage();

    // Get the model and set channel
    var channelModel = new EPFLNews.ChannelModel();
    EPFLNews.channel = channelModel.getChannel();

    // Render Main View
    var mainView = new EPFLNews.MainView();
    mainView.render();

    // Render panel
    mainView.updatePanel();

    var url = 'https://actu.epfl.ch/api/jahia/channels/' + EPFLNews.channel +
      '/news/' + EPFLNews.language + '/';
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
