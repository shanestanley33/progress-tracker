const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// const trackerSchema = new Schema({
//     name: {
//         type: String,
//         required: true,
//         unique: true
//     }
// }, {
//     timestamps: true
// });

const fitnessTrackerSchema = new Schema({
    date: {
        type: Date,
        required: true,
    },
    pushups: {
        type: Number,
        required: true,
    },
    pullups: {
        type: Number,
        required: true,
    },
    situps: {
        type: Number,
        required: true,
    },
    jumpingJacks: {
        type: Number,
        required: true,
    }
});

module.exports = mongoose.model('fitnessTracker', fitnessTrackerSchema);