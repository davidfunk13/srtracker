const db = require('../models/index');

module.exports = {
	saveSeason: (req, res) => {
		console.log(req.body)
		db.Season.create(req.body)
		.then(data => {
			return db.User.findOneAndUpdate({BattleTag: data.BattleTagOwnership}, {$push: {Seasons: data._id}}, { new: true })
		})
		.then(returnUser => {
			res.json(returnUser);
		})
	},
	getAccounts: (req, res) => {
		let uid = req.params.uid;

		console.log(uid)
		db.User.find({'uid': uid})
		.populate('Seasons')
		.then(data => {
			console.log('hello')
			console.log(data)
			res.json(data)
		}).catch(err =>{
			console.log(err)
		})
	},
	saveAccountNode: (req, res) => {
		console.log(req.body);
		db.User.create(req.body)
		.then(data => {
			res.json(data)
		}).catch(err => {
			console.log(err)
		})
	},
}
