const router = require('express').Router();
const Character = require('../controllers/character');

router.use('/characters', Character.getAll);

module.exports = router;