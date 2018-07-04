const db = require('../models/index');

module.exports = {
	saveSeason: (req, res) => {
		console.log(req.body)
		db.Season.create(req.body)
		.then(data => {
			return db.User.findOneAndUpdate({BattleTag: data.BattleTagOwnership}, {$push: {Seasons: data._id}})
		})
		.then(returnUser => {
			res.json(returnUser);
		})
	},
	getAccounts: (req, res) => {
		let uid = req.params.uid;

		console.log(uid)
		db.User.find({'uid': uid})
		.populate('Season')
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
	findOne: (req, res) => {
		console.log(`herro  ${req.params.id}`)
		db.User.findById(req.params.id).then(data => {
			console.log(data)
			res.json(data)
		}).catch(err => {
			console.log(err)
		})
	},
	getSeasons:(req, res) => {
		console.log(req.params.id)
		db.Season.findById(req.params.id).then(data => {
			console.log(data)
			res.json(data)
		}).catch(err=> {
			console.log(err);
		})
	}
}
