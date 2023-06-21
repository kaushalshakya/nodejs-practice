const removeRefreshToken = require('../../models/auth/logout');

const logout = (req, res) =>{
    //delete access token on client
    const username = req.body.username;
    const logoutUser = removeRefreshToken(username);
    logoutUser.then((details) =>{
        res.status(200).json({status: 200, message: 'Logged Out successfully!'});
    }).catch((err) =>{
        res.status(400).json({status: 400, message: err.message});
    })
}

module.exports = logout;