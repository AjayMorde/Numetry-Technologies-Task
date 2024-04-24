const express = require('express');
const router = express.Router();
const userautheticate = require('../middleware/auth');
const routes = require('../controllers/getRailwayBookings');
router.get('/getrailwaybookings', userautheticate.authenticate, routes.getAllRailwayBookings)

module.exports = router