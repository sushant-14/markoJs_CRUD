const template = require('../views/templates');
const BookController = require('./bookController');

class HomeController {
  static routes() {
    return {
      home: '/',
      login: '/login',
    };
  }

  home() {
    return (req, res) => {
      res.marko(template.base.home);
    };
  }

  login() {
    return (req, res) => {
      res.marko(template.base.login);
    };
  }

  requestLogin() {
    return function (req, resp, next) {
      const passport = req.passport;
      passport.authenticate('local', (error, user, info) => {
        if (info) {
          return resp.marko(template.base.login);
        }

        if (error) {
          return next(error);
        }

        req.login(user, (error) => {
          if (error) {
            return next(error);
          }
          return resp.redirect(BookController.routes().books);
        });
      })(req, resp, next);
    };
  }
}

module.exports = HomeController;
