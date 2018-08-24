const db = require("../../models/index");

const seasonDelete = {
  deleteAllSeasons: (req, res) => {
    db.Season.remove({}).then(allSeasons => {
      console.log({
        message: 'Successfully deleted all Seasons for all Battletags for All users',
        payload: allSeasons
      })
      res.json({
        message: 'Successfully deleted all Seasons for all Battletags for All users',
        payload: allSeasons
      })
    }).catch(err => {
      throw err;
    })
  },
  deleteOneSeasonById: (req, res) => {
    let gameIds = []
    db.Game.find({ SeasonId: req.query.seasonId }).then(seasonGames => {
      console.log(seasonGames)
      seasonGames.forEach(game => {
        gameIds.push(game._id)
      })
      console.log('Games belonging to season found, gameIds pushed to array')
      console.log(gameIds)
      db.Season.findByIdAndUpdate(req.query.seasonId, { $pullAll: { Games: gameIds } }, { new: true }).then(result => {
        console.log('Season found, gameIds pulled from Games array');
        console.log(result)
        db.Game.deleteMany({ SeasonId: req.query.seasonId }).then(response => {
          console.log('Deleted all games from db belonging to season')
          console.log(response)
        })
       db.Battletag.findByIdAndUpdate(req.query.battletag, {$pullAll: { Seasons: [req.query.seasonId] } }, {new:true}).then(result=>{
         console.log('Battletag obj found that contains season, season ID ref pulled from array')
      console.log(result)
        db.Season.findByIdAndRemove(req.query.seasonId).then(deletedSeason=>{
          console.log('season found by id and removed from database')
          console.log(deletedSeason)
        })
      res.json({
        message: 'Removed Season and all of its games. Appropriate Id refs pulled from all collections',
        payload: result
      })
    })
      })
    })


    // db.Battletag.findByIdAndUpdate(req.query.battletag, {$pullAll: { Seasons: [req.query.seasonId] } }, {new:true}).then(result=>{
    //   console.log(result)
    //   res.json({
    //     message: 'Removed Season',
    //     payload: result
    //   })
    // })
    // db.Battletag.findById(req.query.battletag).then(shit=>{
    // console.log(shit)
    // })
  },
  deleteSeasonsByBattletagId: (req, res) => {
    console.log(req.query._id)
    db.Battletag.findById(req.query._id).populate('Seasons').then(userSeasonsByBattletagId => {
      console.log({
        message: 'Removed ALL OF THIS USERS seasons by BATTLETAG ID',
        payload: userSeasonsByBattletagId
      })
      res.json({
        message: 'Removed ALL OF THIS USERS seasons by BATTLETAG ID',
        payload: userSeasonsByBattletagId
      })
    })
  }
}
module.exports = seasonDelete;