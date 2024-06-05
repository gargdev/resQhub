const express = require('express');
const router = express.Router();
const { registerAgency, authAgency } = require('../controllers/authController');

router.post('/register', registerAgency);
router.post('/login', authAgency);

module.exports = router;
