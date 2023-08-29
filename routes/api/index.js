const router = require('express').Router();
const travelerRoutes = require('./travelerRoutes');
const locationRoutes = require('./locationRoutes');
const tripsRoutes = require('./tripsRoutes');

router.use('/travelers', travelerRoutes);
router.use('/locations', locationRoutes);
router.use('/trips', tripsRoutes);

module.exports = router; 