/*
Janke Rall u24571238
Livia Webber u24607852
Joanna Reardon u24597652
*/

function initCoursesPage() {
    const courseList = document.getElementById("courseList");
    const searchInput = document.getElementById("courseSearch");

    let activeCategory = "all";
    let activeDifficulty = "all";
    let activeSort = "default";

    function renderCourses() {
        if (!courseList) return;
        
        const data = (typeof coursesData !== 'undefined' && Array.isArray(coursesData)) ? coursesData : (window.coursesData || []);
        
        if (!data || data.length === 0) {
            courseList.innerHTML = `<p style="text-align: center; color: var(--text-muted); padding: 2rem;">Loading courses...</p>`;
            return;
        }

        let filtered = [...data];
        const query = searchInput ? searchInput.value.toLowerCase().trim() : "";

        if (query) {
            filtered = filtered.filter(c => 
                c.title.toLowerCase().includes(query) || 
                c.description.toLowerCase().includes(query) ||
                c.categoryName.toLowerCase().includes(query) ||
                c.difficulty.toLowerCase().includes(query)
            );
        }

        if (activeCategory !== "all") {
            filtered = filtered.filter(c => c.category === activeCategory);
        }

        if (activeDifficulty !== "all") {
            filtered = filtered.filter(c => c.difficulty === activeDifficulty);
        }

        if (activeSort === "name-asc") {
            filtered.sort((a, b) => a.title.localeCompare(b.title));
        } else if (activeSort === "name-desc") {
            filtered.sort((a, b) => b.title.localeCompare(a.title));
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
                    <span class="course-tag">${course.categoryName} • ${course.difficulty}</span>
                    <span class="course-btn">View Course →</span>
                </div>
            </a>
        `).join("");
    }

    document.querySelectorAll(".filter-chip").forEach(chip => {
        chip.addEventListener("click", (e) => {
            const type = e.target.dataset.filterType;
            const val = e.target.dataset.val;

            document.querySelectorAll(`.filter-chip[data-filter-type="${type}"]`).forEach(c => c.classList.remove("active"));
            e.target.classList.add("active");

            if (type === "category") activeCategory = val;
            if (type === "difficulty") activeDifficulty = val;
            if (type === "sort") activeSort = val;

            renderCourses();
        });
    });

    const resetBtn = document.getElementById("resetFiltersBtn");
    if (resetBtn) {
        resetBtn.addEventListener("click", () => {
            activeCategory = "all";
            activeDifficulty = "all";
            activeSort = "default";
            if (searchInput) searchInput.value = "";

            document.querySelectorAll(".filter-chip").forEach(c => {
                c.classList.toggle("active", c.dataset.val === "all" || c.dataset.val === "default");
            });

            renderCourses();
        });
    }

    if (searchInput) searchInput.addEventListener("input", renderCourses);

    renderCourses();
}

if (document.readyState === 'loading') {
    document.addEventListener("DOMContentLoaded", initCoursesPage);
} else {
    initCoursesPage();
}