const { User } = require('../models');

const UserData = [
  {
    email: 'admin@fieldist.com',
    password: 'admin',
    first_name: 'admin',
    last_name: 'test',
    brand_id: null,
    role: ['admin'],
    image:
      'http://res.cloudinary.com/yup-schlepp/image/upload/v1625816833/ltksiuk44djw4efvkfxh.jpg',
  },
  {
    email: 'rep1@fieldist.com',
    password: 'rep1',
    first_name: 'rep1',
    last_name: 'test',
    brand_id: null,
    role: 'rep',
    image:
      'http://res.cloudinary.com/yup-schlepp/image/upload/v1625817030/rls1mtawzwk7siqskgw2.jpg',
  },
  {
    email: 'rep2@fieldist.com',
    password: 'rep2',
    first_name: 'rep2',
    last_name: 'test',
    brand_id: null,
    role: 'rep',
    image:
      'http://res.cloudinary.com/yup-schlepp/image/upload/v1625817300/th6csqd8avcbktcvecnl.jpg',
  },
  {
    email: 'contact1@fieldist.com',
    password: 'contact1',
    first_name: 'contact1',
    last_name: 'test',
    brand_id: 1,
    role: 'contact',
    image:
      'http://res.cloudinary.com/yup-schlepp/image/upload/v1625817341/upghmsyir1bt1ixt0izn.jpg',
  },
  {
    email: 'contact2@fieldist.com',
    password: 'contact2',
    first_name: 'contact2',
    last_name: 'test',
    brand_id: 2,
    role: 'contact',
    image:
      'http://res.cloudinary.com/yup-schlepp/image/upload/v1625817507/jihyj0p9cvti730rw8c9.jpg',
  },
  {
    email: 'contact3@fieldist.com',
    password: 'contact3',
    first_name: 'contact3',
    last_name: 'test',
    brand_id: 3,
    role: 'contact',
    image:
      'http://res.cloudinary.com/yup-schlepp/image/upload/v1625817507/jihyj0p9cvti730rw8c9.jpg',
  },
  {
    email: 'contact4@fieldist.com',
    password: 'contact4',
    first_name: 'contact4',
    last_name: 'test',
    brand_id: 4,
    role: 'contact',
    image:
      'http://res.cloudinary.com/yup-schlepp/image/upload/v1625817887/oth0wrbho76yeeaajmn2.jpg',
  },
];

const seedUsers = () => User.bulkCreate(UserData);

module.exports = seedUsers;
