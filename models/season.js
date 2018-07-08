const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const SeasonSchema = new Schema({
    accountOwnership:{
        type: Schema.Types.ObjectId,
        ref: 'User',
    },
    BattleTagOwnership: {
        type: String,
        required: true,
    },
    StartingSR:{
        type: Number,
        required: true,
    },
    HerosFocused: {
        type: Array,
        required: true
    },
    Games: {
        type: Schema.Types.ObjectId,
        ref: 'Game'
    }
}, {timestamps: Date});

const Season = mongoose.model('Season', SeasonSchema);

module.exports = Season;