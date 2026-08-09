const STARBUD_DB_KEY = 'starbud_users_v1';
const STARBUD_SESSION_KEY = 'starbud_session_v1';

function StarbudGetUsers() {
  try {
    return JSON.parse(localStorage.getItem(STARBUD_DB_KEY)) || [];
  } catch (e) {
    return [];
  }
}
