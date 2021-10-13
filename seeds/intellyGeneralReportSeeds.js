const { IntellyGeneralReport } = require('../models');

const intellyGeneralReport = {
  general:
    "brand: 'Simmer' campaign: 'campaign' date: 'date' location: 'Whole Foods Market - Upper West Side' time: 'time'",
  inventory: "classic: '14' garlic: '23'",
  response:
    'Is this store open to secondary placement?: "N/A - was not able to speak to anyone" Was this a good day to be at this store?: "no" Were you able to connect with a team member?: "no" neaten shelf: true"',
  photos: '[asdfghgfd, asdfghgfdsa, asdfghjhgfds]',
  expenses:
    "expenseType: 'Travel - Distance', expenseAmount: '12', expenseNotes: 'wedrfg'",
};

const seedIntellyGeneralReport = () =>
  IntellyGeneralReport.bulkCreate(intellyGeneralReport);

module.exports = seedIntellyGeneralReport;
