import express from "express";
import db from "../db.js";
const router =express.Router();
router.get("/topics/:subjectId",(req,res)=>{
    const { subjectId }= req.params;
    const sql="select * from topics where subject_id=?";
    db.query(sql,[subjectId],(err,result)=>{
        if(err){
            console.log(err);
            return res.status(500).send("error fetching topics");
        }
        res.json(result);
    });

});

export default router;