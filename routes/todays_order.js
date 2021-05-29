var express = require('express');
var router = express.Router();
var DashRouter = require('../model/dashboard_model');
router.get('/', function (req, res, next) {
    DashRouter.TodaysOrderCount(function (err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});
module.exports = router;