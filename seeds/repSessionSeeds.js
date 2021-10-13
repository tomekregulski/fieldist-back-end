const { RepSession } = require('../models');

const RepSessionData = {
  session_info: 'test',
  user_id: 1,
};

const seedRepSession = () => RepSession.bulkCreate(RepSessionData);

module.exports = seedRepSession;
