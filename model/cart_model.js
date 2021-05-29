var db = require('../dbconnection');
var cart = {
    getAllCartWithCategory: function (callback) {
        return db.query('SELECT c.*,p.*,u.* FROM cart c,product p,user u WHERE c.fk_product_id=p.product_id and c.fk_user_email=u.user_email', callback);
    },
    
    deleteCart: function (id, callback) {
        return db.query('delete from cart where cart_id=?',[id],callback);
    },
    addCategory: function (item, callback) {
        return db.query('insert into cart( fk_user_email,fk_product_id) VALUES (?,?)', [item.fk_user_email,item.fk_product_id], callback);
    },
    deleteAllCartData:function(item,callback){
        return db.query("delete from cart where cart_id in (?)",[item],callback);
     }
};
module.exports = cart;