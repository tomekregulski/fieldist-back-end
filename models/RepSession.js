const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class RepSession extends Model {}

RepSession.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    session_info: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'rep_session',
  }
);

module.exports = RepSession;
