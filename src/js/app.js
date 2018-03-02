/*
 * (c) ECOLE POLYTECHNIQUE FEDERALE DE LAUSANNE, Switzerland, VPSI, 2017-2018.
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
        swipeout: false,
        pushState:  false,
        pushStateSeparator: '#page/',
        animatePages: false,
        imagesLazyLoadPlaceholder: 'img/no-image.png',
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
      EPFLNews.Events.onClickAbout();
      EPFLNews.Events.onClickShare();
      EPFLNews.Events.onClickSetting();
      EPFLNews.Events.onChangeChannel();
      EPFLNews.Events.onChangeLanguage();
    },

    render: function() {
      $$('#static-start-content').remove();
      var mainController = new EPFLNews.MainController();
      mainController.init();
    },
  };

  // Entry point
  epflNews.initialize();

})(Framework7, Dom7);
