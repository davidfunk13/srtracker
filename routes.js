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
	app.get('/api/battletag/id/', battletagGet.getOneBattletagById),
	//multi
	app.get('/api/battletags/all/', battletagGet.getAllBattletags),
	app.get('/api/user/battletags/id/', battletagGet.getUserBattletagsByUserId),

	//BATTLETAG DELETE
	//one
	app.get('/api/battletags/remove/id/', battletagDelete.deleteOneBattletagById),
	//multi
	app.get('/api/battletags/remove/all', battletagDelete.deleteAllBattletags),
	app.get('/api/battletags/remove/id/', battletagDelete.deleteUserBattletagsByUserId),

	// //SEASON POST
	app.post('/api/user/battletag/season/create/', seasonPost.createSeason),

	// //SEASON GET//
	// //one
	app.get('/api/user/battletag/season/id/', seasonGet.getOneSeasonById),

	//multi
	app.get('/api/seasons/', seasonsGet.getAllSeasons),
	app.get('/api/user/battletag/seasons/id/', seasonGet.getBattletagsSeasonsById),

	// //SEASON DELETE
	// //one
	app.get('/api/user/battletag/season/remove/id/', seasonDelete.deleteOneSeasonById),
	// //multi
	app.get('/api/seasons/remove/all/', seasonDelete.deleteAllSeasons),
	app.get('/api/user/battletag/seasons/remove/all/', seasonDelete.deleteAllSeasonsForBattletag)
	// //GAME
	
	// //GAME POST
	// app.post('/api/user/battletag/season/game/create/', gamePost.createGame),

	// //GAME GET//
	// //one
	// app.get('/api/user/battletag/season/game/id/', gameGet.getOneGameById),
	// //multi
	// app.get('/api/user/battletag/season/games/seasonid/', gameGet.getGamesForSeasonBySeasonId),
	// //GAME DELETE
	// app.get('/api/games/remove/all/', gameDelete.removeAllGames),

	// app.get('/api/user/battletag/season/game/remove/id', gameDelete.removeOneGameById),
	// app.get('/api/user/battletag/season/games/remove/seaosnid/'. gameDelete.removeGamesBySeasonId)
}

module.exports = routes