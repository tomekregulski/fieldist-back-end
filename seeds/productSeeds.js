const { Product } = require('../models');

const productData = [
  {
    name: 'Classic Marinara',
    upc: 5432167890,
    brand_id: 1,
  },
  {
    name: 'Roasted Garlic',
    upc: 5432167890,
    brand_id: 1,
  },
  {
    name: 'Tomato Basil',
    upc: 5432167890,
    brand_id: 1,
  },
  {
    name: 'Salsa Verde',
    upc: 6789054321,
    brand_id: 2,
  },
  {
    name: 'Salsa Roja',
    upc: 85266600500,
    brand_id: 2,
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
