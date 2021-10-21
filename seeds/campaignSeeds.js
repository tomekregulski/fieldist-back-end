const { Campaign } = require('../models');

const campaignData = [
  {
    name: "Sir Kensington's Demos",
    brand_id: 1,
  },
  {
    name: 'Bowery Farming Demos',
    brand_id: 2,
  },
  {
    name: 'Simmer Demos',
    brand_id: 3,
  },
  {
    name: 'Saso Demos',
    brand_id: 4,
  },
  {
    name: 'Saso Audits',
    brand_id: 4,
  },
];

const seedCampaigns = () => Campaign.bulkCreate(campaignData);

module.exports = seedCampaigns;
