const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
    uniqueId: {
        type: Schema.Types.ObjectId
        
    },

    exerciseName: {
        type: String,

    },

    sets: {
        type: Number,

    },

    repetitions: {
        type: Number,

    }

});

module.exports = mongoose.model('Exercise', exerciseSchema);