const mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

const trackerSchema = new Schema({
  title: { type: String, required: true },
  
});

// Compile the schema into a model and export it
module.exports = mongoose.model('Tracker', trackerSchema);