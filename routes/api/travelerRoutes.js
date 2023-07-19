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
      include: [{ model: Location}, { model: Trips }],
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

module.exports = router;