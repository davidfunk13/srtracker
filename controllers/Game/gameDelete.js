const db = require("../../models/index");

const gameDelete = {
  deleteOneGameById: (req, res) => {
    console.log('gameId')
    console.log(req.query.gameId)
    console.log('seasonId')
    console.log(req.query.seasonId)
    let gameId = req.query.gameId;
    let seasonId = req.query.seasonId;

    db.Game.findByIdAndRemove(gameId).then(oneGame => {
      console.log({
        message: 'Succesfully removed Game from season by ID',
        payload: oneGame
      })
      return db.Season.findById(seasonId).populate('Games').then(season => {
        console.log({
          message: 'Successfully returned Season with game deleted',
          payload: season
        })
        res.json({
          message: 'Successfully returned Season with game deleted',
          payload: season
        })
      })
    }).catch(err => {
      throw err;
    })
  },
  deleteAllGames: (req, res) => {
    db.Battletag.remove({}).then(allBattletags => {
      console.log({
        message: 'Successfully deleted all battletags for all users',
        payload: allBattletags
      })
      res.json({
        message: 'Successfully deleted all battletags for all users',
        payload: allBattletags
      })
    }).catch(err => {
      throw err;
    })
  },
  deleteGamesbySeasonId: (req, res) => {
    console.log(req.query)
    // db.Battletag.findOneAndRemove(req.query.auth0UID).then(oneBattletag => {
    //   console.log({message: 'Succesfully removed all Users Battletags by auth0UID ID', payload: oneBattletag})
    //   res.json({message: 'Succesfully removed all Users Battletags by auth0UID ID', payload: oneBattletag})
    // }).catch(err=>{
    //   throw err;
    // })
    res.json('hello')
  }
}
module.exports = gameDelete;