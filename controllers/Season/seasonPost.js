const db = require("../../models/index");

const seasonPost = {
  createSeason: (req, res) => {
    let postSeason = req.body
    console.log(postSeason.season)
    console.log(postSeason.battletagId)
    console.log('Season being Created...')
    db.Season.create(postSeason.season).then(season => {
      return db.Battletag.findByIdAndUpdate(
        postSeason.battletagId,
        { $push: { Seasons: battletag } },
        { new: true })
        .populate('Seasons')
        .then(updatedBattletag => {
          console.log({ message: 'New Season created and pushed to its corresponding Battletag', payload: updatedBattletag })
          res.json({ message: 'New Season created and pushed to its corresponding Battletag', payload: updatedBattletag })
        })

    })
  }
}
module.exports = seasonPost;