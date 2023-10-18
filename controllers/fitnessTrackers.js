const fitnessTracker = require('../models/fitnessTracker');
const FitnessTracker = require('../models/fitnessTracker');


module.exports = {
    index,
    show,
    new: newFitnessTrackers,
    create,
    deleteTracker,
    editTracker,
    updatedTracker
  };

  async function index(req, res) {
    const fitnessTrackers = await FitnessTracker.find({});
    console.log(fitnessTrackers)
    res.render('fitnessTrackers/index', {indexTrackers: fitnessTrackers});
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
  
  }
// findByIdAndDelete from mongoose site
  async function deleteTracker(req, res) {
    const id = req.params.id
    await FitnessTracker.findByIdAndDelete(id)
    res.redirect('/fitnessTrackers')
  }

  async function editTracker(req, res) {
    const fitnessTracker = FitnessTracker.getOne(req.params.id)
    res.render('fitnessTrackers/edit', {
      title: 'Edit Fitness-Trackers',
      fitnessTracker
    })
  }

  async function updatedTracker(req, res) {
    try {
      const updatedTracker = await fitnessTracker.findOneAndUpdate(
        {_id: req.params.id, userRecommending: req.user._id},
        // update object with updated properties
        req.body,
        // options object {new: true} returns updated doc
        {new: true}
      );
      return res.redirect(`/fitnessTrackers/${updatedTracker._id}`);
    } catch (error) {
      console.log(error.message);
      return res.redirect('/fitnessTrackers');
    }
  }