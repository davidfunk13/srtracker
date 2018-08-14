const db = require("../../models/index");

const seasonDelete = {
  deleteAllSeasons: (req, res) => {
    db.Season.remove({}).then(allSeasons => {
      console.log({message: 'Successfully deleted all Seasons for all Battletags for All users', payload: allSeasons})
      res.json({message: 'Successfully deleted all Seasons for all Battletags for All users', payload: allSeasons})
    }).catch(err=>{
      throw err;
    })
  },
  deleteOneSeasonById: (req, res) => {
    console.log(req.query._id)
    db.Season.findByIdAndRemove(req.query._id).then(oneSeason => {
      console.log({message: 'Succesfully removed Season by ID', payload: oneSeason})
      res.json({message: 'Succesfully removed Season by ID', payload: oneSeason})
    }).catch(err=>{
      throw err;
    })
  },
  deleteSeasonsByBattletagId: (req, res) => {
    console.log(req.query._id)
    db.Battletag.findById(req.query._id).populate('Seasons').then(userSeasonsByBattletagId =>{
        console.log({message: 'Removed ALL OF THIS USERS seasons by BATTLETAG ID', payload: userSeasonsByBattletagId})
        res.json({message: 'Removed ALL OF THIS USERS seasons by BATTLETAG ID', payload: userSeasonsByBattletagId})
    })
}
}
module.exports = seasonDelete;