const router = require('express').Router();
const demosRoutes = require('./demosRoutes');
const auditsRoutes = require('./auditsRoutes');
const campaignsRoutes = require('./campaignsRoutes');
const venuesRoutes = require('./venuesRoutes');
const regionsRoutes = require('./regionsRoutes');
const brandsRoutes = require('./brandsRoutes');
const productsRoutes = require('./productsRoutes');
const usersRoutes = require('./usersRoutes');
const reportRoutes = require('./reportRoutes');
// const campaignProductsRoutes = require("./campaignProductsRoutes")

router.use('/demos', demosRoutes);
router.use('/campaigns', campaignsRoutes);
router.use('/venues', venuesRoutes);
router.use('/regions', regionsRoutes);
router.use('/brands', brandsRoutes);
router.use('/products', productsRoutes);
router.use('/audits', auditsRoutes);
router.use('/users', usersRoutes);
router.use('/reports', reportRoutes);

// router.use("./campaign_products", campaignProductsRoutes);

module.exports = router;
