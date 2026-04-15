import express from 'express';
import db from '../db.js';

const router =express.Router();

router.post("/signup",(req,res)=>{
    const {name,email,password}=req.body;
    const sql="INSERT INTO  users (name,email,password)values(?,?,?)";
    db.query(sql,[name,email,password],(err,result)=>{
        if(err){
            console.log(err);
            return res.status(500).send("error");
        }
        else{
            res.send("user reegistered successfully");
        }
    });
});


router.post("/login",(req,res)=>{
    const{email,password}=req.body;
  const sql="select * from users where email=? and password=?";
  db.query(sql,[email,password],(err,result)=>{
    if(result.length>0){
        res.json({
            message: "login success",user:result[0]});
         
        } else{
            res.status(401).json({message :"invalid credentials"});
        }
    
    
  });
});
export default router;