/*
Janke Rall u24571238
Livia Webber u24607852
Joanna Reardon u24597652
*/

function renderGlobalNavigation() {
    const session = typeof starbudGetSession === 'function' ? starbudGetSession() : null;
    const state = typeof getState === 'function' ? getState() : { enrolled: [], xp: 0 };

    const navLinks = document.querySelector(".site-nav .nav-links");
    const authSlot = document.querySelector("[data-nav-auth-slot]");

    if (!navLinks) return;

    const currentPath = window.location.pathname.split("/").pop() || "index.html";

    let classroomItem = document.getElementById("navClassroomLi");

    if (session) {
        const isClassroomPage = currentPath.includes("classroom.html");
        
        if (!classroomItem) {
            classroomItem = document.createElement("li");
            classroomItem.id = "navClassroomLi";
            classroomItem.innerHTML = `
                <a href="classroom.html" class="${isClassroomPage ? 'active' : ''}">
                    Classroom
                </a>
            `;

            const coursesLi = navLinks.children[1];
            if (coursesLi) {
                coursesLi.insertAdjacentElement('afterend', classroomItem);
            } else {
                navLinks.appendChild(classroomItem);
            }
        } else {
            const link = classroomItem.querySelector("a");
            if (isClassroomPage) {
                link.classList.add("active");
            } else {
                link.classList.remove("active");
            }
        }
    } else if (classroomItem) {
        classroomItem.remove();
    }

    if (authSlot) {
        if (session) {
            authSlot.innerHTML = `
                <span style="font-weight:700; color:var(--purple-deep); margin-right:0.25rem;">Hi, ${session.name.split(' ')[0]}</span>
                <div class="xp-pill"><i class="fi fi-rr-sparkles"></i> <span id="userXpDisplay">${state.xp || 0}</span> XP</div>
                <button class="btn btn-ghost" id="nav-logout-btn">Logout</button>
            `;

            const logoutBtn = document.getElementById('nav-logout-btn');
            if (logoutBtn && typeof starbudLogout === 'function') {
                logoutBtn.addEventListener('click', starbudLogout);
            }
        } else {
            authSlot.innerHTML = `
                <a href="login.html" class="btn btn-ghost">Login</a>
                <a href="login.html?view=register" class="btn btn-primary">Start Learning</a>
            `;
        }
    }
}

document.addEventListener("DOMContentLoaded", renderGlobalNavigation);