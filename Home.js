import { subjects } from '../data.js';


/**
 * Home View Component
 * Renders the landing page with a hero section, platform statistics, and feature highlights.
 */
export const HomeView = () => {
    console.log(subjects[0]);
    return `
        <div class="animate-fade-in bg-slate-50">
            <!-- Upgraded Hero Section -->
            <section class="relative min-h-[90vh] flex items-center pt-20 pb-32 px-4 overflow-hidden">
                <!-- Background Image with Modern Gradient Overlay -->
                <div class="absolute inset-0 z-0">
     <img 
  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
  class="w-full h-full object-cover  blur-[2px] scale-105"
>


          referrerPolicy="no-referrer">
                    <div class="absolute inset-0 bg-linear-to-br from-slate-950 via-slate-900/90 to-indigo-950/80"></div>
                </div>
                
                <div class="max-w-7xl mx-auto w-full relative z-10">
                    <div class="grid lg:grid-cols-2 gap-16 items-center">
                        <div class="text-left">
                            <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm font-bold mb-8">
                                <i data-lucide="sparkles" class="w-4 h-4"></i>
                                Professional Skill Upgrade Platform
                            </div>
                            <h1 class="text-6xl md:text-7xl font-black font-outfit text-white mb-8 tracking-tight leading-[1.1]">
                                Upgrade Your <br/>
                                <span class="text-transparent bg-clip-text bg-linear-to-r from-indigo-400 via-purple-400 to-pink-400">Future Today</span>
                            </h1>
              <p class="text-xl text-white mb-12 max-w-xl leading-relaxed font-medium 
drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">


                                Don't just learn—evolve. EduFlow provides the high-impact curriculum designed to upgrade your technical expertise and career trajectory.
                            </p>
                            <div class="flex flex-wrap gap-6">
                                <button onclick="router.navigate('/subjects')" class="btn-primary px-10 py-5 text-lg rounded-2xl shadow-2xl shadow-indigo-500/40 hover:-translate-y-1 transition-all">
                                    Start Your Upgrade
                                </button>
                                <button onclick="router.navigate('/subjects')" class="btn-secondary bg-white/5 text-white border-white/20 hover:bg-white/10 px-10 py-5 text-lg rounded-2xl backdrop-blur-md">
                                    Explore Tracks
                                </button>
                            </div>
                        </div>
                        
                        <!-- Floating Stats Card -->
                        <div class="hidden lg:block">
                            <div class="grid grid-cols-2 gap-6">
                                <div class="card bg-white/5 backdrop-blur-xl border-white/10 p-8 text-white hover:bg-white/10 transition-colors">
                                    <div class="w-12 h-12 bg-indigo-500 rounded-xl flex items-center justify-center mb-4">
                                        <i data-lucide="trending-up" class="w-6 h-6"></i>
                                    </div>
                                    <p class="text-3xl font-black mb-1">94%</p>
                                    <p class="text-slate-400 text-sm font-bold uppercase tracking-widest">Career Growth</p>
                                </div>
                                <div class="card bg-white/5 backdrop-blur-xl border-white/10 p-8 text-white hover:bg-white/10 transition-colors">
                                    <div class="w-12 h-12 bg-purple-500 rounded-xl flex items-center justify-center mb-4">
                                        <i data-lucide="users" class="w-6 h-6"></i>
                                    </div>
                                    <p class="text-3xl font-black mb-1">15k+</p>
                                    <p class="text-slate-400 text-sm font-bold uppercase tracking-widest">Active Learners</p>
                                </div>
                                <div class="card bg-white/5 backdrop-blur-xl border-white/10 p-8 text-white hover:bg-white/10 transition-colors">
                                    <div class="w-12 h-12 bg-emerald-500 rounded-xl flex items-center justify-center mb-4">
                                        <i data-lucide="award" class="w-6 h-6"></i>
                                    </div>
                                    <p class="text-3xl font-black mb-1">50+</p>
                                    <p class="text-slate-400 text-sm font-bold uppercase tracking-widest">Expert Tracks</p>
                                </div>
                                <div class="card bg-white/5 backdrop-blur-xl border-white/10 p-8 text-white hover:bg-white/10 transition-colors">
                                    <div class="w-12 h-12 bg-pink-500 rounded-xl flex items-center justify-center mb-4">
                                        <i data-lucide="clock" class="w-6 h-6"></i>
                                    </div>
                                    <p class="text-3xl font-black mb-1">24/7</p>
                                    <p class="text-slate-400 text-sm font-bold uppercase tracking-widest">Live Support</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Skill Upgrade Tracks -->
            <section class="py-32 px-4 bg-white relative overflow-hidden">
                <div class="max-w-7xl mx-auto">
                    <div class="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                        <div class="max-w-2xl">
                            <h2 class="text-5xl font-black font-outfit text-slate-900 mb-6">High-Impact Tracks</h2>
                            <p class="text-xl text-slate-500 leading-relaxed">Our curriculum is built by industry veterans to ensure you're learning the skills that actually matter in today's market.</p>
                        </div>
                        <button onclick="router.navigate('/subjects')" class="btn-secondary px-8 py-4 text-indigo-600 border-indigo-100 hover:bg-indigo-50">View All Tracks</button>
                    </div>
<div class="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
    ${subjects.slice(0, 3).map(s => `
        <div class="group cursor-pointer" onclick="router.navigate('/subject/${s.id}')">
            
            <div class="relative h-64 rounded-3xl overflow-hidden mb-8 shadow-2xl shadow-slate-200">

                <!-- Background -->
                <div class="absolute inset-0 ${s.color ||"bg-indigo-500"} opacity-90 group-hover:scale-110 transition-transform duration-700"></div>

                <!-- Glow Layer -->
                <div class="absolute inset-0 bg-white/10"></div>

                <!-- ICON -->
                <div class="absolute inset-0 flex items-center justify-center">
                    <i data-lucide="${s.icon}" 
                       class="w-24 h-24 text-white stroke-[2.8] drop-shadow-[0_0_20px_rgba(255,255,255,0.9)] group-hover:scale-110 transition-all duration-300">
                    </i>
                </div>

                <!-- Modules Badge -->
                <div class="absolute bottom-6 left-6 bg-white/20 backdrop-blur-md px-4 py-2 rounded-xl text-white text-sm font-bold border border-white/30">
                   ${s.modules ? s.modules.length : 0} Modules
                </div>

            </div>

  <h3 class="text-3xl font-black text-slate-900 mb-4 group-hover:text-indigo-600 transition-colors">
    ${s.name||s.name||""}
</h3>

<p class="text-slate-500 text-lg leading-relaxed mb-6 line-clamp-2">
    ${s.desc||s.desc||""}
</p>

            <div class="flex items-center gap-3 text-indigo-600 font-black uppercase tracking-widest text-sm">
                Start Upgrade 
                <i data-lucide="arrow-right" class="w-5 h-5 stroke-[2.5] group-hover:translate-x-2 transition-transform"></i>
            </div>

        </div>
    `).join('')}
</div>

            </section>

            <!-- Skill Upgrades Visualization -->
            <section class="py-32 px-4 bg-slate-50">
                <div class="max-w-7xl mx-auto">
                    <div class="grid lg:grid-cols-2 gap-20 items-center">
                        <div class="order-2 lg:order-1">
                            <div class="space-y-8">
                                <div class="bg-white p-6 rounded-3xl shadow-xl shadow-slate-200 border border-slate-100 flex items-center gap-6 transform hover:-translate-x-2 transition-transform">
                                    <div class="w-14 h-14 bg-indigo-100 rounded-2xl flex items-center justify-center text-indigo-600">
                                        <i data-lucide="code" class="w-7 h-7"></i>
                                    </div>
                                    <div class="flex-1">
                                        <div class="flex justify-between mb-2">
                                            <span class="font-bold text-slate-900">Frontend Engineering</span>
                                            <span class="text-indigo-600 font-black">Level 4</span>
                                        </div>
                                        <div class="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
                                            <div class="h-full bg-indigo-500 rounded-full w-[85%] animate-pulse"></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="bg-white p-6 rounded-3xl shadow-xl shadow-slate-200 border border-slate-100 flex items-center gap-6 transform hover:-translate-x-2 transition-transform delay-75">
                                    <div class="w-14 h-14 bg-purple-100 rounded-2xl flex items-center justify-center text-purple-600">
                                        <i data-lucide="database" class="w-7 h-7"></i>
                                    </div>
                                    <div class="flex-1">
                                        <div class="flex justify-between mb-2">
                                            <span class="font-bold text-slate-900">Backend Systems</span>
                                            <span class="text-purple-600 font-black">Level 3</span>
                                        </div>
                                        <div class="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
                                            <div class="h-full bg-purple-500 rounded-full w-[60%]"></div>
                                        </div>
                                    </div>
                                </div>
                                <div class="bg-white p-6 rounded-3xl shadow-xl shadow-slate-200 border border-slate-100 flex items-center gap-6 transform hover:-translate-x-2 transition-transform delay-150">
                                    <div class="w-14 h-14 bg-emerald-100 rounded-2xl flex items-center justify-center text-emerald-600">
                                        <i data-lucide="cloud" class="w-7 h-7"></i>
                                    </div>
                                    <div class="flex-1">
                                        <div class="flex justify-between mb-2">
                                            <span class="font-bold text-slate-900">Cloud Architecture</span>
                                            <span class="text-emerald-600 font-black">Level 5</span>
                                        </div>
                                        <div class="w-full h-3 bg-slate-100 rounded-full overflow-hidden">
                                            <div class="h-full bg-emerald-500 rounded-full w-[95%]"></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="order-1 lg:order-2">
                            <h2 class="text-5xl font-black font-outfit text-slate-900 mb-8">Track Your <span class="text-indigo-600">Evolution</span></h2>
                            <p class="text-xl text-slate-500 leading-relaxed mb-10">
                                Our platform doesn't just give you content; it tracks your growth across multiple dimensions. See your skills upgrade in real-time as you complete modules and master assessments.
                            </p>
                            <ul class="space-y-4">
                                <li class="flex items-center gap-4 text-slate-700 font-medium">
                                    <div class="w-6 h-6 bg-indigo-500 rounded-full flex items-center justify-center">
                                        <i data-lucide="check" class="w-4 h-4 text-white"></i>
                                    </div>
                                    Multi-dimensional skill tracking
                                </li>
                                <li class="flex items-center gap-4 text-slate-700 font-medium">
                                    <div class="w-6 h-6 bg-indigo-500 rounded-full flex items-center justify-center">
                                        <i data-lucide="check" class="w-4 h-4 text-white"></i>
                                    </div>
                                    Real-time mastery level updates
                                </li>
                                <li class="flex items-center gap-4 text-slate-700 font-medium">
                                    <div class="w-6 h-6 bg-indigo-500 rounded-full flex items-center justify-center">
                                        <i data-lucide="check" class="w-4 h-4 text-white"></i>
                                    </div>
                                    Industry-aligned proficiency metrics
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Upgrade Process -->
            <section class="py-32 px-4 bg-slate-950 text-white relative overflow-hidden">
                <div class="absolute inset-0 opacity-10">
                    <div class="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,#4f46e5,transparent_70%)]"></div>
                </div>
                
                <div class="max-w-7xl mx-auto relative z-10">
                    <div class="text-center mb-24">
                        <h2 class="text-5xl font-black font-outfit mb-6">How We Upgrade You</h2>
                        <p class="text-xl text-slate-400 max-w-2xl mx-auto">A systematic approach to professional evolution.</p>
                    </div>

                    <div class="grid md:grid-cols-3 gap-16">
                        <div class="text-center">
                            <div class="w-24 h-24 bg-indigo-600/20 border border-indigo-500/30 rounded-full flex items-center justify-center mx-auto mb-10 relative">
                                <span class="absolute -top-2 -right-2 w-10 h-10 bg-indigo-600 rounded-full flex items-center justify-center font-black text-xl">1</span>
                                <i data-lucide="target" class="w-10 h-10 text-indigo-400"></i>
                            </div>
                            <h3 class="text-2xl font-bold mb-4">Identify Gaps</h3>
                            <p class="text-slate-400 leading-relaxed">Our diagnostic tools help you pinpoint exactly where your skills need an upgrade.</p>
                        </div>
                        <div class="text-center">
                            <div class="w-24 h-24 bg-purple-600/20 border border-purple-500/30 rounded-full flex items-center justify-center mx-auto mb-10 relative">
                                <span class="absolute -top-2 -right-2 w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center font-black text-xl">2</span>
                                <i data-lucide="cpu" class="w-10 h-10 text-purple-400"></i>
                            </div>
                            <h3 class="text-2xl font-bold mb-4">Immersive Learning</h3>
                            <p class="text-slate-400 leading-relaxed">Engage with high-quality content and interactive exercises designed for deep retention.</p>
                        </div>
                        <div class="text-center">
                            <div class="w-24 h-24 bg-emerald-600/20 border border-emerald-500/30 rounded-full flex items-center justify-center mx-auto mb-10 relative">
                                <span class="absolute -top-2 -right-2 w-10 h-10 bg-emerald-600 rounded-full flex items-center justify-center font-black text-xl">3</span>
                                <i data-lucide="shield-check" class="w-10 h-10 text-emerald-400"></i>
                            </div>
                            <h3 class="text-2xl font-bold mb-4">Validate Mastery</h3>
                            <p class="text-slate-400 leading-relaxed">Prove your new skills through rigorous assessments and earn industry-recognized badges.</p>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Final CTA -->
            <section class="py-32 px-4">
                <div class="max-w-6xl mx-auto relative group">
                    <div class="absolute inset-0 bg-linear-to-r from-indigo-600 to-purple-600 rounded-[3rem] blur-3xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
                    <div class="relative bg-white rounded-[3rem] p-16 md:p-24 text-center border border-slate-100 shadow-2xl overflow-hidden">
                        <div class="absolute top-0 right-0 w-96 h-96 bg-indigo-50 rounded-full -translate-y-1/2 translate-x-1/2 -z-10"></div>
                        <div class="absolute bottom-0 left-0 w-64 h-64 bg-purple-50 rounded-full translate-y-1/2 -translate-x-1/2 -z-10"></div>
                        
                        <h2 class="text-5xl md:text-6xl font-black font-outfit text-slate-900 mb-8">Ready for your upgrade?</h2>
                        <p class="text-xl text-slate-500 mb-12 max-w-2xl mx-auto leading-relaxed">Join 15,000+ professionals who have already upgraded their careers with EduFlow.</p>
                        <div class="flex flex-wrap justify-center gap-6">
                            <button onclick="router.navigate('/signup')" class="btn-primary px-12 py-6 text-xl rounded-2xl shadow-2xl shadow-indigo-500/40">
                                Create Free Account
                            </button>
                            <button onclick="router.navigate('/subjects')" class="btn-secondary px-12 py-6 text-xl rounded-2xl">
                                Browse All Tracks
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    `;
};
