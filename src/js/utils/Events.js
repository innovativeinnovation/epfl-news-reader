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
        var view = new EPFLNews.AboutView();
        view.render();
      });
    },

    onClickSetting: function() {
      $$(document).on('click', '.settingLink', function() {
        var view = new EPFLNews.SettingView();
        view.render();
      });
    },

    /**
     * When we select a new language (from settings)
     *
     * @method onChangeLanguage
     * @static
     */
    onChangeLanguage: function() {
      $$(document).on('change', '.select-language', function(event) {
        var languageController = new EPFLNews.LanguageController();
        languageController.changeLanguage(
          $$(this).find('option:checked').val()
        );
        return false;
      });
    },

    /**
     * When we select a new channel (from settings)
     *
     * @method onChangeChannel
     * @static
     */
    onChangeChannel: function() {
      $$(document).on('change', '.select-channel', function(event) {
        var channelController = new EPFLNews.ChannelController();
        channelController.changeChannel(
          $$(this).find('option:checked').val()
        );
        return false;
      });
    },

  };

})(Dom7);
