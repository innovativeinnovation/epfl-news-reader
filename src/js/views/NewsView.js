/*
 * (c) All rights reserved. ECOLE POLYTECHNIQUE FEDERALE DE LAUSANNE,
 * Switzerland, VPSI, 2017.
 * See the LICENSE file for more details.
 */

(function($$) {
  'use strict';

  EPFLNews.NewsView = function(id) {
    this.html = EPFLNews.Templates[
      EPFLNews.Constants.HANDLEBARS.NEWS
    ]({
      NEWS_IMAGE: EPFLNews.data[id].visual,
      NEWS_TITLE: EPFLNews.data[id].title,
      NEWS_DESC: EPFLNews.data[id].text,
      NEWS_DATE: EPFLNews.data[id].publish_date,
      left: true,
    });
  };

  EPFLNews.NewsView.prototype.buildNews = function() {
    for (var i = 0; i < 1; i++) {
      var news = '';
      news += EPFLNews.Templates[
        EPFLNews.Constants.HANDLEBARS.NEWS
      ]();
      EPFLNews.Views.viewMain.router.load({
        content: news,
        animatePages: false,
      });
    }
  };

  EPFLNews.NewsView.prototype.render = function() {
    EPFLNews.Views.viewMain.router.load({
      content: this.html,
      animatePages: false,
    });
  };

})(Dom7);
