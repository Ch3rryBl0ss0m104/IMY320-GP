/*
Janke Rall u24571238
Livia Webber u24607852
Joanna Reardon u24597652
*/

let selectedCategories = [];
let selectedDifficulties = [];

document.addEventListener("DOMContentLoaded", () => {
    const searchInput = document.getElementById("courseSearchInput") || document.getElementById("courseSearch");
    if (searchInput) {
        searchInput.addEventListener("input", handleFilterChange);
    }
    renderFilteredCourses();
});

function toggleFilterDrawer() {
    const drawer = document.getElementById("inlineFilterDrawer");
    const btn = document.getElementById("filterToggleBtn");
    if (!drawer) return;

    if (drawer.style.display === "none" || !drawer.style.display) {
        drawer.style.display = "block";
        if (btn) btn.classList.add("filter-btn-active");
    } else {
        drawer.style.display = "none";
        if (btn) btn.classList.remove("filter-btn-active");
    }
}

function selectCategory(cat) {
    if (cat === 'all') {
        selectedCategories = [];
    } else {
        const idx = selectedCategories.indexOf(cat);
        if (idx > -1) {
            selectedCategories.splice(idx, 1);
        } else {
            selectedCategories.push(cat);
        }
    }
    updateFilterUI();
    renderFilteredCourses();
}

function selectDifficulty(diff) {
    if (diff === 'all') {
        selectedDifficulties = [];
    } else {
        const idx = selectedDifficulties.indexOf(diff);
        if (idx > -1) {
            selectedDifficulties.splice(idx, 1);
        } else {
            selectedDifficulties.push(diff);
        }
    }
    updateFilterUI();
    renderFilteredCourses();
}

function updateFilterUI() {
    document.querySelectorAll("[data-cat]").forEach(btn => {
        const val = btn.getAttribute("data-cat");
        if (val === 'all') {
            btn.classList.toggle("active", selectedCategories.length === 0);
        } else {
            btn.classList.toggle("active", selectedCategories.includes(val));
        }
    });

    document.querySelectorAll("[data-diff]").forEach(btn => {
        const val = btn.getAttribute("data-diff");
        if (val === 'all') {
            btn.classList.toggle("active", selectedDifficulties.length === 0);
        } else {
            btn.classList.toggle("active", selectedDifficulties.includes(val));
        }
    });

    updateActiveFilterTags();
}

function updateActiveFilterTags() {
    const tagsContainer = document.getElementById("activeFilterTagsContainer");
    if (!tagsContainer) return;

    let html = "";

    const catLabels = {
        'code': 'Coding',
        'art': 'Art & Design',
        'music': 'Music',
        'math': 'Maths & Logic'
    };

    selectedCategories.forEach(cat => {
        html += `
            <div class="active-tag-pill">
                Category: ${catLabels[cat] || cat}
                <span class="remove-tag" onclick="selectCategory('${cat}')">✕</span>
            </div>
        `;
    });

    selectedDifficulties.forEach(diff => {
        html += `
            <div class="active-tag-pill">
                Level: ${diff}
                <span class="remove-tag" onclick="selectDifficulty('${diff}')">✕</span>
            </div>
        `;
    });

    if (selectedCategories.length > 0 || selectedDifficulties.length > 0) {
        html += `
            <button onclick="resetAllFilters()" class="clear-all-filters-btn">
                Clear All
            </button>
        `;
    }

    tagsContainer.innerHTML = html;
}

function resetAllFilters() {
    selectedCategories = [];
    selectedDifficulties = [];
    const searchInput = document.getElementById("courseSearchInput") || document.getElementById("courseSearch");
    if (searchInput) searchInput.value = "";
    updateFilterUI();
    renderFilteredCourses();
}

function handleFilterChange() {
    renderFilteredCourses();
}

