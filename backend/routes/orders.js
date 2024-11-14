const express = require('express');
const Order = require('../models/order'); // Adjust the path if necessary

const router = express.Router();

// Create a new order
router.post('/', async (req, res) => {
  try {
    const { menuItem, quantity, address, totalPrice, deliveryCharge, finalTotal } = req.body;

    // Create the order
    const order = new Order({
      menuItem,
      quantity,
      address,
      totalPrice,
      deliveryCharge,
      finalTotal
    });

    // Save the order to the database
    await order.save();

    res.status(201).json(order);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
