const router = require('express').Router();
const {
  Campaign,
  Product,
  Brand,
  Demo,
  Audit,
  CampaignProduct,
  ReportTemplate,
} = require('../../models');
const AdminOnlyRoute = require('../../utils/AdminOnlyRoute');
const authJwt = require('../../utils/authJwt');

router.get('/', authJwt, AdminOnlyRoute, async (req, res) => {
  try {
    const campaignData = await Campaign.findAll({
      include: [
        {
          model: Demo,
          as: 'demos',
          include: {
            model: ReportTemplate,
            as: 'report_template',
          },
        },
        {
          model: Audit,
          as: 'audits',
          include: {
            model: ReportTemplate,
            as: 'report_template',
          },
        },
        {
          model: Brand,
          as: 'brand',
          include: {
            model: Product,
            as: 'products',
          },
        },
      ],
    });
    res.status(200).json(campaignData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get('/:id', authJwt, AdminOnlyRoute, async (req, res) => {
  try {
    const campaignData = await Campaign.findByPk(req.params.id, {
      include: [
        {
          model: Demo,
          as: 'demos',
        },
        {
          model: Audit,
          as: 'audits',
        },
        {
          model: Brand,
          as: 'brand',
          include: {
            model: Product,
            as: 'products',
          },
        },
      ],
    });
    if (!campaignData) {
      res.status(404).json({ message: 'No campaign found with this id!' });
      return;
    }
    res.status(200).json(campaignData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/', authJwt, AdminOnlyRoute, async (req, res) => {
  try {
    const campaignData = await Campaign.create({
      name: req.body.name,
      brand_id: req.body.brand_id,
      product_id: req.body.product_id,
      report_template_id: req.body.report_template_id,
    });
    res.status(200).json(campaignData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', authJwt, AdminOnlyRoute, async (req, res) => {
  try {
    const campaignData = await Campaign.update(
      {
        name: req.body.name,
        brand_id: req.body.brand_id,
        report_template_id: req.body.report_template_id,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.status(200).json(campaignData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', authJwt, AdminOnlyRoute, async (req, res) => {
  try {
    const campaignData = await Campaign.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!campaignData) {
      res
        .status(404)
        .json({ message: `No campaign found with id: ${req.params.id}!` });
    }

    res.status(200).json(campaignData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
