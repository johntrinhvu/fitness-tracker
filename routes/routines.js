var express = require('express');
var router = express.Router();

// Require the controller that exports To-Do CRUD functions
var routinesCtrl = require('../controllers/routines');


router.get('/', routinesCtrl.index);

// GET /routines
router.get('/new', routinesCtrl.new);

// GET /routines/:id
router.get('/:id', routinesCtrl.show);

router.post('/', routinesCtrl.create);

module.exports = router;
