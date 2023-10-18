const FitnessTracker = require('../models/fitnessTracker');


module.exports = {
    index,
    show,
    new: newFitnessTrackers,
    create
  };

  async function index(req, res) {
    const fitnessTrackers = await FitnessTracker.find({});
    res.render('fitnessTrackers/index', {indextracker: fitnessTrackers});
  }
  
  async function show(req, res) {
    const fitnessTracker = await FitnessTracker.findById(req.params.id).populate('cast');
  }
  
  function newFitnessTrackers(req, res) {
    res.render('newFitnessTrackers/new', { newFitnessTracker: 'Add new Fitness Trackers', errorMsg: '' });
  }
  
  async function create(req, res) {
   const newFitnessTracker = new newFitnessTracker(req.body);

  };