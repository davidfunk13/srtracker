const db = require("../../models/index");

const userGet ={
  getAllUsers: (req, res) => {
    db.User.find({}).populate('Battletags').then(allUsers => {
      console.log({message: 'All Users retrieved', payload: allUsers})
      res.json({message: 'All Users retrieved', payload: allUsers})
    })
  },
  getOneUserbyId: (req, res) => {
    console.log(req.query._id)
    db.User.findOneById(req.query._id).populate('Battletags').then(oneUser => {
      console.log({message: 'User retrieved by _id', payload: oneUser})
      res.json({message: 'User retrieved by _id', payload: oneUser})
    })
  },
  getOneUserbyAuth0: (req, res) => {
    console.log(req.query)
    db.User.findOne(req.query).populate('Battletags').then(oneUser => {
      console.log({ message: 'User has been retrieved by Auth0UID', payload: oneUser })
      res.json({message: 'User has been retrieved by Auth0UID', payload: oneUser})
    })
  },
}
  module.exports = userGet;