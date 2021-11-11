const router = require('express').Router();
// const { ReportTemplate } = require('../../models');
const { GeneralFieldReport } = require('../../models');
const authJwt = require('../../utils/authJwt');
const AdminOnlyRoute = require('../../utils/AdminOnlyRoute');
const AdminRepRoute = require('../../utils/AdminRepRoute');
const authSwitch = require('../../utils/authSwitch');
const multer = require('multer');
const path = require('path');
const fs = require('fs');

const storage = multer.diskStorage({
  destination: function (req, res, cb) {
    cb(null, '../../uploads');
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

router.get(
  '/',
  // authJwt, authSwitch,
  async (req, res) => {
    try {
      const reportData = await GeneralFieldReport.findAll();
      res.status(200).json(reportData);
    } catch (err) {
      res.status(400).json(err);
      console.log(err);
    }
  }
);

// router.get('/:id', authJwt, async (req, res) => {
//   try {
//     const reportData = await GeneralFieldReport.findByPk(req.params.id);
//     !reportData
//       ? res
//           .status(404)
//           .json({ message: `No report found with id: ${req.params.id}!` })
//       : res.status(200).json(reportData);
//   } catch (err) {
//     res.status(400).json(err);
//   }
// });

router.post(
  '/',
  // authJwt, AdminOnlyRoute,
  async (req, res) => {
    try {
      const reportData = await GeneralFieldReport.create({
        date: req.body.payload.date,
        time: req.body.payload.time,
        location: req.body.payload.location,
        brand: req.body.payload.brand,
        form: req.body.payload.form,
        user_name: req.body.payload.rep,
        user_id: req.body.payload.rep_id,
        response: req.body.payload.response,
        inventory: req.body.payload.inventory,
        photos: req.body.payload.photos,
        expenses: req.body.payload.expenses,
      });
      res.status(200).json(reportData);
    } catch (err) {
      res.status(400).json(err);
      console.log(err);
    }
  }
);

// router.put('/:id', authJwt, AdminRepRoute, async (req, res) => {
//   console.log('put test');
//   try {
//     const reportData = await ReportTemplate.update(
//       {
//         name: req.body.name,
//         sales: req.body.sales,
//         interactions: req.body.interactions,
//         overall: req.body.overall,
//         comments: req.body.comments,
//         check_in: req.body.check_in,
//         check_out: req.body.check_out,
//         photos: req.body.photos,
//       },
//       {
//         where: {
//           id: req.params.id,
//         },
//       }
//     );
//     res.status(200).json(reportData);
//     console.log('req.body: ', req.body);
//   } catch (err) {
//     res.status(500).json(err);
//     console.log(err);
//   }
// });

// router.delete('/:id', authJwt, AdminOnlyRoute, async (req, res) => {
//   try {
//     const reportData = await ReportTemplate.destroy({
//       where: {
//         id: req.params.id,
//       },
//     });

//     !reportData
//       ? res
//           .status(404)
//           .json({ message: `No report found with id: ${req.params.id}!` })
//       : res.status(200).json(reportData);
//   } catch (err) {
//     res.status(500).status(err);
//     console.log(err);
//   }
// });

module.exports = router;
