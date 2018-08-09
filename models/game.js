const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const GameSchema = new Schema({
    userId:{
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    Battletag: {
        type: String,
        required: true,
    },
    seasonId: {
        type: Schema.Types.ObjectId,
        required: 'Season',
    },
    matchMap: {
        type: String,
        required: true,
    },
    heroSelected: {
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