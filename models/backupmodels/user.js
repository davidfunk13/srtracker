const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserSchema = new Schema({
    uid:{
        type: String,
        required: true,
    },
    Battletags: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Battletag',
        }
    ]
}, {timestamps: Date});

const User = mongoose.model('User', UserSchema);

module.exports = User;