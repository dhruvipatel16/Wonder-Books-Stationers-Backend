var express = require('express');
var router = express.Router();
var order_delivery = require('../model/order_delivery_model');

router.get('/:order_delivery_id?', function (req, res, next) {
    if (req.params.order_delivery_id) {
        order_delivery.getorder_deliveryById(req.params.order_delivery_id, function (err, rows) {
            if (err) {
                res.json(err);
            } else {
                res.json(rows);
            }
        });
    }
    else {
        order_delivery.getAllorder_delivery(function (err, rows) {
            if (err) {
                res.json(err);
            } else {
                res.json(rows);
            }
        });
    }
});

router.put('/:order_delivery_id', function (req, res, next) {
    order_delivery.updateorder_delivery(req.body, function (err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});

router.post('/', function (req, res, next) {
    order_delivery.addOrderDelivery(req.body, function (err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});

module.exports = router;