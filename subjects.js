import express from"express";
import db from "../db.js";

const router =express.Router();

router.get("/subjects",(req,res)=>{
    const sql ="SELECT  * FROM  subjects";
    db.query(sql,(err,result)=>{
        if(err){
            console.log(err);
            return res.status(500).send("error fetching subjects");
        }
        res.json(result);
    })
})
export default router;