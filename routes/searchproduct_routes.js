var express = require('express');
var router = express.Router();
var search = require('../model/searchproduct_model');



router.post('/', function (req, res, next) {
    console.log('hey');
    search.searchProduct(req.body, function (err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            
            res.json(rows);
        }
    });
});
module.exports = router