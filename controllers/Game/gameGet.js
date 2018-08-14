const db = require('../../models/index')

const gameGet = {
    //one
    getOneGameById: (req, res) => {
        //This endpoint serves ONE battletag by id.
        console.log(req.query._id)
        db.Battletag.findById(req.query._id).populate('Seasons').then(oneBattletag=>{
            console.log({message: 'Fetched ONE Battletag by ID', payload: oneBattletag})
            res.json({message: 'Fetched ONE Battletag by ID', payload: oneBattletag})
        })
    },
    //multi
    getAllGames: (req, res) => {
        db.Battletag.find({}).then(allBattletags => {
            console.log({message: 'Fetched ALL Battletags', payload: allBattletags})
            res.json({message: 'Fetched ALL Battletags', payload: allBattletags})
        })
    },
    getGamesBySeasonId: (req, res) => {
        console.log(req.query._id)
        db.User.findById(req.query._id).populate('Battletags').then(userBattletagsById =>{
            console.log({message: 'Fetched ALL OF THIS USERS Battletag by USER ID', payload: userBattletagsById})
            res.json({message: 'Fetched ALL OF THIS USERS Battletag by USER ID', payload: userBattletagsById})
        })
    }
}
module.exports = gameGet;