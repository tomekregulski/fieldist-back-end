const router = require('express').Router();
const { Venue, Region } = require('../../models');
const authJwt = require('../../utils/authJwt');
const AdminOnlyRoute = require('../../utils/AdminOnlyRoute');

router.get('/', authJwt, AdminOnlyRoute, async (req, res) => {
  try {
    const venueData = await Venue.findAll({
      include: [
        {
          model: Region,
          as: 'region',
        },
      ],
    });

    res.status(200).json(venueData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.get('/:id', authJwt, AdminOnlyRoute, async (req, res) => {
  try {
    const venueData = await Venue.findByPk(req.params.id, {
      include: [
        {
          model: Region,
          as: 'region',
        },
      ],
    });

    if (!venueData) {
      res.status(404).json({ message: 'No venue found with this id!' });
      return;
    }

    res.status(200).json(venueData);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/', authJwt, AdminOnlyRoute, async (req, res) => {
  try {
    const venueData = await Venue.create({
      name: req.body.name,
      address: req.body.address,
      address_components: req.body.address_components,
      geometry: req.body.geometry,
      region_id: req.body.region_id,
    });
    res.status(200).json(venueData);
  } catch (err) {
    res.status(400).json(err);
    console.log(err);
  }
});

router.put('/:id', authJwt, AdminOnlyRoute, async (req, res) => {
  try {
    const venueData = await Venue.update(
      {
        name: req.body.name,
        address: req.body.address,
        address_components: req.body.address_components,
        geometry: req.body.geometry,
        region_id: req.body.region_id,
      },
      {
        where: {
          id: req.params.id,
        },
      }
    );

    if (!venueData) {
      res
        .status(404)
        .json({ message: `No venue found with id: ${req.params.id}!` });
    }

    res.status(200).json(venueData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', authJwt, AdminOnlyRoute, async (req, res) => {
  try {
    const venueData = await Venue.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!venueData) {
      res
        .status(404)
        .json({ message: `No venue found with id: ${req.params.id}!` });
    }

    res.status(200).json(venueData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
