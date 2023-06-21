const express = require('express');
const { getAdmins } = require('../controllers/management.js');

const router = express.Router();

router.get('/admin', getAdmins);

module.exports = router;
