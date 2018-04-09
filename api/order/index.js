'use strict';

const express = require('express');
const router = express.Router();

module.exports = config => {

    const controller = require('./order.controller.js')(config);

    router.post('/', controller.createOrder);

    return router;
};