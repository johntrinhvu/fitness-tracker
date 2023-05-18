const mongoose = require('mongoose');

// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const routineSchema = new Schema({
    routineName: {
        type: String
    },
    uniqueId: {
        type: Schema.Types.ObjectId
    },
    exercises: [{
        type: Schema.Types.ObjectId,
        ref: 'Exercise'
    }]
  
});

// Compile the schema into a model and export it
module.exports = mongoose.model('Routine', routineSchema);