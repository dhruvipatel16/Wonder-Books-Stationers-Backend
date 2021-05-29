var db = require('../dbconnection');
var category = {
    getAllCategory: function (callback) {
        return db.query('select * from category', callback);
    },
    getAllBookCategory: function (callback) {
        return db.query('SELECT * FROM `category` WHERE category_type=1', callback);
    },
     getAllStationeryCategory: function (callback) {
        return db.query('SELECT * FROM `category` WHERE category_type!=1', callback);
    },
    deleteCategory: function (id, callback) {
        return db.query('delete from category where category_id=?', [id], callback);
    },
    
    addCategory: function (item, filename,callback) {
        return db.query('insert into category( `category_name`,`category_img`) VALUES (?,?)', [item.category_name,'images/category_images/'+filename], callback);
    },
    getCategoryById: function (category_id, callback) {
        return db.query('select * from category where category_id=?', [category_id], callback);
    },
    updateCategory: function (category_id,filename,item, callback) {
        
        return db.query('UPDATE `category` SET `category_name`=?,`category_img`=? WHERE category_id=?', [item.category_name,filename!=null?'images/category_images/'+filename:item.pic,category_id], callback);
    },
     deleteAllCategoryData:function(item,callback)
     {  var delarr=[];
        for(i=0;i<item.length;i++)
        {
            delarr[i]=item[i].category_id;
        }
        return db.query("delete from category where category_id in (?)",[delarr],callback);
}
};
module.exports = category;