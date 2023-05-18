const express = require('express');
const router = express.Router();
const exercisesCtrl = require('../controllers/exercises');

// POST /routines/:id/reviews (create review for a routine)
router.post('/routines/:id/exercises', exercisesCtrl.create);
// DELETE /exercises
router.delete('/exercises/:id', exercisesCtrl.delete);

module.exports = router;