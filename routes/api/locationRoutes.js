const router = require('express').Router();
const { Location, Traveler, Trips } = require('../../models');
//gets all locations
router.get('/', async (req, res) => {
  try {
    const locaData = await Location.findAll();
    res.status(200).json(locaData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// gets single location 
router.get('/:id', async (req, res) => {
  try {
    const locaData = await Location.findByPk(req.params.id, {
      include: [{ model: Traveler, through: Trips, as:'location_traveler' }]
    });

    if(!locaData) {
      res.status(404).json({ message: 'No location with that id found!' });
      return;
    }

    res.status(200).json(locaData);
  } catch (err) {
    res.status(500).json(err);
  }
});

//creates a location
router.post('/', async (req, res) => {
  try {
    const locaData = await Location.create(req.body);
    res.status(200).json(locaData);
  } catch (err) {
    res.status(400).json(err);
  }
});

//deletes single location
router.delete('/:id', async (req, res) => {
  try {
    const locaData = await Location.destroy({
      where: {
        id: req.params.id
      }
    });

    if(!locaData) {
      res.status(404).json({ message: 'No location with that id found!'
      });
      return;
    }

    res.status(200).json(locaData);
  } catch (err) {
    res.status(500).json(err);
  }
  });

module.exports = router;