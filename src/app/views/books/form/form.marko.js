// Compiled using marko@4.23.4 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/igorsbookstore$1.0.0/src/app/views/books/form/form.marko",
    marko_renderer = require("marko/src/runtime/components/renderer"),
    marko_forOf = require("marko/src/runtime/helpers/for-of"),
    helpers_escape_xml = require("marko/src/runtime/html/helpers/escape-xml"),
    marko_escapeXml = helpers_escape_xml.x,
    marko_attr = require("marko/src/runtime/html/helpers/attr"),
    marko_loadTag = require("marko/src/runtime/helpers/load-tag"),
    init_components_tag = marko_loadTag(require("marko/src/core-tags/components/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/core-tags/core/await/reorderer-renderer")),
    _preferred_script_location_tag = marko_loadTag(require("marko/src/core-tags/components/preferred-script-location-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<html><head><meta charset=utf-8><link rel=stylesheet href=/static/css/bootstrap.min.css><link rel=stylesheet href=/static/css/fontawesome.min.css><link rel=stylesheet href=/static/css/casadocodigo.css></head><body><header class=cabecalhoPrincipal><div class=container><div class=\"row align-items-center\"><div class=col-8><h2 class=logo style=\"color: #fff\">Bookstore - Book Registration</h2></div><div class=\"cabecalhoPrincipal-navegacao col-4\"><a href=/login class=login>Login</a></div></div></div></header><main class=conteudoPrincipal><div class=container>");

  if (data.errorsValidation) {
    out.w("<div>");

    var $for$0 = 0;

    marko_forOf(data.errorsValidation, function(error) {
      var $keyScope$0 = "[" + (($for$0++) + "]");

      out.w("<div class=\"alert alert-danger\">" +
        marko_escapeXml(error.param) +
        " - " +
        marko_escapeXml(error.msg) +
        "</div>");
    });

    out.w("</div>");
  }

  out.w("<form action=/books/form method=post><br>");

  if (data.book.id) {
    out.w("<div><input type=hidden name=_method value=PUT><input type=hidden name=id" +
      marko_attr("value", data.book.id) +
      "></div>");
  }

  out.w("<div class=form-group><label for=title>Title:</label><input type=text id=title name=title" +
    marko_attr("value", data.book.title) +
    " placeholder=\"Harry Potter and the Pholosopher's Stone\" class=form-control></div><div class=form-group><label for=price>Price:</label><input type=text id=price name=price placeholder=150.25" +
    marko_attr("value", data.book.price) +
    " class=form-control></div><div class=form-group><label for=description>Description:</label><textarea cols=20 rows=10 id=description name=description placeholder=\"Harry Potter, a lonely orphan who discovers that he is actually a wizard...\" class=form-control>" +
    marko_escapeXml(data.book.description) +
    "</textarea></div><input type=submit value=Submit class=\"btn btn-outline-danger\"></form></div></main>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "33");

  _preferred_script_location_tag({}, out);

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.meta = {
    id: "/igorsbookstore$1.0.0/src/app/views/books/form/form.marko",
    tags: [
      "marko/src/core-tags/components/init-components-tag",
      "marko/src/core-tags/core/await/reorderer-renderer",
      "marko/src/core-tags/components/preferred-script-location-tag"
    ]
  };
