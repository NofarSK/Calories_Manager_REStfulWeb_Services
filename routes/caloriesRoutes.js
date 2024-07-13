//Nofar Skouri 211939939
//Talia Mulokandov 212615421

const express = require('express');
const caloriesController = require('../controllers/caloriesController');

// Create a new router instance
const router = express.Router();

// Define a POST route for adding calorie entries
router.post('/addcalories', caloriesController.addCalorie);

// Define a GET route for generating a calorie report
router.get('/report', caloriesController.getReport);

// Export the router for use in other parts of the application
module.exports = router;