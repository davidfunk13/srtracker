const db = require("../../models/index");

const battletagDelete = {
  deleteOneBattletagById: (req, res) => {
    db.Game.deleteMany({
      BattletagId: req.query.battletagId
    }).then(gamesDeleted => {
      console.log('Games deleted')
      console.log(gamesDeleted)
      db.Season.deleteMany({
        BattletagId: req.query.battletagId
      }).then(deletedSeasons => {
        console.log('Seasons Deleted')
        console.log(deletedSeasons)
        db.Battletag.findByIdAndRemove(req.query.battletagId).then(battletagDeleted => {
          console.log('Battletag Delted')
          console.log(battletagDeleted)
          db.User.findByIdAndUpdate(req.query.userId, {
            $pullAll: { Battletags: [req.query.battletagId]}}, {new: true}).populate('Battletags').then(endResult => {
            console.log({
              message: 'Successfully deleted Battletag and all of its contents. Ref pulled in user obj.',
              payload: endResult
            })
            res.json({
              message: 'Successfully deleted Battletag and all of its contents. Ref pulled in user obj.',
              payload: endResult
            })
          })
        })
      })
    })
  },
  deleteAllBattletags: (req, res) => {
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
  deleteBattletagsByUserId: (req, res) => {
    console.log(req.query)
    db.User.findById(req.query.userId).populate('Battletags').then(userBattletags => {
      console.log('Found these Battletags from this user. Removing...')
      console.log(userBattletags)
      return db.Battletag.remove({
        UserId: req.query.userId
      }).then(returnData => {
        console.log({
          message: 'Successfully deleted Users Battletags by UserId',
          payload: returnData
        })
        res.json({
          message: 'Successfully deleted Users Battletags by UserId',
          payload: returnData
        })
      }).catch(err => {
        throw err;
      })
    })
  }
}
module.exports = battletagDelete;