/**
 * Main application routes
 */

'use strict';

const express = require('express');
const router = express.Router();

const ordersAPI = require('./api/order');
const getCouponsAPI = require('./api/coupons');

module.exports = config => {

    // Insert routes below.
    router.use('/', getCouponsAPI(config));

    router.use('/api/orders', ordersAPI(config));

    return router;
};