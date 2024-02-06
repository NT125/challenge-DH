const express = require('express');
const professionController = require('../controllers/professionController');
const router = express.Router();

router.get('/', professionController.list);

module.exports = router;