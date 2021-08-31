const { ReportTemplate } = require('../models');

const reportTemplateData = [
  {
    name: 'test',
    sales: 38,
    interactions: 80,
    overall: 4,
    comments: 'Evenrything was awesome',
    check_in: {
      location: '',
      timestamp: '',
    },
    check_out: 0,
    photos: {
      images: [],
    },
  },
  {
      sales: 15,
      interactions: 65,
      overall: 4,
      comments: "This was a great event",
      check_in: {
      location: '',
      timestamp: '',
    },
    check_out: 0,
    photos: {
      images: [],
    },
  },
  {
      sales: 14,
      interactions: 68,
      overall: 4,
      comments: "This was a great event",
      check_in: {
      location: '',
      timestamp: '',
    },
    check_out: 0,
    photos: {
      images: [],
    },
  },
  {
      sales: 25,
      interactions: 80,
      overall: 5,
      comments: "This was a great event",
      check_in: {
      location: '',
      timestamp: '',
    },
    check_out: 0,
    photos: {
      images: [],
    },
  },
  {
      sales: 23,
      interactions: 46,
      overall: 5,
      comments: "This was a great event",
      check_in: {
      location: '',
      timestamp: '',
    },
    check_out: 0,
    photos: {
      images: [],
    },
  },
  {
      sales: 13,
      interactions: 50,
      overall: 3,
      comments: "This was a great event",
      check_in: {
      location: '',
      timestamp: '',
    },
    check_out: 0,
    photos: {
      images: [],
    },
  },
  {
      sales: 18,
      interactions: 40,
      overall: 4,
      comments: "This was a great event",
      check_in: {
      location: '',
      timestamp: '',
    },
    check_out: 0,
    photos: {
      images: [],
    },
  },
];

const seedReportTemplates = () => ReportTemplate.bulkCreate(reportTemplateData);

module.exports = seedReportTemplates;
