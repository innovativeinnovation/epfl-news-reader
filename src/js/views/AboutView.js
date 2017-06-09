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
    });
  };

  EPFLNews.AboutView.prototype.render = function() {
    EPFLNews.Views.viewMain.router.load({
      content: this.html,
      animatePages: false,
    });
  };

})(Dom7);
