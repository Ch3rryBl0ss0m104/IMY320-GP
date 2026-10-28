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
        weeklyCommitment: "2 hours / week • 4 Weeks total",
        lessons: 8,
        instructor: {
            name: "Mitch Resnick",
            title: "LEGO Papert Professor of Learning Research",
            bio: "Creator of Scratch at the MIT Media Lab, passionate about visual programming and playful learning.",
            avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
            rating: "4.9 ★",
            achievements: [
                "Created Scratch used by over 100 million kids worldwide",
                "Director of the Lifelong Kindergarten Group at MIT",
                "McGraw Prize in Education winner"
            ],
            verificationUrl: "https://www.media.mit.edu/people/mres/overview/",
            institution: "MIT Media Lab"
        },
        syllabus: [
            { week: "Week 1", title: "Sprites, Stages & Motion", lessons: ["Understanding Stage Coordinates & Grid Units", "Animating Costumes & Keyboard Motion Controls", "Setting Stage Backgrounds & Transitions"] },
            { week: "Week 2", title: "Logic, Scores & Sound Effects", lessons: ["If/Then Conditions & Score Counter Variables", "Triggering Retro Sound Effects on Touch", "Broadcasting Messages Between Sprites"] },
            { week: "Week 3", title: "Obstacles & Power-Ups", lessons: ["Spawning Random Enemy Sprites", "Creating Collectible Stars & Health Bars", "Timer Loops & Game Over Triggers"] },
            { week: "Week 4", title: "Final Boss & Game Launch", lessons: ["Designing Level Boss Health & Patterns", "Adding Soundtracks & Start Screens", "Publishing to StarBud Arcade Gallery"] }
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
        weeklyCommitment: "1.5 hours / week • 3 Weeks total",
        lessons: 6,
        instructor: {
            name: "Chris Do",
            title: "Emmy Award-Winning Designer & Educator",
            bio: "Founder of The Futur and veteran designer specializing in brand identity, kinetic typography, and digital graphics.",
            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
            rating: "4.9 ★",
            achievements: [
                "Emmy Award winner for outstanding graphic design",
                "CEO and Founder of Blind & The Futur",
                "Mentored over 1 million creative entrepreneurs"
            ],
            verificationUrl: "https://thefutur.com",
            institution: "The Futur Academy"
        },
        syllabus: [
            { week: "Week 1", title: "Pixel Canvas & Color Palettes", lessons: ["Mastering Grid Tools & Resolution Ratios", "Shading with Pixel Clusters & Highlights", "Color Wheel & Harmony Selection"] },
            { week: "Week 2", title: "Character Design & Expressions", lessons: ["Drawing Expressive Facial Shapes", "Creating 8-Bit Walk Cycle Frame Animations", "Designing Armor & Character Props"] },
            { week: "Week 3", title: "Environments & Exporting Art", lessons: ["Designing Isometric Landscape Tiles", "Parallax Background Layers", "Exporting Assets for Web & Games"] }
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
        weeklyCommitment: "2 hours / week • 5 Weeks total",
        lessons: 10,
        instructor: {
            name: "Finneas O'Connell",
            title: "10x Grammy-Winning Producer & Composer",
            bio: "Acclaimed music producer known for crafting chart-topping hits with modern home-studio digital techniques.",
            avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=400&q=80",
            rating: "5.0 ★",
            achievements: [
                "10-time Grammy Award winner",
                "2-time Academy Award winner for Best Original Song",
                "Pioneered minimalist bedroom pop audio production"
            ],
            verificationUrl: "https://www.finneasofficial.com",
            institution: "Finneas Audio Lab"
        },
        syllabus: [
            { week: "Week 1", title: "Rhythm Basics & BPM", lessons: ["Understanding Measures & Time Signatures", "Building Your First Drum Loop Grid"] },
            { week: "Week 2", title: "Basslines & Melodies", lessons: ["Synthesizer Basics & Sound Waves", "Creating Catchy Hook Lines on MIDI Keyboard"] },
            { week: "Week 3", title: "Arrangement & Remixing", lessons: ["Structuring Verses, Bridges & Drops", "Mixing, Volume Balancing & Panning"] },
            { week: "Week 4", title: "Audio Effects & EQ", lessons: ["Applying Reverb, Delay & Filters", "Equalization to Clean Up Beat Elements"] },
            { week: "Week 5", title: "Mastering & Track Release", lessons: ["Finalizing Audio Output Levels", "Exporting WAV & MP3 Files for Club Showcase"] }
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
        weeklyCommitment: "1.5 hours / week • 4 Weeks total",
        lessons: 8,
        instructor: {
            name: "Terence Tao",
            title: "Fields Medalist & Math Educator",
            bio: "World-class mathematician transforming abstract logic puzzles into engaging visual riddles.",
            avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
            rating: "4.9 ★",
            achievements: [
                "Fields Medalist (Math's Nobel Prize equivalent)",
                "Breakthrough Prize in Mathematics winner",
                "Professor of Mathematics at UCLA"
            ],
            verificationUrl: "https://www.math.ucla.edu/~tao/",
            institution: "UCLA Mathematics Dept"
        },
        syllabus: [
            { week: "Week 1", title: "Pattern Spotting & Sequences", lessons: ["Number Ladders & Fibonacci Sequences", "Geometric Tessellations & Symmetry"] },
            { week: "Week 2", title: "Grid Logic & Venn Diagrams", lessons: ["Solving Mystery Matrices", "Overlap Puzzle Challenges & Set Theory"] },
            { week: "Week 3", title: "Spatial Reasoning & Shapes", lessons: ["3D Polygon Unfolding Nets", "Tangram Puzzle Optimization"] },
            { week: "Week 4", title: "Secret Math & Cryptic Logic", lessons: ["Binary Code Counting", "Decoding Cipher Messages"] }
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
        weeklyCommitment: "2.5 hours / week • 6 Weeks total",
        lessons: 12,
        instructor: {
            name: "Lea Verou",
            title: "W3C CSS Expert & Web Pioneer",
            bio: "Author and Web Standards advocate teaching modern responsive layout techniques and interactive DOM scripting.",
            avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
            rating: "4.9 ★",
            achievements: [
                "Invited Expert at W3C CSS Working Group",
                "Author of 'CSS Secrets' (O'Reilly Publishing)",
                "Research Scientist at MIT CSAIL"
            ],
            verificationUrl: "https://lea.verou.me",
            institution: "W3C Web Standards"
        },
        syllabus: [
            { week: "Week 1", title: "HTML Foundations", lessons: ["Semantic Page Structure & Headings", "Adding Images, Links & Buttons"] },
            { week: "Week 2", title: "CSS Styling & Colors", lessons: ["Fonts, Text Sizes & Color Palettes", "The Box Model: Padding, Margin & Borders"] },
            { week: "Week 3", title: "Flexbox & Layouts", lessons: ["Building Flexible Navbars", "Grid & Flex Alignment Controls"] },
            { week: "Week 4", title: "JavaScript Basics", lessons: ["Variables, Strings & Numbers", "Functions & Event Triggering"] },
            { week: "Week 5", title: "Interactive DOM Scripting", lessons: ["Manipulating Webpage Elements Dynamically", "Building a Light/Dark Theme Switcher"] },
            { week: "Week 6", title: "Final Website Launch", lessons: ["Making Webpages Responsive for Mobile", "Publishing Your Site Online"] }
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
        weeklyCommitment: "2 hours / week • 5 Weeks total",
        lessons: 10,
        instructor: {
            name: "Don Norman",
            title: "Cognitive Scientist & UX Author",
            bio: "Pioneer in user-centered design, guiding students to craft intuitive interfaces and delight users.",
            avatar: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80",
            rating: "4.9 ★",
            achievements: [
                "Pioneered User Experience (UX) term at Apple",
                "Author of 'The Design of Everyday Things'",
                "Professor Emeritus at UC San Diego"
            ],
            verificationUrl: "https://jnd.org",
            institution: "Design Lab San Diego"
        },
        syllabus: [
            { week: "Week 1", title: "User Research & Affordances", lessons: ["Understanding How Kids Interact with Apps", "Paper Sketching Wireframes"] },
            { week: "Week 2", title: "Figma Interface Basics", lessons: ["Frames, Shapes & Typography Systems", "Creating Reusable UI Components"] },
            { week: "Week 3", title: "Color & Accessibility", lessons: ["High Contrast Selection", "Iconography & Button Placement Rules"] },
            { week: "Week 4", title: "Interactive Prototyping", lessons: ["Connecting Screens with Click Actions", "Adding Smooth Micro-Animations"] },
            { week: "Week 5", title: "User Testing & Feedback", lessons: ["Conducting User Testing Sessions", "Iterating Final App Prototypes"] }
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
        weeklyCommitment: "2 hours / week • 6 Weeks total",
        lessons: 12,
        instructor: {
            name: "Imogen Heap",
            title: "Grammy-Winning Electronic Musician",
            bio: "Innovator in gesture music controls, synth soundscapes, and vocal layering.",
            avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=400&q=80",
            rating: "4.9 ★",
            achievements: [
                "2-time Grammy Award winner",
                "Inventor of Mi.Mu gesture music gloves",
                "Pioneer in immersive 3D audio recording"
            ],
            verificationUrl: "https://imogenheap.com",
            institution: "Creative Audio Lab"
        },
        syllabus: [
            { week: "Week 1", title: "Synthesizer Oscillators", lessons: ["Understanding Sine, Saw & Square Waves", "Filtering & LFO Modulation"] },
            { week: "Week 2", title: "Layering Drum Samples", lessons: ["Kick, Snare & Hi-Hat Compression", "Creating Polyrhythms"] },
            { week: "Week 3", title: "Vocal Sampling & FX", lessons: ["Pitch Shifting & Vocoder Layers", "Reverb Trails & Delay Loops"] },
            { week: "Week 4", title: "Bassline Synthesis", lessons: ["Sub-Bass Frequencies", "Sidechaining Bass to Kick Drums"] },
            { week: "Week 5", title: "Track Automation", lessons: ["Volume Fades & Filter Sweeps", "Dynamic Transition Riser FX"] },
            { week: "Week 6", title: "Final Track Mixdown", lessons: ["Stereo Imaging & Peak Limiting", "Exporting Complete Track Portfolio"] }
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
        weeklyCommitment: "1.5 hours / week • 5 Weeks total",
        lessons: 10,
        instructor: {
            name: "Martin Gardner",
            title: "Recreational Mathematics Scholar",
            bio: "Legendary math communicator known for classic riddles and mathematical games.",
            avatar: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=400&q=80",
            rating: "4.8 ★",
            achievements: [
                "Authored 300+ Scientific American 'Mathematical Games' columns",
                "Published 100+ recreational mathematics books",
                "Founding member of Gathering 4 Gardner"
            ],
            verificationUrl: "https://www.martin-gardner.org",
            institution: "Recreational Math Institute"
        },
        syllabus: [
            { week: "Week 1", title: "Combinatorics & Counting", lessons: ["Permutations & Combination Shortcuts", "The Pigeonhole Principle"] },
            { week: "Week 2", title: "Probability Paradoxes", lessons: ["The Monty Hall Problem Demystified", "Calculating Game Odds"] },
            { week: "Week 3", title: "Graph Theory & Networks", lessons: ["Connecting Nodes Without Crossings", "Finding Shortest Path Routes"] },
            { week: "Week 4", title: "Game Strategy Theory", lessons: ["Winning Nim & Tic-Tac-Toe Variants", "Minimax Decision Trees"] },
            { week: "Week 5", title: "Logic Riddle Mastery", lessons: ["Knights & Knaves Paradoxes", "Solving Master Brain Teaser Challenge"] }
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
        weeklyCommitment: "3 hours / week • 8 Weeks total",
        lessons: 16,
        instructor: {
            name: "Shigeru Miyamoto",
            title: "Game Designer & Industry Pioneer",
            bio: "Legendary creator of Mario, Zelda, and Donkey Kong, pioneering interactive video game design.",
            avatar: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=400&q=80",
            rating: "5.0 ★",
            achievements: [
                "Recipient of Japan's prestigious Order of Culture",
                "BAFTA Games Fellowship inductee",
                "Creator of Mario, Zelda, and Star Fox franchises"
            ],
            verificationUrl: "https://www.nintendo.com",
            institution: "Nintendo Creative Guild"
        },
        syllabus: [
            { week: "Week 1", title: "2D Velocity & Acceleration", lessons: ["Applying Vector Movement", "Smooth Acceleration & Deceleration Slopes"] },
            { week: "Week 2", title: "Gravity & Jump Physics", lessons: ["Implementing Jump Arcs & Falling Speed", "Coyote Time & Jump Buffering"] },
            { week: "Week 3", title: "Hitboxes & Collision Logic", lessons: ["Bounding Box Collision Detection", "Resolving Wall & Floor Overlaps"] },
            { week: "Week 4", title: "Tilemap Level Design", lessons: ["Designing Fun Platforming Curves", "Hazard Spikes & Moving Platforms"] },
            { week: "Week 5", title: "Enemy AI Behavior Loops", lessons: ["Patrol State Machines", "Raycasting Enemy Sight Lines"] },
            { week: "Week 6", title: "Particle FX & Screen Shake", lessons: ["Creating Dash Trail FX", "Adding Game Juice & Screen Shake Feedback"] },
            { week: "Week 7", title: "Inventory & Power-Up Systems", lessons: ["Collectible Pickups", "Temporary Power-Up Buffs"] },
            { week: "Week 8", title: "Game Publishing & Optimization", lessons: ["Frame Rate Optimization", "Exporting Final Standalone Game Build"] }
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
        weeklyCommitment: "2.5 hours / week • 7 Weeks total",
        lessons: 14,
        instructor: {
            name: "John Lasseter",
            title: "3D Animation Director",
            bio: "Pioneer in computer animation, character rigging, and 3D visual storytelling.",
            avatar: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=400&q=80",
            rating: "4.9 ★",
            achievements: [
                "2-time Academy Award winner for Animation",
                "Directed first fully computer-animated feature film",
                "Pioneered 3D character rigging techniques"
            ],
            verificationUrl: "https://www.linkedin.com",
            institution: "StarBud 3D Guild"
        },
        syllabus: [
            { week: "Week 1", title: "3D Viewport Navigation", lessons: ["Vertices, Edges & Faces", "Transforming Objects in 3D Space"] },
            { week: "Week 2", title: "Mesh Modeling Techniques", lessons: ["Extruding Shapes & Loop Cuts", "Beveling & Subdivision Surfaces"] },
            { week: "Week 3", title: "Texturing & UV Unwrapping", lessons: ["Projecting 2D Textures onto 3D Meshes", "Color, Roughness & Metallic Maps"] },
            { week: "Week 4", title: "Lighting & Camera Angles", lessons: ["3-Point Lighting Setup", "Camera Focal Lengths & Depth of Field"] },
            { week: "Week 5", title: "Armatures & Character Rigging", lessons: ["Adding Bones & Joints", "Weight Painting Character Skin"] },
            { week: "Week 6", title: "Keyframe Animation Loops", lessons: ["Squash & Stretch Principles", "Animating a Walk Cycle in 3D"] },
            { week: "Week 7", title: "Rendering & Compositing", lessons: ["Raytracing Render Engines", "Exporting Final Animation Video"] }
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
        weeklyCommitment: "2.5 hours / week • 8 Weeks total",
        lessons: 15,
        instructor: {
            name: "Max Martin",
            title: "Master Songwriter & Producer",
            bio: "Top charts record producer revealing vocal melody structures and pop harmony secrets.",
            avatar: "https://images.unsplash.com/photo-1501196354995-cbb51c65aaea?auto=format&fit=crop&w=400&q=80",
            rating: "4.9 ★",
            achievements: [
                "Produced 25 Billboard Hot 100 #1 Singles",
                "5-time ASCAP Songwriter of the Year",
                "Polar Music Prize laureate"
            ],
            verificationUrl: "https://www.linkedin.com",
            institution: "Pop Audio Academy"
        },
        syllabus: [
            { week: "Week 1", title: "Pop Melody Math", lessons: ["Melodic Math & Hook Repetition", "Syllable Counting & Vocal Rhythm"] },
            { week: "Week 2", title: "Chord Progressions", lessons: ["Major & Minor Chord Emotional Impact", "Voice Leading Transitions"] },
            { week: "Week 3", title: "Subtractive Synthesizers", lessons: ["Oscillators, Envelopes & ADSR", "Filter Cutoffs & Resonance Sweeps"] },
            { week: "Week 4", title: "Vocal Tuning & FX", lessons: ["Formant Shifting & Harmonizers", "De-Essing & Dynamic Vocal Compression"] },
            { week: "Week 5", title: "Song Structure & Arcs", lessons: ["Verse-Chorus-Bridge Dynamic Escalation", "Creating Satisfying Drops"] },
            { week: "Week 6", title: "Bassline & Kick Alignment", lessons: ["Frequency Pocketing", "Sidechain Compression Techniques"] },
            { week: "Week 7", title: "Mix Polish & Automation", lessons: ["Panning Width & Stereo FX", "Automating Energy Buildups"] },
            { week: "Week 8", title: "Mastering & Portfolio Release", lessons: ["Loudness Normalization (LUFS)", "Exporting Radio-Ready Audio Masters"] }
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
        weeklyCommitment: "2 hours / week • 6 Weeks total",
        lessons: 12,
        instructor: {
            name: "Alan Turing",
            title: "Father of Computer Science",
            bio: "Historical computation visionary teaching foundational cipher algorithms and machine logic.",
            avatar: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?auto=format&fit=crop&w=400&q=80",
            rating: "5.0 ★",
            achievements: [
                "Broke the WWII Enigma Code",
                "Designed the Turing Machine theoretical computer",
                "Pioneered Artificial Intelligence concepts"
            ],
            verificationUrl: "https://www.turing.ac.uk",
            institution: "Turing Cryptography Institute"
        },
        syllabus: [
            { week: "Week 1", title: "Substitution Ciphers", lessons: ["Caesar Wheel Shift Math", "Frequency Analysis & Letter Counting"] },
            { week: "Week 2", title: "Polyalphabetic Encryption", lessons: ["Vigenère Square Matrix Coding", "Cipher Key Rotation Systems"] },
            { week: "Week 3", title: "Binary & Hexadecimal Math", lessons: ["Base-2 & Base-16 Number Conversions", "Bitwise XOR Encryption Operations"] },
            { week: "Week 4", title: "Public Key Cryptography", lessons: ["Asymmetric Prime Factorization", "RSA Encryption Keys Explained"] },
            { week: "Week 5", title: "Hashing & Digital Signatures", lessons: ["One-Way Cryptographic Hash Functions", "Verifying Data Integrity"] },
            { week: "Week 6", title: "Final Cipher Break Challenge", lessons: ["Decrypting Multi-Layered Mystery Message", "Future Quantum Encryption Concepts"] }
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
        weeklyCommitment: "2 hours / week • 6 Weeks total",
        lessons: 12,
        instructor: {
            name: "Guido van Rossum",
            title: "Creator of Python",
            bio: "Passionate advocate for beginner-friendly coding syntax and open source software development.",
            avatar: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=400&q=80",
            rating: "4.9 ★",
            achievements: [
                "Created Python, the world's most popular programming language",
                "Computer History Museum Fellow",
                "Distinguished Engineer at Microsoft"
            ],
            verificationUrl: "https://gvanrossum.github.io",
            institution: "Python Software Foundation"
        },
        syllabus: [
            { week: "Week 1", title: "Python Syntax & Print", lessons: ["Printing Output & Formatting Text", "Handling String & Integer Variables"] },
            { week: "Week 2", title: "User Input & Conditions", lessons: ["Taking Text Input from Players", "If, Elif, and Else Decision Logic"] },
            { week: "Week 3", title: "Loops & Random Numbers", lessons: ["While Loops & For Loops", "Importing Random Module for Dice Rolling"] },
            { week: "Week 4", title: "Lists & Dictionaries", lessons: ["Storing Inventory Lists", "Key-Value Pairs for Player Stats"] },
            { week: "Week 5", title: "Custom Functions", lessons: ["Writing Reusable Code Functions", "Passing Arguments & Return Values"] },
            { week: "Week 6", title: "Text Adventure Game Launch", lessons: ["Building Choose-Your-Own-Adventure Game", "Publishing Code to Replit"] }
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
        weeklyCommitment: "1.5 hours / week • 4 Weeks total",
        lessons: 8,
        instructor: {
            name: "Stan Lee",
            title: "Comic Book Creator & Storyteller",
            bio: "Comic legend guiding creators through hero origin arcs, speech bubble layout, and action posing.",
            avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=400&q=80",
            rating: "5.0 ★",
            achievements: [
                "Co-created Spider-Man, X-Men & Avengers",
                "National Medal of Arts recipient",
                "Inducted into Will Eisner Comic Hall of Fame"
            ],
            verificationUrl: "https://www.linkedin.com",
            institution: "Comic Storytelling Guild"
        },
        syllabus: [
            { week: "Week 1", title: "Hero Origin & Silhouette", lessons: ["Designing Recognizable Character Silhouettes", "Choosing Hero Color Schemes"] },
            { week: "Week 2", title: "Action Poses & Dynamic Lines", lessons: ["Line of Action & Gesture Drawing", "Exaggerating Comic Movements"] },
            { week: "Week 3", title: "Panel Layouts & Storyboarding", lessons: ["Grid Layouts & Reading Flow", "Speech Bubble Placement Rules"] },
            { week: "Week 4", title: "Inking, Lettering & Cover Art", lessons: ["Inking Dark Line Art", "Designing Eye-Catching Title Covers"] }
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
        weeklyCommitment: "1.5 hours / week • 4 Weeks total",
        lessons: 8,
        instructor: {
            name: "Ira Glass",
            title: "Radio Producer & Podcast Host",
            bio: "Audio storytelling master teaching mic setup, vocal tone techniques, and episode editing.",
            avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=400&q=80",
            rating: "4.8 ★",
            achievements: [
                "Host and Producer of 'This American Life'",
                "Peabody Award winner",
                "National Radio Hall of Fame inductee"
            ],
            verificationUrl: "https://www.thisamericanlife.org",
            institution: "Public Radio Audio Lab"
        },
        syllabus: [
            { week: "Week 1", title: "Microphone Technique & Setup", lessons: ["Mic Placement & Pop Filters", "Eliminating Room Echo"] },
            { week: "Week 2", title: "Scripting & Vocal Projection", lessons: ["Writing Natural Talking Scripts", "Pacing, Tone & Energy Modulation"] },
            { week: "Week 3", title: "Audio Editing & Noise Removal", lessons: ["Cutting Out Pauses & Mouth Clicks", "Background Noise Reduction"] },
            { week: "Week 4", title: "Adding Intro Music & FX", lessons: ["Fading Music Under Voiceovers", "Exporting Final Podcast Episode"] }
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
        weeklyCommitment: "2 hours / week • 5 Weeks total",
        lessons: 10,
        instructor: {
            name: "Katherine Johnson",
            title: "NASA Orbital Mechanic & Mathematician",
            bio: "Pioneering NASA mathematician who calculated orbital mechanics for human spaceflight missions.",
            avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
            rating: "5.0 ★",
            achievements: [
                "Calculated trajectories for Apollo 11 Moon landing",
                "Presidential Medal of Freedom recipient",
                "NASA Lunar Trailblazer Award winner"
            ],
            verificationUrl: "https://www.nasa.gov",
            institution: "NASA Space Mathematics"
        },
        syllabus: [
            { week: "Week 1", title: "Planetary Ratios & Scales", lessons: ["Calculating Relative Distance & Size", "Scale Models of Solar System"] },
            { week: "Week 2", title: "Gravity & Escape Velocity", lessons: ["Gravitational Pull Equations", "Speed Needed to Break Atmosphere"] },
            { week: "Week 3", title: "Orbital Trajectory Curves", lessons: ["Elliptical Orbits & Kepler's Laws", "Plotting Rocket Transfer Orbits"] },
            { week: "Week 4", title: "Fuel Consumption Ratios", lessons: ["Mass vs Thrust Rocket Calculations", "Stage Separation Timing"] },
            { week: "Week 5", title: "Lunar Landing Math", lessons: ["Calculating Retro-Rocket Braking", "Simulating Moon Touchdown Target"] }
        ],
        prerequisites: ["Basic algebra & calculator."]
    }
];

if (typeof window !== 'undefined') {
    window.coursesData = coursesData;
}