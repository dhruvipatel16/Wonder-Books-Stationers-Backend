//order_deliery_routes
var db = require('../dbconnection');
var dateFormat = require('dateformat');
var now = new Date();
var order_delivery = {

    getAllorder_delivery: function (callback) {
        return db.query('select o.*,c.*,e.*,od.* from order_tbl o,customer c,employee e,order_delivery od where o.order_id=od.fk_order_id and e.employee_id=od.fk_employee_id and o.fk_customer_id=c.customer_id', callback);
    },
    getorder_deliveryById: function (order_delivery_id, callback) {
        return db.query('select o.*,e.*,od.* from order_tbl o,employee e,order_delivery od where o.order_id=od.fk_order_id and e.employee_id=od.fk_employee_id and order_delivery_id=?', [order_delivery_id], callback);
    },
    getOrderDeliveryNotByEmployee: function (callback) {
        return db.query('select c.*,o.* from customer c,order_tbl o where c.customer_id=o.fk_customer_id and order_id not in (select fk_order_id from order_delivery)', callback);
    },//orderDeliveryNotByEmpId
    updateorder_delivery: function (item, callback) {
        return db.query('update order_delivery set fk_order_id=?,fk_employee_id=?,delivery_date=?,comment=? where order_delivery_id=?', [item.fk_order_id, item.fk_employee_id, item.delivery_date, item.comment, item.order_delivery_id], callback);
    },
    addOrderDelivery: function (item, callback) {
        var arr1 = [];
        if (item != null) {
            for (let i = 0; i < item.selectedProductArr.length; i++) {
                const Product_Id = item.selectedProductArr[i];
                const Employee_Id = item.selectedEmployeeID;
                const delivery_date = dateFormat(now, "yyyy-mm-dd");
                arr1.push([Product_Id, Employee_Id, delivery_date]);
            }
            return db.query('insert into order_delivery( fk_order_id,fk_employee_id,delivery_date) VALUES ?', [arr1], callback);
        }
    }
};

module.exports = order_delivery;
