    var db = require('../dbconnection');
    var dateFormat = require('dateformat');
    var now = Date.now();
    const current_date = dateFormat(now, "yyyy-mm-dd");
    var dash = {
        getAllCustomer: function (callback) {

            return db.query('SELECT  COUNT(IF(user_type="visitor",1,null)) as visitors,COUNT(IF(user_type = "customer", 1, null)) as customers FROM user', callback);
        },
        // MemeberCustomer: function (callback) {
        //     return db.query('SELECT count(*) from admin where u_type="member"', callback);
        // },
    
        ordersCust: function (item, callback) {
            return db.query('SELECT MONTH(order_date) MONTH, COUNT(*) COUNT FROM order_tbl WHERE YEAR(order_date)=? GROUP BY MONTH(order_date)', [item], callback);
        },
        trackStatus: function (callback) {
            console.log('update data model');
            return db.query('SELECT COUNT(IF(order_status="Delivered",1,null)) as Delivered ,COUNT(IF(order_status="Pending",1,null)) as Processing from order_tbl', callback);
        },
        topSellingProducts: function (callback) {
            return db.query("SELECT p.product_name,SUM(od.quantity) AS 'total',fk_product_id FROM order_detail od,order_tbl o,product p WHERE od.fk_order_id=o.order_id and p.product_id=od.fk_product_id GROUP BY fk_product_id ORDER BY (total) DESC LIMIT 8", callback);
        },
        TotalCustomersCount: function (callback) {
            return db.query("SELECT COUNT(*) as 'Total_Customers'  FROM user where user_type='customer'", callback);
        },
        
        TodaysOrderCount: function (callback) {
            console.log(current_date);
            return db.query("SELECT COUNT(*) as 'Today_Orders'  FROM order_tbl WHERE order_date=?", [current_date], callback);
        },
    }
    
module.exports = dash;