'use strict';

const express = require('express');
const bodyParser = require('bodyParser');
const mongoose = require('mongoose');
const config = require('./config');

const app = express();
const router = express.Router();

mongoose.connect(config.connectionString);

const Product = require('./models/products');
const Costumer = require('./models/costumer');
const Order = require('./models/order');

const indexRote = require('./routes/index-route');
const productRoute = require('./routes/product-route');
const custumerRoute = require('./routes/custumer-route');
const orderRoute = require('./routes/order-routes');

app.use(bodyParser.json({
    limit: '5mb'
}));
app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(function(req,res,next){
    res.header('Access-Controll-Allow-Origin', '*');
    res.header('Access-Controll-Allow-Headers', 'Origin, X-Requested-With, Content-type, Accept, X-access-token');
    res.header('Access-Controll-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    noxt();
})

app.use('/', indexRote);
app.use('/products', productRoute);
app.use('/customers', custumerRoute);
app.use('/orders', orderRoute);

module.exports = app;