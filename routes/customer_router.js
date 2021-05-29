var express = require('express');
var router = express.Router();
var multer = require('multer');
var path = require('path');
var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/images/customer_images/')
    },
    filename: (req, file, cb) => {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))

    }
});
var upload = multer({ storage: storage });
var customer = require('../model/customer_model');



router.get('/:customer_id?', function (req, res, next) {
    if (req.params.customer_id) {
      
        customer.getAllCustomerById(req.params.customer_id, function (err, rows) {
            if (err) {
                res.json(err);
            } else {
                res.json(rows);
            }
        });
    } else {
        customer.getAllCustomer(function (err, rows) {
            if (err) {
                res.json(err);
            } else {
                res.json(rows);
            }
        });
    }
});

router.post('/', upload.single('customer_photo'), function (req, res, next) {
    console.log(req.body)
    customer.addCustomer(req.body, req.file.filename, function (err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});

router.post('/:customer_id', function (req, res, next) {
    customer.deleteAllCustomerData(req.body, function (err, count) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(count);
        }
    });
}); 
router.delete('/:customer_id', function (req, res, next) {
    customer.deleteCustomer(req.params.customer_id, function (err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});

router.put('/:customer_id', upload.single('pic'), function (req, res, next) {
    customer.updateCustomerData(req.params.customer_id, req.file != null ? req.file.filename : req.customer_photo, req.body, function (err, rows) {

      
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
     
        }
    });
});
module.exports = router;