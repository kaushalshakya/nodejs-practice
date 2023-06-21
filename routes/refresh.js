const router = require('express').Router();
const handleRefreshToken = require('../controllers/auth/refreshToken');

router.post('/', handleRefreshToken);

module.exports = router;