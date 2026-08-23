/*
Janke Rall u24571238
Livia Webber u24607852
Joanna Reardon u24597652
*/

document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const courseId = params.get("id");

    const course = coursesData.find(c => c.id === courseId);

    if (!course) {
        const titleEl = document.getElementById("detailTitle");
        const descEl = document.getElementById("detailDescription");
        if (titleEl) titleEl.textContent = "Course Not Found";
        if (descEl) descEl.textContent = "Please return to the course catalogue to select a valid course.";
        return;
    }

    if (document.getElementById("detailTitle")) document.getElementById("detailTitle").textContent = course.title;
    if (document.getElementById("detailDescription")) document.getElementById("detailDescription").textContent = course.description;
    if (document.getElementById("detailCategory")) document.getElementById("detailCategory").textContent = `${course.categoryName}`;
    if (document.getElementById("detailDuration")) document.getElementById("detailDuration").textContent = course.duration;
    if (document.getElementById("detailLessons")) document.getElementById("detailLessons").textContent = `${course.lessons} Lessons`;
    if (document.getElementById("detailDifficulty")) document.getElementById("detailDifficulty").textContent = course.difficulty;

    const iconEl = document.getElementById("detailIcon");
    if (iconEl) iconEl.className = `fi ${course.icon}`;

    const visualSide = document.getElementById("detailVisualSide");
    if (visualSide) {
        visualSide.style.backgroundColor = course.color;
    }

    const startBtn = document.getElementById("startBtn");
    const toast = document.getElementById("starbudToast");

    if (startBtn && toast) {
        startBtn.addEventListener("click", () => {
            if (typeof confetti === 'function') {
                confetti({
                    particleCount: 100,
                    spread: 70,
                    origin: { y: 0.8 },
                    colors: ['#FF6B9B', '#8C6FE6', '#FFD166', '#4FD69C']
                });
            }

            toast.classList.add("show", "success");

            setTimeout(() => {
                toast.classList.remove("show");
            }, 3000);
        });
    }
});