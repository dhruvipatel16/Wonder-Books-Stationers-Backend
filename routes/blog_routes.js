var express = require('express');
var router = express.Router();
var multer = require('multer');
var path = require('path');
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images/blog_images/')
    },
    filename: (req, file, cb) => {
        cb(null,file.fieldname + '-' + Date.now() + path.extname(file.originalname))

    }
});
var upload = multer({ storage: storage });

var blog = require('../model/blog_model');
router.get('/:blog_id?', function (req, res, next) {
    if (req.params.blog_id) {
      
        blog.getBlogById(req.params.blog_id, function (err, rows) {
            if (err) {
                res.json(err);
            } else {
                res.json(rows);
            }
        });
    } else {
        blog.getBlog(function (err, rows) {
            if (err) {
                res.json(err);
            } else {
                res.json(rows);
            }
        });
    }
});


router.post('/', upload.single('blog_photo'), function (req, res, next) {
   blog.addBlogData(req.body, req.file.filename, function (err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});

router.post('/:id', function (req, res, next) {
    product.deleteAllProductData(req.body, function (err, count) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(count);
        }
    });
});
router.delete('/:blog_id', function (req, res, next) {
    blog.deleteBlogData(req.params.blog_id, function (err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});
router.put('/:blog_id',upload.single('pic'),function(req,res,next){
    blog.updateBlogData(req.params.blog_id,req.file !=null ? req.file.filename : req.blog_photo,req.body,function(err,rows){
        if (err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
    });
}); 
module.exports = router;