const mongoose = require('mongoose');

const Schema = mongoose.Schema;
// all games for a battletag queried by {auth0uid: '', Battletag: ''}
const GameSchema = new Schema({
    UserId:
    {
        type: String,
        required: true
    },
    BattletagId: {
        type: String,
        required: true,
    },
    Battletag:
    {
        type: String, required: true
    },
    SeasonId:
    {
        type: String, required: true
    },
    matchMap:
    {
        type: String,
        required: true,
    },
    heroSelected:
    {
        type: String,
        required: true,
    },
    winLoss:
    {
        type: String,
        required: true
    },
    postMatchSR:
    {
        type: Number,
        required: true
    }
}, { timestamps: Date });

const Game = mongoose.model('Game', GameSchema);

module.exports = Game;