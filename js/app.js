/*
Janke Rall u24571238
Livia Webber u24607852
Joanna Reardon u24597652
*/


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

document.addEventListener('DOMContentLoaded', () => {
    const pathFill = document.getElementById('roadmapPathFill');
    const steps = document.querySelectorAll('.zigzag-step');
    const container = document.querySelector('.roadmap-zigzag-container');

    if (!pathFill || !container || !steps.length) return;

    
    const pathLength = pathFill.getTotalLength();
    pathFill.style.strokeDasharray = pathLength;
    pathFill.style.strokeDashoffset = pathLength;

    function updateZigzagRoadmap() {
        const rect = container.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        
        const start = windowHeight * 0.75;
        const totalHeight = rect.height;
        const currentProgress = start - rect.top;

        let progressRatio = currentProgress / totalHeight;
        progressRatio = Math.min(Math.max(progressRatio, 0), 1);

        
        const drawLength = pathLength * progressRatio;
        pathFill.style.strokeDashoffset = pathLength - drawLength;

        
        steps.forEach((step) => {
            const stepRect = step.getBoundingClientRect();
            if (stepRect.top < windowHeight * 0.75) {
                step.classList.add('active');
            } else {
                step.classList.remove('active');
            }
        });
    }

    window.addEventListener('scroll', updateZigzagRoadmap);
    updateZigzagRoadmap(); 
});

document.addEventListener('DOMContentLoaded', () => {
    const orbitalAssembly = document.getElementById('orbitalAssembly');
    const orbitNodes = document.querySelectorAll('.orbit-node');
    const orbitTitle = document.getElementById('orbitTitle');
    const orbitDesc = document.getElementById('orbitDesc');
    const orbitalCore = document.getElementById('orbitalCore');

    if (orbitalAssembly) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    orbitalAssembly.classList.add('spin-in');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });

        observer.observe(orbitalAssembly);
    }

    if (orbitNodes.length && orbitTitle && orbitDesc && orbitalCore) {
        const defaultTitle = "StarBud Hub";
        const defaultDesc = "Hover over any club to explore";

        orbitNodes.forEach((node) => {
            node.addEventListener('mouseenter', () => {
                const title = node.getAttribute('data-title');
                const desc = node.getAttribute('data-desc');
                const nodeColor = node.style.getPropertyValue('--node-bg') || 'var(--purple-deep)';

                orbitTitle.textContent = title;
                orbitDesc.textContent = desc;

                orbitalCore.style.backgroundColor = nodeColor;
                orbitalCore.style.borderColor = nodeColor;
                orbitalCore.classList.add('active-hover');

                orbitNodes.forEach(n => n.classList.remove('active'));
                node.classList.add('active');
            });

            node.addEventListener('mouseleave', () => {
                orbitTitle.textContent = defaultTitle;
                orbitDesc.textContent = defaultDesc;

                orbitalCore.style.backgroundColor = '#ffffff';
                orbitalCore.style.borderColor = 'var(--purple-deep)';
                orbitalCore.classList.remove('active-hover');

                node.classList.remove('active');
            });
        });
    }
});

// Function to update certificate dynamic details
function renderCertificate(courseTitle = "Web Development Fundamentals") {
    const session = typeof starbudGetSession === 'function' ? starbudGetSession() : null;
    const userName = session && session.name ? session.name : "StarBud Learner";

    // Dynamic element updates
    const nameEl = document.getElementById("cert-user-name");
    const courseEl = document.getElementById("cert-course-title");
    const dateEl = document.getElementById("cert-issue-date");

    if (nameEl) nameEl.textContent = userName;
    if (courseEl) courseEl.textContent = courseTitle;
    if (dateEl) {
        const today = new Date();
        dateEl.textContent = today.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric"
        });
    }
}

document.addEventListener("DOMContentLoaded", () => {
    renderCertificate();
});