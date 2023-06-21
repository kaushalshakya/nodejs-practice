const express = require('express');
const app = express();
const verifyJwt = require('./middlewares/verifyJWT');
const { 
    loginRouter, 
    refreshRouter, 
    userRouter, 
    productRouter, 
    orderRouter, 
    logOutRouter 
} = require('./routes/index');

const PORT = process.env.PORT || 8000;

app.use(express.json());

app.get('/', (req, res) =>{
    res.status(200).json({status: 200, message: "NodeJS Practice"});
})

app.use('/api/v1/login', loginRouter);
app.use('/api/v1/refresh', refreshRouter);

app.use(verifyJwt);

app.use('/api/v1/users', userRouter);
app.use('/api/v1/products', productRouter);
app.use('/api/v1/orders', orderRouter);
app.use('/api/v1/logout', logOutRouter);

app.listen(PORT, () =>{
    console.log(`Server is running on http://localhost:${PORT}`);
})
