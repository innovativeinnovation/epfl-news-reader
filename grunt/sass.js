/*
 * (c) All rights reserved. ECOLE POLYTECHNIQUE FEDERALE DE LAUSANNE,
 * Switzerland, VPSI, 2017.
 * See the LICENSE file for more details.
 */

module.exports = {
  build: {
    files: [{
      expand: true,
      cwd: 'src/sass',
      src: ['**/*.sass'],
      dest: 'www/css/',
      ext: '.css',
    },],
  },
};