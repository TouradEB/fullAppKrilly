const express = require('express');
const { getUser } = require('../controllers/general.js');

const router = express.Router();

router.get('/user/:id', getUser);

module.exports = router;
