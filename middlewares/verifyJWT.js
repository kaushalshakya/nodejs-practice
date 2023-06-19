const jwt = require('jsonwebtoken');
require('dotenv').config();

const verifyJwt = (req, res, next) => {
    const authHeader = req.headers['authorization'];
    if (!authHeader) {
      return res.status(400).json({
        status: 400,
        message: "You are not authorized"
      });
    }
    
    const token = authHeader.split(' ')[1];
    jwt.verify(
      token,
      process.env.ACCESS_TOKEN_SECRET,
      (err, decodedData) => {
        if (err) {
          res.status(403).json({
            status: 403,
            message: "Your token has been tampered with"
          });
        } else {
          req.user = decodedData.username;
          next();
        }
      }
    );
  };
  



module.exports = verifyJwt;