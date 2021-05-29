var express = require('express');
var path=require('path');
var router = express.Router();
var login=require('../model/user_model')
/* GET users listing. */

router.post('/',function(req,res,next){
   login.login(req.body,function(err,rows){
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

router.put('/user_id',function(req,res,next){
login.UpdateOtpInUserRecord(req.body,function(err,rows){
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
module.exports = router;