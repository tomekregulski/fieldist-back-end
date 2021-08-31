const { Product } = require('../models');

const productData = [
  {

    name: 'Classic Mayo 16oz',
    upc: 1234567890,
    brand_id: 1,
  },
  {
    name: 'Baby Spinach',
    upc: 0987654321,
    brand_id: 2,
  },
  {
    name: 'Classic Marinara',
    upc: 5432167890,
    brand_id: 3,
  },
  {
    name: 'Salsa Verde',
    upc: 6789054321,
    brand_id: 4,
  },
];

const seedProducts = () => Product.bulkCreate(productData);

module.exports = seedProducts;
