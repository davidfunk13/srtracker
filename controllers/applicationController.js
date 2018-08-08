const db = require('../models/index');

module.exports = {
	getAccounts: (req, res) => {
		let uid = req.params.uid;
		console.log(uid)
		db.User.findOne({'uid':uid})
		.populate('Accounts').then(data => {
			console.log('====getaccounts=====')
			res.json(data.Accounts)
		}).catch(err => {
			throw err
		})
		// db.Battletag.find({
		// 		'uid': uid
		// 	})
		// 	.populate('BelongsTo')
		// 	.populate('Seasons')
		// 	.then(data => {
		// 		console.log(`FETCHED ALL USERS BATTLETAGS ${data}`)
		// 		res.json(data)
		// 	}).catch(err => {
		// 		throw err;
		// 	})
	},
	saveAccountNode: (req, res) => {
		let userHash = req.body.uidOBJ;
		let User = { 'uid': userHash }
		db.User.findOne({ 'uid': userHash }).then(data => {
			console.log(data)
			if (data === null) {
				db.User.create(User)
					.then(data => {
						console.log(`Master Account SAVED :${data}`)
						res.json(data)
					}).catch(err => {
						throw err;
					})
			} else {
				res.json(data)
			}
		})

	},
	saveBattletag: (req, res) => {
		console.log(req.body)
		db.Battletag.findOne(req.body).then(data => {
			console.log(data)
			if (data === null) {
				db.Battletag.create(req.body)
					.then(data => {
						console.log(`BATTLETAG SAVED :${data}`)
						return db.User.findOneAndUpdate({
							uid: req.body.uid
						}, {
							$push: {
								Accounts: data
							}
						}, {
							new: true
						})
						.populate('Accounts').then(data=>{
							console.log(`Accounts? ${data.Accounts}`)
							res.json(data)
						})
				})
			} 
		})

	},
	getActiveAccount: (req, res) => {
		console.log(req.params)
		db.Battletag.findById(req.params.uid)
			.populate('Seasons')
			.then(data => {
				console.log(`ACTIVE ACCOUNT DATA ${data}`)
				res.json(data)
			}).catch(err => {
				throw err;
			})
	},
	deleteBattletag: (req, res) => {
		console.log(req.body)
		let User = req.body.user;
		let Battletag = req.body.account;
		console.log(User, Battletag)
		db.Battletag.findByIdAndRemove(req.params.account).then(data=>{
			console.log(data)
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
				console.log(`DATA BEFORE RETURN ${data}`)
				return db.Battletag.findOneAndUpdate({
						Battletag: req.body.BattletagOwnership,
						uid: req.body.uid
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
