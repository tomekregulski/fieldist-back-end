const seedRegions = require('./regionSeeds');
const seedBrands = require('./brandSeeds');
const seedProducts = require('./productSeeds');
const seedReportQuestions = require('./reportQuestionsSeeds');
// const seedCampaigns = require('./campaignSeeds');
const seedRepSession = require('./repSessionSeeds');
const seedVenues = require('./venueSeeds');
// const seedScheduledEventss = require('./scheduledEventSeeds');
const seedGeneralFieldReport = require('./generalFieldReportSeeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');

  await seedRegions();
  console.log('\n----- REGIONS SEEDED -----\n');

  await seedVenues();
  console.log('\n----- VENUES SEEDED -----\n');

  await seedBrands();
  console.log('\n----- BRANDS SEEDED -----\n');

  await seedProducts();
  console.log('\n----- PRODUCTS SEEDED -----\n');

  await seedReportQuestions();
  console.log('\n----- REPORT QUESTIONS SEEDED -----\n');

  // await seedCampaigns();
  // console.log('\n----- CAMPAIGNS SEEDED -----\n');

  await seedGeneralFieldReport();
  console.log('\n----- GENERAL FIELD REPORTS SEEDED -----\n');

  // await seedScheduledEventss();
  // console.log('\n----- SCHEDULED EVENTS SEEDED -----\n');

  await seedRepSession();
  console.log('\n----- REP SESSIONS SEEDED -----\n');

  process.exit(0);
};

seedAll();
