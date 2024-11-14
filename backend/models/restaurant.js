const mongoose = require('mongoose');

const menuItemSchema = new mongoose.Schema({
  name: String,
  image: String,
  price: Number
});

const restaurantSchema = new mongoose.Schema({
  name: String,
  image: String,
  menuItems: [menuItemSchema]
});

module.exports = mongoose.model('Restaurant', restaurantSchema);
