const db = require("../../models/index");

const gamePost = {
  createGame: (req, res) => {
    let postBattletag = req.body
    console.log(postBattletag)
    db.Season.findOne(postBattletag).populate('Seasons').then(exists => {
      if (exists === null) {
        console.log('Battletag Does Not Exist. Battletag Being Created...')
        db.Battletag.create(postBattletag).then(battletag => {
          return db.User.findOneAndUpdate(
            { auth0UID: battletag.auth0UID },
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
module.exports = gamePost;