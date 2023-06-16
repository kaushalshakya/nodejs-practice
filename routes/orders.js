const router = require('express').Router();
const { 
    orderDetails,
    orderDetailsById,
    deleteOrder,
    orderDetailsOfUser
} = require('../controllers/orders')


router.get('/', orderDetails);
router.get('/:id', orderDetailsById);
router.delete('/:id', deleteOrder);

module.exports = router;