const STARBUD_DB_KEY = 'starbud_users_v1';
const STARBUD_SESSION_KEY = 'starbud_session_v1';

function starbudGetUsers() {
  try {
    return JSON.parse(localStorage.getItem(STARBUD_DB_KEY)) || [];
  } catch (e) {
    return [];
  }
}

function starbudSaveUsers(users) {
  localStorage.setItem(STARBUD_DB_KEY, JSON.stringify(users));
}

function starbudSetSession(user) {
  localStorage.setItem(STARBUD_SESSION_KEY, JSON.stringify({ name: user.name, email: user.email, ts: Date.now() }));
}

function starbudGetSession() {
  try {
    return JSON.parse(localStorage.getItem(STARBUD_SESSION_KEY));
  } catch (e) {
    return null;
  }
}