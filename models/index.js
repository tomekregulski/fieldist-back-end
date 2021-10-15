const ScheduledEvent = require('./ScheduledEvent');
const Campaign = require('./Campaign');
const Product = require('./Product');
const Region = require('./Region');
const ReportQuestions = require('./ReportQuestions');
const Venue = require('./Venue');
const Brand = require('./Brand');
const GeneralFieldReport = require('./GeneralFieldReport');
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

ReportQuestions.belongsTo(Brand, {
  foreignKey: 'brand_id',
});

Brand.hasMany(ReportQuestions, {
  foreignKey: 'brand_id',
});

ScheduledEvent.belongsTo(Campaign, {
  foreignKey: 'campaign_id',
});

Campaign.hasMany(ScheduledEvent, {
  foreignKey: 'campaign_id',
});

ScheduledEvent.belongsTo(Venue, {
  foreignKey: 'venue_id',
});

Venue.hasMany(ScheduledEvent, {
  foreignKey: 'venue_id',
});

Venue.belongsTo(Region, {
  foreignKey: 'region_id',
});

Region.hasMany(Venue, {
  foreignKey: 'region_id',
});

module.exports = {
  ScheduledEvent,
  RepSession,
  Campaign,
  Product,
  Region,
  ReportQuestions,
  Venue,
  Brand,
  GeneralFieldReport,
};
