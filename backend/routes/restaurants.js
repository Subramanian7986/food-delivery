const express = require('express');
const router = express.Router();
const Restaurant = require('../models/restaurant');

router.get('/', async (req, res) => {
  const restaurants = await Restaurant.find();
  res.json(restaurants);
});

router.get('/:id', async (req, res) => {
  const restaurant = await Restaurant.findById(req.params.id);
  res.json(restaurant);
});

module.exports = router;
