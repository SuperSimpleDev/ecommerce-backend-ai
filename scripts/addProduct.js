import { Product } from '../models/Product.js';

const addProduct = async () => {
  const newProduct = {
    name: 'Black Tennis Shoes',
    image: 'images/products/black-tennis-shoes.jpg',
    rating: {
      stars: 5,
      count: 100
    },
    priceCents: 1999,
    keywords: ['shoes', 'apparel', 'sports']
  };

  try {
    const createdProduct = await Product.create(newProduct);
    console.log('Product added:', createdProduct);
  } catch (error) {
    console.error('Error adding product:', error.message);
  }
};

addProduct();