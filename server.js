const express = require('express');
const routes = require('./routes');
const sequelize = require('./config/connection');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//turns on the routes
app.use(routes);

// establishes connection to db & server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now Listening'));
});