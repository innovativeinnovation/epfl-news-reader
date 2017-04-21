

(function() {
  'use strict';

  EPFLNews.AbstractView = function(page) {
    this.params = EPFLNews.LangUtil.buildHandlebarsParameter(
      page.params,
      EPFLNews.App.device.language
    );
    this.view = page.view;
    this.animate = page.animate;

    this.setNavBarTitle(page.title);
    this.updateParams();
    this.html = EPFLNews.Templates[page.template](this.params);
  };

  EPFLNews.AbstractView.prototype.render = function() {
    EPFLNews.Views[this.view].router.load({
      content: this.html,
      animatePages: this.animate,
    });
  };

  EPFLNews.AbstractView.prototype.setNavBarTitle = function(title) {
    this.params.NAVBAR_TITLE = EPFLNews.LangUtil.getValue(
      title,
      EPFLNews.App.device.language
    );
  };

  EPFLNews.AbstractView.prototype.updateParams = function() {};

})();
