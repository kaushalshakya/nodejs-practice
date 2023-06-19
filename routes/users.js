const router = require('express').Router();
const {
    allUsers,
    allUsersById,
    postUser,
    updateUser,
    deleteUser,
} = require('../controllers/users');

router.get('/', allUsers);
router.get('/:id', allUsersById);
router.post('/', postUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

module.exports = router;