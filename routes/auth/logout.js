const logout = require('../../controllers/auth/logout');
const router = require('express').Router();

router.post('/', logout);

module.exports = router;