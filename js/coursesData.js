/*
Janke Rall u24571238
Livia Webber u24607852
Joanna Reardon u24597652
*/

const coursesData = [
    // --- MIXED INITIAL HIGHLIGHTS ---
    {
        id: "code-101",
        title: "Scratch & Coding Fundamentals",
        category: "code",
        categoryName: "Coding",
        difficulty: "Beginner",
        description: "Build your first interactive games and learn basic block programming logic.",
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
        difficulty: "Beginner",
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
        difficulty: "Beginner",
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
        difficulty: "Beginner",
        description: "Solve riddles, explore geometric art, and unlock logical thinking.",
        icon: "fi-rr-calculator",
        color: "var(--yellow-deep)",
        bgColor: "#FFF8E1",
        duration: "4 Weeks",
        lessons: 8
    },

    // --- INTERMEDIATE MIX ---
    {
        id: "code-201",
        title: "Web Development Starter",
        category: "code",
        categoryName: "Coding",
        difficulty: "Intermediate",
        description: "Master HTML, CSS, and interactive JavaScript to build colorful websites.",
        icon: "fi-rr-browser",
        color: "var(--pink-deep)",
        bgColor: "#FFE1EC",
        duration: "6 Weeks",
        lessons: 12
    },
    {
        id: "art-201",
        title: "UX/UI Design for Beginners",
        category: "art",
        categoryName: "Art & Design",
        difficulty: "Intermediate",
        description: "Learn how to design fun, user-friendly mobile app wireframes and layouts.",
        icon: "fi-rr-layout-fluid",
        color: "var(--purple-deep)",
        bgColor: "#F3EEFF",
        duration: "5 Weeks",
        lessons: 10
    },
    {
        id: "music-201",
        title: "Beatmaking & Digital Soundscapes",
        category: "music",
        categoryName: "Music",
        difficulty: "Intermediate",
        description: "Compose multi-track synth loops, sound effects, and audio mixing techniques.",
        icon: "fi-rr-headphones",
        color: "var(--blue-deep)",
        bgColor: "#E3F2FD",
        duration: "6 Weeks",
        lessons: 12
    },
    {
        id: "math-201",
        title: "Math Puzzles & Brain Teasers",
        category: "math",
        categoryName: "Maths & Logic",
        difficulty: "Intermediate",
        description: "Sharpen problem-solving skills through pattern analysis and interactive logic challenges.",
        icon: "fi-rr-puzzle-alt",
        color: "var(--yellow-deep)",
        bgColor: "#FFF8E1",
        duration: "5 Weeks",
        lessons: 10
    },

    // --- ADVANCED MIX ---
    {
        id: "code-301",
        title: "Game Design & Physics Logic",
        category: "code",
        categoryName: "Coding",
        difficulty: "Advanced",
        description: "Design 2D platformers, script character movements, and handle game physics.",
        icon: "fi-rr-gamepad",
        color: "var(--pink-deep)",
        bgColor: "#FFE1EC",
        duration: "8 Weeks",
        lessons: 16
    },
    {
        id: "art-301",
        title: "3D Modeling & Animation Lab",
        category: "art",
        categoryName: "Art & Design",
        difficulty: "Advanced",
        description: "Bring 3D objects to life, sculpt cool assets, and animate digital characters.",
        icon: "fi-rr-cube",
        color: "var(--purple-deep)",
        bgColor: "#F3EEFF",
        duration: "7 Weeks",
        lessons: 14
    },
    {
        id: "music-301",
        title: "Songwriting & Synth Production",
        category: "music",
        categoryName: "Music",
        difficulty: "Advanced",
        description: "Produce full tracks with melody structures, electronic synths, and vocal FX.",
        icon: "fi-rr-volume",
        color: "var(--blue-deep)",
        bgColor: "#E3F2FD",
        duration: "8 Weeks",
        lessons: 15
    },
    {
        id: "math-301",
        title: "Codes, Cryptography & Secret Math",
        category: "math",
        categoryName: "Maths & Logic",
        difficulty: "Advanced",
        description: "Decode secret ciphers, master binary math, and explore encryption mysteries.",
        icon: "fi-rr-key",
        color: "var(--yellow-deep)",
        bgColor: "#FFF8E1",
        duration: "6 Weeks",
        lessons: 12
    },

    // --- EXTRA EXPLORATION ---
    {
        id: "code-102",
        title: "Python for Young Creators",
        category: "code",
        categoryName: "Coding",
        difficulty: "Intermediate",
        description: "Write your first real text-based code with Python and create fun text games.",
        icon: "fi-rr-terminal",
        color: "var(--pink-deep)",
        bgColor: "#FFE1EC",
        duration: "6 Weeks",
        lessons: 12
    },
    {
        id: "art-102",
        title: "Comic Strips & Character Design",
        category: "art",
        categoryName: "Art & Design",
        difficulty: "Beginner",
        description: "Draw expressive characters, write comic panels, and tell epic visual stories.",
        icon: "fi-rr-brush",
        color: "var(--purple-deep)",
        bgColor: "#F3EEFF",
        duration: "4 Weeks",
        lessons: 8
    },
    {
        id: "music-102",
        title: "Podcast & Voice Acting Studio",
        category: "music",
        categoryName: "Music",
        difficulty: "Beginner",
        description: "Record voice tracks, apply sound effects, and edit your very own radio show.",
        icon: "fi-rr-microphone",
        color: "var(--blue-deep)",
        bgColor: "#E3F2FD",
        duration: "4 Weeks",
        lessons: 8
    },
    {
        id: "math-102",
        title: "Space Maths & Rocket Trajectories",
        category: "math",
        categoryName: "Maths & Logic",
        difficulty: "Intermediate",
        description: "Calculate rocket launches, explore planetary scales, and map out outer space.",
        icon: "fi-rr-rocket-lunch",
        color: "var(--yellow-deep)",
        bgColor: "#FFF8E1",
        duration: "5 Weeks",
        lessons: 10
    }
];