function renderFilteredCourses() {
    const searchInput = document.getElementById("courseSearchInput") || document.getElementById("courseSearch");
    const searchVal = (searchInput?.value || "").toLowerCase().trim();
    const data = (typeof coursesData !== 'undefined') ? coursesData : (window.coursesData || []);

    const filtered = data.filter(c => {
        const matchCat = selectedCategories.length === 0 || selectedCategories.includes(c.category);
        const matchDiff = selectedDifficulties.length === 0 || selectedDifficulties.includes(c.difficulty);
        const matchSearch = !searchVal || 
                            c.title.toLowerCase().includes(searchVal) || 
                            c.description.toLowerCase().includes(searchVal) ||
                            (c.categoryName && c.categoryName.toLowerCase().includes(searchVal));
        return matchCat && matchDiff && matchSearch;
    });

    const listContainer = document.getElementById("courseList") || document.getElementById("coursesGrid") || document.getElementById("coursesContainer");
    if (!listContainer) return;

    if (filtered.length === 0) {
        listContainer.innerHTML = `
            <div class="no-courses-found" style="grid-column: 1 / -1; text-align: center; padding: 3rem; background: #f8fafc; border: 2px dashed #cbd5e1; border-radius: 16px;">
                <p style="font-weight: 700; color: #64748b; margin: 0 0 1rem 0;">No courses match your active filter settings.</p>
                <button onclick="resetAllFilters()" class="btn btn-primary">Reset Filters</button>
            </div>
        `;
        return;
    }

    const state = typeof getState === 'function' ? getState() : { enrolled: [] };
    const enrolled = state.enrolled || [];

    listContainer.innerHTML = filtered.map(course => {
        const isEnrolled = enrolled.includes(course.id);
        const bgIcon = course.bgColor ? course.bgColor : '#f3f4f6';
        
        return `
            <article class="course-card" style="background:#fff; border:3px solid var(--line, #e2d9f3); border-radius:18px; padding:1.5rem; display:flex; flex-direction:column; justify-content:space-between; position:relative; overflow:hidden;">
                <div style="height:6px; background:${course.color || '#7c3aed'}; position:absolute; top:0; left:0; right:0;"></div>
                
                <div>
                    <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:1rem; margin-top:0.25rem;">
                        <div style="width:42px; height:42px; border-radius:12px; background:${bgIcon}; color:${course.color || '#7c3aed'}; display:flex; align-items:center; justify-content:center; font-size:1.25rem;">
                            <i class="fi ${course.icon || 'fi-rr-book'}"></i>
                        </div>
                        <div style="display:flex; gap:0.4rem;">
                            <span class="badge badge-purple">${course.categoryName || course.category}</span>
                            <span class="badge badge-mint">${course.difficulty}</span>
                        </div>
                    </div>

                    <h3 style="margin-bottom:0.5rem; font-size:1.25rem; color:var(--purple-deep);">${course.title}</h3>
                    <p style="color:var(--text-muted); font-size:0.88rem; margin-bottom:1.5rem; line-height:1.4;">${course.description}</p>
                </div>

                <div style="display:flex; justify-content:space-between; align-items:center; padding-top:1rem; border-top:2px dashed var(--line, #e2d9f3);">
                    <a href="course-detail.html?id=${course.id}" class="btn btn-ghost btn-sm">Details</a>
                    ${isEnrolled ? `
                        <a href="classroom.html?id=${course.id}" class="btn btn-mint btn-sm">Continue Path <i class="fi fi-rr-arrow-right"></i></a>
                    ` : `
                        <a href="course-detail.html?id=${course.id}" class="btn btn-primary btn-sm">Enroll Now <i class="fi fi-rr-arrow-right"></i></a>
                    `}
                </div>
            </article>
        `;
    }).join('');
}

window.toggleFilterDrawer = toggleFilterDrawer;
window.selectCategory = selectCategory;
window.selectDifficulty = selectDifficulty;
window.resetAllFilters = resetAllFilters;
window.handleFilterChange = handleFilterChange;