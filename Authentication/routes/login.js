const express = require('express');
const router = express.Router();
const users = require('../controllers/login');
router.post('/data', users.loginUser);
module.exports = router