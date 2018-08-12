const db = require("../models/index");

const userRoutes ={
  getAllUsers: (req, res) => {
    db.User.find({}).populate('Battlettags').then(allUsers => {
      console.log(allUsers)
      res.json(allUsers)
    })
  },
  getOneUser: (req, res) => {
    console.log(req.query._id)
    db.User.findById(req.query._id).populate('Battletags').then(oneUser => {
      res.json(oneUser)
    })
  },
  //POST
  createUser: (req, res) => {
    let postUser = req.body
    db.User.findOne(postUser).populate('Battletags').then(exists => {
      if (exists === null) {
        console.log('User Does Not Exist. User Being Created...')
        db.User.create(postUser).then(user => {
          console.log(`New User: ${user}`)
          res.json(user)
        }).catch(err => {
          res.json(err)
        })
      } else {
        console.log('User exists. Here is the obj')
        console.log(exists)
        res.json(exists)
      }
    })
  },
  //DELETE ROUTES
  deleteOneUserByID: (req, res) => {
    db.User.findByIdAndRemove(req.query._id).then(oneUser => {
      res.json(oneUser)
    })
  },
  deleteOneUserByAuth0: (req, res) => {
    db.User.findByIdAndRemove(req.query.auth0UID).then(oneUser => {
      res.json(oneUser)
    })
  },
  deleteAllUsers: (req, res) => {
    db.User.remove({}).then(allUsers => {
      console.log(allUsers)
      res.json(allUsers)
    })
  },
}
  module.exports = userRoutes;