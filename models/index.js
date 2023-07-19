const Traveler = require('./traveler');
const Location = require('./location');
const Trips = require('./trips');

Location.belongsToMany(Traveler, { 
  through: 'trips',
  unique: false,
});
Traveler.belongsToMany(Location, { 
  through: 'trips',
  unique: false,
});

module.exports = { Traveler, Location, Trips };