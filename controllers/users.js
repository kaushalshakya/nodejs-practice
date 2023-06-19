const { 
        getAllUsers, 
        getAllUsersById,
        postUserDetails,
        updateUserDetails,
        deleteUserDetails 
    } = require('../models/users');

const bcrypt = require('bcryptjs');


const allUsers = ( req,res ) =>{
    const details = getAllUsers();
    details.then((details) =>{
        res.status(200).json({status: 200, message: "All Users:", data: details});
    }).catch((err) => {
        res.status(400).json({status: 400, message: err.message});
    })
}

const allUsersById = (req, res) =>{
    const id = req.params.id;
    const details = getAllUsersById(id);
    details.then((details) =>{
        res.status(200).json({status: 200, message: `User with the ID: ${id}:`, data: details});
    }).catch((err) =>{
        res.status(400).json({status: 400, message: err.message});
    })
}

const postUser = (req, res) =>{
    const password = req.body.password;
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    const data = {
        first_name : req.body.first_name,
        middle_name: req.body.middle_name,
        last_name : req.body.last_name,
        username : req.body.username,
        email: req.body.email,
        password: hash
    }
    const details = postUserDetails(data);
    details.then((details) =>{
        res.status(200).json({status: 200, message: "Your data has been added successfully! ^-^",});
    }).catch((err) =>{
        res.status(400).json({status: 400, message: err.message});
    })
}

const updateUser = (req, res) =>{
    const id = req.params.id;
    const password = req.body.password;
    const salt = bcrypt.genSaltSync(10);
    const hash = bcrypt.hashSync(password, salt);
    const data = {
        first_name : req.body.first_name,
        middle_name: req.body.middle_name,
        last_name : req.body.last_name,
        username : req.body.username,
        email: req.body.email,
        password: hash
    }
    const details = updateUserDetails(id, data);
    details.then((details) =>{
        res.status(200).json({status: 200, message: `The details for the user with id: ${id} has been updated successfully! ^-^`});
    }).catch((err) =>{
        res.status(400).json({status: 400, message: err.message});
    }) 
}

const deleteUser = (req, res) =>{
    const id = req.params.id;
    const details = deleteUserDetails(id);
    details.then((details) =>{
        res.status(200).json({status: 200, message:`Details for user with ID: ${id} has been deleted`});
    }).catch((err) =>{
        res.status(400).json({status: 400, message: err.message});
    })
}


module.exports = { 
    allUsers,
    allUsersById,
    postUser,
    updateUser,
    deleteUser,
 };