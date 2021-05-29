var express = require('express');
var router = express.Router();

var category = require('../model/category_model');

router.get('/', function (req, res, next) {
    category.getAllStationeryCategory(function (err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});

module.exports = router;