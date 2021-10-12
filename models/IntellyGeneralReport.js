const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class IntellyGeneralReport extends Model {}

IntellyGeneralReport.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    general: {
      type: DataTypes.STRING,
    },
    inventory: {
      type: DataTypes.STRING,
    },
    response: {
      type: DataTypes.STRING,
    },
    photos: {
      type: DataTypes.STRING,
    },
    expenses: {
      type: DataTypes.STRING,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'intelly_general_report',
  }
);

module.exports = IntellyGeneralReport;
