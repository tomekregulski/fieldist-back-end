const router = require('express').Router();
const { Venue, Region } = require('../../models');
const authJwt = require('../../utils/authJwt');
const AdminOnlyRoute = require('../../utils/AdminOnlyRoute');
const { unlink } = require('fs/promises');

const readXlsxFile = require('read-excel-file/node');

router.get(
  '/name',
  // authJwt, AdminOnlyRoute,
  async (req, res) => {
    try {
      const venueData = await Venue.findAll({
        where: {
          name: req.headers.name,
        },
      });

      res.status(200).json(venueData);
    } catch (err) {
      res.status(400).json(err);
    }
  }
);

router.get(
  '/',
  // authJwt, AdminOnlyRoute,
  async (req, res) => {
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
  }
);

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

router.post(
  '/bulk',
  // authJwt, AdminOnlyRoute,
  async (req, res) => {
    try {
      if (!req.files) {
        return res.status(500).send({ msg: 'file is not found' });
      }

      if (
        req.files.file.mimetype !==
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
      ) {
        return res
          .status(500)
          .send({ msg: 'please only upload an Excel file' });
      }

      const myFile = await req.files.file;

      myFile.mv(`${__dirname}/${myFile.name}`, function (err) {
        if (err) {
          console.log(err);
          return res.status(500).send({ msg: 'error' });
        }
      });

      let path = `${__dirname}/${myFile.name}`;

      readXlsxFile(path).then((rows) => {
        // skip header
        rows.shift();

        let dataRows = [];

        rows.forEach((row) => {
          let newRow = {
            name: row[0],
            street_address: row[1],
            city: row[2],
            state: row[3],
            postal_code: row[4].toString(),
            region_id: row[5],
          };
          dataRows.push(newRow);
        });

        Venue.bulkCreate(dataRows, { individualHooks: true })
          .then(() => {
            res.status(200).send({
              message: 'Uploaded the file successfully: ' + req.files.file.name,
            });
          })
          .then(() => {
            unlink(path).then(
              console.log(`successfully deleted file at ${path}`)
            );
          })
          .catch((error) => {
            console.log(error);
            res.status(500).send({
              message: 'Fail to import data into database!',
              error: error.message,
            });
          });
      });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        message: 'Could not upload the file: ' + req.file.originalname,
      });
    }
  }
);

router.post(
  '/',
  // authJwt, AdminOnlyRoute,
  async (req, res) => {
    try {
      const venueData = await Venue.create({
        name: req.body.name,
        street_address: req.body.street_address,
        city: req.body.city,
        state: req.body.state,
        postal_code: req.body.postal_code,
        region_id: req.body.region_id,
      });
      res.status(200).json(venueData);
    } catch (err) {
      res.status(400).json(err);
      console.log(err);
    }
  }
);

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
