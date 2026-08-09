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

  