const { User, Brand } = require('../../models');
const router = require('express').Router();
const jwt = require('jsonwebtoken');
const config = require('../../config/auth.config');
const authJwt = require('../../utils/authJwt');
const AdminRepRoute = require('../../utils/AdminRepRoute');
const AdminOnlyRoute = require('../../utils/AdminOnlyRoute');

router.get('/', authJwt, AdminOnlyRoute, async (req, res) => {
  try {
    const allUsers = await User.findAll({
      include: {
        model: Brand,
        as: 'brand',
      },
      attributes: {
        exclude: ['password'],
      },
    });
    const userData = allUsers.map((user) => user.get({ plain: true }));
    res.status(200).json(userData);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.get('/reps', authJwt, AdminOnlyRoute, async (req, res) => {
  try {
    const allUsers = await User.findAll({
      where: {
        role: 'rep',
      },
      attributes: {
        exclude: ['password'],
      },
    });
    const userData = allUsers.map((user) => user.get({ plain: true }));
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/:id', authJwt, async (req, res) => {
  try {
    const user = await User.findByPk(req.params.id);
    !user
      ? res
          .status(404)
          .json({ message: `No user found with id: ${req.params.id}!` })
      : res.status(200).json(user);
  } catch (err) {
    res.status(400).json(err);
  }
});

router.post('/', authJwt, AdminOnlyRoute, async (req, res) => {
  try {
    const userData = await User.create({
      email: req.body.email,
      password: req.body.password,
      first_name: req.body.first_name,
      last_name: req.body.last_name,
      brand_id: req.body.brand_id,
      role: req.body.role,
      image: req.body.image,
    });

    res.status(200).json(userData);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

router.put('/:id', authJwt, AdminOnlyRoute, async (req, res) => {
  try {
    const userData = await User.update(
      {
        email: req.body.email,
        password: req.body.password,
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        brand_id: req.body.brand_id,
        role: req.body.role,
        image: req.body.image,
      },
      {
        where: {
          id: req.params.id,
        },
        individualHooks: true,
      }
    );
    res.status(200).json(userData);
  } catch (err) {
    console.log(err);
    res.status(400).json(err);
  }
});

router.delete('/:id', authJwt, AdminOnlyRoute, async (req, res) => {
  try {
    const userData = await User.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (!userData) {
      res.status(404).json({ message: `No such user found!` });
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

router.post('/login', async (req, res) => {
  try {
    const userData = await User.findOne({
      where: {
        email: req.body.email,
      },
    });
    console.log(userData);
    if (!userData) {
      res.status(400).json('Incorrect username or password...');
      return;
    }

    const passwordData = await userData.checkPassword(req.body.password);

    if (!passwordData) {
      res.status(400).json('Incorrect username or password...');
      return;
    }

    const token = jwt.sign({ id: userData.id }, config.secret, {
      expiresIn: 86400, // 24 hours
    });

    const authorities = 'ROLE_' + userData.role.toUpperCase();

    console.log(userData.role);
    console.log('password OK');

    res.status(200).send({
      id: userData.id,
      first_name: userData.first_name,
      last_name: userData.last_name,
      email: userData.email,
      brand_id: userData.brand_id,
      roles: authorities,
      accessToken: token,
    });
  } catch (err) {
    res.status(500).json(err);
    console.log(err);
  }
});

router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    console.log('loggin out now...');
    req.session.destroy(() => {
      res.status(204).end({});
    });
  } else {
    res.status(404).end();
    console.log('test');
  }
});

module.exports = router;
