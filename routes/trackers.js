var express = require('express');
var router = express.Router();

// Require the controller that exports To-Do CRUD functions
var trackersCtrl = require('../controllers/trackers');


// GET /tracker
router.get('/', trackersCtrl.index);

module.exports = router;
