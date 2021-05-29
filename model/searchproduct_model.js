var db = require('../dbconnection');
var search = {
    searchProduct:function(item,callback){
     
        db.query('select * from product where product_name like ?',['%'+item.searchText+'%'],callback);
    }
};

module.exports = search;