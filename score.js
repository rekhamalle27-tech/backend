import { router } from '../router.js';

export const ScoreView = () => {

    // ✅ Get topic id safely
    const topicId = localStorage.getItem('last_topic');

    // ✅ Get stored result
    const rawData = localStorage.getItem(`quiz_review_${topicId}`);

    let data = null;

    try {
        data = JSON.parse(rawData);
    } catch (err) {
        console.error("❌ JSON Parse Error:", err);
    }

    console.log("📦 ScoreView Data:", data);

    // ❌ If no data
    if (!data || !data.review) {
        return `
            <div class="p-10 text-center">
                <h2 class="text-xl font-bold text-red-500">No Results Found</h2>
                <p class="text-slate-500 mt-2">Please attempt quiz again</p>
                <button id="go-home" class="mt-4 px-4 py-2 bg-indigo-600 text-white rounded">
                    Go Home
                </button>
            </div>
        `;
    }

    // ✅ Safe destructuring
    const {
        review = [],
        score = 0,
        total = 0
    } = data;

    // ✅ Avoid divide-by-zero
    const percent = total > 0 ? Math.round((score / total) * 100) : 0;

    return `
        <div class="max-w-4xl mx-auto px-4 py-10">

            <!-- SCORE CARD -->
            <div class="bg-white p-6 rounded-xl shadow mb-8 text-center">
                <h2 class="text-2xl font-bold mb-2">Your Score</h2>

                <p class="text-3xl font-bold text-indigo-600">
                    ${score} / ${total}
                </p>

                <p class="text-slate-500">${percent}%</p>
            </div>

            <!-- REVIEW SECTION -->
            <div class="space-y-6">

                ${review.length > 0 ? review.map((q, index) => {

                    return `
                        <div class="bg-white p-6 rounded-xl shadow">

                            <h3 class="font-semibold mb-4">
                                Q${index + 1}. ${q.question}
                            </h3>

                            <div class="grid gap-3">

                                ${q.options.map((opt, i) => {

                                    let style = "border p-3 rounded";

                                    // ✅ Correct answer
                                    if (i === q.correctIndex) {
                                        style += " bg-green-100 border-green-500";
                                    }

                                    // ❌ Wrong selected answer
                                    if (i === q.selectedIndex && i !== q.correctIndex) {
                                        style += " bg-red-100 border-red-500";
                                    }

                                    return `
                                        <div class="${style}">
                                            ${opt}
                                        </div>
                                    `;
                                }).join('')}

                            </div>

                            <p class="mt-3 text-sm ${
                                q.isCorrect ? 'text-green-600' : 'text-red-500'
                            }">
                                ${q.isCorrect ? 'Correct ✅' : 'Wrong ❌'}
                            </p>

                        </div>
                    `;
                }).join('') : `
                    <p class="text-center text-slate-500">No review data available</p>
                `}

            </div>

            <!-- BUTTON -->
            <div class="text-center mt-10">
                <button id="go-home" class="px-6 py-2 bg-indigo-600 text-white rounded">
                    Back to Home
                </button>
            </div>

        </div>
    `;
};


/**
 * Init Score Page Events
 */
export const initScore = () => {

    const btn = document.getElementById('go-home');

    if (btn) {
        btn.onclick = () => {
            router.navigate('/');
        };
    }
};