// allows Marko templates rendered on the server-side
require('marko/node-require').install();

// response to http request
require('marko/express');

const express = require('express');
const app = express();
const template = require('../app/views/templates');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');

app.use('/static', express.static('src/app/public'));
app.use(
	bodyParser.urlencoded({
		extended: true,
	})
);
app.use(
  methodOverride(function (req, res) {
    if (req.body && typeof req.body === 'object' && '_method' in req.body) {
      // look in urlencoded POST bodies and delete it
      var method = req.body._method;
      delete req.body._method;
      return method;
    }
  })
);

const sessionAuthentication = require('./sessao-autenticacao');
sessionAuthentication(app);

const routes = require('../app/routes/routes');
routes(app);
// not found
app.use((req, res, next) => res.status(404).marko(template.base.erro404));
// internal server error
app.use((error, req, res, next) => res.status(500).marko(template.base.erro500));


module.exports = app;


