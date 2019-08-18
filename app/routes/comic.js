const router = require('express').Router();
const Comics = require('../controllers/comic');

router.get('/comics', Comics.getAll);
router.get('/comics/:id', Comics.get);

module.exports = router;