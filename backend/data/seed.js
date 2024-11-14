const mongoose = require('mongoose');
const Restaurant = require('../models/restaurant');

mongoose.connect('mongodb://localhost:27017/foodDelivery', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const restaurants = [
  {
    name: 'Pizza Palace',
    image: 'pizza_palace.jpg',
    menuItems: [
      { name: 'Margherita Pizza', image: 'margherita_pizza.jpg', price: 9.99 },
      { name: 'Pepperoni Pizza', image: 'pepperoni_pizza.jpg', price: 12.99 },
      { name: 'BBQ Chicken Pizza', image: 'bbq_chicken_pizza.jpg', price: 14.99 },
      { name: 'Hawaiian Pizza', image: 'hawaiian_pizza.jpg', price: 11.99 },
      { name: 'Veggie Pizza', image: 'veggie_pizza.jpg', price: 10.99 },
      { name: 'Four Cheese Pizza', image: 'four_cheese_pizza.jpg', price: 13.99 },
      { name: 'Buffalo Pizza', image: 'buffalo_pizza.jpg', price: 14.49 }
    ]
  },
  {
    name: 'Burger Barn',
    image: 'burger_barn.jpg',
    menuItems: [
      { name: 'Classic Burger', image: 'classic_burger.jpg', price: 8.99 },
      { name: 'Cheeseburger', image: 'cheeseburger.jpg', price: 9.49 },
      { name: 'Bacon Burger', image: 'bacon_burger.jpg', price: 10.99 },
      { name: 'Mushroom Burger', image: 'mushroom_burger.jpg', price: 10.49 },
      { name: 'BBQ Burger', image: 'bbq_burger.jpg', price: 11.99 },
      { name: 'Spicy Burger', image: 'spicy_burger.jpg', price: 9.99 },
      { name: 'Veggie Burger', image: 'veggie_burger.jpg', price: 8.49 }
    ]
  },
  {
    name: 'Sushi World',
    image: 'sushi_world.jpg',
    menuItems: [
      { name: 'California Roll', image: 'california_roll.jpg', price: 7.99 },
      { name: 'Spicy Tuna Roll', image: 'spicy_tuna_roll.jpg', price: 8.99 },
      { name: 'Dragon Roll', image: 'dragon_roll.jpg', price: 10.49 },
      { name: 'Rainbow Roll', image: 'rainbow_roll.jpg', price: 12.99 },
      { name: 'Salmon Nigiri', image: 'salmon_nigiri.jpg', price: 6.99 },
      { name: 'Eel Roll', image: 'eel_roll.jpg', price: 9.99 },
      { name: 'Shrimp Tempura Roll', image: 'shrimp_tempura_roll.jpg', price: 9.49 }
    ]
  },
  {
    name: 'Pasta Paradise',
    image: 'pasta_paradise.jpg',
    menuItems: [
      { name: 'Spaghetti Carbonara', image: 'spaghetti_carbonara.jpg', price: 12.49 },
      { name: 'Fettuccine Alfredo', image: 'fettuccine_alfredo.jpg', price: 11.99 },
      { name: 'Penne Arrabbiata', image: 'penne_arrabbiata.jpg', price: 10.99 },
      { name: 'Lasagna', image: 'lasagna.jpg', price: 13.49 },
      { name: 'Ravioli', image: 'ravioli.jpg', price: 12.99 },
      { name: 'Bolognese', image: 'bolognese.jpg', price: 11.49 },
      { name: 'Gnocchi', image: 'gnocchi.jpg', price: 10.49 }
    ]
  },
  {
    name: 'Taco Town',
    image: 'taco_town.jpg',
    menuItems: [
      { name: 'Beef Taco', image: 'beef_taco.jpg', price: 3.99 },
      { name: 'Chicken Taco', image: 'chicken_taco.jpg', price: 3.99 },
      { name: 'Fish Taco', image: 'fish_taco.jpg', price: 4.49 },
      { name: 'Carnitas Taco', image: 'carnitas_taco.jpg', price: 4.99 },
      { name: 'Veggie Taco', image: 'veggie_taco.jpg', price: 3.49 },
      { name: 'Shrimp Taco', image: 'shrimp_taco.jpg', price: 5.49 },
      { name: 'Chorizo Taco', image: 'chorizo_taco.jpg', price: 4.49 }
    ]
  }
];

Restaurant.deleteMany({})
  .then(() => Restaurant.insertMany(restaurants))
  .then(() => {
    console.log('Database seeded successfully');
    mongoose.connection.close();
  })
  .catch(err => console.error(err));
