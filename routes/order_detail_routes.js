var express = require('express');
var router = express.Router();
var order_detail = require('../model/order_model');
var order_detailss = require('../model/order_detail_model');

//order_model
router.get('/:order_id', function (req, res, next) {
    
        order_detail.getOrderById1(req.params.order_id, function (err, rows) {
            if (err) {
                res.json(err);
            } else {
                res.json(rows); 
            }
        });
    
});

router.post('/', function (req, res, next) {
    
    order_detailss.addOrderDetailsData(req.body, function (err, rows) {
        
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});
module.exports = router;