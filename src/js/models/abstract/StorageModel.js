/*
 * Original work (c) ECOLE POLYTECHNIQUE FEDERALE DE LAUSANNE, Switzerland,
 * VPSI, 2017-2018.
 * Modified work (c) William Belle, 2018-2021.
 * See the LICENSE file for more details.
 */

'use strict';

(function () {
  /**
   * Model for localStorage wrapper
   *
   * @class StorageModel
   * @constructor
   */
  EPFLNews.StorageModel = function (key) {
    this.key = key;
    this.enabled = this.isLocalStorageSupported();
  };

  /**
   * Store a value
   *
   * @method set
   * @param {String} value
   */
  EPFLNews.StorageModel.prototype.set = function (value) {
    if (this.enabled) {
      localStorage.setItem(this.key, value);
    }
  };

  /**
   * Read a value
   *
   * @method get
   * @return {String} returns the string value
   */
  EPFLNews.StorageModel.prototype.get = function () {
    if (this.enabled) {
      return localStorage.getItem(this.key);
    }
  };

  /**
   * Delete a value
   *
   * @method remove
   */
  EPFLNews.StorageModel.prototype.remove = function () {
    if (this.enabled) {
      localStorage.removeItem(this.key);
    }
  };

  /**
   * Detect localStorage
   *
   * @return {Boolean} returns true if localStorage is supported
   */
  EPFLNews.StorageModel.prototype.isLocalStorageSupported = function () {
    try {
      localStorage.setItem('foobar', 'foobar');
      localStorage.removeItem('foobar');
      return true;
    } catch (e) {
      return false;
    }
  };
})();
