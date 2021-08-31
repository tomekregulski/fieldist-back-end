const { Venue } = require('../models');

const venueData = [
  {
    name: 'Whole Foods Market, East 57th Street, New York, NY, USA',
    address: '226 E 57th St, New York, NY 10022, USA',
    address_components: [
      { long_name: '226', short_name: '226' },
      { long_name: 'East 57th Street', short_name: 'E 57th St' },
      { long_name: 'Manhattan', short_name: 'Manhattan' },
      { long_name: 'New York', short_name: 'New York' },
      { long_name: 'New York County', short_name: 'New York County' },
      { long_name: 'New York', short_name: 'New York' },
      { long_name: 'United States', short_name: 'US' },
      { long_name: '10022', short_name: '10022' },
    ],
    geometry: {
      lat: 40.7593039,
      lng: -73.9663868,
    },
    region_id: 1,
  },
  {
    name: 'Whole Foods Market, Somerset Street, Portland, ME, USA',
    address: '2 Somerset St, Portland, ME 04101, USA',
    address_components: [
      { long_name: '2', short_name: '2' },
      { long_name: 'Somerset Street', short_name: 'Somerset St' },
      { long_name: 'West Bayside', short_name: 'West Bayside' },
      { long_name: 'Portland', short_name: 'Portland' },
      { long_name: 'Cumberland County', short_name: 'Cumberland County' },
      { long_name: 'Maine', short_name: 'ME' },
      { long_name: 'United States', short_name: 'US' },
      { long_name: '04101', short_name: '04101' },
    ],
    geometry: {
      lat: 43.66352,
      lng: -70.25863,
    },
    region_id: 2,
  },
  {
    name: 'Whole Foods Market, Woodglen Drive, Rockville, MD, USA',
    address: '11355 Woodglen Dr, Rockville, MD 20852, USA',
    address_components: [
      { long_name: '11355', short_name: '11355' },
      { long_name: 'Woodglen Dr', short_name: 'Woodglen Dr' },
      { long_name: 'Rockville', short_name: 'Rockville' },
      { long_name: 'Montgomery County', short_name: 'Montgomery County' },
      { long_name: 'Maryland', short_name: 'MD' },
      { long_name: 'United States', short_name: 'US' },
      { long_name: '20852', short_name: '20852' },
    ],
    geometry: {
      lat: 39.04298,
      lng: -77.11271,
    },
    region_id: 3,
  },
];

const seedVenues = () => Venue.bulkCreate(venueData);

module.exports = seedVenues;
