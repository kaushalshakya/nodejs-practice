const router = require('express').Router();
const {
    allUsers,
    allUsersById,
    postUser,
    updateUser,
    deleteUser,
    loginUser
} = require('../controllers/users');

router.get('/', allUsers);
router.post('/login',loginUser); 
router.get('/:id', allUsersById);
router.post('/', postUser);
router.put('/:id', updateUser);
router.delete('/:id', deleteUser);

module.exports = router;