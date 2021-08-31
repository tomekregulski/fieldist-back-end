const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class ReportTemplate extends Model {}

ReportTemplate.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
    },
    sales: {
      type: DataTypes.INTEGER,
    },
    interactions: {
      type: DataTypes.INTEGER,
    },
    overall: {
      type: DataTypes.INTEGER,
    },
    comments: {
      type: DataTypes.STRING(500),
    },
    check_in: {
      type: DataTypes.JSON,
      defaultValue: '',
    },
    check_out: {
      type: DataTypes.STRING,
    },
    photos: {
      type: DataTypes.JSON,
    },
    admin_review: {
      type: DataTypes.BOOLEAN,
      // dropdown
    },
    admin_rating: {
      type: DataTypes.INTEGER,
      // stars only visible to admin
    },
    admin_comments: {
      type: DataTypes.STRING,
      // textarea
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'report_template',
  }
);

module.exports = ReportTemplate;
