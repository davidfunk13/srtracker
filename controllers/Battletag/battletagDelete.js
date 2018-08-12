const db = require("../../models/index");

const battletagDelete = {
  deleteAllBattletags: (req, res) => {
    db.Battletag.remove({}).then(allBattletags => {
      console.log(allBattletags)
      res.json(allBattletags)
    })
  },
  deleteOneBattletagById: (req, res) => {
    console.log(req.query._id)
    db.Battletag.findByIdAndRemove(req.query._id).then(oneBattletag => {
      console.log(oneBattletag)
      res.json(oneBattletag)
    })
  },
  deleteOneBattletagByAuth0: (req, res) => {
    console.log(req.query.auth0UID)
    db.Battletag.findOneAndRemove(req.query.auth0UID).then(oneBattletag => {
      console.log(oneBattletag)
      res.json(oneBattletag)
    })
  }
}
module.exports = battletagDelete;