/*
 * (c) All rights reserved. ECOLE POLYTECHNIQUE FEDERALE DE LAUSANNE,
 * Switzerland, VPSI, 2017.
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
};
