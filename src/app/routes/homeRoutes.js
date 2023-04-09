const HomeController = require('../controllers/homeController');
const homeController = new HomeController();
const homeRoutes = HomeController.routes();

module.exports = app => {
	app.get(homeRoutes.home, homeController.home());
	app
	.route(homeRoutes.login)
	.get(homeController.login())
	.post(homeController.requestLogin());
}


