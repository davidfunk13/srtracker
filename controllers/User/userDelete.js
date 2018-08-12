const db = require("../../models/index");

const userDelete = {
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
module.exports = userDelete;