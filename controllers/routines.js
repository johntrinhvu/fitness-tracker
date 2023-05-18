const Routine = require('../models/routine');
const Exercise = require('../models/exercise');
const User = require('../models/user');

module.exports = {
    index,
    new: newRoutine,
    show,
    create,

}

async function index(req, res) {
    res.render('routines/index', { title: 'All Routines' });
}

async function newRoutine(req, res) {
    res.render('routines/new', { title: 'Add a Routine'});

}

async function show(req, res) {
    const routine = await Routine.findById(req.params.id).populate('exercises');
    // const exercises = await Exercise.find({ _id: { $nin: routine.exercises } }).sort('exerciseName');
    res.render('routines/show', { title: 'Routine Specifics' , routine});
}

async function create(req, res) {
    for (let key in req.body) {
      if (req.body[key] === '') delete req.body[key];
    }
    try {
      // Update this line because now we need the _id of the new movie
      const routine = await Routine.create(req.body);
      const user = await User.findById(req.user._id);
      user.routines.push(routine);
      await user.save();
      // Redirect to the new movie's show functionality 
      res.redirect(`/routines/${routine._id}`);
    } catch (err) {
      // Typically some sort of validation error
      console.log(err);
      res.render('routines/new', { errorMsg: err.message });
    }
  }