const db = require('../../models/index')

const battletagGet = {
    getAllBattletags: (req, res) => {
        db.Battletag.find({}).then(allBattletags => {
            console.log({message: 'Fetched ALL Battletags', payload: allBattletags})
            res.json({message: 'Fetched ALL Battletags', payload: allBattletags})
        })
    },
    getOneBattletagById: (req, res) => {
        console.log(req.query._id)
        db.Battletag.findById(req.query._id).populate('Seasons').then(oneBattletag=>{
            console.log({message: 'Fetched ONE Battletag by ID', payload: oneBattletag})
            res.json({message: 'Fetched ONE Battletag by ID', payload: oneBattletag})
        })
    },
    getOneBattletagByAuth0: (req, res) => {
        console.log(req.query.auth0UID)
        db.Battletag.findOne(req.query.auth0UID).then(oneBattletag=>{
            console.log({message: 'Fetched ONE Battletag by auth0UID', payload: oneBattletag})
            res.json({message: 'Fetched ONE Battletag by auth0UID', payload: oneBattletag})
        })
    }
}
module.exports = battletagGet;