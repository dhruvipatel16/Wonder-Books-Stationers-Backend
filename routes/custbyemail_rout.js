var express=require('express');
var router=express.Router();
var path=require('path');
var customer=require('../model/customer_model');

router.post('/',function(req,res,next){
    
    consol.log("rout");
    consol.log(req.body);
 customer.getAllCustomerByEmail(req.body,function(err,count){
    if(err)
    {
      res.json(err);
    }
    else
    {
      res.json(count);
    }
    });
    });

module.exports=router;