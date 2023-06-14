const {
    getOrderDetails,
    getOrderDetailsById,
    deleteOrderDetails
} = require('../models/orders');

const orderDetails = (req, res) =>{
    const details = getOrderDetails();
    details.then((details) =>{
        res.status(200).json({status: 200, message: "All Order Details:", data: details});
    }).catch((err) =>{
        res.status(400).json({status: 400, message: err.message});
    })
}

const orderDetailsById = (req, res) =>{
    const id = req.params.id;
    const details = getOrderDetailsById(id);
    details.then((details) =>{
        res.status(200).json({status: 200, message: `Details for order with ID: ${id}`, data: details});
    }).catch((err) =>{
        res.status(400).json({status: 400, message: err.message});
    })
}

const deleteOrder = (req, res) =>{
    const id = req.params.id;
    const details = deleteOrderDetails(id);
    details.then((details) =>{
        res.status(200).json({status: 200, message:`Details for orders with ID: ${id} has been deleted`});
    }).catch((err) =>{
        res.status(400).json({status: 400, message: err.message});
    })
}

module.exports = {
    orderDetails,
    orderDetailsById,
    deleteOrder
};