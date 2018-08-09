const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const GameSchema = new Schema({
    userId:[{
        type: Schema.Types.ObjectId,
        ref: 'User',
    }],
    seasonId: [{
        type: Schema.Types.ObjectId,
        ref: 'Season',
    }],
    seasonOwnership:{
        type: String,
        required: true,
    },
    Battletag: {
        type: String,
        required: true,
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