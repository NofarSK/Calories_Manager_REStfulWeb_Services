const express = require('express');
const caloriesController = require('../controllers/caloriesController');
const router = express.Router();


router.post('/addcalories', caloriesController.addCalorie);
router.get('/report', caloriesController.getReport);


module.exports = router;