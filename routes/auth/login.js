const router = require('express').Router();
const loginUserRequest = require('../../controllers/auth/login')

router.post('/', loginUserRequest);

module.exports = router;