const db = require("../../models/index");

const battletagDelete = {
  deleteOneBattletagById: (req, res) => {
    console.log(req.query._id)
    db.Battletag.findByIdAndRemove(req.query._id).then(oneBattletag => {
      console.log({ message: 'Succesfully removed Battletag by ID', payload: oneBattletag })
      res.json({ message: 'Succesfully removed Battletag by ID', payload: oneBattletag })
    }).catch(err => {
      throw err;
    })
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