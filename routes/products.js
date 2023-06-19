const router = require('express').Router();
const verifyJwt = require('../middlewares/verifyJWT');

const { 
    productDetails,
    productDetailsById,
    postProduct, 
    updateProduct,
    deleteProduct
} = require('../controllers/products')

router.get('/', verifyJwt, productDetails);
router.get('/:id', productDetailsById);
router.post('/', postProduct);
router.put('/:id', updateProduct);
router.delete('/:id', deleteProduct);

module.exports = router;