const { Model, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const sequelize = require('../config/connection');

class Traveler extends Model {}
// added traveler model to include id, name, email with attributes for this data
Traveler.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        isEmail: true,
      },
    },
},
// placed hooks to with hashing and salt for better security
{
  hooks: {
    beforeCreate: async (newTraveler) => {
      try {
        newTraveler.password = await bcrypt.hash(newTraveler.password, 10);
        return newTraveler;
      } catch (err) {
        console.log(err);
        return err;
      }
    },
    beforeUpdate: async (updatedTraveler) => {
      try {
        updatedTraveler.password = await bcrypt.hash(
          updatedTraveler.password, 10);
        return updatedTraveler;
      } catch (err) {
        console.log(err);
        return err;
      }
    },
  },
  sequelize, 
  timestamps: false,
  freezeTableName: true,
  underscored: true,
  modelName: 'traveler' , 
 }
);

module.exports = Traveler;