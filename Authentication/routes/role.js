const express = require('express');
const router = express.Router();
const role = require('../controllers/role')
router.get('/getrole', role.getRoles);
module.exports = router