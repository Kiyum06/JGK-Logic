# JGK-Logic

Professional gymnastics equipment e-commerce application

## Team Members

* Gurpinder Gill (Gurpinder1340)
* Kiyum (kiyum06)
* JohnCarlo (JPbooya)

---

## Project Overview

JGK Logic is a professional ecommerce web application focused on selling gymnastics equipment and training gear.

The platform simulates a real online store where users can register, log in, browse products, view product details, and manage a session-based shopping cart.

---

## Product Category

Gymnastics Equipment & Training Gear

### Products

* Balance Beams
* Parallel Bars
* Training Mats
* Resistance Bands
* Stretching Equipment
* Hand Grips
* Vaulting Tables
* Rings

---

## Technologies Used

* Node.js
* Express.js
* EJS
* MySQL
* MVC Architecture
* Express Sessions
* Bcrypt
* Fetch API
* HTML/CSS

---

## SSR Routes

* GET /products - Displays all gymnastics products stored in the database.
* GET /products/:id - Displays detailed information for a single product.

---

## API Endpoints

### Product API
* GET /api/products - Returns all products as JSON.
* GET /api/products?category=Mats - Returns products matching a selected category.
* GET /api/products?minPrice=500 - Returns products at or above the specified minimum price.
* GET /api/products?category=Rings&minPrice=50 - Combines category and minimum price filters.

### Cart API
* GET /api/cart - Returns the current shopping cart.
* POST /api/cart/items - Adds a product to the shopping cart.
* DELETE /api/cart/items/:productId - Removes a product from the shopping cart.
* POST /api/cart/clear - Removes all items from the shopping cart.


---


## Filtering

Supported query parameters:

* category - Filters products by category.
* minPrice - Filters products by minimum price.

Examples
* GET /api/products?category=Mats
Returns only products in the Mats category.

* GET /api/products?minPrice=500
Returns products priced at $500 or higher.

* GET /api/products?category=Rings&minPrice=50
Returns Ring products priced at $50 or higher.

---

## Authentication Flow

1. User visits the landing page.
2. User registers an account using `/register`.
3. Password is hashed using bcrypt before being stored.
4. User logs in using `/login`.
5. A session is created and the user is authenticated.
6. Authenticated users can access protected pages and APIs.
7. User logs out using `/logout`.
8. Session is destroyed and the user is redirected to the home page.

---

## Public Routes

These routes can be accessed without authentication:

* `/` - Landing page
* `/login` - User login page
* `/register` - User registration page

---

## Protected Routes

These routes require authentication:

* `/products` - Displays all products 

* `/products/:id` - Displays a single product page

### Protected API Endpoints

* `GET /api/products` - Returns product data as JSON
* `GET /api/cart` - Returns the current session cart
* `POST /api/cart/items` - Adds a product to the cart
* `DELETE /api/cart/items/:productId` - Removes a product from the cart
* `POST /api/cart/clear` - Clears all items from the cart

---

## Session-Based Shopping Cart

The shopping cart is stored in:

```js
req.session.cart
```

Features:

* Add items to cart
* Remove items from cart
* Clear cart
* View cart contents
* Cart persists while the user remains logged in
 
The shopping cart is stored in `req.session.cart`, so no separate database table is needed. Each user has their own cart while their session is active.

---

## Database Setup

Create the database:

```sql
CREATE DATABASE jgk_logic;
```

Run the provided scripts:

```sql
SOURCE scripts/schema.sql;
SOURCE scripts/seed.sql;
```

---

## Environment Variables

Create a `.env` file in the project root:

```env
DB_HOST=localhost
DB_PORT=3306
DB_NAME=jgk_logic
DB_USER=your_username
DB_PASSWORD=your_password

SESSION_SECRET=your_secret_key
```

---

## Installation

Install dependencies:

```bash
npm install
```

Start the application:

```bash
npm run dev
```

The application will be available at:

```text
http://localhost:8001
```

---



 
 
