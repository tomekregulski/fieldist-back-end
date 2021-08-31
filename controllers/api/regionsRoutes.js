const router = require('express').Router();
const { Region } = require('../../models');
const authJwt = require('../../utils/authJwt');
const AdminOnlyRoute = require('../../utils/AdminOnlyRoute');

router.get('/', authJwt, AdminOnlyRoute, async (req, res) => {
  try {
    const regionData = await Region.findAll();
    res.status(200).json(regionData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get('/:id', authJwt, AdminOnlyRoute, async (req, res) => {
  try {
    const regionData = await Region.findByPk(req.params.id);
    if (!regionData) {
      res.status(404).json({ message: 'No region found with this id!' });
      return;
    }
    res.status(200).json(regionData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/', authJwt, AdminOnlyRoute, async (req, res) => {
  try {
    const regionData = await Region.create({
      name: req.body.name,
    });
    res.status(200).json(regionData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.put('/:id', authJwt, AdminOnlyRoute, async (req, res) => {
  try {
    const regionData = await Region.update(
      {
        name: req.body.name,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );

    if (!regionData) {
      res
        .status(404)
        .json({ message: `No region found with id: ${req.params.id}!` });
    }

    res.status(200).json(regionData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', authJwt, AdminOnlyRoute, async (req, res) => {
  try {
    const regionData = await Region.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!regionData) {
      res
        .status(404)
        .json({ message: `No region found with id: ${req.params.id}!` });
    }

    res.status(200).json(regionData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
