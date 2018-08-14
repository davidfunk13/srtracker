const db = require("../../models/index");

const gamePost = {
  createGame: (req, res) => {
    let postGame = req.body
    console.log(postGame)
    db.Game.create(postGame).then(game => {
      return db.Season.findByIdAndUpdate(
        req.body.seasonId,
        { $push: { Games: game } },
        { new: true })
        .populate('Games')
        .then(updatedSeason => {
          console.log({ message: 'New Game created and pushed to its corresponding Season', payload: updatedSeason })
          res.json({ message: 'New Game created and pushed to its corresponding Season', payload: updatedSeason })
        })

    })
  }
}
module.exports = gamePost;