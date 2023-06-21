const route = require('express').Router();

const loginRouter = require('./auth/login');
const refreshRouter = require('./refresh');
const userRouter = require('./users');
const productRouter = require('./products');
const orderRouter = require('./orders');
const logOutRouter = require('./auth/logout');

module.exports = {
    loginRouter,
    refreshRouter,
    userRouter,
    productRouter,
    orderRouter,
    logOutRouter
}