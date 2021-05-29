var express = require('express');
var router = express.Router();
var order = require('../model/order_model');

router.get('/:order_id?', function (req, res, next) {
    if (req.params.order_id) {
        order.getOrderById(req.params.order_id, function (err, rows) {
            if (err) {
                res.json(err);
            }
            else {
                res.json(rows);
            }
        }); 
    } else {
        order.getAllOrder(function (err, rows) {
            if (err) {
                res.json(err);
            }
            else {
                res.json(rows);
            }
        });
    }
});
router.post('/', function (req, res, next) {
    order.addOrderData(req.body, function (err, rows) {
        if (err) {
            res.json(err);
        }
        else {
       
            res.json(rows);
        }
    });
});
router.put('/:order_id', function (req, res, next) {
    order.updateOrderData(req.body, function (err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
          
        }
    });
});
module.exports = router