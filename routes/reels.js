const express = require('express');
const router = express.Router();
const reelsCtrl = require('../controllers/reels');
const isLoggedIn = require('../config/auth');

router.get('/', reelsCtrl.index);

module.exports = router;