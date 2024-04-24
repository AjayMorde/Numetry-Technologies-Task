const express = require('express');
const router = express.Router();
const bookingController = require('../controllers/deleteTaxiBookings');
const userautheticate = require('../middleware/auth');

router.delete('/taxibooking/:bookingId', userautheticate.authenticate, bookingController.deleteBooking);

module.exports = router;