/*
Janke Rall u24571238
Livia Webber u24607852
Joanna Reardon u24597652
*/

const coursesData = [
    {
        id: "code-101",
        title: "Scratch & Coding Fundamentals",
        categoryName: "Coding",
        description: "Build your first interactive games and learn basic programming logic.",
        icon: "fi-rr-code-simple",
        color: "var(--pink-deep)",
        duration: "4 Weeks",
        lessons: 8
    },
    {
        id: "art-101",
        title: "Digital Art & Pixel Magic",
        categoryName: "Art & Design",
        description: "Discover pixel art, digital painting, and character design basics.",
        icon: "fi-rr-palette",
        color: "var(--purple-deep)",
        duration: "3 Weeks",
        lessons: 6
    },
    {
        id: "music-101",
        title: "Rhythm & Digital Beats",
        categoryName: "Music",
        description: "Learn sound design, beat-making, and basic music composition.",
        icon: "fi-rr-music",
        color: "var(--blue-deep)",
        duration: "5 Weeks",
        lessons: 10
    },
    {
        id: "math-101",
        title: "Logic Puzzles & Fun Maths",
        categoryName: "Maths & Logic",
        description: "Solve riddles, explore geometric art, and unlock logical thinking.",
        icon: "fi-rr-calculator",
        color: "var(--yellow-deep)",
        duration: "4 Weeks",
        lessons: 8
    }
];

document.addEventListener("DOMContentLoaded", () => {
    const params = new URLSearchParams(window.location.search);
    const courseId = params.get("id");

    const course = coursesData.find(c => c.id === courseId);

    if (!course) {
        document.getElementById("detailTitle").textContent = "Course Not Found";
        document.getElementById("detailDescription").textContent = "Please return to the course catalogue to select a valid course.";
        return;
    }

    document.getElementById("detailTitle").textContent = course.title;
    document.getElementById("detailDescription").textContent = course.description;
    document.getElementById("detailCategory").textContent = course.categoryName;
    document.getElementById("detailDuration").textContent = course.duration;
    document.getElementById("detailLessons").textContent = `${course.lessons} Lessons`;

    const iconEl = document.getElementById("detailIcon");
    iconEl.className = `fi ${course.icon}`;

    // Color the full left panel dynamically
    const visualSide = document.getElementById("detailVisualSide");
    if (visualSide) {
        visualSide.style.backgroundColor = course.color;
    }
});