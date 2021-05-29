var db=require('../dbconnection');
var user={
    updateUserType:function(user_id,item,callback)
    {
      return db.query('update user set user_type=? where user_id=?',[item.user_type,user_id],callback)  
    },
    login:function(item,callback)
    {
        return db.query('select * from user where user_email=? && user_password=?',[item.user_email,item.user_password],callback);
    },
    signup:function(item,callback)
    {
        return db.query("insert into user (user_email,user_password,user_type)values(?,?,?)",[item.user_email,item.user_password,item.user_type],callback);
    },
    getAllUsers:function(callback)
    {
        return db.query('select * from user',callback);
    },
    getUsersById:function(user_id,callback)
    {
        return db.query('select * from user where user_id=?',[user_id],callback);
    },
    getUsersByEmail:function(item,callback)
    {
        return db.query('select * from user where user_email=?',[item.name],callback);
    },
    addUser:function(item,callback)
    {
        return db.query('insert into user (user_email,user_password,user_type) values(?,?,?)',[item.user_email,item.user_password,item.user_type],callback);
    },
    //-------------OTP---------------
    UpdateOtpInUserRecord:function(item,callback)
    {
        return db.query("UPDATE `user` SET `otp_values` = '?' WHERE `user`.`user_id` = ?",[item.otp_values,item.user_id],callback);
    }
    ,
    //--------------OTP-------------------
    deleteUser:function(user_email,callback)
    {
      
        return db.query('delete from user where user_email=?',[user_email],callback);
        
    },
    updateUser:function(item,callback)
    {
        return db.query("update user set user_password=?,user_type=? where user_email=?",[item.user_password,item.user_type,item.user_email],callback);        
    },
    deleteAllUserData:function(item,callback){

        var delarr=[];
           for(i=0;i<item.length;i++){
        
               delarr[i]=item[i].user_id;
           }
           return db.query("delete from user where user_id in (?)",[delarr],callback);
        },
updateAdminPassword:function(item,callback)
 {
console.log(item);     
     return db.query("update user set user_password=? where user_email=? and user_type=?",[item.user_password,item.user_email,item.user_type],callback);
 }
}; 
module.exports=user;