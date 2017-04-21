this["EPFLNews"] = this["EPFLNews"] || {};
this["EPFLNews"]["Templates"] = this["EPFLNews"]["Templates"] || {};

Handlebars.registerPartial("navbar", Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    return "    <div class=\"left\">\n      <a href=\"index.html\" class=\"back link icon-only\">\n        <i class=\"icon icon-back\"></i>\n      </a>\n    </div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"navbar\">\n  <div class=\"navbar-inner\">\n"
    + ((stack1 = helpers["if"].call(depth0 != null ? depth0 : {},(depth0 != null ? depth0.left : depth0),{"name":"if","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "    <div class=\"center\">EPFL News</div>\n    <div class=\"right\">\n      <a href=\"#\" class=\"open-panel link icon-only\">\n        <i class=\"icon icon-bars\"></i>\n      </a>\n    </div>\n  </div>\n</div>\n";
},"useData":true}));

this["EPFLNews"]["Templates"]["src/templates/full/main.hbs"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div data-page=\"main\" class=\"page navbar-fixed\">\n"
    + ((stack1 = container.invokePartial(partials.navbar,depth0,{"name":"navbar","data":data,"indent":"  ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "  <div id=\"news-block-container\" class=\"page-content news-block\">\n  </div>\n</div>\n";
},"usePartial":true,"useData":true});

this["EPFLNews"]["Templates"]["src/templates/full/main0.hbs"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"pages\">\n  <div data-page=\"home\" class=\"page navbar-fixed\">\n"
    + ((stack1 = container.invokePartial(partials.navbar,depth0,{"name":"navbar","data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "    <div class=\"page-content\">\n      <div class=\"content-block\">\n        <a href=\"#\">\n          <div class=\"row\">\n            <div class=\"col-66\">\n              <span class=\"color-teal\">21 Mar 2017</span>\n              <h2 style=\"font-size: 1.2em; margin: 5px 0 5px 0;\">A revival in rammed-earth construction</h2>\n            </div>\n            <div class=\"col-33\">\n              <img width=\"100%\" src=\"https://actu.epfl.ch/image/52273/324x182.jpg\" />\n            </div>\n          </div>\n          <div class=\"row\">\n            <p style=\"margin: 0;color: #888;text-align:justify;\">Through an exhibition and two semester-long courses, EPFL is\n              paying tribute to a forgotten art: that of making buildings out of\n              earth. The aim is to demonstrate how this age-old technique can\n              still play a role in contemporary architecture.</p>\n          </div>\n        </a>\n        <hr style=\"display: block;height: 1px;border: 0;border-top: 1px solid #ccc;margin: 1.5em 0;padding: 0;\" />\n        <div class=\"row\">\n          <div class=\"col-66\">\n            <span class=\"color-teal\">20 Mar 2017</span>\n            <h2 style=\"font-size: 1.2em; margin: 5px 0 5px 0;\">ACE completes its voyage around Antarctica</h2>\n          </div>\n          <div class=\"col-33\">\n            <img width=\"100%\" src=\"https://actu.epfl.ch/image/52277/324x182.jpg\" />\n          </div>\n        </div>\n        <div class=\"row\">\n          <p style=\"margin: 0;color: #888;text-align:justify;\">The Antarctic Circumnavigation\n            Expedition (ACE) reached Cape Town on Sunday, 19 March, completing\n            its three-month voyage around the great white continent. But the\n            scientific adventure has only just begun: it\\u2019s now time to\n            analyze all the data that was collected. This will improve our\n            understanding of the effects of global warming on the Southern\n            Ocean and the broader implications for our planet as a whole.</p>\n        </div>\n        <hr style=\"display: block;height: 1px;border: 0;border-top: 1px solid #ccc;margin: 1.5em 0;padding: 0;\" />\n        <div class=\"row\">\n          <div class=\"col-66\">\n            <span class=\"color-teal\">17 Mar 2017</span>\n            <h2 style=\"font-size: 1.2em; margin: 5px 0 5px 0;\">European teens - especially girls - dream about cars</h2>\n          </div>\n          <div class=\"col-33\">\n            <img width=\"100%\" src=\"https://actu.epfl.ch/image/52181/324x182.jpg\" />\n          </div>\n        </div>\n        <div class=\"row\">\n          <p style=\"margin: 0;color: #888;text-align:justify;\">A study on\n            mobility patterns among young people shows that under-18s have a\n            very positive image of cars. The researchers\\u2019 approach relied\n            heavily on social media.</p>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n";
},"usePartial":true,"useData":true});

this["EPFLNews"]["Templates"]["src/templates/full/main1.hbs"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return "<div class=\"pages\">\n  <div data-page=\"home\" class=\"page navbar-fixed\">\n"
    + ((stack1 = container.invokePartial(partials.navbar,depth0,{"name":"navbar","data":data,"indent":"    ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "    <div class=\"page-content\">\n      <div class=\"content-block\" style=\"min-height: 172px; padding: 16px; margin :0;\">\n        <a href=\"#\">\n          <img style=\"float:right; padding: 0 0 10px 10px; max-width: 250px;\" width=\"33%\" src=\"https://actu.epfl.ch/image/52273/324x182.jpg\" />\n          <h2 style=\"font-size: 1.2em; margin: 5px 0 5px 0; color: #111;\">A revival in rammed-earth construction</h2>\n          <span class=\"color-teal\">21 Mar 2017</span>\n          <p style=\"margin: 10px 0 0 0;color: #888;text-align:justify;\">Through an exhibition and two semester-long courses, EPFL is\n              paying tribute to a forgotten art: that of making buildings out of\n              earth. The aim is to demonstrate how this age-old technique can\n              still play a role in contemporary architecture.\n          </p>\n        </a>\n      </div>\n      <div class=\"content-block\" style=\"background-color: #f2f2f2; padding: 16px; clear: both; min-height: 172px; margin :0;\">\n        <a href=\"#\">\n          <img style=\"float:right; padding: 0 0 10px 10px; max-width: 250px;\" width=\"33%\" src=\"https://actu.epfl.ch/image/52277/324x182.jpg\" />\n          <h2 style=\"font-size: 1.2em; margin: 5px 0 5px 0; color: #111;\">ACE completes its voyage around Antarctica</h2>\n          <span class=\"color-teal\">20 Mar 2017</span>\n          <p style=\"margin: 10px 0 0 0;color: #888;text-align:justify;\">The Antarctic Circumnavigation\n            Expedition (ACE) reached Cape Town on Sunday, 19 March, completing\n            its three-month voyage around the great white continent. But the\n            scientific adventure has only just begun: it\\u2019s now time to\n            analyze all the data that was collected. This will improve our\n            understanding of the effects of global warming on the Southern\n            Ocean and the broader implications for our planet as a whole.\n          </p>\n        </a>\n      </div>\n      <div class=\"content-block\" style=\"clear: both; min-height: 172px; padding: 16px; margin :0;\">\n        <a href=\"#\">\n          <img style=\"float:right; padding: 0 0 10px 10px; max-width: 250px;\" width=\"33%\" src=\"https://actu.epfl.ch/image/52181/324x182.jpg\" />\n          <h2 style=\"font-size: 1.2em; margin: 5px 0 5px 0; color: #111;\">European teens - especially girls - dream about cars</h2>\n          <span class=\"color-teal\">17 Mar 2017</span>\n          <p style=\"margin: 10px 0 0 0;color: #888;text-align:justify;\">\n            A study on\n            mobility patterns among young people shows that under-18s have a\n            very positive image of cars. The researchers\\u2019 approach relied\n            heavily on social media.\n          </p>\n        </a>\n      </div>\n    </div>\n  </div>\n</div>\n";
},"usePartial":true,"useData":true});

this["EPFLNews"]["Templates"]["src/templates/full/news-block.hbs"] = Handlebars.template({"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<a href=\"#\" class=\"newsLink\" news-index=\""
    + alias4(((helper = (helper = helpers.NEWS_INDEX || (depth0 != null ? depth0.NEWS_INDEX : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"NEWS_INDEX","hash":{},"data":data}) : helper)))
    + "\">\n  <div class=\"content-block "
    + alias4(((helper = (helper = helpers.BLOCK_BACK || (depth0 != null ? depth0.BLOCK_BACK : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"BLOCK_BACK","hash":{},"data":data}) : helper)))
    + "\">\n    <img src=\""
    + alias4(((helper = (helper = helpers.NEWS_IMAGE || (depth0 != null ? depth0.NEWS_IMAGE : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"NEWS_IMAGE","hash":{},"data":data}) : helper)))
    + "\" />\n    <h2>"
    + alias4(((helper = (helper = helpers.NEWS_TITLE || (depth0 != null ? depth0.NEWS_TITLE : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"NEWS_TITLE","hash":{},"data":data}) : helper)))
    + "</h2>\n    <span class=\"color-teal\">"
    + alias4(((helper = (helper = helpers.NEWS_DATE || (depth0 != null ? depth0.NEWS_DATE : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"NEWS_DATE","hash":{},"data":data}) : helper)))
    + "</span>\n    "
    + ((stack1 = ((helper = (helper = helpers.NEWS_SUBTITLE || (depth0 != null ? depth0.NEWS_SUBTITLE : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"NEWS_SUBTITLE","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n  </div>\n</a>\n";
},"useData":true});

this["EPFLNews"]["Templates"]["src/templates/full/news.hbs"] = Handlebars.template({"1":function(container,depth0,helpers,partials,data) {
    var stack1, helper, options, buffer = "";

  stack1 = ((helper = (helper = helpers.authors || (depth0 != null ? depth0.authors : depth0)) != null ? helper : helpers.helperMissing),(options={"name":"authors","hash":{},"fn":container.program(2, data, 0),"inverse":container.noop,"data":data}),(typeof helper === "function" ? helper.call(depth0 != null ? depth0 : {},options) : helper));
  if (!helpers.authors) { stack1 = helpers.blockHelperMissing.call(depth0,stack1,options)}
  if (stack1 != null) { buffer += stack1; }
  return buffer;
},"2":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "          <i class=\"fa fa-user\" aria-hidden=\"true\"></i>\n          <span>"
    + alias4(((helper = (helper = helpers.first_name || (depth0 != null ? depth0.first_name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"first_name","hash":{},"data":data}) : helper)))
    + " "
    + alias4(((helper = (helper = helpers.last_name || (depth0 != null ? depth0.last_name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"last_name","hash":{},"data":data}) : helper)))
    + "</span>\n          <br />\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1, helper, alias1=depth0 != null ? depth0 : {}, alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "<div data-page=\"news\" class=\"page navbar-fixed\">\n"
    + ((stack1 = container.invokePartial(partials.navbar,depth0,{"name":"navbar","data":data,"indent":"  ","helpers":helpers,"partials":partials,"decorators":container.decorators})) != null ? stack1 : "")
    + "  <div class=\"page-content news-content\">\n    <img src=\""
    + alias4(((helper = (helper = helpers.NEWS_IMAGE || (depth0 != null ? depth0.NEWS_IMAGE : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"NEWS_IMAGE","hash":{},"data":data}) : helper)))
    + "\" />\n    <span class=\"news-date\">"
    + alias4(((helper = (helper = helpers.NEWS_DATE || (depth0 != null ? depth0.NEWS_DATE : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"NEWS_DATE","hash":{},"data":data}) : helper)))
    + "</span>\n    <a href=\"#\">\n      <i class=\"fa fa-share-alt news-share\" aria-hidden=\"true\"></i>\n    </a>\n    <div class=\"content-block news-text\">\n      <h2>"
    + alias4(((helper = (helper = helpers.NEWS_TITLE || (depth0 != null ? depth0.NEWS_TITLE : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"NEWS_TITLE","hash":{},"data":data}) : helper)))
    + "</h2>\n      "
    + ((stack1 = ((helper = (helper = helpers.NEWS_DESC || (depth0 != null ? depth0.NEWS_DESC : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"NEWS_DESC","hash":{},"data":data}) : helper))) != null ? stack1 : "")
    + "\n      <br />\n      <div class=\"news-authors\">\n        <p><strong>Author(s)</strong></p>\n"
    + ((stack1 = helpers.each.call(alias1,depth0,{"name":"each","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "")
    + "      </center>\n    </div>\n  </div>\n</div>\n";
},"usePartial":true,"useData":true});