const Demo = require('./Demo');
const Admin = require('./Admin');
const BrandContact = require('./BrandContact');
const Campaign = require('./Campaign');
const Product = require('./Product');
const Region = require('./Region');
const Rep = require('./Rep');
const ReportTemplate = require('./ReportTemplate');
const Venue = require('./Venue');
const Brand = require('./Brand');
const Audit = require('./Audit');
const User = require('./User');

// const CampaignProduct = require('./CampaignProduct');

Product.belongsTo(Brand, {
  foreignKey: 'brand_id',
});

Brand.hasMany(Product, {
  foreignKey: 'brand_id',
});

Campaign.belongsTo(Brand, {
  foreignKey: 'brand_id',
});

Brand.hasMany(Campaign, {
  foreignKey: 'brand_id',
});

BrandContact.belongsTo(Brand, {
  foreignKey: 'brand_id',
});

Brand.hasOne(BrandContact, {
  foreignKey: 'brand_id',
});

Demo.belongsTo(ReportTemplate, {
  foreignKey: 'report_template_id',
});

ReportTemplate.hasMany(Demo, {
  foreignKey: 'report_template_id',
});

Audit.belongsTo(ReportTemplate, {
  foreignKey: 'report_template_id',
});

ReportTemplate.hasMany(Audit, {
  foreignKey: 'report_template_id',
});

// Campaign.hasMany(CampaignProduct, {
//   foreignKey: 'campaign_id',
// });

// CampaignProduct.belongsTo(Campaign, {
//   foreignKey: 'campaign_id',
// });

// Campaign.belongsToMany(Product, {
//   through: "campaign_products",
//   as: "products",
//   foreignKey: "campaign_id"
// });

// Product.belongsToMany(Campaign, {
//   through: "campaign_products",
//   as: "campaigns",
//   foreignKey: "product_id"
// })

Demo.belongsTo(Campaign, {
  foreignKey: 'campaign_id',
});

Campaign.hasMany(Demo, {
  foreignKey: 'campaign_id',
});

Demo.belongsTo(Venue, {
  foreignKey: 'venue_id',
});

Venue.hasMany(Demo, {
  foreignKey: 'venue_id',
});

Demo.belongsTo(Rep, {
  foreignKey: 'rep_id',
});

Rep.hasMany(Demo, {
  foreignKey: 'rep_id',
});

Audit.belongsTo(Campaign, {
  foreignKey: 'campaign_id',
});

Campaign.hasMany(Audit, {
  foreignKey: 'campaign_id',
});

Audit.belongsTo(Venue, {
  foreignKey: 'venue_id',
});

Venue.hasMany(Audit, {
  foreignKey: 'venue_id',
});

Audit.belongsTo(Rep, {
  foreignKey: 'rep_id',
});

Rep.hasMany(Audit, {
  foreignKey: 'rep_id',
});

Audit.belongsTo(User, {
  foreignKey: 'user_id',
});

User.hasMany(Audit, {
  foreignKey: 'user_id',
});

Demo.belongsTo(User, {
  foreignKey: 'user_id',
});

User.hasMany(Demo, {
  foreignKey: 'user_id',
});

User.belongsTo(Brand, {
  foreignKey: 'user_id',
});

Brand.hasOne(User, {
  foreignKey: 'user_id',
});

Venue.belongsTo(Region, {
  foreignKey: 'region_id',
});

Region.hasMany(Venue, {
  foreignKey: 'region_id',
});

// Demo.hasOne(ReportTemplate, {
//   foreignKey: 'demo_id',
// });

// Audit.hasOne(ReportTemplate, {
//   foreignKey: 'audit_id',
// });

module.exports = {
  Demo,
  Audit,
  BrandContact,
  // CampaignProduct,
  Campaign,
  Product,
  Region,
  Rep,
  ReportTemplate,
  Venue,
  Brand,
  Admin,
  User,
};
