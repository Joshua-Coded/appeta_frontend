```markdown
# AppetaFood Frontend (Client Users)

## Introduction

This is the frontend application for client users of the AppetaFood platform. Users can browse and order food from various restaurants.

## Features

- User registration and login
- Browse and order food from available restaurants
- View order history

## Technologies Used

- React
- Axios
- React Router
- React Toastify

## Getting Started

### Prerequisites

- Node.js (v14 or later)
- Git

### Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/appetaFood.git
   cd appetaFood/frontend
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Create a `.env` file:**
   ```plaintext
   REACT_APP_BACKEND_URL=https://backend-appeta.onrender.com"
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```
   The frontend server will start on `http://localhost:5173`.

## Usage

### Registration and Login

- **Register as a new user:**
  1. Go to `http://localhost:5173/register`
  2. Fill in the registration form and submit

- **Login as an existing user:**
  1. Go to `http://localhost:5173/login`
  2. Fill in the login form and submit

### Browse and Order Food

- **Browse food items:**
  - After logging in, you can browse food items listed by various restaurants.

- **Place an order:**
  - Add food items to your cart and proceed to checkout to place an order.

### View Order History

- **View your past orders:**
  - Navigate to the 'Orders' section to view your order history.

## License

This project is licensed under the MIT License.
```
