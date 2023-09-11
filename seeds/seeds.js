const sequelize = require('../config/connection');
const { Traveler, Location, Trips } = require( '../models');

const travelerSeedData = require('./travelerSeedData.json');
const locationSeedData = require('./locationSeedData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });

  const travelers = await Traveler.bulkCreate(travelerSeedData);

  for(let i = 0; i < 5; i++) {
    const { id: randomTravelerId } = travelers[
      Math.floor(Math.random() * travelers.length)
    ];

    const { id: randomLocationId } = locations[
      Math.floor(Math.random() * locations.length)
    ];

    await Trips.create({
      trip_budget: (Math.random() * 1000 + 1000).toFixed(2),
      traveler_amount: Math.floor(Math.random() *10) + 1,
      traveler_id: randomTravelerId,
      location_id: randomLocationId
    }).catch((err) => {
      console.log(err);
    });
  }

  process.exit(0);
};

seedDatabase();