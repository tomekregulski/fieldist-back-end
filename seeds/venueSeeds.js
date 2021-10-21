const { Venue } = require('../models');

const venueData = [
  {
    name: 'TEST - Do Not Use',
    street_address: '226 E 57th St',
    city: 'New York',
    state: 'NY',
    postal_code: '10022',
    region_id: 1,
  },
];

const seedVenues = () => Venue.bulkCreate(venueData);

module.exports = seedVenues;
