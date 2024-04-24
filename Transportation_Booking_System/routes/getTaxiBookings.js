const express = require('express');
const router = express.Router();
const userautheticate = require('../middleware/auth');
const routes = require('../controllers/getTaxiBookings');
router.get('/getbookings', userautheticate.authenticate, routes.getAllTaxiBookings)

module.exports = router