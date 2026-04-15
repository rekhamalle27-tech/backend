import { router } from './router.js';
import { store } from './store.js';

import { HomeView } from './views/Home.js';
import { SubjectsView } from './views/Subjects.js';
import { SubjectDetailView } from './views/SubjectDetail.js';
import { TopicView, initFlashcards } from './views/Topic.js';
import { QuizView, initQuiz } from './views/quiz.js';
import { LoginView, SignupView, initAuth } from './views/Auth.js';

import '../src/index.css';
import '../styles.css';


/* =========================================================
   NAV UI UPDATE
========================================================= */
function updateAuthUI() {
    const authNav = document.getElementById('auth-nav');
    const user = store.getUser();

    if (user) {
        authNav.innerHTML = `
            <div class="flex items-center gap-3">
                <div class="text-right hidden sm:block">
                    <p class="text-sm font-bold text-slate-800">${user.name}</p>
                    <p class="text-xs text-slate-500">Student</p>
                </div>

                <div class="w-10 h-10 bg-indigo-100 text-indigo-600 rounded-full flex items-center justify-center font-bold">
                    ${user.name.charAt(0)}
                </div>

                <button id="logout-btn" class="p-2 text-slate-400 hover:text-red-500 transition-colors">
                    <i data-lucide="log-out" class="w-5 h-5"></i>
                </button>
            </div>
        `;

        document.getElementById('logout-btn').onclick = () => {
            store.logout();
            router.navigate('/login');
        };
    } else {
        authNav.innerHTML = `
            <a href="/login" data-link class="btn-secondary py-2">Log In</a>
            <a href="/signup" data-link class="btn-primary py-2">Sign Up</a>
        `;
    }

    safeLucide();
}


/* =========================================================
   SAFE LUCIDE CALL (NO CRASH)
========================================================= */
function safeLucide() {
    try {
        window.lucide?.createIcons?.();
    } catch (err) {
        console.warn("Lucide error ignored:", err);
    }
}


/* =========================================================
   AUTH GUARD
========================================================= */
const authGuard = async (viewFunc, params) => {
    const user = store.getUser();

    if (!user) {
        setTimeout(() => router.navigate('/login'), 0);
        return '';
    }

    return await viewFunc(params);
};


/* =========================================================
   ROUTES
========================================================= */

// Public
router.add('/', HomeView);

router.add('/login', async () => {
    const html = LoginView();
    setTimeout(() => initAuth('login'), 0);
    return html;
});

router.add('/signup', async () => {
    const html = SignupView();
    setTimeout(() => initAuth('signup'), 0);
    return html;
});


// Protected
router.add('/subjects', (params) =>
    authGuard(SubjectsView, params)
);

router.add('/subject/:id', (params) =>
    authGuard(SubjectDetailView, params)
);

router.add('/topic/:id', (params) =>
    authGuard(async (p) => {
        console.log("TOPIC ROUTE PARAMS:", p);

        const html = await TopicView(p);

        setTimeout(() => {
            initFlashcards(p.id);
            safeLucide();
        }, 0);

        return html;
    }, params)
);

router.add('/quiz/:id', (params) =>
    authGuard(async (p) => {
        const html = await QuizView(p);

        setTimeout(() => {
            initQuiz(p.id);
            safeLucide();
        }, 0);

        return html;
    }, params)
);


// Dashboard
router.add('/dashboard', (params) =>
    authGuard(() => {
        const user = store.getUser();
        const progress = store.getProgress();

        return `
            <div class="max-w-7xl mx-auto px-4 py-12 animate-fade-in">
                <h1 class="text-4xl font-bold font-outfit mb-8">
                    Welcome back, ${user.name}
                </h1>

                <div class="grid md:grid-cols-3 gap-8 mb-12">

                    <div class="card p-8 bg-indigo-600 text-white border-none">
                        <p class="text-indigo-100 text-sm font-bold uppercase mb-2">
                            Topics Completed
                        </p>
                        <h2 class="text-5xl font-bold">
                            ${progress.completedTopics.length}
                        </h2>
                    </div>

                    <div class="card p-8">
                        <p class="text-slate-400 text-sm font-bold uppercase mb-2">
                            Avg. Quiz Score
                        </p>
                        <h2 class="text-5xl font-bold text-slate-800">
                            ${
                                Object.values(progress.quizScores).length > 0
                                    ? Math.round(
                                        Object.values(progress.quizScores).reduce((a,b)=>a+b,0) /
                                        Object.values(progress.quizScores).length
                                      )
                                    : 0
                            }%
                        </h2>
                    </div>

                    <div class="card p-8">
                        <p class="text-slate-400 text-sm font-bold uppercase mb-2">
                            Mastery Badges
                        </p>
                        <h2 class="text-5xl font-bold text-slate-800">0</h2>
                    </div>

                </div>

                <h3 class="text-2xl font-bold mb-6">Recent Activity</h3>

                <div class="card bg-white p-8 text-center">
                    <i data-lucide="activity" class="w-12 h-12 text-slate-200 mx-auto mb-4"></i>
                    <p class="text-slate-500">
                        Your learning history will appear here as you complete topics.
                    </p>
                </div>
            </div>
        `;
    }, params)
);


/* =========================================================
   INIT
========================================================= */
window.addEventListener('auth-change', updateAuthUI);

document.addEventListener('DOMContentLoaded', () => {
    router.init();
    updateAuthUI();

    // safe icon render once
    setTimeout(() => safeLucide(), 0);
});


/* =========================================================
   GLOBAL EXPORT
========================================================= */
window.router = router;
