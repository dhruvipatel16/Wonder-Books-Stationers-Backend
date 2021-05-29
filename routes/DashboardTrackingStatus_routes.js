var express = require('express');
var router = express.Router();
var dashroutTracking = require('../model/dashboard_model');
router.get('/', function (req, res, next) {
    dashroutTracking.trackStatus(function (err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});
module.exports = router;