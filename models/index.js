const Traveler = require('./traveler');
const Location = require('./location');
const Trips = require('./trips');

Location.belongsToMany(Traveler, { 
  through: {
    model: Trips,
    unique: false
  },
  // alias to retrieve data
  as: 'location_traveler'
});
Traveler.belongsToMany(Location, { 
  through: {
    model: Trips,
    unique: false
  },
  as: 'planned_trips'
});

module.exports = { Traveler, Location, Trips };