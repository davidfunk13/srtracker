const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserSchema = new Schema({
    uid:{
        type: String,
        required: true,
    },
    BattleTag: {
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

const User = mongoose.model('User', UserSchema);

module.exports = User;