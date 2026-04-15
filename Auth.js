import { router } from '../router.js';

/**
 * Login View (YOUR UI)
 */
export const LoginView = () => {
    return `
        <div class="min-h-[80vh] flex items-center justify-center px-4 py-12 animate-fade-in">
            <div class="max-w-md w-full space-y-8 card p-10">
                <div class="text-center">
                    <div class="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center text-white mx-auto mb-6 shadow-xl shadow-indigo-200">
                        <i data-lucide="graduation-cap" class="w-10 h-10"></i>
                    </div>
                    <h2 class="text-3xl font-black font-outfit text-slate-900">Welcome Back</h2>
                    <p class="mt-2 text-slate-500">Log in to continue your learning journey.</p>
                </div>
                
                <form id="login-form" class="mt-8 space-y-6">
                    <div class="space-y-4">
                        <div>
                            <label class="block text-sm font-bold text-slate-700 mb-1">Email</label>
                            <input id="email" name="email" type="email" required class="w-full px-4 py-3 rounded-xl border border-slate-200" placeholder="you@example.com">
                        </div>
                        <div>
                            <label class="block text-sm font-bold text-slate-700 mb-1">Password</label>
                            <input id="password" name="password" type="password" required class="w-full px-4 py-3 rounded-xl border border-slate-200" placeholder="••••••••">
                        </div>
                    </div>

                    <div id="login-error" class="text-red-500 text-sm hidden"></div>

                    <button type="submit" class="btn-primary w-full py-4 text-lg">
                      Log in
                    </button>
                </form>

                <div class="text-center pt-4">
                    <p class="text-slate-500">
                        Don't have an account? 
                        <a href="/signup" data-link class="text-indigo-600 font-bold hover:underline">Sign up</a>
                    </p>
                </div>
            </div>
        </div>
    `;
};

/**
 * Signup View (YOUR UI)
 */
export const SignupView = () => {
    return `
        <div class="min-h-[80vh] flex items-center justify-center px-4 py-12 animate-fade-in">
            <div class="max-w-md w-full space-y-8 card p-10">
                <div class="text-center">
                    <div class="w-16 h-16 bg-indigo-600 rounded-2xl flex items-center justify-center text-white mx-auto mb-6 shadow-xl shadow-indigo-200">
                        <i data-lucide="user-plus" class="w-10 h-10"></i>
                    </div>
                    <h2 class="text-3xl font-black font-outfit text-slate-900">Create Account</h2>
                    <p class="mt-2 text-slate-500">Join EduFlow and start learning.</p>
                </div>
                
                <form id="signup-form" class="mt-8 space-y-6">
                    <div class="space-y-4">
                        <div>
                            <label class="block text-sm font-bold text-slate-700 mb-1">Name</label>
                            <input id="name" name="name" type="text" required class="w-full px-4 py-3 rounded-xl border border-slate-200" placeholder="Your Name">
                        </div>
                        <div>
                            <label class="block text-sm font-bold text-slate-700 mb-1">Email</label>
                            <input id="email" name="email" type="email" required class="w-full px-4 py-3 rounded-xl border border-slate-200" placeholder="you@example.com">
                        </div>
                        <div>
                            <label class="block text-sm font-bold text-slate-700 mb-1">Password</label>
                            <input id="password" name="password" type="password" required class="w-full px-4 py-3 rounded-xl border border-slate-200" placeholder="••••••••">
                        </div>
                    </div>

                    <div id="signup-error" class="text-red-500 text-sm hidden"></div>

                    <button type="submit" class="btn-primary w-full py-4 text-lg">
                        Create Account
                    </button>
                </form>

                <div class="text-center pt-4">
                    <p class="text-slate-500">
                        Already have an account? 
                        <a href="/login" data-link class="text-indigo-600 font-bold hover:underline">Login</a>
                    </p>
                </div>
            </div>
        </div>
    `;
};

/**
 * Auth Logic (FIXED)
 */
export const initAuth = (type) => {

    const formId = type === 'login' ? 'login-form' : 'signup-form';
    const form = document.getElementById(formId);
    const errorDiv = document.getElementById(`${type}-error`);

    if (!form) return;

    form.onsubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());

        try {

            // 🔵 LOGIN
            if (type === 'login') {

                const res = await fetch('http://localhost:5000/api/login', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        email: data.email,
                        password: data.password
                    })
                });

                const result = await res.json();
          console.log("LOGIN RESPONSE:", result);

                if (res.ok && result.user) {
localStorage.setItem("eduflow_user", JSON.stringify(result.user));
                    window.dispatchEvent(new Event("auth-change"));
                 router.navigate('/subjects');
                } else {
                    errorDiv.innerText = result.message || "Login failed";
                    errorDiv.classList.remove('hidden');
                }
            }

            // 🟢 SIGNUP
            else {

                const res = await fetch('http://localhost:5000/api/signup', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        name: data.name,
                        email: data.email,
                        password: data.password
                    })
                });

                if (res.ok) {
                    alert("Signup successful 🎉");
                    router.navigate('/login');
                } else {
                    errorDiv.innerText = "Signup failed";
                    errorDiv.classList.remove('hidden');
                }
            }

        } catch (err) {
            console.error(err);
            errorDiv.innerText = "Server error";
            errorDiv.classList.remove('hidden');
        }
    };
};