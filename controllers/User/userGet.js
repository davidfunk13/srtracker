const db = require("../../models/index");

const userGet ={
  getAllUsers: (req, res) => {
    db.User.find({}).populate('Battlettags').then(allUsers => {
      console.log(allUsers)
      res.json(allUsers)
    })
  },
  getOneUserbyId: (req, res) => {
    console.log(req.query._id)
    db.User.findById(req.query._id).populate('Battletags').then(oneUser => {
      res.json(oneUser)
    })
  },
  getOneUserbyAuth0: (req, res) => {
    console.log(req.query._id)
    db.User.findOne(req.query.auth0UID).populate('Battletags').then(oneUser => {
      res.json(oneUser)
    })
  },
}
  module.exports = userGet;