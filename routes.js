const applicationController = require('./controllers/applicationController');

const routes = function(app){
	app.post('/api/createuser/', applicationController.saveAccountNode),
	app.post('/api/saveseason/', applicationController.saveSeason),
	app.post('/api/savegame/', applicationController.saveGame),
	app.get('/api/getaccounts/:uid' , applicationController.getAccounts),
	app.get('/api/activeaccount/:uid' , applicationController.getActiveAccount),
	app.get('/api/activeseason/:uid' , applicationController.getActiveSeason),
	app.get('/api/deletebattletag/:uid' , applicationController.deleteAccount)

	// app.get('/api/game/:uid' , applicationController.getGames)
}

module.exports = routes