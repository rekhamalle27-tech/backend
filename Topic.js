import { subjects, flashcards, quizzes, videos } from '../data.js';
import { store } from '../store.js';

/**
 * Topic View Component
 */
export const TopicView = ({ id }) => {
    let topic, subject;

    // Find topic
    for (const s of subjects) {
        for (const m of s.modules) {
            const t = m.topics.find(x => x.id === id);
            if (t) {
                topic = t;
                subject = s;
                break;
            }
        }
    }

    if (!topic) return 'Topic not found';

    // =========================
    // ✅ SAFE VIDEO HANDLING FIX
    // =========================
    const videoData = videos[id];

    // videos[id] is ARRAY → so we take first item safely
    const firstVideo = Array.isArray(videoData) && videoData.length > 0
        ? videoData[0]
        : null;

    const videoUrl = firstVideo?.url || null;

    // Convert YouTube link safely
    const embedUrl = typeof videoUrl === "string"
        ? videoUrl.replace("watch?v=", "embed/")
        : null;

    return `
        <div class="max-w-5xl mx-auto px-4 py-12 animate-fade-in">

            <!-- Breadcrumb -->
            <nav class="flex items-center gap-2 text-sm text-slate-500 mb-8">
                <a href="/subjects" data-link class="hover:text-indigo-600">Subjects</a>
                <i data-lucide="chevron-right" class="w-4 h-4"></i>
                <a href="/subject/${subject.id}" data-link class="hover:text-indigo-600">
                    ${subject.title}
                </a>
                <i data-lucide="chevron-right" class="w-4 h-4"></i>
                <span class="text-slate-900 font-medium">${topic.title}</span>
            </nav>

            <div class="grid lg:grid-cols-3 gap-12">

                <!-- LEFT SIDE -->
                <div class="lg:col-span-2 space-y-12">

                    <!-- VIDEO -->
                    <div class="aspect-video bg-slate-900 rounded-3xl overflow-hidden shadow-2xl">

                        ${embedUrl ? `
                            <iframe 
                                class="w-full h-full"
                                src="${embedUrl}"
                                title="${topic.title}"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen>
                            </iframe>
                        ` : `
                            <div class="w-full h-full flex items-center justify-center text-white">
                                <p class="opacity-70">No video available</p>
                            </div>
                        `}
                    </div>

                    <!-- CONTENT -->
                    <div class="prose prose-slate max-w-none">
                        <h1 class="text-3xl font-bold mb-6">${topic.title}</h1>
                        <p class="text-slate-600 text-lg leading-relaxed mb-6">
                            ${topic.content}
                        </p>

                        <div class="p-6 bg-indigo-50 rounded-2xl border border-indigo-100 text-indigo-900">
                            <h4 class="font-bold mb-2">Key Takeaway</h4>
                            <p>
                                Understanding ${topic.title} is essential for mastering this subject.
                            </p>
                        </div>
                    </div>

                </div>

                <!-- RIGHT SIDE -->
                <div class="space-y-8">

                    <!-- FLASHCARDS -->
                    ${flashcards[topic.id] ? `
                    <div class="card p-6">
                        <h3 class="font-bold text-lg mb-4">Flashcards</h3>

                        <div id="flashcard-container" class="h-48 cursor-pointer"></div>

                        <div class="flex justify-between items-center mt-4">
                            <button id="prev-card">◀</button>
                            <span id="card-index"></span>
                            <button id="next-card">▶</button>
                        </div>
                    </div>
                    ` : ''}

                    <!-- QUIZ -->
                    <div class="card p-6 bg-indigo-600 text-white">
                        <h3 class="font-bold mb-2">Ready for Quiz?</h3>
                        <p class="text-sm mb-4">Test your knowledge now</p>

                        <button onclick="router.navigate('/quiz/${topic.id}')"
                            class="w-full py-3 bg-white text-indigo-600 font-bold rounded-xl">
                            Take Quiz
                        </button>
                    </div>

                </div>
            </div>
        </div>
    `;
};

/**
 * Flashcards logic
 */
export const initFlashcards = (topicId) => {

    const cards = flashcards[topicId] || [];
    if (!cards.length) return;

    let currentIndex = 0;

    const container = document.getElementById('flashcard-container');
    const indexLabel = document.getElementById('card-index');

    const renderCard = () => {
        const card = cards[currentIndex];

        container.innerHTML = `
            <div id="current-flashcard" class="relative w-full h-full cursor-pointer">
                <div class="absolute inset-0 flex items-center justify-center bg-white rounded-xl border">
                    <div>
                        <div class="font-bold text-center mb-2">
                            ${card.front}
                        </div>
                        <div class="text-indigo-700 text-center opacity-0 hover:opacity-100 transition">
                            ${card.back}
                        </div>
                    </div>
                </div>
            </div>
        `;

        indexLabel.innerText = `${currentIndex + 1} / ${cards.length}`;

        document.getElementById('current-flashcard').onclick = () => {
            const back = container.querySelector('.text-indigo-700');
            back.style.opacity = back.style.opacity === "1" ? "0" : "1";
        };
    };

    document.getElementById('next-card').onclick = () => {
        currentIndex = (currentIndex + 1) % cards.length;
        renderCard();
    };

    document.getElementById('prev-card').onclick = () => {
        currentIndex = (currentIndex - 1 + cards.length) % cards.length;
        renderCard();
    };

    renderCard();
};
