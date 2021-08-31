const router = require('express').Router();
const { ReportTemplate } = require('../../models');
const authJwt = require('../../utils/authJwt');
const AdminOnlyRoute = require('../../utils/AdminOnlyRoute');
const AdminRepRoute = require('../../utils/AdminRepRoute');
const authSwitch = require('../../utils/authSwitch');

router.get('/', authJwt, authSwitch, async (req, res) => {
  const filter = req.user_role;
  try {
    const reportData = await ReportTemplate.findAll({
      where: filter,
    });
    res.status(200).json(reportData);
  } catch (err) {
    res.status(400).json(err);
    console.log(err);
  }
});

router.get('/:id', authJwt, async (req, res) => {
  try {
    const reportData = await ReportTemplate.findByPk(req.params.id);
    !reportData
      ? res
          .status(404)
          .json({ message: `No report found with id: ${req.params.id}!` })
      : res.status(200).json(reportData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/', authJwt, AdminOnlyRoute, async (req, res) => {
  try {
    const reportData = await ReportTemplate.create({
      name: req.body.name,
      sales: req.body.sales,
      interactions: req.body.interactions,
      overall: req.body.overall,
      comments: req.body.comments,
      check_in: req.body.check_in,
      check_out: req.body.check_out,
      photos: req.body.photos,
    });
    res.status(200).json(reportData);
    console.log(req.body);
  } catch (err) {
    res.status(400).json(err);
    console.log(err);
  }
});

router.put('/:id', authJwt, AdminRepRoute, async (req, res) => {
  console.log('put test');
  try {
    const reportData = await ReportTemplate.update(
      {
        name: req.body.name,
        sales: req.body.sales,
        interactions: req.body.interactions,
        overall: req.body.overall,
        comments: req.body.comments,
        check_in: req.body.check_in,
        check_out: req.body.check_out,
        photos: req.body.photos,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.status(200).json(reportData);
    console.log('req.body: ', req.body);
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

router.delete('/:id', authJwt, AdminOnlyRoute, async (req, res) => {
  try {
    const reportData = await ReportTemplate.destroy({
      where: {
        id: req.params.id,
      },
    });

    !reportData
      ? res
          .status(404)
          .json({ message: `No report found with id: ${req.params.id}!` })
      : res.status(200).json(reportData);
  } catch (err) {
    res.status(500).status(err);
    console.log(err);
  }
});

module.exports = router;
