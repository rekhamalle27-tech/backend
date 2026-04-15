import mysql from "mysql2";
const db=mysql.createConnection({
    host:"127.0.0.1",
    user:"root",
  password:"rekhasrm@123",
  database:"skillapp"
});
db.connect(err=>{
    if(err){
        console.log("db connection failed",err);
    }
    else{
        console.log("db connected successfully ..!")
    }
})
export default db;