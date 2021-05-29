var db =require('../dbconnection');
var product={
    getAllProductWithCategory:function(callback){
        return db.query('select c.*,p.* from category c, product p where c.category_id = p.fk_cat_id',callback);
    },
    getProductDataByCategory:function(fk_cat_id,callback){
      
        return db.query('SELECT * FROM product WHERE fk_cat_id=?',[fk_cat_id],callback);
    },
    // getAllProduct:function(callback){
    //     return db.query('select * from product',callback);  
    // },
    
    getAllProductById:function(product_id,callback){
        return db.query('select * from product where product_id=?',[product_id],callback);
    },
    addProductData:function(item,filename,callback){
     
        return db.query('INSERT INTO `product` ( `product_name`, `product_price`, `product_qty`,`product_mfg`, `product_desc`, `product_img`,`fk_cat_id`) VALUES (?,?,?,?,?,?,?)',[item.product_name,item.product_price,item.product_qty,item.product_mfg,item.product_desc,'images/product_images/'+filename,item.fk_cat_id],callback);
    },
    updateProductData:function(product_id,filename,item,callback){
    console.log(item);
    console.log(filename);
    
    
        return db.query('UPDATE `product` SET `product_name`=?,`product_price`=?,`product_qty`=?,`product_mfg`=?,`product_desc`=?,`product_img`=?,`fk_cat_id`=? WHERE `product_id`=?',[item.product_name,item.product_price,item.product_qty,item.product_mfg,item.product_desc,filename!=null?'images/product_images/'+filename:item.pic,item.fk_cat_id,product_id],callback);
    },
    deleteProductData:function(product_id,callback){
        return db.query('delete from product where product_id=?',[product_id],callback);
    },
    // deleteAllProductDat:function(item,callback){
    //     return db.query("delete from product where product_id in (?)",[item],callback);
    //  },
     deleteAllProductData:function(item,callback)
{
        var delarr=[];
           for(i=0;i<item.length;i++)
           {
               delarr[i]=item[i].product_id;
           }
           return db.query("delete from product where product_id in (?)",[delarr],callback);
},
getSortedProductList: function (callback) {
    return db.query('select p.*,od.*,c.* from product_table p,order_detalis_table od,category_table c where p.pro_id=od.fk_pro_id and c.cat_id=p.fk_cat_id', callback);

}
};

module.exports=product;