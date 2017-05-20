/*
 * (c) ECOLE POLYTECHNIQUE FEDERALE DE LAUSANNE, Switzerland, VPSI, 2017.
 * See the LICENSE file for more details.
 */

module.exports = {
  build: {
    options: {
      patterns: [{
        match: /'<FILES_TO_CACHE>'/g,
        replacement:  [
          '/',
          '/index.html',
          '/css/framework7.material.min.css',
          '/css/app.css',
          '/js/framework7.min.js',
          '/js/handlebars.runtime.min.js',
          '/js/templates/all.js',
          '/js/utils/Constants.js',
          '/js/utils/Events.js',
          '/js/controllers/MainController.js',
          '/js/views/MainView.js',
          '/js/views/NewsView.js',
          '/js/app.js',
        ],
      },],
    },
    files: [{
      expand: true,
      flatten: true,
      src: ['src/service-worker.js'],
      dest: 'www/',
    },],
  },
  release: {
    options: {
      patterns: [{
        match: /'<FILES_TO_CACHE>'/g,
        replacement:  [
          '/epfl-news-reader/',
          '/epfl-news-reader/index.html',
          '/epfl-news-reader/css/framework7.material.min.css',
          '/epfl-news-reader/css/app.css',
          '/epfl-news-reader/js/framework7.min.js',
          '/epfl-news-reader/js/handlebars.runtime.min.js',
          '/epfl-news-reader/js/templates/all.js',
          '/epfl-news-reader/js/utils/Constants.js',
          '/epfl-news-reader/js/utils/Events.js',
          '/epfl-news-reader/js/controllers/MainController.js',
          '/epfl-news-reader/js/views/MainView.js',
          '/epfl-news-reader/js/views/NewsView.js',
          '/epfl-news-reader/js/app.js',
        ],
      },],
    },
    files: [{
      expand: true,
      flatten: true,
      src: ['src/service-worker.js'],
      dest: 'www/',
    },],
  },
};
