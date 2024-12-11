// Load .env
require("dotenv").config();

// Import express
const express = require("express");

// Import cors
const cors = require("cors");

// Import db connection
const connectDB = require("./DB/connection");

// Import routes
const menuRoutes = require("./routes/menu");

// Create an application using express
const app = express();

// Middleware configuration
app.use(cors()); // Enable CORS for all requests
app.use(express.json()); // Parse JSON requests







// Connect to the database
connectDB(); // This function will manage the database connection

// Use routes
app.use("/api/menu", menuRoutes);

// Port configuration
const port = process.env.PORT || 5001;

// Start the application
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
