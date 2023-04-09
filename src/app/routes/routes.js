const bookRoutes = require('./bookRoutes');
const homeRoutes = require('./homeRoutes');

module.exports = (app) => {
  bookRoutes(app);
  homeRoutes(app);
};
