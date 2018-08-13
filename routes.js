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
	app.get('/api/user/remove/id/', userDelete.deleteOneUserById),
	app.get('/api/user/remove/auth0/', userDelete.deleteOneUserByAuth0),
	//BATTLETAG POST
	app.post('/api/battletag/create/', battletagPost.createBattletag),
	//BATTLETAG GET
	//one
	app.get('/api/battletag/id/', battletagGet.getOneBattletagById),
	//multi
	app.get('/api/battletags/all/', battletagGet.getAllBattletags),
	app.get('/api/battletags/id/', battletagGet.getUserBattletagsByUserId),
	app.get('/api/battletags/auth0/', battletagGet.getUserBattletagsByAuth0),
	//BATTLETAG DELETE
	//one
	app.get('/api/battletags/remove/id/', battletagDelete.deleteOneBattletagById),
	//multi
	app.get('/api/battletags/remove/all', battletagDelete.deleteAllBattletags),
	app.get('/api/battletags/remove/auth0/', battletagDelete.deleteUserBattletagsByAuth0)
}

module.exports = routes