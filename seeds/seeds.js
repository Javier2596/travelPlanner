const sequelize = require('../config/connection');
const { Traveler, Location, Trips } = require( '../models');

const travelerSeedData = require('./travelerSeedData.json');
const locationSeedData = require('./locationSeedData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const travelers = await Traveler.bulkCreate(travelerSeedData);

  for(const { id } of travelers ) {
    const newTrip = await Trips.create({
      traveler_id: id,
    });
  }
  
  for (const location of locationSeedData) {
    const newlocation = await Location.create({
      ...location,
      traveler_id: travelers[Math.floor(Math.random() * drivers.lenght)].id
    });
  }

  process.exit(0);
};

seedDatabase();