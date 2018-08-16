const db = require("../../models/index");

const battletagDelete = {
  deleteOneBattletagById: (req, res) => {
    console.log(req.query.seasonId)
    console.log(req.query.battletagId)

    // db.Season.findByIdAndUpdate(req.query.seasonId, { $pull: { Games: { battletagId: req.query.battletagId }}}).then(pulledGames => {
    //   console.log({ message: 'Succesfully pulled Games by Battletag ID', payload: pulledGames })
    //   res.json({ message: 'Succesfully pulled Games by Battletag ID', payload: pulledGames })
    // }).catch(err => {
    //   throw err;
    // })
  },
  deleteAllBattletags: (req, res) => {
    db.Battletag.remove({}).then(allBattletags => {
      console.log({ message: 'Successfully deleted all battletags for all users', payload: allBattletags })
      res.json({ message: 'Successfully deleted all battletags for all users', payload: allBattletags })
    }).catch(err => {
      throw err;
    })
  },
  deleteBattletagsByUserId: (req, res) => {
    console.log(req.query)
    db.User.findById(req.query.userId).populate('Battletags').then(userBattletags => {
      console.log('Found these Battletags from this user. Removing...')
      console.log(userBattletags)
      return db.Battletag.remove({ UserId: req.query.userId }).then(returnData => {
        console.log({ message: 'Successfully deleted Users Battletags by UserId', payload: returnData })
        res.json({ message: 'Successfully deleted Users Battletags by UserId', payload: returnData })
      }).catch(err => {
        throw err;
      })
    })
  }
}
module.exports = battletagDelete;