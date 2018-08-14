const db = require("../../models/index");

const gameDelete = {
  deleteOneGameById: (req, res) => {
    console.log(req.query._id)
    db.Battletag.findByIdAndRemove(req.query._id).then(oneBattletag => {
      console.log({message: 'Succesfully removed Battletag by ID', payload: oneBattletag})
      res.json({message: 'Succesfully removed Battletag by ID', payload: oneBattletag})
    }).catch(err=>{
      throw err;
    })
  },
  deleteAllGames: (req, res) => {
    db.Battletag.remove({}).then(allBattletags => {
      console.log({message: 'Successfully deleted all battletags for all users', payload:allBattletags})
      res.json({message: 'Successfully deleted all battletags for all users', payload:allBattletags})
    }).catch(err=>{
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