'use strict';

const couponCodeRunner = require('./../../services/fetchCouponRunner.service');

module.exports = config => {

    const couponController = {};

    couponController.getCoupons = (req, res) => {
        couponCodeRunner.couponService({}, res.send);
    };

    return couponController;
};