import { subjects } from '../data.js';

/**
 * Subjects View Component
 * Renders a grid of all available subjects in the curriculum.
 */
export const SubjectsView = () => {
    return `
        <div class="max-w-7xl mx-auto px-4 py-12 animate-fade-in">
            <header class="mb-12">
                <h1 class="text-4xl font-bold font-outfit mb-4">Explore Curriculum</h1>
                <p class="text-slate-500 text-lg">10+ subjects organized into logical learning modules.</p>
            </header>

            <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                ${subjects.map(s => `
                    <div class="card flex flex-col h-full cursor-pointer group" onclick="router.navigate('/subject/${s.id}')">
                        <div class="p-8 grow">
                            <div class="w-14 h-14 ${s.color} rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg shadow-indigo-100">
                                <i data-lucide="${s.icon}" class="w-8 h-8"></i>
                            </div>
                            <h3 class="text-2xl font-bold mb-3 group-hover:text-indigo-600 transition-colors">${s.title||"untitled"}</h3>
                            <p class="text-slate-500 leading-relaxed">${s.description ||""}</p>
                        </div>
                        <div class="px-8 py-4 bg-slate-50 border-t border-slate-100 flex justify-between items-center">
                            <span class="text-sm font-medium text-slate-600">${s.modules?.length||0} Modules</span>
                            <span class="text-indigo-600 font-semibold text-sm flex items-center gap-1">
                                View Path <i data-lucide="chevron-right" class="w-4 h-4"></i>
                            </span>
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    `;
};
