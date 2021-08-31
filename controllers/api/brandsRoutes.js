const router = require('express').Router();
const { Brand, BrandContact, Product, Campaign } = require('../../models');
const AdminOnlyRoute = require('../../utils/AdminOnlyRoute');
const authJwt = require('../../utils/authJwt');

router.get('/', authJwt, AdminOnlyRoute, async (req, res) => {
  try {
    const brandData = await Brand.findAll({
      include: [
        {
          model: Product,
          as: 'products',
        },
        {
          model: Campaign,
          as: 'campaigns',
        },
        {
          model: BrandContact,
          as: 'brand_contact',
        },
      ],
    });
    res.status(200).json(brandData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get('/:id', authJwt, AdminOnlyRoute, async (req, res) => {
  try {
    const brandData = await Brand.findByPk(req.params.id, {
      include: [
        {
          model: Product,
          as: 'products',
        },
        {
          model: Campaign,
          as: 'campaigns',
        },
        {
          model: BrandContact,
          as: 'brand_contact',
        },
      ],
    });
    if (!brandData) {
      res.status(404).json({ message: 'No rep found with this id!' });
      return;
    }
    res.status(200).json(brandData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/', authJwt, AdminOnlyRoute, async (req, res) => {
  try {
    const brandData = await Brand.create({
      name: req.body.name,
      image: req.body.image,
    });
    res.status(200).json(brandData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', authJwt, AdminOnlyRoute, async (req, res) => {
  try {
    const brandData = await Brand.update(
      {
        name: req.body.name,
        image: req.body.image,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.status(200).json(brandData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', authJwt, AdminOnlyRoute, async (req, res) => {
  try {
    const brandData = await Brand.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!brandData) {
      res
        .status(404)
        .json({ message: `No rep found with id: ${req.params.id}!` });
    }

    res.status(200).json(brandData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
