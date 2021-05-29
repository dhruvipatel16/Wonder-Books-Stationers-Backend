var db = require('../dbconnection');
var dateFormat = require('dateformat');
    var now = Date.now();
    
    const current_date = dateFormat(now, "yyyy-mm-dd");
    
var blog = {
    getBlog:function(callback){
     
        db.query('select * from blog_tbl',callback);
    }
    ,  getBlogById:function(blog_id,callback){
     
        db.query('select * from blog_tbl where blog_id=?',[blog_id],callback);
    }
    ,
    addBlogData:function(item,filename,callback){
     console.log(current_date);
        return db.query('INSERT INTO `blog_tbl` ( `blog_head`, `blog_photo`,`blog_quote`, `blog_paragraph`,`blog_paragraph2`,`blog_date`) VALUES (?,?,?,?,?,?)',[item.blog_head,'images/blog_images/'+filename,item.blog_quote,item.blog_paragraph,item.blog_paragraph2,current_date],callback);
    },
    updateBlogData:function(blog_id,filename,item,callback){
        console.log(filename);
        console.log(item);
        return db.query('UPDATE `blog_tbl` SET `blog_head`=?,`blog_photo`=?,`blog_quote`=?,`blog_paragraph`=?,`blog_paragraph2`=?,`blog_date`=? WHERE `blog_id`=?',[item.blog_head,filename!=null?'images/blog_images/'+filename:item.pic,item.blog_quote,item.blog_paragraph,item.blog_paragraph2,current_date,blog_id],callback);
    },
    deleteBlogData:function(blog_id,callback){
        return db.query('delete from blog_tbl where blog_id=?',[blog_id],callback);
    },
};

module.exports = blog;