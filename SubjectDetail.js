import { subjects, flashcards, quizzes } from '../data.js';
import { store } from '../store.js';

/**
 * Subject Detail View Component
 * Renders the modules and topics for a specific subject, showing user progress for each topic.
 */
export const SubjectDetailView = ({ id }) => {
    const subject = subjects.find(s => s.id === id);
    if (!subject) return 'Subject not found';

    const progress = store.getProgress();

    return `
        <div class="animate-fade-in">
            <!-- Subject Header -->
            <div class="${subject.color} py-16 px-4 text-white">
                <div class="max-w-5xl mx-auto flex items-center gap-8">
                    <div class="w-20 h-20 bg-white/20 rounded-3xl flex items-center justify-center backdrop-blur-sm">
                        <i data-lucide="${subject.icon}" class="w-10 h-10"></i>
                    </div>
                    <div>
                        <h1 class="text-4xl font-bold font-outfit">${subject.title}</h1>
                        <p class="text-white/80 mt-2 text-lg">${subject.description}</p>
                    </div>
                </div>
            </div>

            <div class="max-w-5xl mx-auto px-4 py-12">
                <div class="grid lg:grid-cols-3 gap-12">
                    <div class="lg:col-span-2 space-y-12">
                        <!-- Curriculum Modules -->
                        ${subject.modules.map(mod => `
                            <div>
                                <h2 class="text-2xl font-bold mb-6 flex items-center gap-3">
                                    <span class="w-8 h-8 bg-indigo-100 text-indigo-600 rounded-lg flex items-center justify-center text-sm">
                                        ${subject.modules.indexOf(mod) + 1}
                                    </span>
                                    ${mod.title}
                                </h2>
                                <div class="space-y-4">
                                    ${mod.topics.map(topic => {
                                        const isCompleted = progress.completedTopics.includes(topic.id);
                                        const score = progress.quizScores[topic.id] || 0;
                                        return `
                                            <div class="card p-6 flex items-center justify-between hover:border-indigo-300 cursor-pointer" 
                                                 onclick="router.navigate('/topic/${topic.id}')">
                                                <div class="flex items-center gap-4">
                                                    <div class="w-10 h-10 ${isCompleted ? 'bg-emerald-100 text-emerald-600' : 'bg-slate-100 text-slate-400'} rounded-full flex items-center justify-center">
                                                        <i data-lucide="${isCompleted ? 'check' : 'play'}" class="w-5 h-5"></i>
                                                    </div>
                                                    <div>
                                                        <h4 class="font-bold text-slate-800">${topic.title}</h4>
                                                        <div class="flex items-center gap-3 mt-1">
                                                            <span class="text-xs text-slate-500 flex items-center gap-1">
                                                                <i data-lucide="video" class="w-3 h-3"></i> 10 min
                                                            </span>
                                                            ${score > 0 ? `
                                                                <span class="text-xs font-semibold ${score >= 70 ? 'text-emerald-600' : 'text-amber-600'}">
                                                                    Quiz: ${score}%
                                                                </span>
                                                            ` : ''}
                                                        </div>
                                                    </div>
                                                </div>
                                                <i data-lucide="chevron-right" class="text-slate-300"></i>
                                            </div>
                                        `;
                                    }).join('')}
                                </div>
                            </div>
                        `).join('')}
                    </div>

                    <!-- Progress Sidebar -->
                    <div class="space-y-6">
                        <div class="card p-6 sticky top-24">
                            <h3 class="font-bold text-lg mb-4">Your Progress</h3>
                            <div class="w-full bg-slate-100 rounded-full h-3 mb-4">
                                <div class="bg-indigo-600 h-3 rounded-full" style="width: 25%"></div>
                            </div>
                            <p class="text-sm text-slate-500 mb-6">You've completed 2 of 8 topics in this subject.</p>
                            
                            <div class="space-y-4">
                                <div class="flex items-center justify-between text-sm">
                                    <span class="text-slate-600">Mastery Status</span>
                                    <span class="px-2 py-1 bg-slate-100 text-slate-500 rounded font-bold text-xs uppercase">In Progress</span>
                                </div>
                                <button class="btn-primary w-full">Continue Learning</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
};
