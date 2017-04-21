/*
 * (c) All rights reserved. ECOLE POLYTECHNIQUE FEDERALE DE LAUSANNE,
 * Switzerland, VPSI, 2017.
 * See the LICENSE file for more details.
 */

(function(Framework7, $$) {
  'use strict';

  var epflNews = {

    // Init App
    initialize: function() {
      console.log('INFO: init Framework7');

      // Init Framework7 App
      EPFLNews.App = new Framework7({
        modalTitle: 'EPFL News',
        material:   true,
      });

      // Add main view
      EPFLNews.Views.viewMain = EPFLNews.App.addView('.view-main', {
        dynamicNavbar: true,
      });

      if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('./service-worker.js')
          .then(function() {
            console.log('INFO: ServiceWorker registered');
          });
      }

      this.bindEvents();
      this.render();
    },

    bindEvents: function() {
      EPFLNews.Events.onClickNews();
    },

    render: function() {
      var mainController = new EPFLNews.MainController();
      mainController.init();
    },
  };

  // Entry point
  epflNews.initialize();

})(Framework7, Dom7);
