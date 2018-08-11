const db = require("../models/index");

module.exports = {
  //POST
  createUser: (req, res) => {
    let postUser = req.body
    db.User.findOne(postUser).populate('Battletags').then(exists => {
      if (exists === null) {
        console.log('User Does Not Exist. User Being Created...')
        db.User.create(postUser).then(user => {
          res.json(user)
        }).catch(err=> {
          res.json(err)
        })
      } else {
        console.log('User exists. Here is the obj')
      console.log(exists)
       res.json(exists)
      }
    })

  },
  createBattletag: (req, res) => {
    let postBattletag = req.body
    console.log(postBattletag)
    db.Battletag.create(postBattletag).then(battletag => {
      db.User.findOneAndUpdate(battletag.auth0UID, {$push: {Battletags: battletag}}, {new:true}).then(updatedUser=>{
        console.log(updatedUser)
      })
      res.json(battletag)
    })
  },
};
