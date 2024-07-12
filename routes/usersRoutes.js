const express = require('express');
const usersController = require('../controllers/usersController');
const router = express.Router();


router.get('/users/:id', usersController.getUserById);

module.exports = router;