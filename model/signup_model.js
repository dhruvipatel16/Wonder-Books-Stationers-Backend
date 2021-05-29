var db=require('../dbconnection');
var signup={
    getAllSignUpData:function(callback){
        return db.query('select * from signup',callback);
    },
    addSignUpData:function(item,callback)
    {
        return db.query('insert into signup values(?,?,?,?,?)',[item.id,item.name,item.password,item.mobno,item.email],callback);
    },
    deleteSignupData:function(id,callback){
        return db.query('delete from signup where id=?',[id],callback);
    },
    deleteSelectedData:function(item,callback){
        var delarr=[];
        for(i=0;i<item.length;i++){
     
            delarr[i]=item[i].Id;
        }
           return db.query('delete from signup where id =?'),[delarr],callback;
    },
    deleteAllSignUpData:function(item,callback){
        return db.query("delete from signup where id in (?)",[item],callback);
     },
 
    
};
module.exports=signup;