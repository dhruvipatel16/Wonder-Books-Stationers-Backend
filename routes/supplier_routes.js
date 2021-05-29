var express = require('express');
var router = express.Router();
var supplier = require('../model/supplier_model');

router.get('/', function (req, res, next) {
    supplier.getAllSupplier(function (err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});

router.delete('/:supplier_id', function (req, res, next) {
    supplier.deleteSupplier(req.params.supplier_id, function (err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});

router.post('/', function (req, res, next) {
    supplier.addSupplier(req.body, function (err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});

router.get('/:supplier_id', function (req, res, next) {
    supplier.getSupplierById(req.params.supplier_id, function (err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});

router.put('/:supplier_id', function (req, res, next) {
    supplier.updateSupplier(req.params.supplier_id, req.body, function (err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});

module.exports = router;