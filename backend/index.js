const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const restaurantRoutes = require('./routes/restaurants');
const orderRoutes = require('./routes/orders');
const path = require('path');

const app = express();
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/foodDelivery');

app.use('/api/restaurants', restaurantRoutes);
app.use('/api/orders', orderRoutes);
app.use('/public', express.static(path.join(__dirname, 'public')));

app.listen(3000, () => console.log('Server running on port 3000'));
