const jwt = require('jsonwebtoken');
require('dotenv').config();
const bcrypt = require('bcryptjs');
const {
    loginUser,
    setRefreshToken
} = require('../../models/auth/login');

const loginUserRequest = async(req,res) =>{
    const username = req.body.username;
    const password = req.body.password;
    
    if(!username || !password){
        return res.status(400).json({status: 400, message: "Username and Password is required!"});
    }

    const userDetails = loginUser(username, password);
    userDetails.then((details) =>{
        const payload = {
            username: req.body.username,
            password: req.body.password
        }
        const hashedPassword = details[0].password;
        const userAvailable = bcrypt.compareSync(payload.password, hashedPassword);
        if (userAvailable){
           
            const accessToken = jwt.sign(
                {"username": payload.username},
                process.env.ACCESS_TOKEN_SECRET,
                {expiresIn: "10m"}
            )
            const refreshToken = jwt.sign(
                {"username": payload.username},
                process.env.REFRESH_TOKEN_SECRET,
                {expiresIn: "1d"}
            )
            setRefreshToken(payload.username, refreshToken);
            res.status(200).json({
                status: 200, 
                message: "User available!",
                accessToken: accessToken,
                refreshToken: refreshToken
            });
        } else{
            res.status(400).json({status: 400, message: "Invalid credentials"});
        }
    }).catch((err) =>{
        res.status(400).json({status: 404, message: err.message});
    })
}

module.exports = loginUserRequest;