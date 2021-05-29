var express = require('express');
var router = express.Router();
var employee = require('../model/employee_model');

router.get('/:employee_id?', function (req, res, next) {
    if (req.params.employee_id) {
        employee.getAllEmployeeById(req.params.employee_id, function (err, rows) {
            if (err) {
                res.json(err);
            } else {
                res.json(rows);
            }
        });
    } else {
        employee.getAllEmployee(function (err, rows) {
            if (err) {
                res.json(err);
            } else {
                res.json(rows);
            }
        });
    }
});

router.post('/', function (req, res, next) {
    employee.addEmployee(req.body, function (err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});

router.post('/:id', function (req, res, next) {
    employee.deleteAllEmployeeData(req.body, function (err, count) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(count);
        }
    });
});
router.delete('/:employee_id', function (req, res, next) {
    employee.deleteEmployee(req.params.employee_id, function (err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});

router.put('/:employee_id', function (req, res, next) {
    employee.updateEmployeeData(req.body, function (err, rows) {


        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);

        }
    });
});
module.exports = router;