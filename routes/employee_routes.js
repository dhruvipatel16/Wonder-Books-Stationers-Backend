var express = require('express');
var router = express.Router();
var employee = require('../model/employee_model');

router.get('/', function (req, res, next) {
    employee.getAllEmployee(function (err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
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

router.delete('/:id', function (req, res, next) {
    employee.deleteEmployee(req.params.id, function (err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    });
});

router.get('/:employee_id', function (req, res, next) {
    employee.getEmployeeById(req.params.employee_id, function (err, rows) {
        if (err) {
            res.json(err);
        }
        else {
            res.json(rows);
        }
    })
}),

    router.put('/:employee_id', function (req, res, next) {
        employee.updateEmployee(req.params.employee_id, req.body, function (err, rows) {
            if (err) {
                res.json(err);
            }
            else {
                res.json(rows);
            }
        })
    })

module.exports = router;