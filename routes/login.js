const router = require('express').Router();
const loginUserRequest = require('../controllers/login')

router.get('/', loginUserRequest);
router.post('/', loginUserRequest);

module.exports = router;