var db = require('../dbconnection');
var supplier = {
    getAllSupplier: function (callback) {
        return db.query('select * from supplier', callback);
    },
    deleteSupplier: function (supplier_id, callback) {
        return db.query('delete from supplier where supplier_id=?', [supplier_id], callback);
    },
    addSupplier: function (item, callback) {
        return db.query('insert into supplier( supplier_name,supplier_email, supplier_mobileno, supplier_address, supplier_desc) VALUES (?,?,?,?)', [item.supplier_name, item.supplier_email,item.supplier_mobileno, item.supplier_address, item.supplier_desc], callback);
    },
    getSupplierById: function (supplier_id, callback) {
        return db.query('select * from supplier where supplier_id=?', [supplier_id], callback);
    },
    updateSupplier: function (supplier_id, item, callback) {
        return db.query('update supplier set supplier_name=?,supplier_email=?,supplier_mobileno=?,supplier_address=?,supplier_desc=? where supplier_id=?', [item.supplier_name, item.supplier_email,item.supplier_mobileno, item.supplier_address, item.supplier_desc, supplier_id], callback);
    },
    deleteAllSupplierData:function(item,callback){
        return db.query("delete from supplier where supplier_id in (?)",[item],callback);
     }
};

module.exports = supplier;