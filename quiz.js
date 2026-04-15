import { quizzes, subjects } from '../data.js';
import { router } from '../router.js';

/**
 * Quiz View (UI)
 */
export const QuizView = ({ id }) => {

    const questions = quizzes[id];

    if (!questions || questions.length === 0) {
        return `
            <div class="text-center py-20">
                <h2 class="text-2xl font-bold text-red-500">Quiz not found</h2>
                <p class="text-slate-500 mt-2">Invalid topic ID: ${id}</p>
            </div>
        `;
    }

    return `
        <div class="max-w-3xl mx-auto px-4 py-12">
            <div id="quiz-content" class="p-8 bg-white rounded-xl shadow flex flex-col">

                <div class="flex justify-between items-center mb-6">
                    <h2 class="text-xl font-bold">Quiz</h2>

                    <div class="flex items-center gap-4">
                        <span id="quiz-progress"></span>
                        <button id="quit-quiz" class="text-sm text-red-500">Quit</button>
                    </div>
                </div>

                <div id="question-container"></div>

                <div class="flex justify-between mt-8">
                    <button id="skip-question" class="px-4 py-2 border rounded">Skip</button>
                    <button id="next-question" disabled class="px-4 py-2 bg-indigo-600 text-white rounded">Next</button>
                </div>

            </div>
        </div>
    `;
};


/**
 * Quiz Logic (NO BACKEND)
 */
export const initQuiz = (topicId) => {

    const questions = quizzes[topicId];
    if (!questions) return;

    let currentIdx = 0;
    let score = 0;
    let answered = false;

    const userAnswers = [];

    const container = document.getElementById('question-container');
    const progressLabel = document.getElementById('quiz-progress');
    const nextBtn = document.getElementById('next-question');
    const skipBtn = document.getElementById('skip-question');
   const quitBtn = document.getElementById('quit-quiz');

if (quitBtn) {
    quitBtn.onclick = () => {
        const confirmQuit = confirm("Are you sure you want to quit the quiz?");
        if (confirmQuit) {
            router.navigate("/");
        }
    };
}
    /**
     * Render Question
     */
    const renderQuestion = () => {

        answered = false;

        const q = questions[currentIdx];

        progressLabel.innerText = `Question ${currentIdx + 1} / ${questions.length}`;

        nextBtn.disabled = true;
        skipBtn.disabled = false;

        container.innerHTML = `
            <h3 class="mb-6 text-lg font-semibold">${q.q}</h3>

            <div class="grid gap-4">
                ${q.a.map((ans, i) => `
                    <button 
                        class="quiz-option w-full p-4 border rounded-xl text-left hover:bg-slate-100"
                        data-idx="${i}">
                        ${ans}
                    </button>
                `).join('')}
            </div>
        `;

        container.querySelectorAll('.quiz-option').forEach(btn => {
            btn.onclick = () => handleAnswer(Number(btn.dataset.idx));
        });
    };

    /**
     * Handle Answer
     */
    const handleAnswer = (idx) => {

        if (answered) return;
        answered = true;

        const q = questions[currentIdx];
        const correct = q.correct;

        if (idx === correct) score++;

        userAnswers.push({
            questionIdx: currentIdx,
            selectedIdx: idx
        });

        container.querySelectorAll('.quiz-option').forEach((btn, i) => {

            if (i === correct) {
                btn.classList.add("bg-green-100", "border-green-500");
            }

            if (i === idx && i !== correct) {
                btn.classList.add("bg-red-100", "border-red-500");
            }

            btn.disabled = true;
        });

        nextBtn.disabled = false;
        skipBtn.disabled = true;
    };

    /**
     * Next Question
     */
    const handleNext = () => {

        if (currentIdx === questions.length - 1) {
            showResults();
            return;
        }

        currentIdx++;
        renderQuestion();
    };

    /**
     * Skip Question
     */
    const handleSkip = () => {

        userAnswers.push({
            questionIdx: currentIdx,
            selectedIdx: -1
        });

        if (currentIdx === questions.length - 1) {
            showResults();
            return;
        }

        currentIdx++;
        renderQuestion();
    };

    /**
     * FINAL RESULT (NO BACKEND)
     */
    const showResults = () => {

        const total = questions.length;
        let score = 0;

        const review = userAnswers.map((a) => {

            const q = questions[a.questionIdx];
            const correctIndex = q.correct;
            const selectedIndex = a.selectedIdx;

            const isCorrect = selectedIndex === correctIndex;

            if (isCorrect) score++;

            return {
                question: q.q,
                options: q.a,
                correctIndex,
                selectedIndex,
                isCorrect
            };
        });

        const percent = Math.round((score / total) * 100);

        const resultData = {
            review,
            score,
            total,
            percent
        };

      // SAVE IN BACKEND 🔥
fetch("http://localhost:5000/api/quiz/submit", {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        userId: 1,              // TEMP (replace later with logged-in user)
        subjectId: "sub1",      // MUST match your DB subject_id
        topicId: topicId,
        answers: userAnswers
    })
})
.then(res => res.json())
.then(data => {
    console.log("✅ Saved to DB:", data);
})
.catch(err => {
    console.error("❌ Error saving:", err);
});
// KEEP localStorage ALSO (backup + fast UI)
localStorage.setItem(
    `quiz_review_${topicId}`,
    JSON.stringify(resultData)
);

localStorage.setItem("last_topic", topicId);

// NAVIGATE
router.navigate("/score");
    };

    nextBtn.onclick = handleNext;
    skipBtn.onclick = handleSkip;

    renderQuestion();
};