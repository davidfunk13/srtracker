const applicationController = require('./controllers/applicationController');

const routes = function(app){
	// //GET ROUTE retrieve and populate user by auth0UID
	// app.get('/api/user/', applicationController.getUserByAuth0),
	// //GET ROUTE retrieve and populate battletag
	// app.get('/api/battletag/', applicationController.getBattletag),
	//POST ROUTE create and store user and auth0UID
	app.post('/api/createuser/', applicationController.createUser),
	//POST ROUTE create and store Battletag.
	app.post('/api/createbattletag/', applicationController.createBattletag)
}

module.exports = routes