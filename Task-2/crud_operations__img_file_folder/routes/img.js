// routes/img.js
const express = require('express');
const router = express.Router();
const { addImage } = require('../controllers//img');

// POST request to save image
router.post('/save', addImage);

module.exports = router;
