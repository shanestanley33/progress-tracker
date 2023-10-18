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
    res.render('fitnessTrackers/new');
  }
  
  async function create(req, res) {
  FitnessTracker.create(req.body);
  console.log(req.body)
  res.redirect('/fitnessTrackers')
  
  };