const Controller = require('./controllers/index');

let userPost = Controller.User.post;
let userGet = Controller.User.get;
let userDelete = Controller.User.delete;
let battletagGet = Controller.Battletag.get;
let battletagDelete = Controller.Battletag.delete;
let battletagPost = Controller.Battletag.post;

const routes = function (app) {
	//USER POST
	app.post('/api/user/create/', userPost.createUser),
	//USER GET
	app.get('/api/user/all/', userGet.getAllUsers),
	app.get('/api/user/id/', userGet.getOneUserbyId),
	app.get('/api/user/auth0/', userGet.getOneUserbyAuth0),
	//USER DELETE
	app.get('/api/user/remove/all/', userDelete.deleteAllUsers),
	app.get('/api/user/remove/id/', userDelete.deleteOneUserByID),
	app.get('/api/user/remove/auth0/', userDelete.deleteOneUserByAuth0),
	//BATTLETAG POST
	app.post('/api/battletag/create/', battletagPost.createBattletag),
	//BATTLETAG GET
	app.get('/api/battletag/all/', battletagGet.getAllBattletags),
	app.get('/api/battletag/id/', battletagGet.getOneBattletagById),
	app.get('/api/battletag/auth0/', battletagGet.getOneBattletagByAuth0),
	//BATTLETAG DELETE
	app.get('/api/battletag/remove/all', battletagDelete.deleteAllBattletags),
	app.get('/api/battletag/remove/auth0/', battletagDelete.deleteOneBattletagByAuth0),
	app.get('/api/battletag/remove/id/', battletagDelete.deleteOneBattletagById)
}

module.exports = routes