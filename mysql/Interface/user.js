const {connection} = require('../config/mysqlLink.js');

 function getUsetList (){
  
  return new Promise((resolve,reject)=>{
        connection.query('select * from user', function (error, results) {
            if (error) throw error;
            resolve(results)
          });
    })
  
    
}
function register (){
    return new Promise((resolve,reject)=>{
        connection.query('insert into user(id,name,password) values (4,"张","123")', function (error, results) {
            if (error) throw error;
           resolve(results)
          });
    })
   
}
module.exports = {
    getUsetList,
    register
}