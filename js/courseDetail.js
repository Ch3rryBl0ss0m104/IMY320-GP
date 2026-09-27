/*
Janke Rall u24571238
Livia Webber u24607852
Joanna Reardon u24597652
*/

document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const courseId = params.get("id") || "code-101";

    const course = typeof coursesData !== 'undefined' ? coursesData.find(c => c.id === courseId) : null;

    if (!course) {
        const titleEl = document.getElementById("detailTitle");
        const descEl = document.getElementById("detailDescription");
        if (titleEl) titleEl.textContent = "Course Not Found";
        if (descEl) descEl.textContent = "Please return to the course catalogue to select a valid course.";
        return;
    }

    if (document.getElementById("detailTitle")) document.getElementById("detailTitle").textContent = course.title;
    if (document.getElementById("detailDescription")) document.getElementById("detailDescription").textContent = course.description;
    if (document.getElementById("detailCategory")) document.getElementById("detailCategory").textContent = course.categoryName;
    if (document.getElementById("sidebarCategoryTag")) document.getElementById("sidebarCategoryTag").textContent = `${course.categoryName} Track`;
    if (document.getElementById("detailDuration")) document.getElementById("detailDuration").textContent = course.duration;
    if (document.getElementById("detailLessons")) document.getElementById("detailLessons").textContent = `${course.lessons} Lessons`;
    if (document.getElementById("detailDifficulty")) document.getElementById("detailDifficulty").textContent = course.difficulty;

    const iconEl = document.getElementById("detailIcon");
    if (iconEl) iconEl.className = `fi ${course.icon}`;

    const visualSide = document.getElementById("detailVisualSide");
    if (visualSide) visualSide.style.backgroundColor = course.color;

    const syllabusContainer = document.getElementById("syllabusContainer");
    if (syllabusContainer && course.syllabus) {
        syllabusContainer.innerHTML = course.syllabus.map((mod) => `
            <div class="syllabus-module">
                <div class="module-header">
                    <span class="module-num">${mod.week}</span>
                    <h4>${mod.title}</h4>
                </div>
                <ul class="module-lessons">
                    ${mod.lessons.map((lesson, idx) => `
                        <li><span>Lesson ${idx + 1}</span>${lesson}</li>
                    `).join('')}
                </ul>
            </div>
        `).join('');
    }

    const prereqContainer = document.getElementById("prereqContainer");
    if (prereqContainer && course.prerequisites) {
        prereqContainer.innerHTML = course.prerequisites.map(req => `
            <li><i class="fi fi-rr-check icon-green"></i> ${req}</li>
        `).join('');
    }

    if (course.instructor) {
        if (document.getElementById("instructorAvatar")) document.getElementById("instructorAvatar").src = course.instructor.avatar;
        if (document.getElementById("instructorName")) document.getElementById("instructorName").textContent = course.instructor.name;
        if (document.getElementById("instructorTitle")) document.getElementById("instructorTitle").textContent = course.instructor.title;
        if (document.getElementById("instructorBio")) document.getElementById("instructorBio").textContent = course.instructor.bio;
        if (document.getElementById("instructorRating")) document.getElementById("instructorRating").textContent = course.instructor.rating;
        if (document.getElementById("instructorCourses")) document.getElementById("instructorCourses").textContent = course.instructor.coursesCount;
    }

    const startBtn = document.getElementById("startBtn");
    if (startBtn) {
        startBtn.addEventListener("click", () => {
            if (typeof getState === 'function' && typeof saveState === 'function') {
                const state = getState();
                if (!state.enrolled.includes(courseId)) {
                    state.enrolled.push(courseId);
                }
                if (!state.completedLessons[courseId]) {
                    state.completedLessons[courseId] = [];
                }
                saveState(state);
            }

            if (typeof confetti === 'function') {
                confetti({
                    particleCount: 120,
                    spread: 80,
                    origin: { y: 0.6 },
                    colors: ['#FF6B9B', '#8C6FE6', '#FFD166', '#4FD69C']
                });
            }

            setTimeout(() => {
                window.location.href = `classroom.html?id=${courseId}`;
            }, 650);
        });
    }
});