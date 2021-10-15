const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class ScheduledEvent extends Model {}

ScheduledEvent.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    // type: {
    //   type: DataTypes.STRING,
    //   allowNull: false,
    //   defaultValue: 'demo',
    // },
    status: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue: 'Scheduled',
    },
    date: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    start_time: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    duration: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    venue_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'venue',
        key: 'id',
      },
    },
    campaign_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      references: {
        model: 'campaign',
        key: 'id',
      },
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
    modelName: 'scheduled_event',
  }
);

module.exports = ScheduledEvent;
