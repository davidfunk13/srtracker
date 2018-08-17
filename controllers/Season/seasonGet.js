const db = require('../../models/index')

const seasonGet = {
    //one
    getOneSeasonById: (req, res) => {
        //This endpoint serves ONE season by id.
        console.log(req.params.id)
        db.Season.findById(req.params.id).populate('Games').then(oneSeason=>{
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
        db.Battletag.findById(req.query._id).populate('Seasons').then(userSeasonsByBattletagId =>{
            console.log({message: 'Fetched ALL OF THIS USERS Seasons by BATTLETAG ID', payload: userSeasonsByBattletagId})
            res.json({message: 'Fetched ALL OF THIS USERS Seasons by BATTLETAG ID', payload: userSeasonsByBattletagId})
        })
    }
}
module.exports = seasonGet;