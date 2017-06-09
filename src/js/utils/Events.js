/*
 * (c) ECOLE POLYTECHNIQUE FEDERALE DE LAUSANNE, Switzerland, VPSI, 2017.
 * See the LICENSE file for more details.
 */

(function($$) {
  'use strict';

  EPFLNews.Events = {

    onClickNews: function() {
      $$(document).on('click', '.newsLink', function() {
        var view = new EPFLNews.NewsView($$(this).attr('news-index'));
        view.render();
        view.addExternalLinkClass();
      });
    },

    onClickAbout: function() {
      $$(document).on('click', '.aboutLink', function() {
        var view = new EPFLNews.AboutView($$(this).attr('news-index'));
        view.render();
      });
    },
  };

})(Dom7);
