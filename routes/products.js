import express from 'express';
import { Product } from '../models/Product.js';
import { Op } from 'sequelize';

const router = express.Router();

router.get('/', async (req, res) => {
  const search = req.query.search;

  let products;
  if (search) {
    products = await Product.findAll({
      where: {
        name: {
          [Op.like]: `%${search}%`
        }
      }
    });

  } else {
    products = await Product.findAll();
  }

  res.json(products);
});

export default router;
