/*
Janke Rall u24571238
Livia Webber u24607852
Joanna Reardon u24597652
*/

const coursesData = [
    {
        id: "code-101",
        title: "Scratch & Coding Fundamentals",
        category: "code",
        categoryName: "Coding",
        description: "Build your first interactive games and learn basic programming logic.",
        icon: "fi-rr-code-simple",
        color: "var(--pink-deep)",
        bgColor: "#FFE1EC",
        duration: "4 Weeks",
        lessons: 8
    },
    {
        id: "art-101",
        title: "Digital Art & Pixel Magic",
        category: "art",
        categoryName: "Art & Design",
        description: "Discover pixel art, digital painting, and character design basics.",
        icon: "fi-rr-palette",
        color: "var(--purple-deep)",
        bgColor: "#F3EEFF",
        duration: "3 Weeks",
        lessons: 6
    },
    {
        id: "music-101",
        title: "Rhythm & Digital Beats",
        category: "music",
        categoryName: "Music",
        description: "Learn sound design, beat-making, and basic music composition.",
        icon: "fi-rr-music",
        color: "var(--blue-deep)",
        bgColor: "#E3F2FD",
        duration: "5 Weeks",
        lessons: 10
    },
    {
        id: "math-101",
        title: "Logic Puzzles & Fun Maths",
        category: "math",
        categoryName: "Maths & Logic",
        description: "Solve riddles, explore geometric art, and unlock logical thinking.",
        icon: "fi-rr-calculator",
        color: "var(--yellow-deep)",
        bgColor: "#FFF8E1",
        duration: "4 Weeks",
        lessons: 8
    }
];

document.addEventListener("DOMContentLoaded", () => {
    const courseList = document.getElementById("courseList");
    const searchInput = document.getElementById("courseSearch");
    const sortSelect = document.getElementById("courseSort");

    function renderCourses() {
        if (!courseList) return;
        
        let filtered = [...coursesData];
        const query = searchInput ? searchInput.value.toLowerCase().trim() : "";
        const filterVal = sortSelect ? sortSelect.value : "all";

        if (query) {
            filtered = filtered.filter(c => 
                c.title.toLowerCase().includes(query) || 
                c.description.toLowerCase().includes(query) ||
                c.categoryName.toLowerCase().includes(query)
            );
        }

        if (filterVal === "name-asc") {
            filtered.sort((a, b) => a.title.localeCompare(b.title));
        } else if (filterVal === "name-desc") {
            filtered.sort((a, b) => b.title.localeCompare(a.title));
        } else if (["code", "art", "music", "math"].includes(filterVal)) {
            filtered = filtered.filter(c => c.category === filterVal);
        }

        if (filtered.length === 0) {
            courseList.innerHTML = `<p style="text-align: center; color: var(--text-muted); padding: 2rem;">No courses found matching your criteria.</p>`;
            return;
        }

        courseList.innerHTML = filtered.map(course => `
            <a href="course-detail.html?id=${course.id}" class="course-list-item" style="border-left: 6px solid ${course.color}; --course-color: ${course.color};">
                <div class="course-info">
                    <div class="course-badge" style="background-color: ${course.color};">
                        <i class="fi ${course.icon}"></i>
                    </div>
                    <div class="course-details">
                        <h3>${course.title}</h3>
                        <p>${course.description}</p>
                    </div>
                </div>
                <div class="course-meta">
                    <span class="course-tag">${course.category}</span>
                    <span class="course-btn">View Course →</span>
                </div>
            </a>
        `).join("");
    }

    if (searchInput) searchInput.addEventListener("input", renderCourses);
    if (sortSelect) sortSelect.addEventListener("change", renderCourses);

    renderCourses();
});