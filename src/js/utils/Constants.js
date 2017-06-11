/*
 * (c) ECOLE POLYTECHNIQUE FEDERALE DE LAUSANNE, Switzerland, VPSI, 2017.
 * See the LICENSE file for more details.
 */

(function() {
  'use strict';

  EPFLNews.Constants = {

    DEFAULT_LANGUAGE: 'en',
    SUPPORTED_LANGUAGE: {
      en: 'English',
      fr: 'Français',
    },

    DEFAULT_CHANNEL: 'mediacom',
    SUPPORTED_CHANNEL: [
      'cdh',
      'cdm',
      'enac',
      'ic',
      'mediacom',
      'sb',
      'sti',
      'sv',
    ],

    SUBTITLE_SIZE: 150,

    HANDLEBARS: {
      MAIN: 'src/templates/full/main.hbs',
      NEWS: 'src/templates/full/news.hbs',
      NEWS_BLOCK: 'src/templates/full/news-block.hbs',
      ABOUT: 'src/templates/full/about.hbs',
      SETTING: 'src/templates/full/setting.hbs',
      PANEL: 'src/templates/full/panel.hbs',
    },

  };

})();
