var express = require('express');
var router = express.Router();
var prod = require('../model/product_model');



router.get('/:fk_cat_id', function (req, res, next) 
{    
    
        prod.getProductDataByCategory(req.params.fk_cat_id, function (err, rows) {
            if (err) {
                res.json(err);
            } else {
                res.json(rows); 
            }
        });
    
});

module.exports = router;