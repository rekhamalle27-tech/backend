
import express from "express";
import db from "../db.js";

const router =express.Router();

router.get("/dashboard/:userId",(req,res)=>{
    const{userId}=req.params;
    const sql=
    ` SELECT s.score, sub.name AS subject
FROM scores s
JOIN subjects sub ON s.subject_id = sub.id
WHERE s.user_id = ?

 `;
    db.query(sql,[userId],(err,result)=>{
        if(err)return res.status(500).send(err);
        res.json(result);
    });
});
export default router;
