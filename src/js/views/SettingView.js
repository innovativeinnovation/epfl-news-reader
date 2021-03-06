/*
 * Original work (c) ECOLE POLYTECHNIQUE FEDERALE DE LAUSANNE, Switzerland,
 * VPSI, 2017-2018.
 * Modified work (c) William Belle, 2018-2021.
 * See the LICENSE file for more details.
 */

'use strict';

(function ($$) {
  EPFLNews.SettingView = function () {
    this.html = EPFLNews.Templates[EPFLNews.Constants.HANDLEBARS.SETTING]({
      back: true,
      NAVBAR_TITLE: EPFLNews.i18n[EPFLNews.language].MENU_SETTING,
      LANGUAGE_OPTIONS: this.buildLanguageOptions(),
      SETTING_LANGUAGE: EPFLNews.i18n[EPFLNews.language].SETTING_LANGUAGE,
      SETTING_LANGUAGE_TITLE:
        EPFLNews.i18n[EPFLNews.language].SETTING_LANGUAGE_TITLE,
      SETTING_CHANNEL: EPFLNews.i18n[EPFLNews.language].SETTING_CHANNEL,
      SETTING_CHANNEL_TITLE:
        EPFLNews.i18n[EPFLNews.language].SETTING_CHANNEL_TITLE,
      CHANNEL_OPTIONS: this.buildChannelOptions()
    });
  };

  EPFLNews.SettingView.prototype.render = function () {
    EPFLNews.Views.viewMain.router.load({
      content: this.html,
      animatePages: false
    });
  };

  EPFLNews.SettingView.prototype.buildLanguageOptions = function () {
    var optionHtml = '';
    for (var key in EPFLNews.Constants.SUPPORTED_LANGUAGE) {
      if (Object.prototype.hasOwnProperty.call(
        EPFLNews.Constants.SUPPORTED_LANGUAGE,
        key)) {
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

  EPFLNews.SettingView.prototype.buildChannelOptions = function () {
    var optionHtml = '';
    var lg = EPFLNews.language;
    for (var i = 0; i < EPFLNews.Constants.SUPPORTED_CHANNEL.length; i++) {
      optionHtml += '<option value="' +
        EPFLNews.Constants.SUPPORTED_CHANNEL[i] + '" ';
      if (EPFLNews.channel === EPFLNews.Constants.SUPPORTED_CHANNEL[i]) {
        optionHtml += 'selected';
      }
      optionHtml += '>';
      optionHtml += EPFLNews.i18n[lg][EPFLNews.Constants.SUPPORTED_CHANNEL[i]];
      optionHtml += '</option>';
    }
    return optionHtml;
  };
})(Dom7);
