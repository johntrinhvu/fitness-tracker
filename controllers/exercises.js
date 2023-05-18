const Routine = require('../models/routine');
const Exercise = require('../models/exercise');

module.exports = {
  create,
  delete: deleteExercise
};

async function deleteExercise(req, res) {
  // Note the cool "dot" syntax to query on the property of a subdoc
  const routine = await Routine.findOne({ 'exercises._id': req.params.id, 'exercises.user': req.user._id });
  // Rogue user!
  if (!routine) return res.redirect('/');
  // Remove the review using the remove method available on Mongoose arrays
  routine.exercises.remove(req.params.id);
  // Save the updated movie doc
  await routine.save();
  // Redirect back to the movie's show view
  res.redirect(`/routines/${routine._id}`);
}

async function create(req, res) {
  const routine = await Routine.findById(req.params.id);
  const exercise = await Exercise.create(req.body);
  // We can push (or unshift) subdocs into Mongoose arrays
  routine.exercises.push(exercise);
  try {
    // Save any changes made to the movie doc
    await routine.save();
  } catch (err) {
    console.log(err);
  }
  res.redirect(`/routines/${routine._id}`);
}