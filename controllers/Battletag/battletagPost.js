const db = require("../../models/index");

const battletagPost = {
  createBattletag: (req, res) => {
    let postBattletag = req.body
    console.log(postBattletag)
    db.Battletag.findOne(postBattletag).populate('Seasons').then(exists => {
      if (exists === null) {
        console.log('Battletag Does Not Exist. Battletag Being Created...')
        db.Battletag.create(postBattletag).then(battletag => {
          console.log({ message: 'New Battletag created', payload: battletag })
          res.json({ message: 'New Battletag created', payload: battletag })
        })
      } else {
        console.log({ message: 'Battletag belonging to this user exists. Here is the Battletag object', payload: exists })
        res.json({ message: 'Battletag belonging to this user exists. Here is the Battletag object', payload: exists })
      }
    })


  },
}
module.exports = battletagPost;