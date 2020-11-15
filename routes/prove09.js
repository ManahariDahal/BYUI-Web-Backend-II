const express = require('express');
const router = express.Router();

const prove09Controller = require('../controllers/prove09.js');

router.get('/', prove09Controller.myPokemon);
router.get('/next', prove09Controller.nextPokemon);
router.get('/prev', prove09Controller.prevPokemon);

module.exports = router;