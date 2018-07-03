const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var UserSchema = new Schema({
    MainHeros:{
        type: Array,
        required: true,
    },
}, {timestamps: Date});

const User = mongoose.model('User', UserSchema);

module.exports = User;