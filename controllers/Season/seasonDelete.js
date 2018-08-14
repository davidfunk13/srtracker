const db = require("../../models/index");

const seasonDelete = {
  deleteAllSeasons: (req, res) => {
    db.Season.remove({}).then(allSeasons => {
      console.log({message: 'Successfully deleted all Seasons for all Battletags for All users', payload:allBattletags})
      res.json({message: 'Successfully deleted all Seasons for all Battletags for All users', payload:allBattletags})
    }).catch(err=>{
      throw err;
    })
  },
  deleteOneSeasonById: (req, res) => {
    console.log(req.query._id)
    db.Season.findByIdAndRemove(req.query._id).then(oneSeason => {
      console.log({message: 'Succesfully removed Season by ID', payload: oneSeason})
      res.json({message: 'Succesfully removed Battletag by ID', payload: oneSeason})
    }).catch(err=>{
      throw err;
    })
  },
}
module.exports = seasonDelete;