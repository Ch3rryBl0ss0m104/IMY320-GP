/*
Janke Rall u24571238
Livia Webber u24607852
Joanna Reardon u24597652
*/

document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('.auth-tab');
    const panels = document.querySelectorAll('.auth-panel');

    function activate(name) {
        tabs.forEach(t => t.classList.toggle('active', t.dataset.tab === name));
        panels.forEach(p => p.style.display = (p.dataset.panel === name ? 'block' : 'none'));
        const url = new URL(window.location);
        url.searchParams.set('view', name);
        window.history.replaceState({}, '', url);
    }

    tabs.forEach(tab => {
        tab.addEventListener('click', () => activate(tab.dataset.tab));
    });

    const params = new URLSearchParams(window.location.search);
    activate(params.get('view') === 'register' ? 'register' : 'login');

    // Password visibility toggles
    document.querySelectorAll('.field-pw-toggle').forEach(btn => {
        btn.addEventListener('click', () => {
        const input = document.getElementById(btn.dataset.target);
        const isPw = input.type === 'password';
        input.type = isPw ? 'text' : 'password';
        btn.textContent = isPw ? 'Hide' : 'Show';
        });
    });

    // Password strength meter (register)
    const regPassword = document.getElementById('reg-password');
    if (regPassword) {
        const fill = document.querySelector('.strength-fill');
        const label = document.querySelector('.strength-label');
        regPassword.addEventListener('input', () => {
        const val = regPassword.value;
        let score = 0;
        if (val.length >= 8) score++;
        if (/[A-Z]/.test(val)) score++;
        if (/[0-9]/.test(val)) score++;
        if (/[^A-Za-z0-9]/.test(val)) score++;
        const levels = [
            { pct: '10%', color: 'var(--danger)', text: 'Very weak' },
            { pct: '35%', color: 'var(--danger)', text: 'Weak' },
            { pct: '60%', color: 'var(--spark)', text: 'Okay' },
            { pct: '85%', color: 'var(--spark)', text: 'Good' },
            { pct: '100%', color: 'var(--success)', text: 'Strong' },
        ];
        const lvl = levels[Math.min(score, 4)];
        fill.style.width = val.length ? lvl.pct : '0%';
        fill.style.background = lvl.color;
        label.textContent = val.length ? lvl.text : 'Use 8+ characters with a number and symbol';
        });
    }

        function setError(input, msg) {
        input.classList.add('invalid');
        const err = input.closest('.field').querySelector('.field-error');
        if (err) { err.textContent = msg; err.classList.add('show'); }
    }
    function clearError(input) {
        input.classList.remove('invalid');
        const err = input.closest('.field').querySelector('.field-error');
        if (err) { err.classList.remove('show'); }
    }
    function isValidEmail(v) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v); }

    // Login
    const loginForm = document.getElementById('login-form');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = document.getElementById('login-email');
        const password = document.getElementById('login-password');
        [email, password].forEach(clearError);
        let ok = true;

        if (!isValidEmail(email.value)) { setError(email, 'Enter a valid email address.'); ok = false; }
        if (password.value.length < 1) { setError(password, 'Enter your password.'); ok = false; }
        if (!ok) return;

        const users = starbudGetUsers();
        const user = users.find(u => u.email.toLowerCase() === email.value.toLowerCase());

        if (!user || user.password !== password.value) {
            setError(password, 'Incorrect email or password.');
            showToast('Login failed — check your details and try again.', 'error');
            return;
        }

        const btn = loginForm.querySelector('button[type="submit"]');
        btn.disabled = true;
        btn.textContent = 'Signing in…';
        setTimeout(() => {
            starbudSetSession(user);
            showToast(`Welcome back, ${user.name.split(' ')[0]}.`, 'success');
            setTimeout(() => window.location.href = 'index.html', 700);
        }, 600);
        });
    }

    //Register
    const registerForm = document.getElementById('register-form');
    if (registerForm) {
        registerForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const name = document.getElementById('reg-name');
        const email = document.getElementById('reg-email');
        const password = document.getElementById('reg-password');
        const confirm = document.getElementById('reg-confirm');
        const terms = document.getElementById('reg-terms');
        [name, email, password, confirm].forEach(clearError);
        let ok = true;

        if (name.value.trim().length < 2) { setError(name, 'Enter your full name.'); ok = false; }
        if (!isValidEmail(email.value)) { setError(email, 'Enter a valid email address.'); ok = false; }
        if (password.value.length < 8) { setError(password, 'Use at least 8 characters.'); ok = false; }
        if (confirm.value !== password.value) { setError(confirm, 'Passwords don\u2019t match.'); ok = false; }
        if (terms && !terms.checked) { showToast('Please accept the terms to continue.', 'error'); ok = false; }
        if (!ok) return;

        const users = starbudGetUsers();
        if (users.some(u => u.email.toLowerCase() === email.value.toLowerCase())) {
            setError(email, 'An account with this email already exists.');
            return;
        }

        const btn = registerForm.querySelector('button[type="submit"]');
        btn.disabled = true;
        btn.textContent = 'Creating account…';
        setTimeout(() => {
            const newUser = { name: name.value.trim(), email: email.value.trim(), password: password.value };
            users.push(newUser);
            starbudSaveUsers(users);
            starbudSetSession(newUser);
            showToast('Account created across the StarBud network.', 'success');
            setTimeout(() => window.location.href = 'index.html', 700);
        }, 700);
        });
    }

    // Mock social buttons
    document.querySelectorAll('.btn-social').forEach(btn => {
        btn.addEventListener('click', () => {
        showToast(`${btn.dataset.provider} sign-in isn\u2019t wired up in this prototype.`);
        });
    });
});