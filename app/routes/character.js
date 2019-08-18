const router = require('express').Router();
const Character = require('../controllers/character');

router.get('/characters', Character.getAll);

module.exports = router;