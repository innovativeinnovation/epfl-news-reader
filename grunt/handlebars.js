/*
 * Original work (c) ECOLE POLYTECHNIQUE FEDERALE DE LAUSANNE, Switzerland,
 * VPSI, 2017-2018.
 * Modified work (c) William Belle, 2018.
 * See the LICENSE file for more details.
 */

module.exports = {
  options: {
    namespace: 'EPFLNews.Templates',
  },

  build: {
    files: {
      'www/js/templates/all.js': ['src/templates/**/*.hbs'],
    },
  },

  release: {
    files: {
      'build/js/templates/all.js': ['src/templates/**/*.hbs'],
    },
  },
};
