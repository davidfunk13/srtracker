const db = require("../../models/index");

const battletagPost = {
  createBattletag: (req, res) => {
    let postBattletag = req.body
    console.log(postBattletag)
    db.Battletag.findOne(postBattletag).populate('Seasons').then(exists => {
      if (exists === null) {
        console.log('Battletag Does Not Exist. Battletag Being Created...')
        db.Battletag.create(postBattletag).then(battletag => {
          console.log(battletag)
          return db.User.findByIdAndUpdate(
            battletag.UserId,
            { $push: { Battletags: battletag } },
            { new: true })
            .populate('Battletags')
            .then(updatedUser => {
              console.log({ message: 'New Battletag created and pushed to its corresponding user', payload: updatedUser })
              res.json({ message: 'New Battletag created and pushed to its corresponding user', payload: updatedUser })
            })
        })
      } else {
        console.log({ message: 'Battletag belonging to this user exists. Here is the Battletag object', payload: exists })
        res.json({ message: 'Battletag belonging to this user exists. Here is the Battletag object', payload: exists })
      }
    })


  },
}
module.exports = battletagPost;