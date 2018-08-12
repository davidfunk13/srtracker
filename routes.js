const Controller = require('./controllers/index');

let User = Controller.User;
let Battletag = Controller.Battletag;

const routes = function (app) {
	//POST ROUTE create and store user and auth0UID
	app.post('/api/createuser/', User.createUser),
	//POST ROUTE create and store Battletag.
	app.post('/api/createbattletag/', Battletag.createBattletag),
	//GET ROUTE get all users for dev purposes
	app.get('/api/allusers/', User.getAllUsers),
	//GET ROUTE get one user
	app.get('/api/user/', User.getOneUser)
}

module.exports = routes