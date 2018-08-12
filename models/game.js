const mongoose = require('mongoose');

const Schema = mongoose.Schema;
// all games for a battletag queried by {auth0uid: '', Battletag: ''}
const GameSchema = new Schema({
    SeasonID:
        [{
            type: Schema.Types.ObjectId,
            ref: 'Season'
        }],
    BattletagID:
        [{
            type: Schema.Types.ObjectId,
            ref: 'Battletag'
        }],
    userID:
        [{
            type: Schema.Types.ObjectId,
            ref: 'User'
        }],
    Battletag: 
    {
        type: String,
        required: true,
    },
    Map:
     {
        type: String,
        required: true,
    },
    heroSelected: {
        type: String,
        required: true,
    },
    winLoss: {
        type: String,
        required: true,
    },
    postMatchSR: {
        type: Number,
        required: true,
    }

}, { timestamps: Date });

const Game = mongoose.model('Game', GameSchema);

module.exports = Game;