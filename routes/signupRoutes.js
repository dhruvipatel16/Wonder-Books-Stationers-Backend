var express=require('express');
var router=express.Router();
var user_router=require('../model/user_model');

router.post('/',function(req,res,next)
{
user_router.signup(req.body,function(err,rows)
{
    if(err)
    {
        res.json(err);
    }
    else
    {
        res.json(rows);
    }
})
});
module.exports=router;