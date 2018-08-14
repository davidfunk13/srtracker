const mongoose = require('mongoose');

const Schema = mongoose.Schema;
//query games with this._id, and battletagownership.
const SeasonSchema = new Schema({
    UserId: {
        type: String,
        required: true
    },
    BattletagId: {
        type: String,
        required: true,
    },
    Battletag: {
        type: String,
        required: true
    },
    StartingSR:{
        type: Number,
        required: true,
    },
    HerosFocused: {
        type: Array,
        required: true
    },
    Games: [{
        type: Schema.Types.ObjectId,
        ref: 'Game'
    }]
}, {timestamps: Date});

const Season = mongoose.model('Season', SeasonSchema);

module.exports = Season;