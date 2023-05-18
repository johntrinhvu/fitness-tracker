const express = require('express');
const router = express.Router();
const exercisesCtrl = require('../controllers/exercises');
const ensureLoggedIn = require('../config/ensureLoggedIn');

// POST /routines/:id/reviews (create review for a routine)
router.post('/routines/:id/exercises', ensureLoggedIn, exercisesCtrl.create);
// DELETE /exercises
router.delete('/exercises/:id', ensureLoggedIn, exercisesCtrl.delete);

module.exports = router;