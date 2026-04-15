import { subjects } from './data.js';

/**
 * Global Data Store
 * Manages user authentication, progress tracking, and persistent storage using localStorage.
 */
export const store = {
    /**
     * Retrieves all registered users from localStorage.
     * @returns {Array} List of user objects.
     */
    getUsers() {
        const users = localStorage.getItem('eduflow_all_users');
        return users ? JSON.parse(users) : [];
    },

    /**
     * Registers a new user if the email is not already taken.
     * @param {string} name 
     * @param {string} email 
     * @param {string} password 
     * @returns {Object} Success status and optional message.
     */
    register(name, email, password) {
        const users = this.getUsers();
        if (users.find(u => u.email === email)) return { success: false, message: 'Email already exists' };
        
        const newUser = { name, email, password, id: Date.now().toString() };
        users.push(newUser);
        localStorage.setItem('eduflow_all_users', JSON.stringify(users));
        return { success: true };
    },

    /**
     * Validates user credentials and sets the current session.
     * @param {string} email 
     * @param {string} password 
     * @returns {Object} Success status and optional message.
     */
    login(email, password) {
        const users = this.getUsers();
        const user = users.find(u => u.email === email && u.password === password);
        if (user) {
            this.setUser(user);
            return { success: true };
        }
        return { success: false, message: 'Invalid email or password' };
    },

    /**
     * Retrieves the currently logged-in user.
     * @returns {Object|null}
     */
   getUser() {
    return JSON.parse(localStorage.getItem("eduflow_user"));
},

    /**
     * Sets the current user session and notifies the app.
     * @param {Object} user 
     */
    setUser(user) {
        localStorage.setItem('eduflow_user', JSON.stringify(user));
        window.dispatchEvent(new Event('auth-change'));
    },

    /**
     * Clears the current user session and notifies the app.
     */
    logout() {
        localStorage.removeItem('eduflow_user');
        window.dispatchEvent(new Event('auth-change'));
    },

    /**
     * Retrieves progress data for the currently logged-in user.
     * @returns {Object} { completedTopics: [], quizScores: {} }
     */
    getProgress() {
        const user = this.getUser();
        if (!user) return { completedTopics: [], quizScores: {} };
        const progress = localStorage.getItem(`eduflow_progress_${user.id}`);
        return progress ? JSON.parse(progress) : { completedTopics: [], quizScores: {} };
    },

    /**
     * Marks a topic as completed for the current user.
     * @param {string} topicId 
     */
    completeTopic(topicId) {
        const user = this.getUser();
        if (!user) return;
        const progress = this.getProgress();
        if (!progress.completedTopics.includes(topicId)) {
            progress.completedTopics.push(topicId);
            localStorage.setItem(`eduflow_progress_${user.id}`, JSON.stringify(progress));
        }
    },

    /**
     * Saves or updates a quiz score for a specific topic.
     * @param {string} topicId 
     * @param {number} score - Percentage score.
     */
    setQuizScore(topicId, score) {
        const user = this.getUser();
        if (!user) return;
        const progress = this.getProgress();
        // Only update if the new score is higher
        progress.quizScores[topicId] = Math.max(progress.quizScores[topicId] || 0, score);
        localStorage.setItem(`eduflow_progress_${user.id}`, JSON.stringify(progress));
    },


setQuizReview(topicId, data) {
    localStorage.setItem(
        `quiz_review_${topicId}`,
        JSON.stringify(data)
    );
},

getQuizReview(topicId) {
    const data = localStorage.getItem(`quiz_review_${topicId}`);
    return data ? JSON.parse(data) : null;
},


};
