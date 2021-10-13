const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class ReportQuestions extends Model {}

ReportQuestions.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    questions: {
      type: DataTypes.TEXT,
    },
    brand_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'brand',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'report_questions',
  }
);

module.exports = ReportQuestions;
