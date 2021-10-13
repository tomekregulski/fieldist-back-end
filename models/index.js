const Demo = require('./Demo');
const Admin = require('./Admin');
const BrandContact = require('./BrandContact');
const Campaign = require('./Campaign');
const Product = require('./Product');
const Region = require('./Region');
const Rep = require('./Rep');
const ReportQuestions = require('./ReportQuestions');
const Venue = require('./Venue');
const Brand = require('./Brand');
const User = require('./User');
const IntellyGeneralReport = require('./IntellyGeneralReport');
const RepSession = require('./RepSession');

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

ReportQuestions.belongsTo(Brand, {
  foreignKey: 'brand_id',
});

Brand.hasMany(ReportQuestions, {
  foreignKey: 'brand_id',
});

RepSession.belongsTo(User, {
  foreignKey: 'user_id',
});

User.hasMany(RepSession, {
  foreignKey: 'user_id',
});

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

module.exports = {
  Demo,
  BrandContact,
  // CampaignProduct,
  RepSession,
  Campaign,
  Product,
  Region,
  Rep,
  ReportQuestions,
  Venue,
  Brand,
  Admin,
  User,
  IntellyGeneralReport,
};
