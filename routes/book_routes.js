var express = require('express');
var router = express.Router();
var multer = require('multer');
var path = require('path');
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images/book_images/')
    },
    filename: (req, file, cb) => {
        cb(null,file.fieldname + '-' + Date.now() + path.extname(file.originalname))

    }
});
var upload = multer({ storage: storage });

var Book = require('../model/book_model');
router.get('/:product_id?', function (req, res, next) {
    if (req.params.product_id) {
        Book.getAllBookById(req.params.product_id, function (err, rows) {
            if (err) {
                res.json(err);
            } else {
                res.json(rows);
            }
        });
    } else {
        Book.getAllBook(function (err, rows) {
            if (err) {
                res.json(err);
            } else {
                
                res.json(rows);
            }
        });
    }
});

router.post('/', upload.single('book_img'), function (req, res, next) {
    Book.addBookData(req.body, req.file.filename, function (err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});
router.post('/:id', function (req, res, next) {
    Book.deleteAllBookData(req.body, function (err, count) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(count);
        }
    });
});
router.delete('/:product_id', function (req, res, next) {
    Book.deleteBookData(req.params.product_id, function (err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});
router.put('/:product_id',upload.single('pic'),function(req,res,next){
   Book.updateBookData(req.params.product_id,req.file !=null ? req.file.filename : req.book_img,req.body,function(err,rows){
 
        if (err){
            res.json(err);
        }
        else{
            res.json(rows);
        }
      
    });
});
module.exports = router;
