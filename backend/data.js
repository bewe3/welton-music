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
      name: 'iPhone 12',
      id: '123456789',
      image: 'https://example.com/iphone12.jpg',
      images: [
        'https://example.com/iphone12-1.jpg',
        'https://example.com/iphone12-2.jpg',
      ],
      brand: 'Apple',
      category: 'Electronics',
      description:
        'The iPhone 12 features a sleek design and powerful A14 Bionic chip.',
      price: 999,
      rating: 4.5,
      numReviews: 100,
      reviews: [],
    },
    {
      name: 'Samsung Galaxy S21',
      id: '987654321',
      image: 'https://example.com/galaxy-s21.jpg',
      images: [
        'https://example.com/galaxy-s21-1.jpg',
        'https://example.com/galaxy-s21-2.jpg',
      ],
      brand: 'Samsung',
      category: 'Electronics',
      description:
        'The Samsung Galaxy S21 offers a stunning display and advanced camera capabilities.',
      price: 899,
      rating: 4.8,
      numReviews: 150,
      reviews: [],
    },
    {
      name: 'Sony PlayStation 5',
      id: '567890123',
      image: 'https://example.com/ps5.jpg',
      images: [
        'https://example.com/ps5-1.jpg',
        'https://example.com/ps5-2.jpg',
      ],
      brand: 'Sony',
      category: 'Gaming',
      description:
        'Experience the next generation of gaming with the PlayStation 5.',
      price: 499,
      rating: 4.9,
      numReviews: 200,
      reviews: [],
    },
    {
      name: 'Nike Air Max 270',
      id: '456789012',
      image: 'https://example.com/air-max-270.jpg',
      images: [
        'https://example.com/air-max-270-1.jpg',
        'https://example.com/air-max-270-2.jpg',
      ],
      brand: 'Nike',
      category: 'Footwear',
      description: 'The Nike Air Max 270 offers exceptional comfort and style.',
      price: 150,
      rating: 4.7,
      numReviews: 80,
      reviews: [],
    },
    {
      name: 'Amazon Echo Dot',
      id: '789012345',
      image: 'https://example.com/echo-dot.jpg',
      images: [
        'https://example.com/echo-dot-1.jpg',
        'https://example.com/echo-dot-2.jpg',
      ],
      brand: 'Amazon',
      category: 'Smart Home',
      description: 'Control your smart home devices with the Amazon Echo Dot.',
      price: 49,
      rating: 4.4,
      numReviews: 120,
      reviews: [],
    },
  ],
};
export default data;
