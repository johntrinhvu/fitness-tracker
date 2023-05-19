const express = require('express');
const router = express.Router();
const exercisesCtrl = require('../controllers/exercises');
const ensureLoggedIn = require('../config/ensureLoggedIn');

// POST /routines/:id/reviews (create review for a routine)
router.post('/routines/:id/exercises', ensureLoggedIn, exercisesCtrl.create);
// DELETE /exercises
router.delete('/exercises/:id', ensureLoggedIn, exercisesCtrl.delete);

// GET /exercises/:id/new
router.get('/exercises/:id/new', ensureLoggedIn, exercisesCtrl.new);

// EDIT /exercises
router.get('/exercises/:id/edit', ensureLoggedIn, exercisesCtrl.edit);

// UPDATE /exercises
router.put('/exercises/:id', ensureLoggedIn, exercisesCtrl.update);

module.exports = router;