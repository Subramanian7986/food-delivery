const mongoose = require('mongoose');
const Restaurant = require('./restaurant'); // Import the Restaurant model

// Define the Order Schema
const orderSchema = new mongoose.Schema({
  menuItem: {
    name: {
      type: String,
      required: true
    },
    image: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    }
  },
  quantity: {
    type: Number,
    required: true,
    min: 1
  },
  address: {
    type: String,
    required: true
  },
  totalPrice: {
    type: Number,
    required: true
  },
  deliveryCharge: {
    type: Number,
    required: true
  },
  finalTotal: {
    type: Number,
    required: true
  },
  orderDate: {
    type: Date,
    default: Date.now
  }
});

// Define the Order Model
const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
