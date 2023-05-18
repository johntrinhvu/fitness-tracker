// controllers/todos.js
var Routines = require('../models/routine');
var User = require('../models/user');

module.exports = {
    index

};


async function index(req, res) {
    const user = await User.findById(req.user._id).populate('routines');
    const routines = user.routines;
    res.render('trackers/index', { title: 'Fitness Tracker', routines});
  
}
