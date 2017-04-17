/*
 * (c) All rights reserved. ECOLE POLYTECHNIQUE FEDERALE DE LAUSANNE,
 * Switzerland, VPSI, 2017.
 * See the LICENSE file for more details.
 */

(function($$) {
  'use strict';

  EPFLNews.Events = {

    onClickNews: function() {
      $$(document).on('click', '.newsLink', function() {
        console.log('click');
        var view = new EPFLNews.NewsView($$(this).attr('news-index'));
        view.render();
      });
    },
  };

})(Dom7);
