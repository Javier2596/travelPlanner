const router = require('express').Router();
const travelerRoutes = require('./travelers');
const locationRoutes = require('./locations');
const tripsRoutes = require('./trips');

router.use('/travelers', travelerRoutes);
router.use('/locations', locationRoutes);
router.use('/trips', tripsRoutes);

module.exports = router; 