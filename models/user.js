const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserSchema = new Schema({
    auth0UID:
    {
        type: String,
        required: true,
    },
    Battletags:
        [{
            type: Schema.Types.ObjectId,
            ref: 'Battletag',
        }],
    AllSeasons:
     [{
        type: Schema.Types.ObjectId,
        ref: 'Season',
    }],
    AllGames: 
    [{
        type: Schema.Types.ObjectId,
        ref: 'Game'
    }]
}, { timestamps: Date });

const User = mongoose.model('User', UserSchema);

module.exports = User;