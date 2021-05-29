var express = require('express');
var router = express.Router();
var multer = require('multer');
var path = require('path');
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images/category_images/')
    },
    filename: (req, file, cb) => {
        cb(null,file.fieldname + '-' + Date.now() + path.extname(file.originalname))

    }
});
var upload = multer({ storage: storage });

var category = require('../model/category_model');

router.get('/', function (req, res, next) {
    category.getAllBookCategory(function (err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});

router.post('/',upload.single('category_img'), function (req, res, next) {
    category.addCategory(req.body,req.file.filename, function (err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});

router.delete('/:id', function (req, res, next) {
    category.deleteCategory(req.params.id,function (err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});

router.get('/:category_id', function (req, res, next) {
    category.getCategoryById(req.params.category_id, function (err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    })
}),

router.put('/:category_id',upload.single('pic'),function(req,res,next){
    category.updateCategory(req.params.category_id,req.file!=null?req.file.filename:req.category_img,req.body,
        function(err,rows){
        if(err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    })
})

module.exports = router;