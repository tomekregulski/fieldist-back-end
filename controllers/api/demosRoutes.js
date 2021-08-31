const router = require('express').Router();
const {
  Campaign,
  Audit,
  Demo,
  Rep,
  Venue,
  Brand,
  Region,
  Product,
  ReportTemplate,
  User,
} = require('../../models');
const authSwitch = require('../../utils/authSwitch');
const authJwt = require('../../utils/authJwt');
const AdminOnlyRoute = require('../../utils/AdminOnlyRoute');
const AdminRepRoute = require('../../utils/AdminRepRoute');

router.get('/', authJwt, authSwitch, async (req, res) => {
  const filter = req.user_role;
  console.log(filter);

  let events = [];
  try {
    const demoData = await Demo.findAll({
      include: [
        {
          model: Campaign,
          as: 'campaign',
          include: {
            model: ReportTemplate,
            as: 'report_template',
          },
          include: {
            model: Brand,
            as: 'brand',
            include: {
              model: Product,
              as: 'products',
            },
          },
        },
        {
          model: User,
          as: 'user',
        },
        {
          model: Venue,
          as: 'venue',
          include: {
            model: Region,
            as: 'region',
          },
        },
        {
          model: ReportTemplate,
          as: 'report_template',
        },
      ],
      where: filter,
    });
    const auditData = await Audit.findAll({
      include: [
        {
          model: Campaign,
          as: 'campaign',
          include: {
            model: ReportTemplate,
            as: 'report_template',
          },
          include: {
            model: Brand,
            as: 'brand',
            include: {
              model: Product,
              as: 'products',
            },
          },
        },
        {
          model: User,
          as: 'user',
        },
        {
          model: Venue,
          as: 'venue',
          include: {
            model: Region,
            as: 'region',
          },
        },
        {
          model: ReportTemplate,
          as: 'report_template',
        },
      ],
      where: filter,
    });

    demoData.forEach((demo) => events.push(demo));
    // console.log(events);
    auditData.forEach((audit) => events.push(audit));
    // console.log(events);

    res.status(200).json(events);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get('/:id', authJwt, async (req, res) => {
  try {
    const demoData = await Demo.findByPk(req.params.id, {
      include: [
        {
          model: Campaign,
          as: 'campaign',
          include: {
            model: ReportTemplate,
            as: 'report_template',
          },
          include: {
            model: Brand,
            as: 'brand',
            include: {
              model: Product,
              as: 'products',
            },
          },
        },
        {
          model: Rep,
          as: 'rep',
        },
        {
          model: Venue,
          as: 'venue',
          include: {
            model: Region,
            as: 'region',
          },
        },
        {
          model: ReportTemplate,
          as: 'report_template',
        },
      ],
    });
    if (!demoData) {
      res.status(404).json({ message: 'No demo found with this id!' });
      return;
    }
    res.status(200).json(demoData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/', authJwt, AdminOnlyRoute, async (req, res) => {
  try {
    const demoData = await Demo.create({
      date: req.body.date,
      start_time: req.body.start_time,
      duration: req.body.duration,
      venue_id: req.body.venue_id,
      campaign_id: req.body.campaign_id,
      brand_id: req.body.brand_id,
      user_id: req.body.user_id,
      report_template_id: req.body.report_template_id,
    });
    res.status(200).json(demoData);
  } catch (err) {
    res.status(400).json(err);
    console.log(err);
  }
});

router.put('/:id', authJwt, AdminRepRoute,  async (req, res) => {
  try {
    const demoData = await Demo.update(
      {
        date: req.body.date,
        start_time: req.body.start_time,
        duration: req.body.duration,
        venue_id: req.body.venue_id,
        campaign_id: req.body.campaign_id,
        brand_id: req.body.brand_id,
        user_id: req.body.user_id,
        status: req.body.status,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.status(200).json(demoData);
    console.log(req.body);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', authJwt, AdminOnlyRoute, async (req, res) => {
  try {
    const demoData = await Demo.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!demoData) {
      res
        .status(404)
        .json({ message: `No demo found with id: ${req.params.id}!` });
    }

    res.status(200).json(demoData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
