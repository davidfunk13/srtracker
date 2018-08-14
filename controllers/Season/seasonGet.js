const db = require('../../models/index')

const seasonGet = {
    //one
    getOneSeasonById: (req, res) => {
        //This endpoint serves ONE season by id.
        console.log(req.query._id)
        db.Season.findById(req.query._id).populate('Games').then(oneSeason=>{
            console.log({message: 'Fetched One season and its games by Season id', payload: oneSeason})
            res.json({message: 'Fetched One season and its games by Season id', payload: oneSeason})
        })
    },
    //multi
    getAllSeasons: (req, res) => {
        db.Season.find({}).then(allSeasons => {
            console.log({message: 'Fetched ALL Seasons', payload: allSeasons})
            res.json({message: 'Fetched ALL Seasons', payload: allSeasons})
        })
    },
    getSeasonsByBattletagId: (req, res) => {
        console.log(req.query._id)
        db.User.findById(req.query._id).populate('Battletags').then(userBattletagsById =>{
            console.log({message: 'Fetched ALL OF THIS USERS Battletag by USER ID', payload: userBattletagsById})
            res.json({message: 'Fetched ALL OF THIS USERS Battletag by USER ID', payload: userBattletagsById})
        })
    }
}
module.exports = seasonGet;