const Traveler = require('./traveler');
const Location = require('./location');
const Trips = require('./trips');

Location.belongsToMany(Traveler, { 
  through: {
    model: Trips,
    unique: false
  },
  // alias to retrieve data
  as: 'planned_trips'
});
Traveler.belongsToMany(Location, { 
  through: {
    model: Trips,
    unique: false
  },
  as: 'location_traveler'
});

module.exports = { Traveler, Location, Trips };