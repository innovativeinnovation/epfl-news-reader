this["EPFLNews"] = this["EPFLNews"] || {};
this["EPFLNews"]["Templates"] = this["EPFLNews"]["Templates"] || {};

Handlebars.registerPartial("navbar", Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"navbar\">\n  <div class=\"navbar-inner\">\n    <div class=\"center\">EPFL News</div>\n    <div class=\"right\">\n      <a href=\"#\" class=\"open-panel link icon-only\">\n        <i class=\"icon icon-bars\"></i>\n      </a>\n    </div>\n  </div>\n</div>\n";
},"useData":true}));

this["EPFLNews"]["Templates"]["src/templates/full/main.hbs"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    return "<div class=\"view view-main tab active\">\n  <div class=\"navbar\">\n    <div class=\"navbar-inner\">\n      <div class=\"center sliding\">EPFL News</div>\n    </div>\n  </div>\n  <div class=\"pages navbar-through\"></div>\n</div>\n";
},"useData":true});