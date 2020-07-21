/*
 * Original work (c) ECOLE POLYTECHNIQUE FEDERALE DE LAUSANNE, Switzerland,
 * VPSI, 2017-2018.
 * Modified work (c) William Belle, 2018-2020.
 * See the LICENSE file for more details.
 */

'use strict';

module.exports = {
  build: {
    files: [{
      expand: true,
      cwd: 'src/sass',
      src: ['**/*.sass'],
      dest: 'www/css/',
      ext: '.css'
    }]
  },
  release: {
    options: {
      sourcemap: 'none'
    },
    files: [{
      expand: true,
      cwd: 'src/sass',
      src: ['**/*.sass'],
      dest: 'build/css/',
      ext: '.css'
    }]
  }
};
