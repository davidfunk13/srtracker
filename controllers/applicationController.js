const db = require("../models/index");

module.exports = {
  getAccounts: (req, res) => {
    console.log("getAccounts");
    console.log(req.params);
    let uid = req.params.uid;
    db.User.findOne({ uid: uid })
      .populate("Battletags")
      .then(data => {
        res.json(data.Battletags);
      })
      .catch(err => {
        throw err;
      });
  },
  saveAccountNode: (req, res) => {
    let userHash = req.body.uidOBJ;
    let User = { uid: userHash };
    db.User.findOne({
      uid: userHash
    }).then(data => {
      console.log(data);
      if (data === null) {
        db.User.create(User)
          .then(data => {
            console.log(`Master Account SAVED :${data}`);
            res.json(data);
          })
          .catch(err => {
            throw err;
          });
      } else {
        res.json(data);
      }
    });
  },
  saveBattletag: (req, res) => {
    console.log(req.body);
    db.Battletag.findOne(req.body).then(data => {
      console.log(`Battletag exists? ${data}`);
      if (data === null) {
        db.Battletag.create(req.body).then(data => {
          console.log(`BATTLETAG SAVED :${data}`);
          return db.User.findOneAndUpdate(
            { uid: data.auth0Uid },
            { $push: { Battletags: data } },
            { new: true }
          )
            .populate("Battletags")
            .then(data => {
              console.log(
                `User Updated and returned with populated Battletags ${data}`
              );
              res.json(data.Battletags);
            });
        });
      }
    });
  },
  getActiveAccount: (req, res) => {
    console.log(req.params);
    db.Battletag.findById(req.params.uid)
      .populate("Seasons")
      .populate("User")
      .populate("Games")
      .then(data => {
        console.log(`ACTIVE ACCOUNT DATA ${data}`);
        res.json(data);
      })
      .catch(err => {
        throw err;
      });
  },
  deleteBattletag: (req, res) => {
    console.log(req.body)
  },
  getActiveSeason: (req, res) => {
    console.log(req.params);
    db.Season.findById(req.params.uid)
      .populate("Games")
      .then(data => {
        console.log(`ACTIVE SEASON DATA ${data}`);
        res.json(data);
      })
      .catch(err => {
        throw err;
      });
  },
  saveSeason: (req, res) => {
    console.log(req.body);
    db.Season.create(req.body).then(data => {
      console.log(`DATA BEFORE RETURN ${data}`);
      return db.Battletag.findOneAndUpdate(
        { auth0Uid: req.body.auth0Uid, Battletag: req.body.BattletagOwnership },
        { $push: { Seasons: data } },
        { new: true }
      )
        .populate("Seasons")
        .then(data => {
          console.log(data);
          res.json(data);
        })
        .catch(err => {
          throw err;
        });
    });
  },
  saveGame: (req, res) => {
    console.log(req.body);
    db.Game.create(req.body)
      .then(data => {
        console.log("data going in");
        console.log(data);
        return db.Season.findByIdAndUpdate(
          data.seasonOwnership,
          { $push: { Games: data } },
          { new: true }
        ).populate("Games");
      })
      .then(data => {
        console.log(`GAME SAVED :${data}`);
        res.json(data);
      })
      .catch(err => {
        throw err;
      });
  }
};
