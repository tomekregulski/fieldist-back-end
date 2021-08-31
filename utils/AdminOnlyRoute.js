const role = require('../_helpers/role');

const AdminOnlyRoute = (req, res, next) => {
  console.log(req.headers.roles);
  if (req.headers.roles === role.admin) {
    console.log('hello admin');
    next();
  } else {
    console.log('unauthorized');
    res.status(200).send('You are not authorized to view this content');
  } 
};

module.exports = AdminOnlyRoute;
