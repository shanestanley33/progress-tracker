const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const trackerSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    }
}, {
    timestamps: true
});

const fitnessSchema = new Schema({
    pushups: {
        type: Number,
        required: true,
        unique: true
    },
    pullups: {
        type: Number,
        required: true,
        unique: true
    },
    Situps: {
        type: Number,
        required: true,
        unique: true
    },
    Jumping_jacks: {
        type: Number,
        required: true,
        unique: true
    }
});


module.exports = mongoose.model('trackers', trackerSchema);