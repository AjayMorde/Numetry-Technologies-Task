const express = require('express');
const router = express.Router();
const routes = require('../controllers/railway')
const userautheticate = require('../middleware/auth');
router.post('/railway-booking', userautheticate.authenticate, routes.createBooking, );
module.exports = router;