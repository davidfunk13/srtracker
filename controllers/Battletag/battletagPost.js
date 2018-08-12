const db = require("../../models/index");

const battletagPost ={
createBattletag: (req, res) => {
    let postBattletag = req.body
    console.log(postBattletag)
    db.Battletag.create(postBattletag).then(battletag => {
      console.log(`New Battletag created: ${battletag}`)
      res.json(battletag)
    })
  },
}
module.exports= battletagPost;