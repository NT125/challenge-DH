const express = require('express');
const applicantsController = require('../controllers/applicantsController');
const router = express.Router();

router.get('/', applicantsController.list);

module.exports = router;