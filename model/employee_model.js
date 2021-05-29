var db = require('../dbconnection');
var employee = {
    getAllEmployee: function (callback) {
        return db.query('select * from employee', callback);
    },
    deleteEmployee:function(employee_id,callback){
        return db.query('delete from employee where employee_id=?',[employee_id],callback);
    },
    addEmployee:function(item,callback){
        return db.query('insert into `employee`( `employee_name`,`employee_gender`, `employee_mobileno`, `employee_salary`) VALUES (?,?,?,?)',[item.employee_name,item.employee_gender,item.employee_mobileno,item.employee_salary],callback);
    },
    addEmployee:function(item,callback){
        return db.query('insert into `employee`( `employee_name`,`employee_gender`, `employee_mobileno`, `employee_salary`) VALUES (?,?,?,?)',[item.employee_name,item.employee_gender,item.employee_mobileno,item.employee_salary],callback);
    },
    updateEmployeeData:function(item,callback){
        return db.query('update `employee` set employee_name=?,employee_gender=?,employee_mobileno=?,employee_salary=? where employee_id=?',[item.employee_name,item.employee_gender,item.employee_mobileno,item.employee_salary,item.employee_id],callback);
    },
    getAllEmployeeById:function(employee_id,callback){
        return db.query('select * from employee where employee_id=?',[employee_id],callback);
    },
     deleteAllEmployeeData:function(item,callback){
 
         var delarr=[];
            for(i=0;i<item.length;i++){
         
                delarr[i]=item[i].employee_id;
            }
            return db.query("delete from employee where employee_id in (?)",[delarr],callback);
         }
};
module.exports = employee;