const express = require('express');
const router = express.Router();

const trackersCtrl = require('../controllers/trackers');
const ensureLoggedIn = require('../config/ensureLoggedIn');
	
// GET /trackers
router.get('/', trackersCtrl.index);
// GET /trackers/new
router.get('/new', ensureLoggedIn, trackersCtrl.new);
// GET /trackers/:id (show functionality) MUST be below new route
router.get('/:id', trackersCtrl.show);
// POST /trackers
router.post('/', ensureLoggedIn, trackersCtrl.create);

module.exports = router;