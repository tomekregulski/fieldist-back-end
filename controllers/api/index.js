const router = require('express').Router();
// const scheduledEventRoutes = require('./scheduledEventRoutes');
// const auditsRoutes = require('./auditsRoutes');
// const campaignsRoutes = require('./campaignsRoutes');
const venuesRoutes = require('./venuesRoutes');
// const regionsRoutes = require('./regionsRoutes');
const brandsRoutes = require('./brandsRoutes');
// const productsRoutes = require('./productsRoutes');
const reportRoutes = require('./reportRoutes');
const repSessionRoutes = require('./repSessionRoutes');

// router.use('/scheduled-events', scheduledEventRoutes);
// router.use('/campaigns', campaignsRoutes);
router.use('/venues', venuesRoutes);
// router.use('/regions', regionsRoutes);
router.use('/brands', brandsRoutes);
// router.use('/products', productsRoutes);
// router.use('/audits', auditsRoutes);
router.use('/reports', reportRoutes);

router.use('/session', repSessionRoutes);

module.exports = router;
