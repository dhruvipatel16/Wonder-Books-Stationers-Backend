var express=require('express');
var router=express.Router();
var prod=require('../model/product_model');
var multer=require('multer');
var path=require('path');

var storage=multer.diskStorage({
    destination:(req,file,cd)=>{
        cd(null,'public/images/');
    },
    filename:(req,file,cd)=>{
        cd(null,file.fieldname+'-'+Date.now()+path.extname(file.originalname))
    }
})
var upload=multer({storage:storage});

router.put('/:product_id',upload.single('pic'),function(req,res,next){
    prod.updateProductData(req.params.product_id,req.file !=null ? req.file.filename : req.product_img,req.body,function(err,rows){
        if (err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
});

module.exports=router;