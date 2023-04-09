const BookController = require('../controllers/bookController');
const bookController = new BookController();
const bookRoutes = BookController.routes();

const HomeController = require('../controllers/homeController');

const Book = require('../model/book');

module.exports = (app) => {
	app.use(bookRoutes.authenticated, function (req, resp, next) {
    if (req.isAuthenticated()) {
      next();
    } else {
      resp.redirect(HomeController.routes().login);
    }
  });

	app
		.route(bookRoutes.form)
			.get(bookController.form())
			.post(Book.validations(), bookController.insert())
			.put(bookController.update());

	app.get(bookRoutes.edit, bookController.editForm());
	app.get(bookRoutes.books, bookController.list());
	app.delete(bookRoutes.delete, bookController.remove());
};
