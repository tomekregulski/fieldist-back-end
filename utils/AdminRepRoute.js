const role = require('../_helpers/role');

const AdminRepRoute = (req, res, next) => {
  console.log(req.headers.roles);
  if ((req.headers.roles === role.admin) || (req.headers.roles === role.rep)) {
    console.log('hello admin or rep');
    next();
  } else {
    console.log('unauthorized');
    res.status(200).send('You are not authorized to view this content');
  } 
};

module.exports = AdminRepRoute;
