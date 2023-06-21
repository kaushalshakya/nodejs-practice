const jwt = require('jsonwebtoken');
const { setRefreshToken } = require('../../models/auth/login');
require('dotenv').config();


const handleRefreshToken = async (req, res) => {
    let refreshToken = req.body.token;
    console.log(refreshToken);
    jwt.verify(
        refreshToken,
        process.env.REFRESH_TOKEN_SECRET,
        (err, decoded) =>{
            if(err){
                return res.status(403).json(
                    {
                        status: 400, 
                        message: "Your token has been tampered with"
                    });
            }
            console.log(decoded.username);
            const newAccessToken = jwt.sign(
                {
                    'username': decoded.username,
                    'role': decoded.role
                },
                process.env.ACCESS_TOKEN_SECRET,
                {expiresIn: '1m'}
            )
            const newRefreshToken = jwt.sign(
                {"username": decoded.username},
                process.env.REFRESH_TOKEN_SECRET,
                {expiresIn: "10m"}
            )
            refreshToken = newRefreshToken;
            console.log(refreshToken);
            setRefreshToken(decoded.username, refreshToken);
            res.status(200)
            .json(
                {
                    status: 200,
                    newAccessToken: newAccessToken,
                    newRefreshToken: newRefreshToken
                }
                )
        }
    )
  };
  

module.exports = handleRefreshToken;