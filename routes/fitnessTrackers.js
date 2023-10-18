const express = require('express');
const router = express.Router();

const fitnessTrackersCtrl = require('../controllers/fitnessTrackers');
const ensureLoggedIn = require('../config/ensureLoggedIn');
	
// GET /fitnessTrackers
router.get('/', fitnessTrackersCtrl.index);
// GET /fitnessTrackers/new
router.get('/new', ensureLoggedIn, fitnessTrackersCtrl.new);
// GET /fitnessTrackers/:id (show functionality) MUST be below new route
router.get('/:id', fitnessTrackersCtrl.show);
// GET /fitnessTrackers/:id/edit
router.get('/:id/edit', ensureLoggedIn, fitnessTrackersCtrl.edit)
// POST /fitnessTrackers
router.post('/', ensureLoggedIn, fitnessTrackersCtrl.create);
// DELETE /:id
router.delete('/:id', ensureLoggedIn, fitnessTrackersCtrl.deleteTracker)
// PUT /fitnessTrackers/:id
router.put('/:id', ensureLoggedIn, fitnessTrackersCtrl.update)
module.exports = router;