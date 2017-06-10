/*
 * (c) ECOLE POLYTECHNIQUE FEDERALE DE LAUSANNE, Switzerland, VPSI, 2017.
 * See the LICENSE file for more details.
 */

(function($$) {
  'use strict';

  EPFLNews.SettingView = function() {
    this.html = EPFLNews.Templates[
      EPFLNews.Constants.HANDLEBARS.SETTING
    ]({
      back: true,
      NAVBAR_TITLE: 'Settings',
    });
  };

  EPFLNews.SettingView.prototype.render = function() {
    EPFLNews.Views.viewMain.router.load({
      content: this.html,
      animatePages: false,
    });
  };

})(Dom7);
