/*
Janke Rall u24571238
Livia Webber u24607852
Joanna Reardon u24597652
*/

const DEFAULT_STATE = {
    currentUser: null,
    enrolled: [],
    completedLessons: {},
    xp: 0
};

function getState() {
    try {
        const stored = localStorage.getItem("starbud_app_state");
        if (!stored) return { ...DEFAULT_STATE };
        const parsed = JSON.parse(stored);
        return {
            currentUser: parsed.currentUser || null,
            enrolled: Array.isArray(parsed.enrolled) ? parsed.enrolled : [],
            completedLessons: parsed.completedLessons || {},
            xp: typeof parsed.xp === 'number' ? parsed.xp : 0
        };
    } catch (e) {
        return { ...DEFAULT_STATE };
    }
}

function saveState(state) {
    try {
        localStorage.setItem("starbud_app_state", JSON.stringify(state));
    } catch (e) {
        console.error("Failed to save state:", e);
    }
}

function resetSessionState(user = null) {
    const newState = {
        currentUser: user,
        enrolled: [],
        completedLessons: {},
        xp: 0
    };
    saveState(newState);
    return newState;
}

window.getState = getState;
window.saveState = saveState;
window.resetSessionState = resetSessionState;