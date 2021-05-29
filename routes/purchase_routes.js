var express = require('express');
var router = express.Router();
var purchase = require('../model/purchase_model');

router.get('/', function (req, res, next) {
    purchase.getAllPurchase(function (err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});

router.delete('/:purchase_id', function (req, res, next) {
    purchase.deletePurchase(req.params.purchase_id, function (err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});

router.post('/', function (req, res, next) {
    purchase.addPurchase(req.body, function (err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});

router.get('/:purchase_id', function (req, res, next) {
    purchase.getPurchaseById(req.params.purchase_id, function (err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});

router.put('/:purchase_id', function (req, res, next) {
    purchase.updatePurchase(req.params.purchase_id, req.body, function (err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});

module.exports = router;