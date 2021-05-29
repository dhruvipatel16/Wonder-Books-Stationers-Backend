var express=require('express');
var router=express.Router();
var user=require('../model/user_model');
router.get('/',function(req,res,next){
    user.getAllUsers(function(err,rows){
        if(err)
        {
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});
router.post('/',function(req,res,next){
    user.addUser(req.body,function(err,rows){
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

router.post('/:id',function(req,res,next){
  user.deleteAllUserData(req.body,function(err,count){
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
router.delete('/:user_id',function(req,res,next){
    user.deleteUser(req.params.id,function(err,rows){
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


router.put('/:user_id',function (req, res, next) {
    user.updateAdminPassword(req.body, function (err, rows) {

       
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
          
        }
    });
});
    
module.exports=router;