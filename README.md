# 🍔🍕 **Food Delivery Website** 🍣🍝

Welcome to the **Food Delivery Website** where you can order your favorite dishes from a wide selection of restaurants! 🚚🍽️ Whether you're craving pizza, sushi, pasta, or burgers, we've got it all! 🙌

---

## 🚀 **Project Features**

- **Browse Restaurants**: View a list of restaurants offering a variety of cuisines.
- **Restaurant Menus**: Check out the menu and order food with ease.
- **Place Orders**: Select your favorite dishes, choose quantity, and input your address for delivery.
- **Order Confirmation**: Get your order details, including the total price and delivery charges.

---

## 📋 **Tech Stack**

- **Frontend**: Angular 14 🅰️
- **Backend**: Node.js, Express 🖥️
- **Database**: MongoDB 💾
- **Additional Libraries**:
  - Mongoose for MongoDB interaction
  - Cors for cross-origin requests
  - HTTP Client for API calls

---

## ⚙️ **How to Set Up the Project**

### 1. Clone the Repository

```bash
git clone <repo-url>
cd food-delivery-website
```

### 2. Install Backend Dependencies

```bash
cd backend
npm install
```

### 3. Set Up the Database

Make sure you have MongoDB running locally. You can use the following command to start the MongoDB server:

```bash
mongod
```

### 4. Seed the Database with Sample Data

```bash
node data/seed.js
```

### 5. Start the Backend Server

```bash
node index.js
```

The server will start on `http://localhost:3000`.

### 6. Install Frontend Dependencies

```bash
cd frontend
npm install
```

### 7. Start the Frontend Server

```bash
ng serve
```

The frontend will be available at `http://localhost:4200`.

---

## 🛠️ **API Endpoints**

- **GET** `/api/restaurants` - Fetch the list of all restaurants.
- **GET** `/api/restaurants/:id` - Fetch details of a single restaurant.
- **POST** `/api/orders` - Create a new order.

---

## 📜 **License**

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 📞 **Contact**

If you have any questions or need assistance with the project, feel free to contact us:

- **Email**: vsubramanianofficial@gmail.com 📧

---

## You'll have a blast! 🍴

