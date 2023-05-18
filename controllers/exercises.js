const Routine = require('../models/routine');
const Exercise = require('../models/exercise');

module.exports = {
  create,
  delete: deleteExercise,
  edit,

};

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

async function deleteExercise(req, res) {
  // Note the cool "dot" syntax to query on the property of a subdoc
  const routine = await Routine.findOne({ 'exercises._id': req.params.id, 'exercises.user': req.user._id });
  // Rogue user!
  if (!routine) return res.redirect('/');
  // Remove the review using the remove method available on Mongoose arrays
  routine.exercises.remove(req.params.id);
  // Save the updated movie doc
  await routine.save();
  // Redirect back to the routine tracker's show view
  res.redirect(`/routines/${routine._id}`);

}

async function edit(req, res) {
    // Retrieves a specific sneaker from the database based on the provided ID
    const exercise = await Exercise.findById(req.params.id);
    res.render("exercises/edit", { title: "Edit exercise", exercise });
  }