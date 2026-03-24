Got you — here’s the cleaned README with your username and without submission stuff 👇

````md
# Restaurant Management System

## Features

- Create and view menu items
- Create and view restaurant tables
- Place customer orders
- Automatically calculate total order price
- Mark tables unavailable when an order is placed
- Complete orders and free tables again
- View all orders with menu and table details

## Tech Stack

- Node.js
- Express.js
- MongoDB (Mongoose)

## Installation

1. Clone the repository:

```bash
git clone https://github.com/Shadaatamer/CodeAlpha_RestaurantManagementSystem.git
```
````

2. Install dependencies:

```bash
npm install
```

3. Create a `config.env` file in the root folder:

```env
DATABASE=your_mongodb_connection_string
PORT=3000
```

4. Run the server:

```bash
npm start
```

## API Endpoints

### Menu

**Create Menu Item**
POST `/menu`

Example body:

```json
{
  "name": "Burger",
  "description": "Beef burger",
  "price": 120
}
```

**Get All Menu Items**
GET `/menu`

**Get Single Menu Item**
GET `/menu/:id`

---

### Tables

**Create Table**
POST `/table`

Example body:

```json
{
  "tableNumber": 1
}
```

**Get All Tables**
GET `/table`

**Update Table Availability**
PATCH `/table/:id`

---

### Orders

**Place Order**
POST `/order`

Example body:

```json
{
  "table": "table_id_here",
  "items": [
    {
      "menuItem": "menu_item_id_here",
      "quantity": 2
    }
  ]
}
```

**Get All Orders**
GET `/order`

**Complete Order**
PATCH `/order/:id/complete`

---
