const applicationController = require('./controllers/applicationController');

const routes = function(app){
	app.post('/api/createuser/', applicationController.saveAccountNode),
	app.get('/api/getaccounts/:uid' , applicationController.getAccounts),
	// app.get('/api/selectaccount/:id' , applicationController.findOne),
	app.post('/api/saveseason/', applicationController.saveSeason),
	app.get('/api/getseasons/:id' , applicationController.getSeasons)
}

module.exports = routes