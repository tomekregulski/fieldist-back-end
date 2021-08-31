const { Brand } = require('../models');

const brandData = [
  {
    name: "Sir Kensington's",
    image:
      'http://res.cloudinary.com/yup-schlepp/image/upload/v1625814878/jibcfczmin4mfxcmxhdy.jpg',
  },
  {
    name: 'Bowery Farming',
    image:
      'http://res.cloudinary.com/yup-schlepp/image/upload/v1625815033/vqalfan5r3ygm9grswgy.jpg',
  },
  {
    name: 'Simmer',
    image:
      'http://res.cloudinary.com/yup-schlepp/image/upload/v1625815223/micz5vyg9kucp9y6rxdi.png',
  },
  {
    name: 'Saso Pepper Company',
    image:
      'http://res.cloudinary.com/yup-schlepp/image/upload/v1625815319/ysts6oamqqd1riadyje2.png',
  },
];

const seedBrands = () => Brand.bulkCreate(brandData);

module.exports = seedBrands;
