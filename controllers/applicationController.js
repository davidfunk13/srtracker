const db = require('../models/index');

module.exports = {
	getAccounts: (req, res) => {
		let uid = req.params.uid;
		db.User.find({
				'uid': uid
			})
			.populate('Seasons')
			.then(data => {
				console.log(`FETCHED ALL USERS BATTLETAGS/ACCOUNTS ${data}`)
				res.json(data)
			}).catch(err => {
				throw err;
			})
	},
	saveAccountNode: (req, res) => {
		console.log(req.body);
		db.User.create(req.body)
			.then(data => {
				console.log(`BATTLETAG SAVED :${data}`)
				res.json(data)
			}).catch(err => {
				throw err;
			})
	},
	getActiveAccount: (req, res) => {
		console.log(req.params)
		db.User.findById(req.params.uid)
			.populate('Seasons')
			.then(data => {
				console.log(`ACTIVE ACCOUNT DATA ${data}`)
				res.json(data)
			}).catch(err => {
				throw err;
			})
	},
	deleteAccount: (req, res) => {
		console.log(req.params)
		db.User.findOneAndRemove(req.params.account)
			.then(data => {
				return db.User.find({
						'uid': req.params.user
					})
					.populate('Seasons')	
			}).then(data =>{
				console.log(`returned user obj after account delete ${data}`)
				res.json(data)
			})
			.catch(err => {
				throw err;
			})
	},
	getActiveSeason: (req, res) => {
		console.log(req.params)
		db.Season.findById(req.params.uid)
			.populate('Games')
			.then(data => {
				console.log(`ACTIVE SEASON DATA ${data}`)
				res.json(data)
			}).catch(err => {
				throw err;
			})
	},
	// getGames: (req, res) => {
	// 	console.log(req.params)
	// 	db.Season.findById(req.params.uid)
	// 		.then(data => {
	// 			console.log(`ALL GAMES BELONGING TO SEASON ID ${data}`)
	// 			res.json(data)
	// 		}).catch(err => {
	// 			throw err;
	// 		})
	// },
	saveSeason: (req, res) => {
		console.log(req.body);
		db.Season.create(req.body)
			.then(data => {
				return db.User.findOneAndUpdate({
						BattleTag: data.BattleTagOwnership
					}, {
						$push: {
							Seasons: data
						}
					}, {
						new: true
					})
					.populate('Seasons')
			})
			.then(data => {
				console.log(`SEASON SAVED :${data}`)
				res.json(data)
			}).catch(err => {
				throw err;
			})
	},
	saveGame: (req, res) => {
		console.log(req.body);
		db.Game.create(req.body)
			.then(data => {
				console.log('data going in')
				console.log(data)
				return db.Season.findByIdAndUpdate(data.seasonOwnership, {
						$push: {
							Games: data
						}
					}, {
						new: true
					})
					.populate('Games')
			})
			.then(data => {
				console.log(`GAME SAVED :${data}`)
				res.json(data)
			}).catch(err => {
				throw err;
			})
	},
}
