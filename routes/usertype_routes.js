var express = require('express');
var router = express.Router();
var UserRouter = require('../model/user_model');
router.put('/:user_id', function (req, res, next) {
    console.log("param:"+req.params.user_id)
    console.log("param:"+req.body)
    
    UserRouter.updateUserType(req.params.user_id,req.body,function (err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});
module.exports=router