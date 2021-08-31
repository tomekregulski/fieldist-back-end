const { Region } = require('../models');

const regionData = [
  {
    name: 'Northeast',
  },
  {
    name: 'North Atlantic',
  },
  {
    name: 'Mid Atlantic',
  },
  {
    name: 'Southeast',
  },
  {
    name: 'Midwest',
  },
  {
    name: 'Southwest',
  },
  {
    name: 'Rocky Mountain',
  },
  {
    name: 'Pacific Northwest',
  },
  {
    name: 'Northern California',
  },
  {
    name: 'South Pacific',
  },
];

const seedRegions = () => Region.bulkCreate(regionData);

module.exports = seedRegions;
