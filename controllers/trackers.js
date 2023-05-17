// controllers/todos.js
var Tracker = require('../models/tracker');

module.exports = {
    index

};


async function index(req, res) {
    const trackers = await Tracker.find({});
    res.render('trackers/index', { title: 'Fitness Tracker', trackers });
  
}
