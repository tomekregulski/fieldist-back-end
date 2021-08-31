const { Role } = require('../models');

const roleData = [
  {
    'name': 'admin',
  },
  {
    'name': 'rep',
  },
  {
    'name': 'contact',
  },
];

const seedRoles = () => Role.bulkCreate(roleData);

module.exports = seedRoles;