import express from "express";
import db from "./db.js"; // your mysql connection file

const router = express.Router();

import questions from "./data.js";

const insertData = async () => {
    try {
        for (let q of questions) {
            await db.query(
                `INSERT INTO questions (subject_id, topic_id, question_text)
                 VALUES (?, ?, ?)`,
                [q.subject_id, q.topic_id, q.question_text]
            );
        }

        console.log("✅ Data inserted successfully");
    } catch (err) {
        console.error("❌ Error inserting:", err);
    }
};

insertData();
//  GET QUESTIONS BY TOPIC ID
// GET QUESTIONS BY SUBJECT ID + TOPIC ID
router.get("/:subjectId/:topicId", async (req, res) => {
    try {
        const { subjectId, topicId } = req.params;

        const [rows] = await db.query(
            `SELECT * FROM questions 
             WHERE subject_id = ? AND topic_id = ?`,
            [subjectId, topicId]
        );

        res.json(rows);
    } catch (error) {
        console.log("Error fetching questions:", error);
        res.status(500).json({ error: "Failed to fetch questions" });
    }
});

// ADD NEW QUESTION (optional but useful)
router.post("/", async (req, res) => {
    try {
        const { topic_id, question_text, option_a, option_b, option_c, option_d, answer } = req.body;

        await db.query(
            `INSERT INTO questions 
            (topic_id, question_text, option_a, option_b, option_c, option_d, answer)
            VALUES (?, ?, ?, ?, ?, ?, ?)`,
            [topic_id, question_text, option_a, option_b, option_c, option_d, answer]
        );

        res.json({ message: "Question added successfully" });
    } catch (error) {
        console.log("Error adding question:", error);
        res.status(500).json({ error: "Failed to add question" });
    }
});

export default router;