/*
Janke Rall u24571238
Livia Webber u24607852
Joanna Reardon u24597652
*/

document.addEventListener("DOMContentLoaded", () => {
    const state = typeof getState === 'function' ? getState() : { enrolled: [] };
    const enrolledIds = state.enrolled || [];
    
    const container = document.getElementById("classroomContainer");
    if (!container) return;

    if (enrolledIds.length === 0) {
        container.innerHTML = `
            <div style="text-align: center; padding: 4rem 2rem; background:#fff; border:3px solid var(--line, #e5e7eb); border-radius:16px; margin: 3rem auto; max-width: 600px;">
                <div style="font-size: 3.5rem; color: var(--purple-deep); margin-bottom: 1rem;"><i class="fi fi-rr-backpack"></i></div>
                <h2 style="margin-bottom: 0.5rem;">You haven't enrolled in any courses yet!</h2>
                <p style="color: var(--text-muted, #6b7280); margin-bottom: 1.5rem;">Explore our course catalogue to pick your first club and start learning!</p>
                <a href="courses.html" class="btn btn-primary">Browse Course Catalogue <i class="fi fi-rr-arrow-right"></i></a>
            </div>
        `;
        return;
    }

    const enrolledCourses = coursesData.filter(c => enrolledIds.includes(c.id));
    const params = new URLSearchParams(window.location.search);
    const activeCourseId = params.get("id");

    if (activeCourseId && enrolledIds.includes(activeCourseId)) {
        renderLessonPlayerView(activeCourseId, enrolledCourses, container);
    } else {
        renderCoursesDashboardView(enrolledCourses, state, container);
    }
});

function removeCourse(courseId, courseTitle) {
    const firstConfirm = confirm(`Are you sure you want to remove "${courseTitle}" from your courses?`);
    if (!firstConfirm) return;

    const secondConfirm = confirm(`Double check: Really remove "${courseTitle}"? Your progress will remain saved.`);
    if (!secondConfirm) return;

    const currentState = typeof getState === 'function' ? getState() : { enrolled: [] };
    currentState.enrolled = (currentState.enrolled || []).filter(id => id !== courseId);

    if (typeof saveState === 'function') {
        saveState(currentState);
    }

    if (typeof showToast === 'function') {
        showToast(`Removed "${courseTitle}" from your courses.`, 'info');
    }

    window.location.reload();
}

