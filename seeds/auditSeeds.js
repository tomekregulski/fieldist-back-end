const { Audit } = require('../models');

const auditData = [
  {
    date: '06/1/2021',
    venue_id: 1,
    campaign_id: 5,
    brand_id: 4,
    // "rep_id": 1,
    user_id: 2,
    report_template_id: 1,
  },
  {
    date: '06/3/2021',
    venue_id: 2,
    campaign_id: 5,
    brand_id: 4,
    // "rep_id": 2,
    user_id: 2,
    report_template_id: 1,
  },
  {
    date: '06/4/2021',
    venue_id: 2,
    campaign_id: 5,
    brand_id: 4,
    // "rep_id": 3,
    user_id: 3,
    report_template_id: 1,
  },
  {
    date: '06/5/2021',
    venue_id: 3,
    campaign_id: 5,
    brand_id: 4,
    // "rep_id": 4,
    user_id: 3,
    report_template_id: 1,
  },
  {
    date: '06/1/2021',
    venue_id: 1,
    campaign_id: 5,
    brand_id: 4,
    // "rep_id": 1,
    user_id: 2,
    report_template_id: 1,
  },
  {
    date: '06/3/2021',
    venue_id: 2,
    campaign_id: 5,
    brand_id: 4,
    // "rep_id": 2,
    user_id: 2,
    report_template_id: 1,
  },
  {
    date: '06/4/2021',
    venue_id: 2,
    campaign_id: 5,
    brand_id: 4,
    // "rep_id": 3,
    user_id: 3,
    report_template_id: 1,
  },
  {
    date: '06/5/2021',
    venue_id: 3,
    campaign_id: 5,
    brand_id: 4,
    // "rep_id": 4,
    user_id: 3,
    report_template_id: 1,
  },
];

const seedAudits = () => Audit.bulkCreate(auditData);

module.exports = seedAudits;
