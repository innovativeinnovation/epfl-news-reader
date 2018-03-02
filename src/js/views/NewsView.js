/*
 * (c) ECOLE POLYTECHNIQUE FEDERALE DE LAUSANNE, Switzerland, VPSI, 2017-2018.
 * See the LICENSE file for more details.
 */

(function($$) {
  'use strict';

  EPFLNews.NewsView = function(id) {
    this.html = EPFLNews.Templates[
      EPFLNews.Constants.HANDLEBARS.NEWS
    ]({
      NEWS_IMAGE: EPFLNews.Utils.doublePictureSize(
        EPFLNews.data[id].news_visual_absolute_url
      ),
      NEWS_TITLE: EPFLNews.data[id].title,
      NEWS_DESC: this.cleanText(EPFLNews.data[id].text),
      NEWS_DATE: EPFLNews.Utils.prettyDate(EPFLNews.data[id].publish_date),
      NEWS_AUTHORS: EPFLNews.data[id],
      NEWS_VIDEO: EPFLNews.data[id].video,
      NEWS_URL: EPFLNews.data[id].absolute_slug,
      back: true,
      NAVBAR_TITLE: EPFLNews.data[id].title,
    });
  };

  EPFLNews.NewsView.prototype.addExternalLinkClass = function() {
    var $$links = $$('.news-text').find('a');
    for (var i = 0; i < $$links.length; i++) {
      var $$l = $$($$links[i]);
      $$l.attr('class', 'external');
      $$l.attr('target', '_blank');
    }
  };

  EPFLNews.NewsView.prototype.cleanText = function(text) {
    // Clean style
    text = text.replace(/style="[a-zA-Z0-9:;\.\s\(\)\-\,]*"/gi);
    // HTTP to HTTPS
    text = text.replace(/http:\/\//g, 'https://');

    return text;
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
