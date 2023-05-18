var express = require('express');
var router = express.Router();

// Require the controller that exports To-Do CRUD functions
var routinesCtrl = require('../controllers/routines');
var ensureLoggedIn = require('../config/ensureLoggedIn');


router.get('/', routinesCtrl.index);

// GET /routines
router.get('/new', ensureLoggedIn, routinesCtrl.new);

// GET /routines/:id
router.get('/:id', routinesCtrl.show);

router.post('/', ensureLoggedIn, routinesCtrl.create);

router.delete('/:id', ensureLoggedIn, routinesCtrl.delete);

module.exports = router;
