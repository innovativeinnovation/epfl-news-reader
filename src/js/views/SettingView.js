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
      LANGUAGE_OPTIONS: this.buildLanguageOptions(),
    });
  };

  EPFLNews.SettingView.prototype.render = function() {
    EPFLNews.Views.viewMain.router.load({
      content: this.html,
      animatePages: false,
    });
  };

  EPFLNews.SettingView.prototype.buildLanguageOptions = function() {
    var optionHtml = '';
    for (var key in EPFLNews.Constants.SUPPORTED_LANGUAGE) {
      if (EPFLNews.Constants.SUPPORTED_LANGUAGE.hasOwnProperty(key)) {
        optionHtml += '<option value="' + key + '" ';
        if (EPFLNews.language === key) {
          optionHtml += 'selected';
        }
        optionHtml += '>';
        optionHtml += EPFLNews.Constants.SUPPORTED_LANGUAGE[key];
        optionHtml += '</option>';
      }
    }
    return optionHtml;
  };

})(Dom7);
