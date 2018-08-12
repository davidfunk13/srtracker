const db = require("../../models/index");

const userGet ={
  getAllUsers: (req, res) => {
    db.User.find({}).populate('Battlettags').then(allUsers => {
      console.log(allUsers)
      res.json({
        message: 'All Users retrieved',
        payload: allUsers
})
    })
  },
  getOneUserbyId: (req, res) => {
    console.log(req.query._id)
    db.User.findById(req.query._id).populate('Battletags').then(oneUser => {
      res.json({
        message: 'User retrieved by _id',
        payload: oneUser
})
    })
  },
  getOneUserbyAuth0: (req, res) => {
    console.log(req.query._id)
    db.User.findOne(req.query.auth0UID).populate('Battletags').then(oneUser => {
      res.json({
        message: 'User has been retrieved by Auth0UID',
        payload: oneUser
})
    })
  },
}
  module.exports = userGet;