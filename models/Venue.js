// const { Model, DataTypes } = require('sequelize');
// const sequelize = require('../config/connection');

// class Venue extends Model {}

// Venue.init(
//   {
//     id: {
//       type: DataTypes.INTEGER,
//       allowNull: false,
//       primaryKey: true,
//       autoIncrement: true,
//     },
//     name: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     address: {
//       type: DataTypes.STRING,
//       allowNull: false,
//     },
//     address_components: {
//       type: DataTypes.JSON,
//     },
//     geometry: {
//       type: DataTypes.JSON,
//     },
//     region_id: {
//       type: DataTypes.INTEGER,
//       allowNull: true,
//       references: {
//         model: 'region',
//         key: 'id',
//       },
//     },
//   },

//   {
//     sequelize,
//     freezeTableName: true,
//     underscored: true,
//     modelName: 'venue',
//   }
// );

// module.exports = Venue;

const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const axios = require('axios');

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
      // allowNull: false,
    },
    street_address: {
      type: DataTypes.STRING,
      // allowNull: false,
    },
    city: {
      type: DataTypes.STRING,
      // allowNull: false,
    },
    state: {
      type: DataTypes.STRING,
      // allowNull: false,
    },
    postal_code: {
      type: DataTypes.STRING,
      // allowNull: false,
    },
    coords: {
      type: DataTypes.JSON,
      allowNull: true,
    },
    region_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'region',
        key: 'id',
      },
    },
  },
  {
    hooks: {
      beforeCreate: async (venueData) => {
        let fullAddress =
          venueData.street_address.split(' ') +
          ',' +
          venueData.city.split(' ') +
          ',' +
          venueData.state +
          ',' +
          venueData.postal_code;

        fullAddress = fullAddress.split(',').join('%20');

        const data = await axios({
          url: `https://api.mapbox.com/geocoding/v5/mapbox.places/${fullAddress}.json?access_token=${process.env.MAPBOX_API_KEY}`,
          method: 'get',
        });
        const coordinates = data.data.features[0].center;
        const lat = coordinates[1];
        const lon = coordinates[0];

        venueData.coords = lat.toString() + ', ' + lon.toString();
        return venueData;
      },
    },
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'venue',
  }
);

module.exports = Venue;
