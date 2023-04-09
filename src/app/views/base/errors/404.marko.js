// Compiled using marko@4.23.4 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/igorsbookstore$1.0.0/src/app/views/base/errors/404.marko",
    marko_renderer = require("marko/src/runtime/components/renderer"),
    marko_loadTag = require("marko/src/runtime/helpers/load-tag"),
    init_components_tag = marko_loadTag(require("marko/src/core-tags/components/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/core-tags/core/await/reorderer-renderer")),
    _preferred_script_location_tag = marko_loadTag(require("marko/src/core-tags/components/preferred-script-location-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<html><head><meta charset=utf-8><link rel=stylesheet href=/static/css/bootstrap.min.css><link rel=stylesheet href=/static/css/fontawesome.min.css><link rel=stylesheet href=/static/css/casadocodigo.css></head><body><header class=cabecalhoPrincipal><div class=container><div class=\"row align-items-center\"><div class=col-8><h2 class=logo style=\"color: #fff\">Bookstore - Not found</h2></div><div class=\"cabecalhoPrincipal-navegacao col-4\"><a href=/login class=login>Login</a></div></div></div></header><main class=conteudoPrincipal><div class=container><p>Page it was not found!</p><a href=/ >Please, come back</a></div></main>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "18");

  _preferred_script_location_tag({}, out);

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.meta = {
    id: "/igorsbookstore$1.0.0/src/app/views/base/errors/404.marko",
    tags: [
      "marko/src/core-tags/components/init-components-tag",
      "marko/src/core-tags/core/await/reorderer-renderer",
      "marko/src/core-tags/components/preferred-script-location-tag"
    ]
  };
