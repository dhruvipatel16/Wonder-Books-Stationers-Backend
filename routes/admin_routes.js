var express=require('express');
var router=express.Router();
var path=require('path');
var admin=require('../model/admin_model');
router.get('/',function(req,res,next){
    admin.getAllAdmin(function(err,rows){
        if(err)
        {
            res.json(err);
        }
        else
        {
            res.json(rows);
        }
    });
});

module.exports=router;