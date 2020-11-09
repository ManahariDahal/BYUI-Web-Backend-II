const express = require('express');

const router = express.Router();
const prove08Controller = require('../controllers/prove08');

router.get('/', prove08Controller.getProducts);

module.exports = router;