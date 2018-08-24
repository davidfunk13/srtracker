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
    console.log(req.query)
    db.Game.deleteMany({
      seasonId: req.query.seasonId
    }).then(oneSeasonGames => {
      console.log({
        message: 'Succesfully pulled games of SeasonId',
        payload: oneSeasonGames
      })
      return db.Season.findByIdAndRemove(req.query.seasonId).then(season => {
        console.log({
          message: 'Successfully removed single season by ID',
          payload: season,
        })
        return db.Battletag.findById(req.query.battletag).then(battletagObj => {
          console.log({
            message: 'Returned Battletag obj after deletion of games and single season',
            payload: battletagObj
          })
          res.json({
            message: 'Returned Battletag obj after deletion of games and single season',
            payload: battletagObj
          })
        })
      })
    }).catch(err => {
      throw err;
    })
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