var express = require('express');
var router = express.Router();

// Require the controller that exports To-Do CRUD functions
var trackersCtrl = require('../controllers/trackers');
const ensureLoggedIn = require('../config/ensureLoggedIn');


// GET /tracker
router.get('/trackers', ensureLoggedIn, trackersCtrl.index);

// post

module.exports = router;