function renderCoursesDashboardView(enrolledCourses, state, container) {
    const completedCourses = enrolledCourses.filter(course => {
        const completed = state.completedLessons[course.id] || [];
        const allLessons = course.syllabus ? course.syllabus.flatMap(m => m.lessons) : [];
        return allLessons.length > 0 && completed.length === allLessons.length;
    });

    const session = typeof starbudGetSession === 'function' ? starbudGetSession() : null;
    const userName = session && session.name ? session.name : (state.userName || "StarBud Scholar");

    container.innerHTML = `
        <div style="margin-bottom: 2rem; display: flex; justify-content: space-between; align-items: flex-end; flex-wrap: wrap; gap: 1rem;">
            <div>
                <span class="eyebrow">Learning Hub</span>
                <h1 style="font-size: 2.2rem; margin-top: 0.2rem;">My Enrolled Courses</h1>
                <p style="color: var(--text-muted);">Select a course below to jump into your lesson path.</p>
            </div>
            
            <div style="background: #fff; border: 2px solid var(--line, #e5e7eb); padding: 0.6rem 1.2rem; border-radius: 12px; display: flex; align-items: center; gap: 0.8rem;">
                <span style="font-size: 1.3rem; color: #f59e0b;"><i class="fi fi-rr-medal"></i></span>
                <div>
                    <div style="font-size: 0.75rem; text-transform: uppercase; font-weight: 800; color: var(--text-muted);">Certificates Earned</div>
                    <div style="font-weight: 800; color: var(--purple-deep); font-size: 1.1rem;">${completedCourses.length} / ${enrolledCourses.length}</div>
                </div>
            </div>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 1.5rem; margin-bottom: 3rem;">
            ${enrolledCourses.map(course => {
                const completed = state.completedLessons[course.id] || [];
                const allLessons = course.syllabus ? course.syllabus.flatMap(m => m.lessons) : [];
                const percent = allLessons.length > 0 ? Math.round((completed.length / allLessons.length) * 100) : 0;
                const iconBg = course.bgColor ? course.bgColor : '#f3f4f6';

                return `
                    <div style="background: #ffffff; border: 3px solid var(--line, #e5e7eb); border-radius: 16px; padding: 1.5rem; display: flex; flex-direction: column; justify-content: space-between; position: relative; overflow: hidden; box-shadow: 0 4px 12px rgba(0,0,0,0.03);">
                        <div style="height: 6px; background: ${course.color}; position: absolute; top: 0; left: 0; right: 0;"></div>
                        
                        <div>
                            <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 1rem; margin-top: 0.5rem;">
                                <div style="width: 44px; height: 44px; border-radius: 12px; background: ${iconBg}; color:${course.color}; display: flex; align-items: center; justify-content: center; font-size: 1.3rem;">
                                    <i class="fi ${course.icon}"></i>
                                </div>
                                <div style="display: flex; align-items: center; gap: 0.5rem;">
                                    <span class="badge badge-purple">${course.categoryName}</span>
                                    <button onclick="removeCourse('${course.id}', '${course.title.replace(/'/g, "\\'")}')" style="background: transparent; border: none; color: #9ca3af; cursor: pointer; font-size: 0.75rem; padding: 2px 4px; border-radius: 4px; line-height: 1;" title="Remove Course">
                                        <i class="fi fi-rr-cross-small"></i>
                                    </button>
                                </div>
                            </div>

                            <h3 style="margin-bottom: 0.5rem; font-size: 1.2rem;">${course.title}</h3>
                            <p style="color: var(--text-muted); font-size: 0.88rem; margin-bottom: 1.5rem; line-height: 1.4;">${course.description}</p>
                        </div>

                        <div>
                            <div style="margin-bottom: 1rem;">
                                <div style="display: flex; justify-content: space-between; font-weight: 700; font-size: 0.85rem; margin-bottom: 0.3rem;">
                                    <span>Progress</span>
                                    <span style="color: var(--purple-deep);">${percent}%</span>
                                </div>
                                <div style="width: 100%; height: 10px; background: #e5e7eb; border-radius: 999px; overflow: hidden;">
                                    <div style="width: ${percent}\%; height: 100\%; background:${course.color}; transition: width 0.3s ease;"></div>
                                </div>
                            </div>

                            <a href="classroom.html?id=${course.id}" class="btn btn-primary btn-full" style="justify-content: center;">
                                ${percent === 100 ? 'Review Trail <i class="fi fi-rr-graduation-cap"></i>' : percent > 0 ? 'Continue Trail <i class="fi fi-rr-arrow-right"></i>' : 'Start Trail <i class="fi fi-rr-arrow-right"></i>'}
                            </a>
                        </div>
                    </div>
                `;
            }).join('')}
        </div>

        <div style="background: #fff; border: 3px solid var(--line, #e5e7eb); border-radius: 20px; padding: 2rem; box-shadow: 0 4px 12px rgba(0,0,0,0.02);">
            <div style="display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1.25rem;">
                <div style="font-size: 1.8rem; color: var(--purple-deep);"><i class="fi fi-rr-graduation-cap"></i></div>
                <div>
                    <h2 style="font-size: 1.4rem; margin: 0;">My Graduation Certificates</h2>
                    <p style="color: var(--text-muted); font-size: 0.88rem; margin: 0;">Complete 100% of a course trail to unlock your official StarBud certificate!</p>
                </div>
            </div>

            ${completedCourses.length === 0 ? `
                <div style="text-align: center; padding: 2rem; background: #f9fafb; border: 2px dashed #e5e7eb; border-radius: 12px; color: var(--text-muted);">
                    <p style="margin: 0; font-weight: 600;">No certificates unlocked yet. Keep following your course trails!</p>
                </div>
            ` : `
                <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 1rem;">
                    ${completedCourses.map(c => `
                        <div style="border: 2px solid #facc15; background: #fffbeb; border-radius: 12px; padding: 1.25rem; text-align: center;">
                            <div style="font-size: 2.2rem; color: #d97706; margin-bottom: 0.5rem;"><i class="fi fi-rr-trophy"></i></div>
                            <h4 style="margin: 0 0 0.25rem 0;">${c.title}</h4>
                            <p style="font-size: 0.75rem; color: #b45309; margin-bottom: 1rem;">StarBud Certified Graduate</p>
                            <button onclick="viewCertificate('${c.title.replace(/'/g, "\\'")}', '${userName.replace(/'/g, "\\'")}')" class="btn btn-mint btn-sm" style="width: 100%; justify-content: center; gap: 0.5rem;">
                                <i class="fi fi-rr-document-signed"></i> View & Download PDF
                            </button>
                        </div>
                    `).join('')}
                </div>
            `}
        </div>
    `;

    window.viewCertificate = (courseTitle, studentName) => {
        const certWindow = window.open('', '_blank', 'width=920,height=700');
        const currentDate = new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });

        let instructorName = "Alex Rivera";
        if (typeof coursesData !== 'undefined' && Array.isArray(coursesData)) {
            const foundCourse = coursesData.find(c => c.title === courseTitle);
            if (foundCourse && foundCourse.instructor) {
                instructorName = typeof foundCourse.instructor === 'object' ? foundCourse.instructor.name : foundCourse.instructor;
            }
        }

        certWindow.document.write(`
            <!DOCTYPE html>
            <html>
            <head>
                <title>StarBud Certificate - ${courseTitle}</title>
                <link rel="stylesheet" href="https://cdn-uicons.flaticon.com/uicons-regular-rounded/css/uicons-regular-rounded.css">
                <style>
                    body {
                        font-family: system-ui, -apple-system, sans-serif;
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        min-height: 100vh;
                        background: #f8fafc;
                        margin: 0;
                        padding: 20px;
                        box-sizing: border-box;
                    }
                    .no-print { margin-bottom: 20px; }
                    .cert-card {
                        width: 820px;
                        padding: 45px 40px 35px;
                        background: #ffffff;
                        border: 10px solid #6c5ce7;
                        border-radius: 16px;
                        text-align: center;
                        box-shadow: 0 20px 40px rgba(0,0,0,0.12);
                        position: relative;
                        box-sizing: border-box;
                    }
                    .cert-border-inner {
                        position: absolute;
                        top: 12px;
                        left: 12px;
                        right: 12px;
                        bottom: 12px;
                        border: 2px dashed #f1c40f;
                        border-radius: 8px;
                        pointer-events: none;
                    }
                    .cert-header {
                        display: flex;
                        align-items: center;
                        justify-content: center;
                        gap: 8px;
                        color: #6c5ce7;
                        font-size: 0.95rem;
                        font-weight: 800;
                        letter-spacing: 2px;
                        text-transform: uppercase;
                        margin-bottom: 0.5rem;
                    }
                    .cert-title {
                        font-size: 2.2rem;
                        font-weight: 800;
                        color: #0f172a;
                        margin: 0.25rem 0;
                    }
                    .cert-sub {
                        font-size: 0.85rem;
                        font-weight: 700;
                        letter-spacing: 2px;
                        text-transform: uppercase;
                        color: #94a3b8;
                        margin-bottom: 1.5rem;
                    }
                    .student-name {
                        font-size: 2.5rem;
                        font-weight: 800;
                        color: #5f27cd;
                        margin: 0;
                        padding: 0 1rem;
                        display: inline-block;
                    }
                    .name-underline {
                        height: 3px;
                        width: 100%;
                        background: linear-gradient(90deg, transparent, #6c5ce7, #f1c40f, #6c5ce7, transparent);
                        margin-top: 6px;
                        border-radius: 2px;
                    }
                    .cert-body {
                        font-size: 1rem;
                        color: #475569;
                        max-width: 520px;
                        margin: 0.5rem auto 0.25rem;
                        line-height: 1.5;
                    }
                    .course-title {
                        font-size: 1.5rem;
                        font-weight: 800;
                        color: #0f172a;
                        margin: 0 0 2rem;
                    }
                    .footer {
                        display: flex;
                        justify-content: space-between;
                        align-items: flex-end;
                        margin-top: 1.5rem;
                        padding-top: 1rem;
                    }
                    .footer-col {
                        display: flex;
                        flex-direction: column;
                        width: 30%;
                    }
                    .footer-lbl {
                        font-size: 0.65rem;
                        font-weight: 800;
                        letter-spacing: 1px;
                        color: #94a3b8;
                        text-transform: uppercase;
                        border-top: 1.5px solid #cbd5e1;
                        padding-top: 4px;
                        margin-top: 2px;
                    }
                    .seal-wrap {
                        width: 64px;
                        height: 64px;
                        background: linear-gradient(135deg, #ffeaa7, #fdcb6e, #e1b12c);
                        border-radius: 50%;
                        display: flex;
                        flex-direction: column;
                        align-items: center;
                        justify-content: center;
                        color: #5c3d00;
                        box-shadow: 0 6px 16px rgba(225, 177, 44, 0.4);
                        margin: 0 auto;
                    }
                    @media print {
                        .no-print { display: none; }
                        body { background: white; padding: 0; }
                        .cert-card { box-shadow: none; }
                    }
                </style>
            </head>
            <body>
                <div class="no-print">
                    <button onclick="window.print()" style="padding: 12px 24px; background: #6366f1; color: white; font-weight: bold; border: none; border-radius: 8px; font-size: 1rem; cursor: pointer; box-shadow: 0 4px 10px rgba(99,102,241,0.3); display: inline-flex; align-items: center; gap: 8px;">
                        <i class="fi fi-rr-download"></i> Download as PDF / Print Certificate
                    </button>
                </div>
                <div class="cert-card">
                    <div class="cert-border-inner"></div>

                    <div class="cert-header">
                        <span style="color: #f1c40f; font-size: 1.4rem;">★</span>
                        <span>STARBUD ACADEMY</span>
                        <span style="color: #f1c40f; font-size: 1.4rem;">★</span>
                    </div>

                    <h1 class="cert-title">Certificate of Achievement</h1>
                    <p class="cert-sub">THIS IS PROUDLY AWARDED TO</p>
                    
                    <div style="display: inline-block; margin-bottom: 1rem;">
                        <h2 class="student-name">${studentName || 'StarBud Scholar'}</h2>
                        <div class="name-underline"></div>
                    </div>

                    <p class="cert-body">for successfully completing all challenges and mastering</p>
                    <h3 class="course-title">"${courseTitle}"</h3>

                    <div class="footer">
                        <div class="footer-col" style="text-align: left;">
                            <span style="font-size: 0.95rem; font-weight: 700; color: #1e293b;">${currentDate}</span>
                            <span class="footer-lbl">ISSUED ON</span>
                        </div>

                        <div style="width: 30%;">
                            <div class="seal-wrap">
                                <span style="font-size: 1.2rem;">🏆</span>
                                <span style="font-size: 0.5rem; font-weight: 900;">VERIFIED</span>
                            </div>
                        </div>

                        <div class="footer-col" style="text-align: right;">
                            <span style="font-family: 'Georgia', serif; font-style: italic; font-size: 1.3rem; font-weight: 700; color: #341f97;">${instructorName}</span>
                            <span class="footer-lbl">OFFICIAL INSTRUCTOR SIGNATURE</span>
                        </div>
                    </div>
                </div>
            </body>
            </html>
        `);
    };
}

