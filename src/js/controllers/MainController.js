/*
 * (c) All rights reserved. ECOLE POLYTECHNIQUE FEDERALE DE LAUSANNE,
 * Switzerland, VPSI, 2017.
 * See the LICENSE file for more details.
 */

(function($$) {
  'use strict';

  EPFLNews.MainController = function() {};

  EPFLNews.MainController.prototype.init = function() {

    var url = 'https://actu.epfl.ch/feeds/json/';
    var params = {
      channel: 'mediacom',
      len: 10,
      lang: 'en',
    };

    $$.get(url, params, function(data) {

      // Render Main View
      var mainView = new EPFLNews.MainView(data);
      mainView.render();
    });

  };

})(Dom7);
