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
        [Op.or]: [
          {
            name: {
              [Op.like]: `%${search}%`
            }
          },
          {
            // Note: in my code, keywords is actually
            // save as a string (combine with commas)
            // in the database. So `%${search}%` still
            // works because it searches inside the
            // combined string.
            keywords: {
              [Op.like]: `%${search}%`
            }
          }
        ]
      }
    });

  } else {
    products = await Product.findAll();
  }

  res.json(products);
});

export default router;
