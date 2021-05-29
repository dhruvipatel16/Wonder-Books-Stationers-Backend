var db =require('../dbconnection');
var Book={
    getAllBookCategory:function(callback){
        return db.query('select * from category where category_type=1',callback);
    },
    
    getAllBook:function(callback){
        return db.query('select c.*,p.* from product p,category c where p.fk_cat_id=c.category_id and c.category_type=1',callback);  
    }
    
//     getAllBookById:function(product_id,callback){
//         return db.query('select * from book_tbl where product_id=?',[product_id],callback);
//     },
//     addBookData:function(item,filename,callback){
//         return db.query('INSERT INTO `book_tbl` ( `book_name`, `product_price`, `product_qty`,`book_img`, `book_publication`,`standard`,`book_description`,`fk_cat_id`) VALUES (?,?,?,?,?,?,?,?)',[item.book_name,item.product_price,item.product_qty,'images/book_images/'+filename,item.book_publication,item.standard,item.book_description,item.fk_cat_id],callback);
//     },
//     updateBookData:function(product_id,filename,item,callback){
//         return db.query("UPDATE `book_tbl` SET `book_name`=?,`product_price`=?, `product_qty` = ?,`book_img` = ?, `book_publication` = ?,`standard` = ?, `book_description` = ?, `fk_cat_id` = ? WHERE `product_id` = ?",[item.book_name,item.product_price,item.product_qty,filename!=null?'images/book_images/'+filename:item.pic,item.book_publication,item.standard,item.book_description,item.fk_cat_id,product_id],callback);
//     },
//     deleteBookData:function(product_id,callback){
//         return db.query('delete from book_tbl where product_id=?',[product_id],callback);
//     },
//     // deleteAllBookDat:function(item,callback){
//     //     return db.query("delete from Book where product_id in (?)",[item],callback);
//     //  },
//      deleteAllBookData:function(item,callback)
// {
//         var delarr=[];
//            for(i=0;i<item.length;i++)
//            {
//                delarr[i]=item[i].product_id;
//            }
//            return db.query("delete from book_tbl where product_id in (?)",[delarr],callback);
// }
};

module.exports=Book;