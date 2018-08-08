const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var BattletagSchema = new Schema({
    uid:{
        type: String,
        required: true,
    },
    Battletag: {
        type: String,
        required: true,
    },
    Seasons: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Season',
        }
    ]
}, {timestamps: Date});

const Battletag = mongoose.model('Battletag', BattletagSchema);

module.exports = Battletag;