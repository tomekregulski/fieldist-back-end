const router = require('express').Router();
// const { ReportTemplate } = require('../../models');
const { RepSession } = require('../../models');
// const authJwt = require('../../utils/authJwt');
// const AdminOnlyRoute = require('../../utils/AdminOnlyRoute');
// const AdminRepRoute = require('../../utils/AdminRepRoute');
// const authSwitch = require('../../utils/authSwitch');

router.get(
  '/',
  // authJwt, authSwitch,
  async (req, res) => {
    console.log('test');
    try {
      const sessionData = await RepSession.findAll();
      res.status(200).json(sessionData);
    } catch (err) {
      res.status(400).json(err);
      console.log(err);
    }
  }
);

router.post(
  '/',
  // authJwt, AdminOnlyRoute,
  async (req, res) => {
    console.log(req.body);
    try {
      const sessionData = await RepSession.create({
        session_info: req.body.payload.session_info,
        user_id: req.body.payload.user_id,
      });
      res.status(200).json(sessionData);
      console.log(req.body);
    } catch (err) {
      res.status(400).json(err);
      console.log(err);
    }
  }
);

module.exports = router;
