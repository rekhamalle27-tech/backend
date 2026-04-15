import express from "express";
import db from "../db.js";

const router = express.Router();

/* =========================================================
   GET QUIZ QUESTIONS
========================================================= */
router.get("/:topicId", (req, res) => {

    const { topicId } = req.params;

    const sql = "SELECT * FROM questions WHERE topic_id = ?";

    db.query(sql, [topicId], (err, questions) => {

        if (err) {
            console.error("❌ GET QUIZ ERROR:", err);
            return res.status(500).json({ message: "Error fetching quiz" });
        }

        res.json(questions);
    });
});


/* =========================================================
   SUBMIT QUIZ
========================================================= */
router.post("/submit", (req, res) => {

    console.log("\n🔥 QUIZ SUBMIT HIT");

    const { userId, subjectId, topicId, answers } = req.body;

    // =========================
    // VALIDATION
    // =========================
    if (!userId || !subjectId || !topicId) {
        return res.status(400).json({ message: "Missing required fields" });
    }

    if (!Array.isArray(answers)) {
        return res.status(400).json({ message: "Answers missing or invalid" });
    }

    const sql = "SELECT * FROM questions WHERE topic_id = ?";

    db.query(sql, [topicId], (err, questions) => {

        if (err) {
            console.error("❌ DB ERROR:", err);
            return res.status(500).json({ message: "Error fetching questions" });
        }

        let score = 0;
        const review = [];

        console.log("\n📥 USER ANSWERS:", answers);

        questions.forEach((q, index) => {

            // ✅ FIX: Use index-based mapping
            const userAnswer = answers[index];

            const selectedIndex =
                userAnswer && typeof userAnswer.selectedIdx === "number"
                    ? userAnswer.selectedIdx
                    : -1;

            const options = [
                q.option1,
                q.option2,
                q.option3,
                q.option4
            ];

            const correctIndex = Number(q.answer);

            const isValidCorrect =
                correctIndex >= 0 &&
                correctIndex < options.length;

            const isCorrect =
                isValidCorrect &&
                selectedIndex === correctIndex;

            if (isCorrect) score++;

            const reviewItem = {
                questionId: q.id,
                question: q.question || q.question_text || `Question ${index + 1}`,
                options,
                correctIndex: isValidCorrect ? correctIndex : -1,
                selectedIndex,
                correctAnswer: isValidCorrect ? options[correctIndex] : null,
                userAnswer: selectedIndex >= 0 ? options[selectedIndex] : null,
                isCorrect
            };

            console.log("\n📝 QUESTION:", reviewItem.question);
            console.log("➡️ Selected:", reviewItem.userAnswer);
            console.log("✅ Correct:", reviewItem.correctAnswer);
            console.log("📌 Result:", isCorrect ? "CORRECT" : "WRONG");

            review.push(reviewItem);
        });

        console.log("\n🎯 FINAL SCORE:", score);
        console.log("📊 TOTAL QUESTIONS:", questions.length);

        // =========================
        // SAVE SCORE TO DB
        // =========================
        const upsertSql = `
            INSERT INTO scores (user_id, subject_id,topic_id, score)
            VALUES (?, ?, ?,?)
            ON DUPLICATE KEY UPDATE score = VALUES(score)
        `;

        db.query(upsertSql, [userId, subjectId,topicId, score], (err) => {

            if (err) {
                console.error("❌ SCORE SAVE ERROR:", err);
                return res.status(500).json({ message: "DB error saving score" });
            }

            // =========================
            // RESPONSE
            // =========================
            res.json({
                success: true,
                score,
                total: questions.length,
                review
            });
        });
    });
});

export default router;