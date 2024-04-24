const express = require('express');
const router = express.Router();
const routes = require('../controllers/bus')
const userautheticate = require('../middleware/auth');
router.post('/bus-booking', userautheticate.authenticate, routes.createBooking, );
module.exports = router;