/*
 * (c) All rights reserved. ECOLE POLYTECHNIQUE FEDERALE DE LAUSANNE,
 * Switzerland, VPSI, 2017.
 * See the LICENSE file for more details.
 */

(function($$) {
  'use strict';

  EPFLNews.MainView = function() {
    this.html = EPFLNews.Templates[
      EPFLNews.Constants.HANDLEBARS.MAIN
    ]({
      home: true,
    });
  };

  EPFLNews.MainView.prototype.updateListNews = function(data) {
    EPFLNews.data = data;
    var newsBlock = this.buildListNews(data);
    $$('#news-block-container').html(newsBlock);
  };

  EPFLNews.MainView.prototype.buildListNews = function(newsList) {
    var newsBlocks = '';
    for (var i = 0; i < newsList.length; i++) {
      newsBlocks += EPFLNews.Templates[
        EPFLNews.Constants.HANDLEBARS.NEWS_BLOCK
      ]({
        NEWS_INDEX: i,
        NEWS_TITLE: newsList[i].title,
        NEWS_SUBTITLE: newsList[i].subtitle,
        NEWS_IMAGE: newsList[i].news_visual_absolute_url,
        NEWS_DATE: EPFLNews.Utils.formatDate(newsList[i].publish_date),
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
