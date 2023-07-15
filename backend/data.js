import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Bryan',
      email: 'bryan@weltonmusic.com',
      password: bcrypt.hashSync('adminpass'),
      isAdmin: true,
    },
    {
      name: 'Savvy',
      email: 'savvy@weltonmusic.com',
      password: bcrypt.hashSync('userpass'),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: 'Giocoso',
      id: '123456789',
      image: '',
      pdf: [],
      category: 'Electronics',
      description:
        'The iPhone 12 features a sleek design and powerful A14 Bionic chip.',
      price: 999,
      reviews: [],
    },
  ],
};
export default data;
