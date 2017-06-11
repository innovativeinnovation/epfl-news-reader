/*
 * (c) ECOLE POLYTECHNIQUE FEDERALE DE LAUSANNE, Switzerland, VPSI, 2017.
 * See the LICENSE file for more details.
 */

(function($$) {
  'use strict';

  EPFLNews.AboutView = function() {
    this.html = EPFLNews.Templates[
      EPFLNews.Constants.HANDLEBARS.ABOUT
    ]({
      back: true,
      NAVBAR_TITLE: EPFLNews.i18n[EPFLNews.language].MENU_ABOUT,
      ABOUT_TEXT:  EPFLNews.i18n[EPFLNews.language].ABOUT_TEXT,
      APP_VERSION: EPFLNews.version,
    });
  };

  EPFLNews.AboutView.prototype.render = function() {
    EPFLNews.Views.viewMain.router.load({
      content: this.html,
      animatePages: false,
    });
  };

})(Dom7);
