var express = require('express');
var router = express.Router();
var order_detail = require('../model/order_delivery_model');

//order_delivery_model
router.get('/', function (req, res, next) {

    order_detail.getOrderDeliveryNotByEmployee(function (err, rows) {
        if (err) {
            res.json(err);
        } else {
            res.json(rows);
        }
    });

});

module.exports = router;