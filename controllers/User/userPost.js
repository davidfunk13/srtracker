const db = require("../../models/index");

const userPost = {
    //POST
    createUser: (req, res) => {
        let postUser = req.body
        db.User.findOne(postUser).populate('Battletags').then(exists => {
            if (exists === null) {
                console.log('User Does Not Exist. User Being Created...')
                db.User.create(postUser).then(user => {
                    console.log({ message: 'User has been created', payload: user })
                    res.json({ message: 'User has been created', payload: user })
                }).catch(err => {
                    res.json(err)
                })
            } else {
                console.log({ message: 'User exists. Here is the user object', payload: exists })
                res.json({ message: 'User exists. Here is the user object', payload: exists })
            }
        })
    },
}
module.exports = userPost