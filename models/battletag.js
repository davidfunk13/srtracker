const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BattletagSchema = new Schema({
    auth0UID:
    {
        type: String,
        required: true,
    },
    Battletag:
    {
        type: String,
        required: true,
    },
    userID:
        [{
            type: Schema.Types.ObjectId,
            ref: 'User'
        }],
    AllSeasons:
        [{
            type: Schema.Types.ObjectId,
            ref: 'Season',
        }],
    AllGames:
        [{
            type: Schema.Types.ObjectId,
            ref: 'Game',
        }],
}, { timestamps: Date });

const Battletag = mongoose.model('Battletag', BattletagSchema);

module.exports = Battletag;