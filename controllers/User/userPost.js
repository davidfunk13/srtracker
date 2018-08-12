const db = require("../../models/index");

const userPost = {
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
}
module.exports = userPost