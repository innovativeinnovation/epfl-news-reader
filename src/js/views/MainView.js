/*
 * (c) All rights reserved. ECOLE POLYTECHNIQUE FEDERALE DE LAUSANNE,
 * Switzerland, VPSI, 2017.
 * See the LICENSE file for more details.
 */

(function($$) {
  'use strict';

  EPFLNews.MainView = function(data) {
    this.data = JSON.parse(data);
    var newsBlock = this.buildListNews();
    var params = {
      NEWS_BLOCK: newsBlock,
    };
    this.html = EPFLNews.Templates[
      EPFLNews.Constants.HANDLEBARS.MAIN
    ](params);
  };

  EPFLNews.MainView.prototype.buildListNews = function() {
    var newsBlocks = '';
    for (var i = 0; i < this.data.length; i++) {
      newsBlocks += EPFLNews.Templates[
        EPFLNews.Constants.HANDLEBARS.NEWS_BLOCK
      ]({
        NEWS_TITLE: this.data[i].title,
        NEWS_SUBTITLE: this.data[i].subtitle,
        NEWS_IMAGE: this.data[i].visual,
        NEWS_DATE: this.data[i].publish_date,
        BLOCK_BACK: i % 2 === 0 ? '' : 'gray-background',
      });
    }
    return newsBlocks;
  };

  EPFLNews.MainView.prototype.render = function() {
    EPFLNews.Views.viewMain.router.load({
      content: this.html,
      animatePages: false,
    });
  };

})(Dom7);
