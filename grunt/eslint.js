/*
 * (c) ECOLE POLYTECHNIQUE FEDERALE DE LAUSANNE, Switzerland, VPSI, 2018.
 * Modified work (c) William Belle, 2018-2020.
 * See the LICENSE file for more details.
 */

'use strict';

module.exports = {
  options: {
    configFile: '.eslintrc.json'
  },
  target: [
    '**/*.js',
    '!node_modules/**/*.js',
    '!src/js/vendors/**',
    '!www/**/*.js'
  ]
};
