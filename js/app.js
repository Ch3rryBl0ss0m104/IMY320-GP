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

function starbudLogout() {
    localStorage.removeItem(STARBUD_SESSION_KEY);
    window.location.href = 'index.html';
}

function showToast(message, type = 'default') {
    let toast = document.querySelector('.toast');
    if (!toast) {
        toast = document.createElement('div');
        toast.className = 'toast';
        document.body.appendChild(toast);
    }
    toast.textContent = message;
    toast.className = 'toast show' + (type !== 'default' ? ' ' + type : '');
    clearTimeout(toast._timer);
    toast._timer = setTimeout(() => {
        toast.classList.remove('show');
    }, 3200);
}

function reflectSessionInNav() {
    const session = starbudGetSession();
    const slot = document.querySelector('[data-nav-auth-slot]');
    if (!slot) return;
    if (session) {
        slot.innerHTML = `
        <span style="font-family:var(--font-mono);font-size:0.82rem;color:var(--text-muted);margin-right:0.5rem;">
            Hi, ${session.name.split(' ')[0]}
        </span>
        <button class="btn btn-ghost" id="starbud-logout-btn">Sign out</button>
        `;
        const btn = document.getElementById('starbud-logout-btn');
        if (btn) btn.addEventListener('click', starbudLogout);
    }
}

document.addEventListener('DOMContentLoaded', reflectSessionInNav);