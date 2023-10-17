const express = require('express');
const router = express.Router();

const fitnessTrackersCtrl = require('../controllers/fitnessTrackers');
const ensureLoggedIn = require('../config/ensureLoggedIn');
	
// GET /trackers
router.get('/', fitnessTrackersCtrl.index);
// GET /trackers/new
router.get('/new', ensureLoggedIn, fitnessTrackersCtrl.new);
// GET /trackers/:id (show functionality) MUST be below new route
router.get('/:id', fitnessTrackersCtrl.show);
// POST /trackers
router.post('/', ensureLoggedIn, fitnessTrackersCtrl.create);

module.exports = router;