const router = require('express').Router();
const {
  Campaign,
  ScheduledEvent,
  Venue,
  Brand,
  Region,
  Product,
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
    const eventData = await ScheduledEvent.findAll({
      include: [
        {
          model: Campaign,
          as: 'campaign',
          // include: {
          //   model: ReportTemplate,
          //   as: 'report_template',
          // },
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
          model: Venue,
          as: 'venue',
          include: {
            model: Region,
            as: 'region',
          },
        },
      ],
      where: filter,
    });

    res.status(200).json(eventData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get('/:id', authJwt, async (req, res) => {
  try {
    const eventData = await ScheduledEvent.findByPk(req.params.id, {
      include: [
        {
          model: Campaign,
          as: 'campaign',
          // include: {
          //   model: ReportTemplate,
          //   as: 'report_template',
          // },
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
          model: Venue,
          as: 'venue',
          include: {
            model: Region,
            as: 'region',
          },
        },
      ],
    });
    if (!eventData) {
      res.status(404).json({ message: 'No demo found with this id!' });
      return;
    }
    res.status(200).json(eventData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/', authJwt, AdminOnlyRoute, async (req, res) => {
  try {
    const eventData = await ScheduledEvent.create({
      date: req.body.date,
      start_time: req.body.start_time,
      duration: req.body.duration,
      venue_id: req.body.venue_id,
      campaign_id: req.body.campaign_id,
      brand_id: req.body.brand_id,
      user_id: req.body.user_id,
      report_template_id: req.body.report_template_id,
    });
    res.status(200).json(eventData);
  } catch (err) {
    res.status(400).json(err);
    console.log(err);
  }
});

router.put('/:id', authJwt, AdminRepRoute, async (req, res) => {
  try {
    const eventData = await ScheduledEvent.update(
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
    res.status(200).json(eventData);
    console.log(req.body);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', authJwt, AdminOnlyRoute, async (req, res) => {
  try {
    const eventData = await ScheduledEvent.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!eventData) {
      res
        .status(404)
        .json({ message: `No demo found with id: ${req.params.id}!` });
    }

    res.status(200).json(eventData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
