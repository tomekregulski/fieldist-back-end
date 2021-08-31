const role = require('../_helpers/role');

const sorter = (req, res, next) => {
  console.log('sorting');
  let user = req.headers.roles
  console.log(user);
  let role = "";
  console.log(role); 
  
if (user === role.rep) {
    cl
}

//   if (user === role.admin) {
//       role = null
//       req.role = role;
//       next();
//   } else if (user === role.contact) {
//     // role = "contact"
//     console.log("contact");
//     next();
//   } else if (user === role.rep) {
//     // req.role = role.rep;
//     console.log("rep");
//     next();
//   }
// //   req.role = role;
// //   console.log(`${req.role} role`);
// //   next();
};

module.exports = sorter;
