const db = require("../../models/index");

const seasonPost = {
  createSeason: (req, res) => {
    let postSeason = req.body
   console.log(req.body)
    console.log('Season being Created...')
    db.Season.create(postSeason).then(season => {
      console.log(season)
      console.log('Season successfully created. Updating Battletag...')
      return db.Battletag.findByIdAndUpdate(
        postSeason.BattletagId,
        { $push: { Seasons: season } },
        { new: true })
        .populate('Seasons')
        .then(updatedBattletag => {
          console.log({ message: 'New Season created and pushed to its corresponding Battletag', payload: updatedBattletag })
          res.json({ message: 'New Season created and pushed to its corresponding Battletag', payload: updatedBattletag })
        })

    })
  },
  adjustSR: (req, res) => {
    console.log(req.query)
    db.Season.findByIdAndUpdate(req.query.SeasonId, {$set: {CurrentSR: req.query.postMatchSR}}, {new:true}).then(data=>{
      console.log('SR adjusted')
      console.log(data.CurrentSR)
      res.json(data.CurrentSR)
    })
  }
}
module.exports = seasonPost;