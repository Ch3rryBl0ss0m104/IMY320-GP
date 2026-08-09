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