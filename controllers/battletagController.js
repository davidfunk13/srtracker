const db = require("../models/index");

const battletagRoutes ={
createBattletag: (req, res) => {
    let postBattletag = req.body
    console.log(postBattletag)
    db.Battletag.create(postBattletag).then(battletag => {
      console.log(`New Battletag created: ${battletag}`)
    })
  },
  deleteAllBattletags: (req, res) => {
    db.Battletag.remove({}).then(allBattletags => {
      console.log(allBattletags)
      res.json(allBattletags)
    })
  }
}
module.exports= battletagRoutes;