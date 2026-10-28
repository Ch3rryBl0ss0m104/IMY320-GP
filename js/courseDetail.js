/*
Janke Rall u24571238
Livia Webber u24607852
Joanna Reardon u24597652
*/

function initCourseDetailPage() {
    const container = document.getElementById("courseDetailContainer");
    if (!container) return;

    const params = new URLSearchParams(window.location.search);
    const courseId = params.get("id") || "code-101";

    const data = (typeof coursesData !== 'undefined' && Array.isArray(coursesData)) ? coursesData : (window.coursesData || []);
    const course = data.find(c => c.id === courseId) || data[0];

    if (!course) {
        container.innerHTML = `<p style="text-align: center; padding: 3rem;">Course not found. <a href="courses.html">Return to catalogue</a></p>`;
        return;
    }

    const state = typeof getState === 'function' ? getState() : { enrolled: [] };
    const isEnrolled = (state.enrolled || []).includes(course.id);

    container.innerHTML = `
        <!-- Hero Header with Immediate Top Enrollment Banner -->
        <header class="course-hero" style="background:${course.bgColor || 'var(--bg-raised)'}; border-radius:24px; padding:2rem; margin-bottom:2rem; border:3px solid var(--line);">
            <div style="display:flex; justify-content:space-between; align-items:flex-start; flex-wrap:wrap; gap:1.5rem;">
                <div style="flex:1; min-width:280px;">
                    <a href="courses.html" class="link-small" style="display:inline-flex; align-items:center; gap:0.4rem; margin-bottom:0.75rem; font-weight:700;">
                        <i class="fi fi-rr-arrow-left"></i> Back to Courses
                    </a>
                    <div style="display:flex; gap:0.5rem; align-items:center; margin-bottom:0.5rem;">
                        <span class="badge" style="background:${course.color}; color:#fff;">${course.categoryName}</span>
                        <span class="badge badge-ghost">${course.difficulty}</span>
                    </div>
                    <h1 style="font-size:2.2rem; margin:0.4rem 0;">${course.title}</h1>
                    <p style="font-size:1.05rem; color:var(--text-muted); max-width:60ch; line-height:1.5; margin-bottom:1rem;">${course.description}</p>
                    
                    <div style="display:inline-flex; align-items:center; gap:0.5rem; background:#fff; border:2px solid var(--line); border-radius:12px; padding:0.5rem 1rem; font-size:0.88rem; font-weight:700; color:var(--purple-deep);">
                        <i class="fi fi-rr-clock"></i> Schedule: ${course.weeklyCommitment || course.duration}
                    </div>
                </div>

                <!-- Top Enrollment CTA Bar (No Scrolling Required) -->
                <div style="background:#fff; border:3px solid var(--purple-deep); border-radius:18px; padding:1.25rem 1.5rem; min-width:260px; box-shadow:0 8px 20px rgba(124, 58, 237, 0.08);">
                    <div style="font-size:0.75rem; font-weight:800; color:var(--text-muted); text-transform:uppercase;">Course Access</div>
                    <div style="font-size:1.6rem; font-weight:900; color:var(--purple-deep); margin:2px 0 0.75rem 0;">Free Access</div>
                    <button onclick="toggleEnrollment('${course.id}', '${course.title.replace(/'/g, "\\'")}')" class="btn ${isEnrolled ? 'btn-ghost' : 'btn-primary'} btn-block" style="justify-content:center; width:100%; font-weight:800;">
                        ${isEnrolled ? 'Go to My Classroom →' : 'Enroll Now <i class="fi fi-rr-rocket-lunch"></i>'}
                    </button>
                </div>
            </div>
        </header>

        <!-- Main Content Grid -->
        <div class="course-detail-grid" style="display:grid; grid-template-columns: 2fr 1fr; gap:2rem; align-items:start;">
            
            <!-- Left Column: Accordion Syllabus & Prerequisites -->
            <div class="course-main-content">
                <section class="card" style="margin-bottom:1.5rem; padding:1.75rem;">
                    <h2 style="font-size:1.3rem; margin-bottom:1rem;"><i class="fi fi-rr-list-check"></i> Course Syllabus (${course.weeklyCommitment || course.duration})</h2>
                    <div class="syllabus-list" style="display:flex; flex-direction:column; gap:0.75rem;">
                        ${(course.syllabus || []).map((mod, idx) => `
                            <details ${idx === 0 ? 'open' : ''} style="border:2px solid var(--line); border-radius:12px; padding:0.85rem 1.1rem; background:var(--bg-raised-2);">
                                <summary style="font-family:var(--font-display); font-weight:800; color:var(--purple-deep); cursor:pointer; font-size:1.05rem;">
                                    ${mod.week}: ${mod.title}
                                </summary>
                                <ul style="margin:0.75rem 0 0 0; padding-left:1.2rem; font-size:0.9rem; color:var(--text-muted); line-height:1.6;">
                                    ${mod.lessons.map(l => `<li style="margin-bottom:0.35rem;">${l}</li>`).join('')}
                                </ul>
                            </details>
                        `).join('')}
                    </div>
                </section>

                <section class="card" style="padding:1.75rem;">
                    <h2 style="font-size:1.3rem; margin-bottom:1rem;"><i class="fi fi-rr-info"></i> What You'll Need</h2>
                    <ul style="padding-left:1.2rem; margin:0; font-size:0.95rem; color:var(--text-muted);">
                        ${(course.prerequisites || []).map(p => `<li style="margin-bottom:0.5rem;">${p}</li>`).join('')}
                    </ul>
                </section>
            </div>

            <!-- Right Column Sidebar: Content-Sized Cards -->
            <div class="course-sidebar" style="display:flex; flex-direction:column; gap:1.5rem;">
                <!-- Instructor Card -->
                <div class="card" style="padding:1.5rem; text-align:center; height:auto;">
                    <img src="${course.instructor.avatar}" 
                         alt="${course.instructor.name}" 
                         style="width:85px; height:85px; border-radius:50%; object-fit:cover; border:3px solid var(--purple-deep); margin:0 auto 0.75rem auto; display:block;">
                    
                    <h3 style="margin:0; font-size:1.1rem;">${course.instructor.name}</h3>
                    <p style="font-size:0.82rem; color:var(--purple-deep); font-weight:700; margin:0.25rem 0 0.75rem 0;">${course.instructor.title}</p>
                    <p style="font-size:0.85rem; color:var(--text-muted); line-height:1.4; margin-bottom:1rem;">${course.instructor.bio}</p>

                    <button onclick="openInstructorModal('${course.id}')" class="btn btn-ghost btn-sm btn-block" style="font-size:0.8rem; border:1.5px solid var(--line); width:100%;">
                        View Achievements & Bio <i class="fi fi-rr-arrow-up-right"></i>
                    </button>
                </div>

                <!-- Secondary Sidebar Action Card -->
                <div class="card" style="padding:1.5rem; border-top:5px solid ${course.color}; height:auto;">
                    <div style="font-size:0.9rem; font-weight:800; color:var(--purple-deep); margin-bottom:0.5rem;"><i class="fi fi-rr-graduation-cap"></i> Complete & Earn</div>
                    <p style="font-size:0.85rem; color:var(--text-muted); margin-bottom:1rem; line-height:1.4;">Earn a verified StarBud completion certificate and 100 XP upon finish.</p>
                    <button onclick="toggleEnrollment('${course.id}', '${course.title.replace(/'/g, "\\'")}')" class="btn ${isEnrolled ? 'btn-ghost' : 'btn-primary'} btn-block" style="justify-content:center; width:100%;">
                        ${isEnrolled ? 'Go to Classroom' : 'Start Course'}
                    </button>
                </div>
            </div>
        </div>

        <!-- Instructor Achievements Modal -->
        <div id="instructorModalOverlay" style="display: none; position: fixed; inset: 0; background: rgba(15, 23, 42, 0.65); backdrop-filter: blur(4px); z-index: 999; justify-content: center; align-items: center; padding: 1rem;">
            <div id="instructorModalContent" style="background: #fff; border-radius: 20px; max-width: 480px; width: 100%; padding: 2rem; border: 4px solid var(--purple-deep); position: relative;">
                <button onclick="closeInstructorModal()" style="position: absolute; top: 1rem; right: 1rem; background: none; border: none; font-size: 1.5rem; cursor: pointer;">&times;</button>
                <div id="instructorModalBody"></div>
            </div>
        </div>
    `;
}

