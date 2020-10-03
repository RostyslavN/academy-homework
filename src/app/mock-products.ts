import { Product } from './product';

export const PRODUCTS: Product[] = [
  {
    name: 'Banana',
    price: 3,
    expirationDate: new Date(2020, 9, 5),
    category: 'Fruits',
  },
  {
    name: 'Milk',
    price: 4.5,
    expirationDate: new Date(2020, 8, 15),
    category: 'Dairy products',
  },
  {
    name: 'Yogurt',
    price: 1.5,
    expirationDate: new Date(2020, 11, 4),
    category: 'Dairy products',
  },
  {
    name: 'Cake',
    price: 14,
    expirationDate: new Date(2021, 7, 6),
    category: 'Bakery',
  }
];