'use strict';

const express = require('express');

const app = express();

const route = route.get('/', (req, res, next) => {
    res.status(200).sand({
        title:"Node Store API",
        version: "0.0.1"
    });
});

const router = express.Router();

app.use('/', route);

module.exports = app;