const router = require('express').Router();
const Comics = require('../controllers/comic');

router.use('/comics', Comics.getAll);

module.exports = router;