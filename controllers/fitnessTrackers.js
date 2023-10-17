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
    // Populate the cast array with performer docs instead of ObjectIds
    const fitnessTracker = await FitnessTracker.findById(req.params.id).populate('cast');
  }
  
  function newFitnessTrackers(req, res) {
    // We'll want to be able to render an  
    // errorMsg if the create action fails
    res.render('newFitnessTrackers/new', { newFitnessTracker: 'Add new Fitness Trackers', errorMsg: '' });
  }
  
  async function create(req, res) {
   const newFitnessTracker = new newFitnessTracker(req.body);

  };