var express=require('express');
var router=express.Router();
var category=require('../model/category_model');

router.post('/',function(req,res,next){
    category.deleteAllCategoryData(req.body,function(err,rows){
        if (err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});


module.exports=router;