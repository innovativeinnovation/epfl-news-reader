/*
 * (c) ECOLE POLYTECHNIQUE FEDERALE DE LAUSANNE, Switzerland, VPSI, 2017.
 * See the LICENSE file for more details.
 */

module.exports = {
  fileToCacheDev: {
    options: {
      patterns: [{
        match: /'<FILES_TO_CACHE>'/g,
        replacement:  [
          '/',
          '/index.html',
          '/img/favicon.ico',
          '/img/favicon.png',
          '/css/framework7.material.custom.min.css',
          '/css/app.css',
          '/js/vendors/framework7.custom.min.js',
          '/js/handlebars.runtime.min.js',
          '/js/templates/all.js',
          '/js/utils/Constants.js',
          '/js/utils/Events.js',
          '/js/utils/Utils.js',
          '/js/utils/i18n.js',
          '/js/models/abstract/StorageModel.js',
          '/js/models/LanguageModel.js',
          '/js/models/ChannelModel.js',
          '/js/controllers/MainController.js',
          '/js/controllers/LanguageController.js',
          '/js/controllers/ChannelController.js',
          '/js/views/MainView.js',
          '/js/views/NewsView.js',
          '/js/views/AboutView.js',
          '/js/views/SettingView.js',
          '/js/app.js',
        ],
      },{
        match: /<DATA_CACHE>/g,
        replacement: 'epfl-news-data-' + new Date().getTime(),
      },{
        match: /<CACHE_NAME>/g,
        replacement: 'epfl-news-' + new Date().getTime(),
      },],
    },
    files: [{
      expand: true,
      flatten: true,
      src: ['src/service-worker.js'],
      dest: 'www/',
    },],
  },
  fileToCacheProd: {
    options: {
      patterns: [{
        match: /'<FILES_TO_CACHE>'/g,
        replacement:  [
          '/epfl-news-reader/',
          '/epfl-news-reader/index.html',
          '/epfl-news-reader/img/favicon.ico',
          '/epfl-news-reader/img/favicon.png',
          '/epfl-news-reader/css/epfl-news-<%= pkg.version %>.min.css',
          '/epfl-news-reader/js/epfl-news-<%= pkg.version %>.min.js',
        ],
      },{
        match: /<DATA_CACHE>/g,
        replacement: 'epfl-news-data-<%= pkg.version %>',
      },{
        match: /<CACHE_NAME>/g,
        replacement: 'epfl-news-<%= pkg.version %>',
      },],
    },
    files: [{
      expand: true,
      flatten: true,
      src: ['src/service-worker.js'],
      dest: 'build/',
    },],
  },
  indexCssJs: {
    options: {
      patterns: [{
        match: /epfl-news.min/g,
        replacement: 'epfl-news-<%= pkg.version %>.min',
      },],
    },
    files: [{
      expand: true,
      flatten: true,
      src: ['www/index.html'],
      dest: 'www/',
    },],
  },
  manifestStartUrl: {
    options: {
      patterns: [{
        match: /\/index.html/g,
        replacement: '/epfl-news-reader/index.html',
      },],
    },
    files: [{
      expand: true,
      flatten: true,
      src: ['www/manifest.json'],
      dest: 'www/',
    },],
  },
};
