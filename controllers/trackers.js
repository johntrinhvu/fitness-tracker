// controllers/todos.js
var Tracker = require('../models/tracker');

module.exports = {
    index

};


function index(req, res) {
    res.render('trackers/index', {
      trackers: Tracker.getAll(),
      title: 'Fitness Tracker'

    });
}
