var express = require('express');
var router = express.Router();
var dashroutCustomer = require('../model/dashboard_model');
router.get('/', function (req, res, next) {
    dashroutCustomer.getAllCustomer(function (err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});
module.exports = router;