function renderLessonPlayerView(courseId, enrolledCourses, container) {
    const course = enrolledCourses.find(c => c.id === courseId);
    const allLessons = course.syllabus ? course.syllabus.flatMap(m => m.lessons) : [];

    const initialState = getState();
    const initialCompleted = initialState.completedLessons[course.id] || [];
    let selectedLessonIdx = initialCompleted.length < allLessons.length ? initialCompleted.length : 0;

    container.innerHTML = `
        <div style="margin-bottom: 1.5rem;">
            <a href="classroom.html" style="display: inline-flex; align-items: center; gap: 0.5rem; text-decoration: none; font-weight: 700; color: var(--purple-deep); margin-bottom: 1rem;">
                <i class="fi fi-rr-arrow-left"></i> Back to My Courses
            </a>
            <div style="display: flex; align-items: center; justify-content: space-between; flex-wrap: wrap; gap: 1rem;">
                <div>
                    <h1 id="classTitle" style="font-size: 1.8rem; margin: 0;">${course.title}</h1>
                </div>
            </div>
        </div>

        <div style="display: grid; grid-template-columns: 340px 1fr; gap: 1.5rem; align-items: start;">
            <div style="background: #fff; border: 3px solid var(--line, #e5e7eb); border-radius: 16px; padding: 1.25rem; overflow: hidden;">
                <div style="margin-bottom: 1.5rem;">
                    <div style="display: flex; justify-content: space-between; font-weight: 800; font-size: 0.85rem; margin-bottom: 0.4rem;">
                        <span>Course Progress</span>
                        <span id="progressPercentText">0%</span>
                    </div>
                    <div style="width: 100%; height: 8px; background: #e5e7eb; border-radius: 999px; overflow: hidden;">
                        <div id="progressBarFill" style="width: 0%; height: 100%; background: ${course.color}; transition: width 0.3s ease;"></div>
                    </div>
                </div>

                <div style="position: relative; padding: 1rem 0;">
                    <div style="position: absolute; top: 2rem; bottom: 2rem; left: 24px; width: 6px; background: #e5e7eb; border-radius: 999px; z-index: 1;"></div>
                    <div id="pathLineFill" style="position: absolute; top: 2rem; width: 6px; background: ${course.color}; border-radius: 999px; z-index: 2; transition: height 0.3s ease; height: 0px; left: 24px;"></div>

                    <div id="candyPath" style="position: relative; z-index: 3; display: flex; flex-direction: column; gap: 1rem;"></div>
                </div>
            </div>

            <div>
                <div style="background: #0f172a; border-radius: 16px; padding: 2.5rem 1.5rem; color: #fff; text-align: center; min-height: 320px; display: flex; flex-direction: column; align-items: center; justify-content: center; margin-bottom: 1rem; position: relative; overflow: hidden;">
                    <div style="font-size: 2.5rem; color: var(--pink, #FF6B9B); margin-bottom: 0.75rem;"><i class="fi fi-rr-play-circle"></i></div>
                    <h2 id="activeLessonTitle" style="font-size: 1.5rem; margin-bottom: 0.5rem; color: #ffffff;">Lesson Title</h2>
                    <p style="color: #94a3b8; font-size: 0.9rem; margin: 0;">Interactive StarBud Learning Shell</p>
                </div>

                <div style="display: flex; justify-content: flex-end;">
                    <button id="toggleCompleteBtn" class="btn btn-mint">Mark Lesson Complete (+50 XP)</button>
                </div>
            </div>
        </div>
    `;

    function updateLessonUI() {
        const currentState = getState();
        const completed = currentState.completedLessons[course.id] || [];
        const percent = allLessons.length > 0 ? Math.round((completed.length / allLessons.length) * 100) : 0;

        document.getElementById("progressBarFill").style.width = `${percent}%`;
        document.getElementById("progressPercentText").textContent = `${percent}% Completed`;
        document.getElementById("activeLessonTitle").textContent = allLessons[selectedLessonIdx] || "Lesson";

        const isCurrentDone = completed.includes(selectedLessonIdx);
        const completeBtn = document.getElementById("toggleCompleteBtn");
        completeBtn.textContent = isCurrentDone ? "Completed! (Click to Undo)" : "Mark Lesson Complete (+50 XP)";
        completeBtn.className = isCurrentDone ? "btn btn-ghost" : "btn btn-mint";

        const xpDisplay = document.getElementById("userXpDisplay");
        if (xpDisplay) {
            xpDisplay.textContent = currentState.xp || 0;
        }

        const pathEl = document.getElementById("candyPath");
        pathEl.innerHTML = allLessons.map((les, idx) => {
            const isDone = completed.includes(idx);
            const isUnlocked = idx === 0 || completed.includes(idx - 1) || isDone;
            const isSelected = idx === selectedLessonIdx;
            const offsetLeft = (idx % 2 === 0) ? '0px' : '16px';

            return `
                <div onclick="selectLesson(${idx}, ${isUnlocked})" style="display: flex; align-items: center; gap: 0.85rem; cursor: ${isUnlocked ? 'pointer' : 'not-allowed'}; transform: translateX(${offsetLeft}); transition: all 0.2s ease; opacity: ${isUnlocked ? '1' : '0.55'};">
                    <div style="position: relative; width: 42px; height: 42px; border-radius: 50%; background: ${isDone ? '#10b981' : isSelected ? course.color : isUnlocked ? '#ffffff' : '#f1f5f9'}; border: 3px solid ${isDone ? '#10b981' : isSelected ? course.color : isUnlocked ? '#cbd5e1' : '#cbd5e1'}; display: flex; align-items: center; justify-content: center; color: ${isDone || isSelected ? '#fff' : '#64748b'}; font-weight: 800; font-size: 0.9rem; box-shadow: ${isSelected ? '0 0 0 4px rgba(99, 102, 241, 0.25)' : 'none'};">
                        ${isDone ? '<i class="fi fi-rr-check"></i>' : isUnlocked ? (idx + 1) : '<i class="fi fi-rr-lock"></i>'}
                        
                        ${isSelected ? `
                            <div style="position: absolute; top: -14px; right: -10px; background: #facc15; border: 2px solid #000; border-radius: 50%; width: 24px; height: 24px; display: flex; align-items: center; justify-content: center; font-size: 0.85rem; color: #000; animation: bounce 1s infinite alternate;">
                                <i class="fi fi-rr-star"></i>
                            </div>
                        ` : ''}
                    </div>

                    <div style="flex: 1; background: ${isSelected ? '#f3e8ff' : isUnlocked ? '#f8fafc' : '#f1f5f9'}; border: 2px solid ${isSelected ? course.color : '#e2e8f0'}; padding: 0.6rem 0.85rem; border-radius: 12px; font-weight: ${isSelected ? '700' : '500'}; font-size: 0.88rem; color: ${isSelected ? 'var(--purple-deep)' : isUnlocked ? '#334155' : '#94a3b8'}; transition: all 0.2s ease; display: flex; justify-content: space-between; align-items: center;">
                        <span>${les}</span>
                        ${!isUnlocked ? '<span style="font-size:0.75rem; color:#94a3b8;"><i class="fi fi-rr-lock"></i></span>' : ''}
                    </div>
                </div>
            `;
        }).join('');

        const pathLineFill = document.getElementById("pathLineFill");
        if (pathLineFill) {
            const stepRatio = (selectedLessonIdx) / Math.max(allLessons.length - 1, 1);
            pathLineFill.style.height = `${stepRatio * 80}%`;
        }
    }

    window.selectLesson = (idx, isUnlocked) => {
        if (!isUnlocked) {
            if (typeof showToast === 'function') {
                showToast("Complete the previous lesson first to unlock this step!", "error");
            } else {
                alert("Complete the previous lesson first to unlock this step!");
            }
            return;
        }
        selectedLessonIdx = idx;
        updateLessonUI();
    };

    const toggleBtn = document.getElementById("toggleCompleteBtn");
    toggleBtn.addEventListener("click", () => {
        const state = getState();
        if (!state.completedLessons[course.id]) {
            state.completedLessons[course.id] = [];
        }

        const completedArr = state.completedLessons[course.id];
        const existingIdx = completedArr.indexOf(selectedLessonIdx);
        let isNowComplete = false;

        if (existingIdx > -1) {
            completedArr.splice(existingIdx, 1);
            state.xp = Math.max(0, (state.xp || 0) - 50);
            isNowComplete = false;
        } else {
            completedArr.push(selectedLessonIdx);
            state.xp = (state.xp || 0) + 50;
            isNowComplete = true;
        }

        if (typeof saveState === 'function') {
            saveState(state);
        }

        if (isNowComplete) {
            if (typeof confetti === 'function') {
                confetti({ particleCount: 80, spread: 70, origin: { y: 0.6 } });
            }

            if (typeof showToast === 'function') {
                showToast("Awesome work! +50 XP earned!", "success");
            }

            if (selectedLessonIdx + 1 < allLessons.length) {
                selectedLessonIdx++;
            }

            const updatedCompleted = state.completedLessons[course.id] || [];
            if (updatedCompleted.length === allLessons.length) {
                setTimeout(() => {
                    if (typeof confetti === 'function') {
                        confetti({ particleCount: 180, spread: 100, origin: { y: 0.4 } });
                    }
                    if (typeof showToast === 'function') {
                        showToast(`COURSE MASTERED! You completed ${course.title}!`, "success");
                    }
                }, 400);
            }
        } else {
            if (typeof showToast === 'function') {
                showToast("Lesson marked incomplete (-50 XP)", "info");
            }
        }

        updateLessonUI();
    });

    updateLessonUI();
}