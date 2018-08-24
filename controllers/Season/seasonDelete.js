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
      console.log('gameIds')
      console.log(gameIds)
      db.Season.findByIdAndUpdate(req.query.seasonId, { $pullAll: { Games: gameIds } }, { new: true }).then(result => {
        console.log(result)
        db.Game.deleteMany({ SeasonId: req.query.seasonId }).then(response => {
          console.log(response)
        })
       db.Battletag.findByIdAndUpdate(req.query.battletag, {$pullAll: { Seasons: [req.query.seasonId] } }, {new:true}).then(result=>{
      console.log(result)
      res.json({
        message: 'Removed Season',
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