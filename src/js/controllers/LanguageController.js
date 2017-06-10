/*
 * (c ECOLE POLYTECHNIQUE FEDERALE DE LAUSANNE, Switzerland, VPSI, 2017.
 * See the LICENSE file for more details.
 */

(function($$) {
  'use strict';

  /**
   * Controller for changing language
   *
   * @class ChangeLanguageController
   * @constructor
   */
  EPFLNews.LanguageController = function() {};

  /**
   * Change the language of the entire interface.
   *
   * @method changeLanguage
   * @param {String} language
   */
  EPFLNews.LanguageController.prototype.changeLanguage = function(toLanguage) {

    // Get the model and set language
    var languageModel = new EPFLNews.LanguageModel();
    languageModel.set(toLanguage);
    EPFLNews.language = toLanguage;

    // Notify the user that the language is loading
    $$('.loader').show();

    // Wait 500ms before reloading app
    setTimeout(function() {
      location.reload();
    }, 2000);
  };

})(Dom7);
