const router = require('express').Router();
const { Traveler, Location, Trips } = require('../../models');

//GET all travelers
router.get('/', async( req, res) => {
  try {
    const travelerData = await Traveler.findAll({
      include: [{ model: Location }, { model: Trips }],
    });
    res.status(200).json(travelerData);
  } catch (err) {
    res.status(500).json(err);
  }
}); 

//GET a single Traveler

router.get('/:id', async (req, res) => {
  try {
    const travelerData = await Traveler.findByPk(req.params.id, {
      include: [{ model: Location, through: Trips, as: 'planned_trip' }],
    });

    if(!travelerData) {
      res.status(404).json({ message: 'No traveler found with that id!' });
      return;
    }

    res.status (200).json(travelerData);
  } catch (err) {
    res.status(500).json(err);
  }
});
// Creates single traveler
router.post('/', async (req, res) =>{
  try {
    const travelerData = await Traveler.create(req.body);
    res.status(200).json(travelerData);
  } catch (err) {
    res.status(400).json(err);
  }
});

//Deletes single traveler
router.delete('/:id', async(req, res) => {
  try {
    const travelerData = await Traveler.destroy({
      where: {
        id: req.params.id
      }
    });

    if(!travelerData) {
      res.status(404).json({ message: 'No traveler found with that id.'});
      return;
    }

    res.status(200).json(travelerData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;