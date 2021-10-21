const { ReportQuestions } = require('../models');

const simmerQuestions = [
  {
    type: 'select',
    question: 'Were you able to connect with a team member?',
    choices: ['yes', 'no'],
  },
  {
    type: 'checkbox',
    question: 'Which of the following were you able to complete?',
    choices: [
      'Tidy up the shelf',
      'Take a photo of the full shelf section',
      'Place coupons on product',
    ],
  },
  {
    type: 'select',
    question:
      'Did every SKU have a price tag? If not, please include a close-up photo(s) that clearly shows any missing tags',
    choices: ['yes', 'no'],
  },
];

const sasoQuestions = [
  {
    type: 'select',
    question: 'Were you able to connect with a team member?',
    choices: ['yes', 'no'],
  },
  {
    type: 'checkbox',
    question: 'Which of the following were you able to complete?',
    choices: [
      'Tidy up the shelf',
      'Take a photo of the full shelf section',
      'Place coupons on product',
    ],
  },
  {
    type: 'select',
    question:
      'Did every SKU have a price tag? If not, please include a close-up photo(s) that clearly shows any missing tags',
    choices: ['yes', 'no'],
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
