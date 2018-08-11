const db = require("../models/index");

module.exports = {
  //POST
  createUser: (req, res) => {
    let postUser = req.body
    db.User.create(postUser).then(user => {
      res.json(user)
    })
  },
  createBattletag: (req, res) => {
    let postBattletag = req.body
    console.log(postBattletag)

    db.Battletag.create(postBattletag).then(battletag => {
      res.json(battletag)
    })
  },
};
