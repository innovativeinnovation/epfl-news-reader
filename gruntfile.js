/*
 * (c) All rights reserved. ECOLE POLYTECHNIQUE FEDERALE DE LAUSANNE,
 * Switzerland, VPSI, 2017.
 * See the LICENSE file for more details.
 */

module.exports = function(grunt) {
  'use strict';

  require('load-grunt-config')(grunt, {
    data: {
      pkg: grunt.file.readJSON('package.json'),
    },
  });
};
