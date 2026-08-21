/*
Janke Rall u24571238
Livia Webber u24607852
Joanna Reardon u24597652
*/

document.addEventListener("DOMContentLoaded", () => {
    const courseList = document.getElementById("courseList");
    const searchInput = document.getElementById("courseSearch");
    const sortSelect = document.getElementById("courseSort");

    function renderCourses() {
        if (!courseList) return;
        
        let filtered = [...coursesData];
        const query = searchInput ? searchInput.value.toLowerCase().trim() : "";
        const filterVal = sortSelect ? sortSelect.value : "all";

        // 1. Text Search Filter
        if (query) {
            filtered = filtered.filter(c => 
                c.title.toLowerCase().includes(query) || 
                c.description.toLowerCase().includes(query) ||
                c.categoryName.toLowerCase().includes(query) ||
                c.difficulty.toLowerCase().includes(query)
            );
        }

        // 2. Dropdown Filter / Sorting Logic
        if (filterVal === "name-asc") {
            filtered.sort((a, b) => a.title.localeCompare(b.title));
        } else if (filterVal === "name-desc") {
            filtered.sort((a, b) => b.title.localeCompare(a.title));
        } else if (["code", "art", "music", "math"].includes(filterVal)) {
            // Filter by Category
            filtered = filtered.filter(c => c.category === filterVal);
        } else if (["Beginner", "Intermediate", "Advanced"].includes(filterVal)) {
            // Filter by Difficulty Level
            filtered = filtered.filter(c => c.difficulty === filterVal);
        }

        // Empty state handling
        if (filtered.length === 0) {
            courseList.innerHTML = `<p style="text-align: center; color: var(--text-muted); padding: 2rem;">No courses found matching your criteria.</p>`;
            return;
        }

        // Render Cards
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
                    <span class="course-tag">${course.categoryName} </span>
                    <span class="course-btn">View Course →</span>
                </div>
            </a>
        `).join("");
    }

    if (searchInput) searchInput.addEventListener("input", renderCourses);
    if (sortSelect) sortSelect.addEventListener("change", renderCourses);

    renderCourses();
});