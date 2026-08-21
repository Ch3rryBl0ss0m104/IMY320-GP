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

    // Populate standard text fields
    if (document.getElementById("detailTitle")) document.getElementById("detailTitle").textContent = course.title;
    if (document.getElementById("detailDescription")) document.getElementById("detailDescription").textContent = course.description;
    if (document.getElementById("detailCategory")) document.getElementById("detailCategory").textContent = `${course.categoryName}`;
    if (document.getElementById("detailDuration")) document.getElementById("detailDuration").textContent = course.duration;
    if (document.getElementById("detailLessons")) document.getElementById("detailLessons").textContent = `${course.lessons} Lessons`;
    if (document.getElementById("detailDifficulty")) document.getElementById("detailDifficulty").textContent = course.difficulty;

    // Set Flaticon icon
    const iconEl = document.getElementById("detailIcon");
    if (iconEl) iconEl.className = `fi ${course.icon}`;

    // Color the visual panel on the left dynamically
    const visualSide = document.getElementById("detailVisualSide");
    if (visualSide) {
        visualSide.style.backgroundColor = course.color;
    }
});