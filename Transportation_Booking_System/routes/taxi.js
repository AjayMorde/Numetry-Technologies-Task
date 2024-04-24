const express = require('express');
const router = express.Router();
const routes = require('../controllers/taxi')
const userautheticate = require('../middleware/auth');
router.post('/tax-booking', userautheticate.authenticate, routes.createBooking, );
module.exports = router;