const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Venue extends Model {}

Venue.init(
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
    address: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    address_components: {
      type: DataTypes.JSON,
    },
    geometry: {
      type: DataTypes.JSON,
    },
    region_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'region',
        key: 'id',
      },
    },
  },

  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'venue',
  }
);

module.exports = Venue;
