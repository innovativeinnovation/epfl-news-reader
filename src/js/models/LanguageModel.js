/*
 * (c) ECOLE POLYTECHNIQUE FEDERALE DE LAUSANNE, Switzerland, VPSI, 2017-2018.
 * See the LICENSE file for more details.
 */

(function() {
  'use strict';

  /**
   * Model for app language
   *
   * @class LanguageModel
   * @constructor
   */
  EPFLNews.LanguageModel = function() {
    // Call the parent constructor
    EPFLNews.StorageModel.call(this, 'EPFLNews-Language');
  };

  // Create object that inherits from AnatomyQuiz.StorageModel
  EPFLNews.LanguageModel.prototype = Object.create(
    EPFLNews.StorageModel.prototype
  );

  /**
   * Get language
   *
   * @method getLanguage
   * @return {String} returns the app language ('en', 'fr')
   */
  EPFLNews.LanguageModel.prototype.getLanguage = function() {
    if (this.enabled) {
      var language = this.get(this.key);
      if (language === null) {
        language = this.getNavigatorLanguage();
        language = this.getDefaultLanguage(language);
        this.set(language);
      }
      return language;
    }
    return this.getDefaultLanguage(undefined);
  };

  /**
   * Get browser language
   *
   * @method getNavigatorLanguage
   * @return {String} returns the browser language ('en', 'fr')
   */
  EPFLNews.LanguageModel.prototype.getNavigatorLanguage = function() {
    var navLang = navigator.language || navigator.userLanguage;
    var language = navLang.substring(0, 2);
    return language;
  };

  /**
   * Get the best language that the app supports based on browser language
   *
   * @method getDefaultLanguage
   * @param  language
   * @return {String} returns the app language ('en', 'fr')
   */
  EPFLNews.LanguageModel.prototype.getDefaultLanguage = function(language) {
    var supportedLanguage = Object.keys(
      EPFLNews.Constants.SUPPORTED_LANGUAGE
    );
    if (supportedLanguage.indexOf(language) >= 0) {
      return language;
    }
    return EPFLNews.Constants.DEFAULT_LANGUAGE;
  };

})();
