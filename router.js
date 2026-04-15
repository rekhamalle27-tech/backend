import { ScoreView, initScore } from './views/score.js';

export const router = {
    routes: {},

    add(path, viewFunc) {
        this.routes[path] = viewFunc;
    },

    async navigate(path) {
        window.history.pushState({}, '', path);
        await this.resolve();
    },

    async resolve() {
        const path = window.location.pathname;
        const app = document.getElementById('app');

        let viewFunc = this.routes[path];
        let params = {};

        // dynamic route support
        if (!viewFunc) {
            for (const route in this.routes) {
                if (route.includes(':')) {
                    const routeParts = route.split('/');
                    const pathParts = path.split('/');

                    if (routeParts.length === pathParts.length) {
                        const match = routeParts.every((part, i) =>
                            part.startsWith(':') || part === pathParts[i]
                        );

                        if (match) {
                            viewFunc = this.routes[route];

                            routeParts.forEach((part, i) => {
                                if (part.startsWith(':')) {
                                    params[part.substring(1)] = pathParts[i];
                                }
                            });

                            break;
                        }
                    }
                }
            }
        }

        if (viewFunc) {
            app.innerHTML = await viewFunc(params);

            // ✅ INIT FUNCTIONS
            if (path.startsWith('/quiz')) {
                const { initQuiz } = await import( './views/quiz.js');
                initQuiz(params.id);
            }

            if (path === '/score') {
                initScore();
            }

            if (window.lucide) window.lucide.createIcons();
            window.scrollTo(0, 0);

        } else {
            app.innerHTML = `
                <div class="p-20 text-center">
                    <h1 class="text-4xl font-bold">404</h1>
                    <p class="text-slate-500 mt-2">Page not found</p>
                </div>
            `;
        }
    },

    init() {
        window.addEventListener('popstate', () => this.resolve());

        document.body.addEventListener('click', e => {
            if (e.target.matches('[data-link]')) {
                e.preventDefault();
                this.navigate(e.target.getAttribute('href'));
            }
        });

        this.resolve();
    }
};
// ✅ REGISTER ROUTES HERE
router.add('/score', ScoreView);
