var db = require('../dbconnection');
var customer = {
    getAllCustomer: function (callback) {
        return db.query('select * from customer', callback); 
    },
    deleteCustomer:function(id,callback){
        return db.query('delete from customer where customer_id=?',[id],callback);
    },
    addCustomer:function(item,filename,callback){
            return db.query('insert into `customer`( `customer_name`,`customer_gender`, `customer_mobileno`, `customer_address`,`customer_photo`,`fk_user_email`) VALUES (?,?,?,?,?,?)',[item.customer_name,item.customer_gender,item.customer_mobileno,item.customer_address,'images/customer_images/'+filename,item.fk_user_email],callback);
    },
     updateCustomerData:function(customer_id,filename,item,callback){
        
        return db.query('update `customer` set customer_name=?,customer_gender=?,customer_mobileno=?,customer_address=?,customer_photo=? where customer_id=?',[item.customer_name,item.customer_gender,item.customer_mobileno,item.customer_address,filename!=null?'images/customer_images/'+filename:item.pic,customer_id],callback);
    },
    getAllCustomerById:function(customer_id,callback){
        console.log(customer_id)
        return db.query('select c.*,u.* from user u,customer c where c.fk_user_email=u.user_email  and user_id=?',[customer_id],callback);
    },
    getAllCustomerByEmail:function(e_mail,callback){
        return db.query('select * from customer where fk_user_email=?',[e_mail.fk_user_email],callback);
    },
     deleteAllCustomerData:function(item,callback)
     {  var delarr=[];
                for(i=0;i<item.length;i++)
                {
                    delarr[i]=item[i].customer_id;
                }
                return db.query("delete from customer where customer_id in (?)",[delarr],callback);
     }
};
module.exports = customer;