const {
    getProductDetails,
    getProductDetailsById,
    postProductDetails,
    updateProductDetails,
    deleteProductDetails
} = require('../models/products');

const productDetails = (req, res) =>{
    const details = getProductDetails();
    details.then((details) =>{
        res.status(200).json({status: 200, message: "All Product Details:", data: details});
    }).catch((err) =>{
        res.status(400).json({status: 400, message: err.message})
    })
}

const productDetailsById = (req, res) =>{
    const id = req.params.id;
    const details = getProductDetailsById(id);
    details.then((details) =>{
        res.status(200).json({status: 200, message: `Product details having the id: ${id}`, data: details});
    }).catch((err) =>{
        res.status(400).json({status: 400, message: err.message});
    })
}

const postProduct = (req, res) =>{
    const data = {
        product_name: req.body.product_name,
        product_description: req.body.product_description,
        price: req.body.price
    }
    const details = postProductDetails(data);
    details.then((details) =>{
        res.status(200).json({status: 200, message: 'Product added successfully'});
    }).catch((err) =>{
        res.status(400).json({status: 400, message: err.message});
    })
}

const updateProduct = (req, res) =>{
    const id = req.params.id;
    const data = {
        product_name: req.body.product_name,
        product_description: req.body.product_description,
        price: req.body.price
    }
    const details = updateProductDetails(id, data);
    details.then((details) =>{
        res.status(200).json({status: 200, message: `Product with the id of ${id} updated successfully`});
    }).catch((err) =>{
        res.status(400).json({status: 400, message: err.message});
    })
}

const deleteProduct =(req, res) =>{
    const id = req.params.id;
    const details = deleteProductDetails(id);
    details.then((details) =>{
        res.status(200).json({status: 200, message:`Details for products with ID: ${id} has been deleted`});
    }).catch((err) =>{
        res.status(400).json({status: 400, message: err.message});
    })
}

module.exports = {
    productDetails,
    productDetailsById,
    postProduct,
    updateProduct,
    deleteProduct
}