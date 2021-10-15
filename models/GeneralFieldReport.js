const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class GeneralFieldReport extends Model {}

GeneralFieldReport.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    date: {
      type: DataTypes.STRING,
    },
    time: {
      type: DataTypes.STRING,
    },
    location: {
      type: DataTypes.STRING,
    },
    brand: {
      type: DataTypes.STRING,
    },
    form: {
      type: DataTypes.STRING,
    },
    user_name: {
      type: DataTypes.STRING,
    },
    user_id: {
      type: DataTypes.INTEGER,
    },
    response: {
      type: DataTypes.JSON,
    },
    inventory: {
      type: DataTypes.JSON,
    },
    photos: {
      type: DataTypes.STRING,
    },
    expenses: {
      type: DataTypes.JSON,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'intelly_general_report',
  }
);

module.exports = GeneralFieldReport;
