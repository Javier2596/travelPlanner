const router = require('express').Router();
const { Trips } = require('../../models');

// Trips route created
router.post('/', async (req, res) => {
  try { 
    const tripsData = await Trips.create(req.body);
    res.status(200).json(tripsData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.delete('/:id', async (req, res) => {
  try {
    const tripsData = await Trips.destroy({
      where: { id: req.params.id }
    });
    if (!tripsData) {
      res.status(404).json({ message: 'No trips with that id!' });
      return;
    }
    res.status(200).json(tripsData)
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;