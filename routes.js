const Controller = require('./controllers/index');
//User
let userPost = Controller.User.post;
let userGet = Controller.User.get;
let userDelete = Controller.User.delete;
//Battletag
let battletagGet = Controller.Battletag.get;
let battletagDelete = Controller.Battletag.delete;
let battletagPost = Controller.Battletag.post;
//Season
let seasonGet = Controller.Season.get;
let seasonDelete = Controller.Season.delete;
let seasonPost = Controller.Season.post;
//Game
let gameGet = Controller.Game.get;
let gameDelete = Controller.Game.delete;
let gamePost = Controller.Game.post;

const routes = function (app) {

	//USER POST
	app.post('/api/user/create/', userPost.createUser),

	//USER GET
	app.get('/api/user/all/', userGet.getAllUsers),
	app.get('/api/user/id/', userGet.getOneUserbyId),

	//USER DELETE
	app.get('/api/user/remove/all/', userDelete.deleteAllUsers),
	app.get('/api/user/remove/id/', userDelete.deleteOneUserById),

	//BATTLETAG POST
	app.post('/api/battletag/create/', battletagPost.createBattletag),

	//BATTLETAG GET
	//one
	app.get('/api/battletag/:id', battletagGet.getOneBattletagById),
	//multi
	app.get('/api/battletags/all/', battletagGet.getAllBattletags),
	app.get('/api/user/battletags/id/', battletagGet.getBattletagsByUserId),

	//BATTLETAG DELETE
	//one
	app.get('/api/battletags/remove/id/', battletagDelete.deleteOneBattletagById),
	//multi
	app.get('/api/battletags/remove/all', battletagDelete.deleteAllBattletags),
	app.get('/api/battletags/remove/id/', battletagDelete.deleteBattletagsByUserId),

	// //SEASON POST
	app.post('/api/season/create/', seasonPost.createSeason),

	// //SEASON GET//
	// //one
	app.get('/api/season/:id', seasonGet.getOneSeasonById),

	//multi
	app.get('/api/seasons/:id', seasonGet.getAllSeasons),
	app.get('/api/user/battletag/seasons/id/', seasonGet.getSeasonsByBattletagId),

	// //SEASON DELETE
	// //one
	app.get('/api/user/battletag/season/remove/id/', seasonDelete.deleteOneSeasonById),
	// //multi
	app.get('/api/seasons/remove/all/', seasonDelete.deleteAllSeasons),
	app.get('/api/user/battletag/seasons/remove/all/', seasonDelete.deleteSeasonsByBattletagId),
	// //GAME
	
	// // //GAME POST
	app.post('/api/game/create/', gamePost.createGame),

	// // //GAME GET//
	// // //one
	app.get('/api/user/battletag/season/game/id/', gameGet.getOneGameById),
	// // //multi
	app.get('/api/user/battletag/season/games/seasonid/', gameGet.getGamesBySeasonId),
	// // //GAME DELETE
	app.get('/api/games/remove/all/', gameDelete.deleteAllGames),

	app.get('/api/user/battletag/season/game/remove/id', gameDelete.deleteOneGameById),
	app.get('/api/user/battletag/season/games/remove/seasonid/', gameDelete.deleteGamesbySeasonId)
}

module.exports = routes