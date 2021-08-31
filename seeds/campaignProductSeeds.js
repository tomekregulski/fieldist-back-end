const { CampaignProduct } = require('../models');

const campaignProductData = [
  {
    product_id: 1,
    campaign_id: 1,
  },
];

const seedCampaignProducts = () =>
  CampaignProduct.bulkCreate(campaignProductData);

module.exports = seedCampaignProducts;
