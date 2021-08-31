const { Campaign } = require('../models');

const campaignData = [
  {
    name: "Sir Kensington's Demos",
    brand_id: 1,
    // report_template_id: 1,
  },
  {
    name: 'Bowery Farming Demos',
    brand_id: 2,
    // report_template_id: 1,
  },
  {
    name: 'Simmer Demos',
    brand_id: 3,
    // report_template_id: 1,
  },
  {
    name: 'Saso Demos',
    brand_id: 4,
    // report_template_id: 1,
  },
  {
    name: 'Saso Audits',
    brand_id: 4,
    // report_template_id: 1,
  },
];

const seedCampaigns = () => Campaign.bulkCreate(campaignData);

module.exports = seedCampaigns;
