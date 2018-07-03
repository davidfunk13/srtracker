const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var SeasonSchema = new Schema({
    StartingSR:{
        type: Number,
        required: true,
    },
    MainHeros: [
        {
            type: Schema.Types.ObjectId,
            ref: "MainHeros",
        }
    ]
}, {timestamps: Date});

const Season = mongoose.model('Season', SeasonSchema);

module.exports = Season;