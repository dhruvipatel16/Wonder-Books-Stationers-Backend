var db = require('../dbconnection');
var purchase = {
    getAllPurchase: function (callback) {
        return db.query('select p.*,s.*,pu.* from product p,supplier s,purchase pu where p.product_id=pu.fk_product_id and s.supplier_id=pu.fk_supplier_id', callback);
    },
    deletePurchase: function (purchase_id, callback) {
        return db.query('delete from purchase where purchase_id=?', [purchase_id], callback);
    },
    addPurchase: function (item, callback) {
        return db.query('insert into purchase( quantity, purchase_price, purchase_date,fk_product_id,fk_supplier_id) VALUES (?,?,?,?,?)', [item.quantity, item.purchase_price, item.purchase_date, item.fk_product_id, item.fk_supplier_id], callback);
    },
    getPurchaseById: function (purchase_id, callback) {
        return db.query('select * from purchase where purchase_id=?', [purchase_id], callback);
    },
    updatePurchase: function (purchase_id, item, callback) {
        return db.query('update purchase set quantity=?,purchase_price=?,purchase_date=?,fk_product_id=?,fk_supplier_id=? where purchase_id=?', [item.quantity, item.purchase_price, item.purchase_date, item.fk_product_id, item.fk_supplier_id, purchase_id], callback);
    },
    deleteAllPurchaseData:function(item,callback){
        return db.query("delete from purchase where purchase_id in (?)",[item],callback);
     }
};

module.exports = purchase;