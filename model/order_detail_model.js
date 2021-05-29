var db = require('../dbconnection');
var order_detail = {
    getAllorder_details: function (order_id,callback) {
        return db.query('select p.*,o.*,od.*,c.* from product p,order_tbl o,order_detail od,customer c where p.product_id=od.fk_product_id and o.order_id=od.fk_order_id and c.customer_id=o.fk_customer_id and o.order_id=?',[order_id], callback);
    },
    getOrderDetailsByOrderId:function(order_id,callback){
        return db.query("select o.*,od.quantity,c.customer_name,p.product_name,p.product_price from order_detail od,order_tbl o,customer c,product p  WHERE od.fk_order_id=o.order_id and od.fk_product_id=p.product_id and o.fk_customer_id=c.customer_id and o.order_id=?",[order_id],callback)

    },
    getOrderDeliveryDetailsByOrderId:function(order_id,callback){
        return db.query("select od.delivery_date,od.comment,e.employee_name,e.employee_mobileno from order_tbl o,order_delivery od,employee e where od.fk_order_id=o.order_id and od.fk_employee_id=e.employee_id and o.order_id=14",[order_id],callback)
    },
    // getorder_detailById: function (order_detail_id, callback) {
    //     return db.query('select * from order_detail where order_detail_id=?', [order_detail_id], callback);
    // }

    addOrderDetailsData: function (item, callback) 
    {     
    
        for(let i=0;i<item.cart.length;i++)
        {        
   db.query('INSERT INTO `order_detail`(`fk_order_id`, `fk_product_id`, `quantity`) VALUES (?,?,?)', [item.fk_order_id,item.cart[i].product.product_id,item.cart[i].qty]);

        }
   return db.query(callback);     
        
     }
};
module.exports = order_detail;