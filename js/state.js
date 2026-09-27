/*
Janke Rall u24571238
Livia Webber u24607852
Joanna Reardon u24597652
*/

const STATE_KEY = "starbud_user_data";

function getState() {
    const defaultState = {
        enrolled: [],
        completedLessons: {},
        xp: 0,
        streak: 1
    };
    const saved = localStorage.getItem(STATE_KEY);
    return saved ? JSON.parse(saved) : defaultState;
}

function saveState(state) {
    localStorage.setItem(STATE_KEY, JSON.stringify(state));
}

function enrollInCourse(courseId) {
    const state = getState();
    if (!state.enrolled.includes(courseId)) {
        state.enrolled.push(courseId);
        if (!state.completedLessons[courseId]) {
            state.completedLessons[courseId] = [];
        }
        state.xp += 100;
        saveState(state);
        return true;
    }
    return false;
}

function toggleLessonComplete(courseId, lessonIdx) {
    const state = getState();
    if (!state.completedLessons[courseId]) {
        state.completedLessons[courseId] = [];
    }
    
    const list = state.completedLessons[courseId];
    const exists = list.includes(lessonIdx);
    
    if (exists) {
        state.completedLessons[courseId] = list.filter(i => i !== lessonIdx);
    } else {
        list.push(lessonIdx);
        state.xp += 50;
    }
    
    saveState(state);
    return !exists;
}