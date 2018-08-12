const db = require('../../models/index')

const battletagGet = {
    getAllBattletags: (req, res) => {
        db.Battletag.find({}).then(allBattletags => {
            console.log(allBattletags)
            res.json(allBattletags)
        })
    },
    getOneBattletagById: (req, res) => {
        console.log(req.query._id)
        db.Battletag.findById(req.query._id).populate('Seasons').then(oneBattletag=>{
            console.log(oneBattletag)
            res.json(oneBattletag)
        })
    },
    getOneBattletagByAuth0: (req, res) => {
        console.log(req.query.auth0UID)
        db.Battletag.findOne(req.query.auth0UID).then(oneBattletag=>{
            console.log(oneBattletag)
            res.json(oneBattletag)
        })
    }
}
module.exports = battletagGet;