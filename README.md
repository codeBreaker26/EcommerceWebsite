# E-Commerce Website

An advanced e-commerce platform developed using the MERN stack (MongoDB, Express.js, React.js, and Node.js). This project offers a seamless shopping experience for users, featuring real-time inventory updates, personalized product recommendations, and a highly optimized mobile-friendly design.

## Features 

### Customer Features

- **Home Page:** Displays the latest and best-selling products.
- **Product Collection Page:** Enables filtering, sorting, and searching for products.
- **Product Page:** Displays detailed product information.
- **Cart Management:** Add, edit, or remove items from the cart.
- **Checkout Process:** Streamlined checkout flow for an intuitive user experience.

### Admin Features

- **Product Management:** Add, edit, or delete products.
- **Order Management:** View and update order statuses.
- **User Management:** Manage customer details and access levels.

## Technologies Used

- **Frontend:** React.js, Tailwind CSS
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **Version Control:** Git

## Installation

1. Clone the repository:

   ```bash
   https://github.com/codeBreaker26/EcommerceWebsite
   ```

2. Navigate to the project directory:

   ```bash
   cd EcommerceWebsite
   ```

3. Install dependencies for both the frontend and backend:

   ```bash
   cd client
   npm install
   cd ../server
   npm install
   ```

4. Set up environment variables:

   - Create a `.env` file in the `server` directory.
   - Add the following variables:
     ```env
     PORT=5000
     MONGO_URI=mongodb+srv://ishansahani2601:NQvhTcE8DsXPvReN@cluster0.vjh2k.mongodb.net
     JWT_SECRET=greatstack
     ```

5. Start the development server:

   ```bash
   cd client
   npm start
   cd ../server
   npm run dev
   ```

## Contribution

Feel free to fork this repository, submit issues, or make pull requests. Contributions are highly appreciated.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- MERN Stack Community
- Tailwind CSS Documentation