function toggleEnrollment(courseId, courseTitle) {
    const state = typeof getState === 'function' ? getState() : { enrolled: [] };
    if (!state.enrolled) state.enrolled = [];

    const isEnrolled = state.enrolled.includes(courseId);

    if (!isEnrolled) {
        state.enrolled.push(courseId);
        if (typeof saveState === 'function') saveState(state);

        if (typeof confetti === 'function') {
            confetti({ particleCount: 100, spread: 80, origin: { y: 0.6 } });
        }
        if (typeof showToast === 'function') {
            showToast(`Enrolled in "${courseTitle}"! Added to My Classroom.`, 'success');
        }
    }

    setTimeout(() => {
        window.location.href = `classroom.html?id=${courseId}`;
    }, 500);
}

function openInstructorModal(courseId) {
    const data = (typeof coursesData !== 'undefined' && Array.isArray(coursesData)) ? coursesData : (window.coursesData || []);
    const course = data.find(c => c.id === courseId);
    if (!course || !course.instructor) return;

    const modalOverlay = document.getElementById("instructorModalOverlay");
    const modalBody = document.getElementById("instructorModalBody");
    const inst = course.instructor;

    modalBody.innerHTML = `
        <div style="text-align: center; margin-bottom: 1.25rem;">
            <img src="${inst.avatar}" 
                 style="width: 85px; height: 85px; border-radius: 50%; object-fit: cover; border: 4px solid var(--purple-deep); margin-bottom: 0.75rem;">
            <h3 style="margin: 0; font-size: 1.25rem;">${inst.name}</h3>
            <div style="font-size: 0.85rem; color: var(--purple-deep); font-weight: 700; margin-top: 2px;">${inst.title}</div>
            <div style="font-size: 0.78rem; color: #64748b; margin-top: 2px;">${inst.institution || 'StarBud Educator'}</div>
        </div>

        <p style="font-size: 0.9rem; color: #475569; line-height: 1.5; margin-bottom: 1.25rem;">${inst.bio}</p>

        <div style="background: #f8fafc; border: 1.5px solid #e2e8f0; border-radius: 12px; padding: 1rem; margin-bottom: 1.5rem;">
            <div style="font-size: 0.8rem; font-weight: 800; color: var(--purple-deep); text-transform: uppercase; margin-bottom: 0.5rem;">
                <i class="fi fi-rr-trophy"></i> Key Achievements & Honors
            </div>
            <ul style="margin: 0; padding-left: 1.2rem; font-size: 0.85rem; color: #334155; line-height: 1.5;">
                ${(inst.achievements || ["Recognized Industry Leader"]).map(a => `<li style="margin-bottom:0.25rem;">${a}</li>`).join('')}
            </ul>
        </div>

        <a href="${inst.verificationUrl || '#'}" target="_blank" rel="noopener" class="btn btn-primary btn-block" style="justify-content: center; font-size: 0.88rem; width: 100%;">
            Verify Credentials & Profile <i class="fi fi-rr-arrow-up-right"></i>
        </a>
    `;

    modalOverlay.style.display = "flex";
}

function closeInstructorModal() {
    const modalOverlay = document.getElementById("instructorModalOverlay");
    if (modalOverlay) modalOverlay.style.display = "none";
}

if (document.readyState === 'loading') {
    document.addEventListener("DOMContentLoaded", initCourseDetailPage);
} else {
    initCourseDetailPage();
}

window.initCourseDetailPage = initCourseDetailPage;
window.toggleEnrollment = toggleEnrollment;
window.openInstructorModal = openInstructorModal;
window.closeInstructorModal = closeInstructorModal;