const express = require('express');
const usersController = require('../controllers/usersController');

// Create a new router instance
const router = express.Router();

// Define a GET route to fetch user details by ID
router.get('/users/:id', usersController.getUserById);

// Export the router for use in other parts of the application
module.exports = router;