'use strict';

const express = require('express');
const router = express.Router();

module.exports = config => {

    const controller = require('./coupon.controller.js')(config);
    router.get('/', controller.getCoupons);
    return router;
};