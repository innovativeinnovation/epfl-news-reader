/*
 * Original work (c) ECOLE POLYTECHNIQUE FEDERALE DE LAUSANNE, Switzerland,
 * VPSI, 2017-2018.
 * Modified work (c) William Belle, 2018-2019.
 * See the LICENSE file for more details.
 */

'use strict';

(function ($$) {
  EPFLNews.MainView = function () {
    this.html = EPFLNews.Templates[EPFLNews.Constants.HANDLEBARS.MAIN]({
      home: true,
      NAVBAR_TITLE: EPFLNews.i18n[EPFLNews.language].APP_TITLE +
        ' - ' + EPFLNews.i18n[EPFLNews.language][EPFLNews.channel]
    });
  };

  EPFLNews.MainView.prototype.updateListNews = function (data) {
    EPFLNews.data = data;
    var newsBlock = this.buildListNews(data);
    $$('#news-block-container').html(newsBlock);
  };

  EPFLNews.MainView.prototype.updatePanel = function (data) {
    var html = EPFLNews.Templates[EPFLNews.Constants.HANDLEBARS.PANEL]({
      MENU_ABOUT: EPFLNews.i18n[EPFLNews.language].MENU_ABOUT,
      MENU_SETTING: EPFLNews.i18n[EPFLNews.language].MENU_SETTING
    });
    $$('#panel-content').html(html);
  };

  EPFLNews.MainView.prototype.buildListNews = function (newsList) {
    var newsBlocks = '';
    for (var i = 0; i < newsList.length; i++) {
      newsBlocks +=
        EPFLNews.Templates[EPFLNews.Constants.HANDLEBARS.NEWS_BLOCK]({
          NEWS_INDEX: i,
          NEWS_TITLE: newsList[i].title,
          NEWS_SUBTITLE: this.cleanSubtitle(newsList[i].subtitle),
          NEWS_IMAGE: EPFLNews.Utils.doublePictureSize(
            newsList[i].news_visual_absolute_url
          ),
          NEWS_DATE: EPFLNews.Utils.prettyDate(newsList[i].publish_date),
          BLOCK_BACK: i % 2 === 0 ? '' : 'gray-background'
        });
    }
    return newsBlocks;
  };

  EPFLNews.MainView.prototype.cleanSubtitle = function (subtitle) {
    var text = this.removeTag(subtitle);
    text = this.trimToLength(text, EPFLNews.Constants.SUBTITLE_SIZE);
    return this.createParagraph(text);
  };

  EPFLNews.MainView.prototype.trimToLength = function (text, length) {
    return text.length > length
      ? text.substring(0, length - 3) + '... »'
      : text.substring(0, length);
  };

  EPFLNews.MainView.prototype.removeTag = function (html) {
    return $$('<p>').html(html).text();
  };

  EPFLNews.MainView.prototype.createParagraph = function (text) {
    return '<p>' + text + '</p>';
  };

  EPFLNews.MainView.prototype.render = function () {
    EPFLNews.Views.viewMain.router.load({
      content: this.html,
      animatePages: false
    });
  };
})(Dom7);
