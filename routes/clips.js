const express = require('express');
const router = express.Router();
const clipsCtrl = require('../controllers/clips');
const isLoggedIn = require('../config/auth');

router.get('/', clipsCtrl.index);


module.exports = router;