const router = require('express').Router();
const travelerRoutes = require('./travelers');

router.use('/travelers', travelerRoutes);

module.exports = router; 