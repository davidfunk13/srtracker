const db = require("../../models/index");

const userDelete = {
    deleteOneUserById: (req, res) => {
        console.log(req.query)
        db.User.findByIdAndRemove(req.query._id).then(oneUser => {
            console.log({message: 'User has been deleted by _id', payload: oneUser})
            res.json({message: 'User has been deleted by _id', payload: oneUser})
        })
    },
    deleteOneUserByAuth0: (req, res) => {
        console.log(req.query)
        db.User.findOneAndRemove(req.query).then(oneUser => {
            console.log({ message: 'User has been deleted by Auth0UID', payload: oneUser})
            res.json({ message: 'User has been deleted by Auth0UID', payload: oneUser})
        }).catch(err=>{
            throw err
        })
    },
    deleteAllUsers: (req, res) => {
        db.User.remove({}).then(allUsers => {
            console.log({ message: 'all Users have been deleted', payload: allUsers})
            res.json({ message: 'all Users have been deleted', payload: allUsers})
        })
    },
}
module.exports = userDelete;