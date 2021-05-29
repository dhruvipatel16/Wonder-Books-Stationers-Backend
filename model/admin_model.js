var db=require('../dbconnection');
var admin={
getAllAdmin:function(callback){
    return db.query('select * from admin',callback);
},
login:function(item,callback)
{
    return db.query('select * from admin where admin_emailid=? && admin_password=?',[item.admin_emailid,item.admin_password],callback);
}
};
module.exports=admin;