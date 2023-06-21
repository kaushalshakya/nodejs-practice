const express = require('express');
const app = express();
const verifyJwt = require('./middlewares/verifyJWT');

const PORT = process.env.PORT || 8000;

app.use(express.json());

app.get('/', (req, res) =>{
    res.status(200).json({status: 200, message: "NodeJS Practice"});
})


const loginRouter = require('./routes/auth/login');
app.use('/api/v1/login', loginRouter);

const refreshRouter = require('./routes/refresh');
app.use('/api/v1/refresh', refreshRouter);


app.use(verifyJwt);
const userRouter = require('./routes/users');
app.use('/api/v1/users', userRouter);

const productRouter = require('./routes/products');
app.use('/api/v1/products', productRouter);

const orderRouter = require('./routes/orders');
app.use('/api/v1/orders', orderRouter);

app.listen(PORT, () =>{
    console.log(`Server is running on http://localhost:${PORT}`);
})
