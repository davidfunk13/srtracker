const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const GameSchema = new Schema({
    accountOwnership:{
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    BattleTagOwnership: {
        type: String,
        required: true,
    },
    seasonOwnership: {
        type: String,
        required: true,
    },
    matchMap: {
        type: String,
        required: true,
    },
    HeroSelected: {
        type: String,
        required: true,
    },
    didYouWin: {
        type: String,
        required: true,
    },
    postMatchSR: {
        type: Number,
        required: true,
    }

}, {timestamps: Date});

const Game = mongoose.model('Game', GameSchema);

module.exports = Game;