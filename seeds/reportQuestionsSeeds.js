const { ReportQuestions } = require('../models');

const simmerQuestions = [
  {
    type: 'select',
    question: 'Was this a good day to be at this store?',
    choices: ['yes', 'no'],
  },
  {
    type: 'select',
    question: 'Were you able to connect with a team member?',
    choices: ['yes', 'no'],
  },
  {
    type: 'checkbox',
    question: 'Which of the following were you able to complete?',
    choices: [
      'neaten shelf',
      'shelf photo',
      'coupons on product',
      'ask about secondary placement',
    ],
  },
  {
    type: 'select',
    question: 'Is this store open to secondary placement?',
    choices: ['yes', 'no', 'N/A - was not able to speak to anyone'],
  },
];

const sasoQuestions = [
  {
    type: 'select',
    question: 'Was this a good day to be at this store?',
    choices: ['yes', 'no'],
  },
  {
    type: 'select',
    question: 'Were you able to connect with a team member?',
    choices: ['yes', 'no'],
  },
  {
    type: 'checkbox',
    question: 'Which of the following were you able to complete?',
    choices: ['neaten shelf', 'shelf photo', 'coupons on product'],
  },
];

const reportQuestionsData = [
  {
    questions: JSON.stringify(simmerQuestions),
    brand_id: 1,
  },
  {
    questions: JSON.stringify(sasoQuestions),
    brand_id: 2,
  },
];

const seedReportQuestions = () =>
  ReportQuestions.bulkCreate(reportQuestionsData);

module.exports = seedReportQuestions;
