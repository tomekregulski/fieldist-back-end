const { GeneralFieldReport } = require('../models');

const generalFieldReport = {
  date: 'test',
  time: 'test',
  location: 'test',
  brand: 'test',
  form: 'test',
  user_name: 'test',
  user_id: 'test',
  inventory: "classic: '14' garlic: '23'",
  response:
    'Is this store open to secondary placement?: "N/A - was not able to speak to anyone" Was this a good day to be at this store?: "no" Were you able to connect with a team member?: "no" neaten shelf: true"',
  photos: '[asdfghgfd, asdfghgfdsa, asdfghjhgfds]',
  expenses:
    "expenseType: 'Travel - Distance', expenseAmount: '12', expenseNotes: 'wedrfg'",
};

const seedGeneralFieldReport = () =>
  GeneralFieldReport.bulkCreate(generalFieldReport);

module.exports = seedGeneralFieldReport;
