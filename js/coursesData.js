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
        difficulty: "Beginner",
        description: "Build your first interactive games and learn basic block programming logic.",
        icon: "fi-rr-code-simple",
        color: "var(--pink-deep)",
        bgColor: "#FFE1EC",
        duration: "4 Weeks",
        lessons: 8,
        instructor: {
            name: "Mitch Resnick",
            title: "LEGO Papert Professor of Learning Research",
            bio: "Creator of Scratch at the MIT Media Lab, passionate about visual programming and playful learning.",
            avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&auto=format&fit=crop&q=80",
            rating: "4.9 ★",
            coursesCount: 14
        },
        syllabus: [
            { week: "Week 1", title: "Sprites, Stages & Motion", lessons: ["Understanding Stage Coordinates", "Animating Costumes & Controls"] },
            { week: "Week 2", title: "Logic, Scores & Sound Effects", lessons: ["If/Then Conditions & Score Counters", "Adding Retro Sound Effects"] },
            { week: "Week 3", title: "Obstacles & Power-Ups", lessons: ["Spawning Random Enemy Sprites", "Creating Collectible Stars & Health Bars"] },
            { week: "Week 4", title: "Final Boss & Game Launch", lessons: ["Designing Level Boss Logic", "Publishing to StarBud Arcade"] }
        ],
        prerequisites: [
            "Any laptop, desktop, or Chromebook with an internet browser.",
            "Free Scratch account (signup instructions included in Lesson 1).",
            "No prior coding experience needed — perfect for beginners!"
        ]
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
        lessons: 6,
        instructor: {
            name: "Mary Blair",
            title: "Principal Digital Illustrator & Concept Artist",
            bio: "Renowned illustration expert specializing in vibrant color palettes and expressive character design.",
            avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=300&auto=format&fit=crop&q=80",
            rating: "4.8 ★",
            coursesCount: 9
        },
        syllabus: [
            { week: "Week 1", title: "Pixel Canvas & Color Palettes", lessons: ["Mastering Grid Tools", "Shading with Pixel Clusters"] },
            { week: "Week 2", title: "Character Design & Expressions", lessons: ["Drawing Expressive Faces", "Creating 8-Bit Walk Cycles"] },
            { week: "Week 3", title: "Environments & Exporting Art", lessons: ["Designing Isometric Landscapes", "Exporting Assets for Games"] }
        ],
        prerequisites: [
            "Tablet or computer with mouse / stylus.",
            "Free web browser graphics tool (e.g., Aseprite or Piskel).",
            "Enthusiasm for art and storytelling!"
        ]
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
        lessons: 10,
        instructor: {
            name: "Quincy Jones",
            title: "Grammy-Award Winning Producer & Composer",
            bio: "Legendary music composer introducing young minds to loop layering, rhythm theory, and digital workstations.",
            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&auto=format&fit=crop&q=80",
            rating: "5.0 ★",
            coursesCount: 18
        },
        syllabus: [
            { week: "Week 1", title: "Rhythm Basics & BPM", lessons: ["Understanding Measures & Time Signatures", "Building Your First Drum Loop"] },
            { week: "Week 2", title: "Basslines & Melodies", lessons: ["Synthesizer Basics", "Creating Catchy Hook Lines"] },
            { week: "Week 3", title: "Arrangement & Remixing", lessons: ["Structuring Verses & Drops", "Mixing & Volume Balancing"] }
        ],
        prerequisites: [
            "Headphones or computer speakers.",
            "Free Soundtrap or BandLab account.",
            "No prior musical instrument training needed."
        ]
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
        lessons: 8,
        instructor: {
            name: "Terrence Tao",
            title: "Fields Medalist & Youth Logic Educator",
            bio: "World-class mathematician transforming abstract logic puzzles into engaging visual riddles.",
            avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&auto=format&fit=crop&q=80",
            rating: "4.9 ★",
            coursesCount: 11
        },
        syllabus: [
            { week: "Week 1", title: "Pattern Spotting & Sequences", lessons: ["Number Ladders", "Geometric Tessellations"] },
            { week: "Week 2", title: "Grid Logic & Venn Diagrams", lessons: ["Solving Mystery Matrices", "Overlap Puzzle Challenges"] }
        ],
        prerequisites: [
            "Pencil, paper, and basic arithmetic understanding."
        ]
    },
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
        lessons: 12,
        instructor: {
            name: "Lea Verou",
            title: "W3C CSS Expert & Web Pioneer",
            bio: "Author and Web Standards advocate teaching modern responsive layout techniques and interactive DOM scripting.",
            avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&auto=format&fit=crop&q=80",
            rating: "4.9 ★",
            coursesCount: 15
        },
        syllabus: [
            { week: "Week 1-2", title: "HTML Structure & CSS Styling", lessons: ["Semantic Tags & Typography", "Flexbox & Color Systems"] },
            { week: "Week 3-4", title: "JavaScript Fundamentals", lessons: ["Variables & Functions", "DOM Event Listeners"] }
        ],
        prerequisites: ["Completion of Scratch or basic block coding recommended."]
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
        lessons: 10,
        instructor: {
            name: "Don Norman",
            title: "Cognitive Scientist & UX Author",
            bio: "Pioneer in user-centered design, guiding students to craft intuitive interfaces and delight users.",
            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&auto=format&fit=crop&q=80",
            rating: "4.9 ★",
            coursesCount: 8
        },
        syllabus: [
            { week: "Week 1", title: "User Journeys & Wireframing", lessons: ["Mapping User Flows", "Paper Sketching"] },
            { week: "Week 2", title: "Figma App Prototyping", lessons: ["UI Components & Buttons", "Clickable Prototypes"] }
        ],
        prerequisites: ["Computer mouse and browser access."]
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
        lessons: 12,
        instructor: {
            name: "Imogen Heap",
            title: "Grammy-Winning Electronic Musician",
            bio: "Innovator in gesture music controls and audio synthesis.",
            avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&auto=format&fit=crop&q=80",
            rating: "4.9 ★",
            coursesCount: 7
        },
        syllabus: [
            { week: "Week 1", title: "Multi-Track Synthesis", lessons: ["Layering Beats", "EQ & Reverb Filters"] }
        ],
        prerequisites: ["Headphones required."]
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
        lessons: 10,
        instructor: {
            name: "Martin Gardner",
            title: "Recreational Mathematics Scholar",
            bio: "Legendary math communicator known for classic riddles and mathematical games.",
            avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&auto=format&fit=crop&q=80",
            rating: "4.8 ★",
            coursesCount: 10
        },
        syllabus: [
            { week: "Week 1", title: "Combinatorics & Games", lessons: ["Probability Paradoxes", "Strategy Games"] }
        ],
        prerequisites: ["Basic multiplication & division skills."]
    },
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
        lessons: 16,
        instructor: {
            name: "Shigeru Miyamoto",
            title: "Game Designer & Industry Pioneer",
            bio: "Legendary creator of world-famous interactive platformers and gaming mechanics.",
            avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&auto=format&fit=crop&q=80",
            rating: "5.0 ★",
            coursesCount: 20
        },
        syllabus: [
            { week: "Week 1-2", title: "Velocity & Collision", lessons: ["Gravity Loops", "Hitbox Physics"] }
        ],
        prerequisites: ["Intermediate JavaScript or Python knowledge."]
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
        lessons: 14,
        instructor: {
            name: "John Lasseter",
            title: "3D Animation Director",
            bio: "Pioneer in computer animation and character rigging.",
            avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=300&auto=format&fit=crop&q=80",
            rating: "4.9 ★",
            coursesCount: 12
        },
        syllabus: [
            { week: "Week 1", title: "Mesh Sculpting", lessons: ["Polygons & Transforms", "Lighting & Textures"] }
        ],
        prerequisites: ["Desktop PC/Mac with dedicated graphics recommended."]
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
        lessons: 15,
        instructor: {
            name: "Max Martin",
            title: "Master Songwriter & Producer",
            bio: "Top charts record producer revealing vocal melody structures and pop harmony secrets.",
            avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=300&auto=format&fit=crop&q=80",
            rating: "4.9 ★",
            coursesCount: 16
        },
        syllabus: [
            { week: "Week 1", title: "Synth Synthesis", lessons: ["Oscillators & Oscilloscopes", "Chorus & Delay Effects"] }
        ],
        prerequisites: ["Completion of Music 201 or equivalent DAW experience."]
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
        lessons: 12,
        instructor: {
            name: "Alan Turing",
            title: "Father of Computer Science & Cryptanalysis",
            bio: "Historical computation visionary teaching foundational cipher algorithms and machine logic.",
            avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=300&auto=format&fit=crop&q=80",
            rating: "5.0 ★",
            coursesCount: 10
        },
        syllabus: [
            { week: "Week 1", title: "Substitution Ciphers", lessons: ["Caesar Wheel", "Vigenère Square Matrix"] }
        ],
        prerequisites: ["Keen interest in logic and puzzle solving."]
    },
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
        lessons: 12,
        instructor: {
            name: "Guido van Rossum",
            title: "Creator of Python",
            bio: "Passionate advocate for beginner-friendly coding syntax and open source software development.",
            avatar: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?w=300&auto=format&fit=crop&q=80",
            rating: "4.9 ★",
            coursesCount: 11
        },
        syllabus: [
            { week: "Week 1", title: "Python Variables & Print", lessons: ["Strings & Integers", "Text Input Prompts"] }
        ],
        prerequisites: ["Basic typing skills."]
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
        lessons: 8,
        instructor: {
            name: "Stan Lee",
            title: "Comic Book Creator & Storyteller",
            bio: "Comic legend guiding creators through hero origin arcs, speech bubble layout, and action posing.",
            avatar: "https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?w=300&auto=format&fit=crop&q=80",
            rating: "5.0 ★",
            coursesCount: 14
        },
        syllabus: [
            { week: "Week 1", title: "Panel Composition", lessons: ["Grid Layouts", "Inking & Lettering"] }
        ],
        prerequisites: ["Sketchbook, pencils, or digital drawing app."]
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
        lessons: 8,
        instructor: {
            name: "Ira Glass",
            title: "Radio Producer & Podcast Host",
            bio: "Audio storytelling master teaching mic setup, vocal tone techniques, and episode editing.",
            avatar: "https://images.unsplash.com/photo-1521119989659-a83eee488004?w=300&auto=format&fit=crop&q=80",
            rating: "4.8 ★",
            coursesCount: 6
        },
        syllabus: [
            { week: "Week 1", title: "Vocal Recording", lessons: ["Mic Techniques", "Noise Cancellation"] }
        ],
        prerequisites: ["Computer or smartphone with microphone."]
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
        lessons: 10,
        instructor: {
            name: "Katherine Johnson",
            title: "NASA Orbital Mechanic & Mathematician",
            bio: "Pioneering NASA mathematician who calculated orbital mechanics for human spaceflight missions.",
            avatar: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=300&auto=format&fit=crop&q=80",
            rating: "5.0 ★",
            coursesCount: 9
        },
        syllabus: [
            { week: "Week 1", title: "Planetary Ratios", lessons: ["Scale Models", "Orbital Velocity"] }
        ],
        prerequisites: ["Basic algebra & calculator."]
    }
];