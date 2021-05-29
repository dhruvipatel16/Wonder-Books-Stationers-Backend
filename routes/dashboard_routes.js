var express = require('express');
var router = express.Router();
var dashrout = require('../model/dashboard_model');
router.get('/:year', function (req, res, next) {
    dashrout.ordersCust(req.params.year, function (err, rows) {
        console.log(res);
        if (err) {
            console.log("error");
            res.json(err);
        }
        else {
            console.log("rows");
            res.json(rows);
        }
    });
});

module.exports = router;