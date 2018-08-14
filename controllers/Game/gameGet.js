const db = require('../../models/index')

const gameGet = {
    //one
    getOneBattletagById: (req, res) => {
        //This endpoint serves ONE battletag by id.
        console.log(req.query._id)
        db.Battletag.findById(req.query._id).populate('Seasons').then(oneBattletag=>{
            console.log({message: 'Fetched ONE Battletag by ID', payload: oneBattletag})
            res.json({message: 'Fetched ONE Battletag by ID', payload: oneBattletag})
        })
    },
    //multi
    getAllBattletags: (req, res) => {
        db.Battletag.find({}).then(allBattletags => {
            console.log({message: 'Fetched ALL Battletags', payload: allBattletags})
            res.json({message: 'Fetched ALL Battletags', payload: allBattletags})
        })
    },
    getUserBattletagsByUserId: (req, res) => {
        console.log(req.query._id)
        db.User.findById(req.query._id).populate('Battletags').then(userBattletagsById =>{
            console.log({message: 'Fetched ALL OF THIS USERS Battletag by USER ID', payload: userBattletagsById})
            res.json({message: 'Fetched ALL OF THIS USERS Battletag by USER ID', payload: userBattletagsById})
        })
    },
    getUserBattletagsByAuth0: (req, res) => {
        //this endpoint serves ALL battletags belonging to the auth0id
        console.log(req.query)
        db.Battletag.find(req.query).then(oneBattletag=>{
            console.log({message: 'Fetched ALL OF THIS USERS Battletags by auth0UID', payload: oneBattletag})
            res.json({message: 'Fetched ALL OF THIS USERS Battletags by auth0UID', payload: oneBattletag})
        })
    },
}
module.exports = gameGet;