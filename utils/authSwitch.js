const role = require('../_helpers/role');

const authSwitch = (req, res, next) => {

  let user_role = {};
  if (req.headers.roles === role.admin) {
    user_role = null
  } else if (req.headers.roles === role.rep) {
    user_role = { user_id: req.headers.user_id }
  } else if (req.headers.roles === role.contact) {
    user_role = { brand_id: req.headers.brand_id }
  } 

req.user_role = user_role;
next();

};

module.exports = authSwitch;
