import { Smartphone, Layout, BarChart, Server, PenTool, Video, Database } from "lucide-react";

export const courses = [
  {
    id: "flutter-full-stack",
    title: "Flutter Full Stack",
    description: "Build beautiful, natively compiled applications for mobile, web, and desktop from a single codebase.",
    icon: Smartphone,
    duration: "6 Months",
    outcome: "Mobile App Developer",
    longDescription: "Master Dart and Flutter to build high-performance, cross-platform applications. This comprehensive course covers everything from basic UI components to advanced state management (Riverpod/Bloc), API integration, Firebase backend, and releasing apps to the Play Store and App Store.",
    syllabus: [
      "Introduction to Dart & OOP",
      "Flutter Widgets & Layouts",
      "State Management (Provider, Riverpod)",
      "API Integration & JSON",
      "Firebase (Auth, Firestore, Storage)",
      "Deployment & CI/CD"
    ],
    roadmap: [
      {
        level: "Month 1",
        title: "Programming Foundations",
        description: "Mastering Dart programming language, OOPS, and fundamental concepts.",
        message: "You're building the foundation! Every great app starts with solid logic."
      },
      {
        level: "Month 2",
        title: "UI & Layout Mastery",
        description: "Building responsive and beautiful UIs using Flutter widgets and animations.",
        message: "Design matters. Now you're making things look professional and interactive."
      },
      {
        level: "Month 3",
        title: "Advanced State Management",
        description: "Deep dive into Provider, Riverpod, and architectural patterns.",
        message: "Complexity managed! Learn to scale apps without losing control."
      },
      {
        level: "Month 4",
        title: "API & Backend Integration",
        description: "Connecting your apps to the world via REST APIs and Firebase.",
        message: "Data is life. Your apps are now connected to real-time databases."
      },
      {
        level: "Month 5",
        title: "Real-world Projects",
        description: "Building production-grade applications with best practices.",
        message: "Time to build! Turn your ideas into functional products."
      },
      {
        level: "Month 6",
        title: "Portfolio & Placement",
        description: "App store deployment, resume building, and mock interviews.",
        message: "Ready for take-off! Your journey to a career starts here."
      }
    ]
  },
  {
    id: "mern-stack",
    title: "MERN Stack",
    description: "Master MongoDB, Express.js, React, and Node.js to build scalable web applications.",
    icon: Layout,
    duration: "6 Months",
    outcome: "Full Stack Developer",
    longDescription: "Become a proficient Full Stack Developer with the MERN stack. Learn to build dynamic, responsive web applications using React on the frontend and Node.js/Express on the backend, with MongoDB as the database. Includes authentication, RESTful APIs, and deployment.",
    syllabus: [
      "HTML5, CSS3, JavaScript (ES6+)",
      "React.js (Hooks, Router, Redux)",
      "Node.js & Express.js",
      "MongoDB & Mongoose",
      "Authentication (JWT)",
      "Deployment (Vercel/Heroku)"
    ],
    roadmap: [
      {
        level: "Month 1",
        title: "Frontend Essentials",
        description: "HTML5, CSS3, and Modern JavaScript (ES6+).",
        message: "The web starts here. Master the building blocks of every website."
      },
      {
        level: "Month 2",
        title: "React Fundamentals",
        description: "JSX, Components, Props, and State Management with Hooks.",
        message: "React is powerful. Experience why the world's top apps are built with it."
      },
      {
        level: "Month 3",
        title: "Backend with Node & Express",
        description: "Creating servers, routing, and server-side logic.",
        message: "Behind the scenes. Learn how to handle requests and manage logic."
      },
      {
        level: "Month 4",
        title: "Database with MongoDB",
        description: "Data modeling, CRUD operations, and Mongoose.",
        message: "Persistent storage. Make your applications remember everything."
      },
      {
        level: "Month 5",
        title: "Full Stack Integration",
        description: "Connecting React to Node, Authentication, and File uploads.",
        message: "The pieces fit! You're now building true end-to-end applications."
      },
      {
        level: "Month 6",
        title: "Projects & Deployment",
        description: "Building a complex project and launching it to the cloud.",
        message: "Live and active! Showcase your skills to global employers."
      }
    ]
  },
  {
    id: "digital-marketing",
    title: "Digital Marketing",
    description: "Master SEO, SEM, Social Media, and Content Marketing strategies to grow businesses.",
    icon: BarChart,
    duration: "3 Months",
    outcome: "Digital Marketer",
    longDescription: "Learn to drive traffic, generate leads, and boost sales using digital marketing strategies. Covers SEO, Google Ads, Facebook/Instagram Ads, Email Marketing, and Analytics.",
    syllabus: [
      "Search Engine Optimization (SEO)",
      "Social Media Marketing (SMM)",
      "Google Ads (PPC)",
      "Content Marketing Strategy",
      "Email Marketing & Automation",
      "Google Analytics"
    ],
    roadmap: [
      {
        level: "Month 1",
        title: "SEO Foundations",
        description: "On-page and Off-page optimization, content strategy.",
        message: "Get seen! Learn the secrets of rank #1 on Google."
      },
      {
        level: "Month 2",
        title: "Social Media & Ads",
        description: "Facebook, Instagram, and Google Ads management.",
        message: "Reach the right people. Turn clicks into customers effectively."
      },
      {
        level: "Month 3",
        title: "Analytics & Strategy",
        description: "Data-driven marketing, email automation, and conversion tracking.",
        message: "Results matter. Measure your success and scale your growth."
      }
    ]
  },
  {
    id: "python-fastapi",
    title: "Python + FastAPI",
    description: "Learn high-performance backend development with modern Python and FastAPI.",
    icon: Server,
    duration: "4 Months",
    outcome: "Backend Developer",
    longDescription: "Dive into modern backend development with Python. Learn to build fast, robust APIs using FastAPI, interact with databases using SQLAlchemy, and deploy applications using Docker.",
    syllabus: [
      "Python Advanced Concepts",
      "FastAPI Framework",
      "SQLAlchemy & Pydantic",
      "Authentication & Security",
      "Docker & Containerization",
      "Testing & Deployment"
    ],
    roadmap: [
      {
        level: "Month 1",
        title: "Python Mastery",
        description: "Data structures, OOP, and asynchronous programming in Python.",
        message: "Master the snake! Python is the king of versatility and speed."
      },
      {
        level: "Month 2",
        title: "FastAPI Integration",
        description: "Building fast, type-safe APIs with automatic documentation.",
        message: "Speed redefined. FastAPI is the modern standard for backend performance."
      },
      {
        level: "Month 3",
        title: "Databases & Auth",
        description: "PostgreSQL, SQLAlchemy, and JWT security.",
        message: "Secure and scalable. Protect your data with industry-best practices."
      },
      {
        level: "Month 4",
        title: "DevOps & Cloud",
        description: "Docker, CI/CD pipelines, and cloud deployment.",
        message: "Ready for production. Scale your backend to support millions."
      }
    ]
  },
  {
    id: "ui-ux-design",
    title: "UI/UX Design",
    description: "Design intuitive user interfaces and experiences using Figma and modern design principles.",
    icon: PenTool,
    duration: "3 Months",
    outcome: "Product Designer",
    longDescription: "Learn to create user-centric designs that delight users. Master Figma for wireframing, prototyping, and high-fidelity UI design. Understand UX principles, user research, and usability testing.",
    syllabus: [
      "Design Thinking Process",
      "User Research & Personas",
      "Wireframing & Prototyping",
      "Figma Mastery",
      "Design Systems",
      "Usability Testing"
    ],
    roadmap: [
      {
        level: "Month 1",
        title: "UX Fundamentals",
        description: "Design thinking, user research, and wireframing.",
        message: "User first! Understand the 'Why' before the 'What'."
      },
      {
        level: "Month 2",
        title: "Visual UI Design",
        description: "Figma mastery, color theory, and typography.",
        message: "Make it beautiful! Create interfaces that users love to touch."
      },
      {
        level: "Month 3",
        title: "Prototyping & Portfolio",
        description: "Interaction design, usability testing, and case studies.",
        message: "The final touch. Simulate real apps and showcase your talent."
      }
    ]
  },
  {
    id: "video-editing",
    title: "Video Editing",
    description: "Create professional videos using Premiere Pro and After Effects for social media and ads.",
    icon: Video,
    duration: "3 Months",
    outcome: "Video Editor",
    longDescription: "Become a professional video editor. Learn industry-standard tools like Adobe Premiere Pro and After Effects to edit videos, add visual effects, color grade, and create motion graphics.",
    syllabus: [
      "Video Editing Fundamentals",
      "Adobe Premiere Pro Mastery",
      "Color Correction & Grading",
      "Audio Editing & Mixing",
      "Adobe After Effects Basics",
      "Rendering & Exporting"
    ],
    roadmap: [
      {
        level: "Month 1",
        title: "Premiere Pro Basics",
        description: "Cutting, transitions, and audio synchronization.",
        message: "Tell a story! Editing is where the magic really happens."
      },
      {
        level: "Month 2",
        title: "Visual FX & Motion",
        description: "After Effects integration and motion graphics.",
        message: "Add some flair! Motion graphics take your videos to the next level."
      },
      {
        level: "Month 3",
        title: "Color & Final Polish",
        description: "Professional color grading and final rendering.",
        message: "Cinematic quality. Transform raw footage into a masterpiece."
      }
    ]
  },
  {
    id: "graphic-designing",
    title: "Graphic Designing",
    description: "Master Photoshop, Illustrator, and InDesign to create stunning visual assets.",
    icon: PenTool,
    duration: "3 Months",
    outcome: "Graphic Designer",
    longDescription: "Unleash your creativity with graphic design. Learn to create logos, social media posts, branding materials, and illustrations using Adobe Photoshop, Illustrator, and InDesign.",
    syllabus: [
      "Design Principles & Color Theory",
      "Adobe Photoshop (Photo Editing)",
      "Adobe Illustrator (Vector Art)",
      "Adobe InDesign (Layouts)",
      "Branding & Identity",
      "Portfolio Building"
    ],
    roadmap: [
      {
        level: "Month 1",
        title: "Photoshop Wizardry",
        description: "Photo manipulation, layers, and digital painting.",
        message: "Pixel perfect! Retouch and rethink visual reality."
      },
      {
        level: "Month 2",
        title: "Vector Illustration",
        description: "Logo design and vector assets in Illustrator.",
        message: "Infinite scale! Build designs that never lose their edge."
      },
      {
        level: "Month 3",
        title: "InDesign & Branding",
        description: "Layout design and complete brand identity.",
        message: "Iconic identity. Learn to build consistent and memorable brands."
      }
    ]
  },
  {
    id: "nodejs-backend",
    title: "Node.js + Backend",
    description: "Deep dive into server-side programming and API development with Node.js.",
    icon: Database,
    duration: "4 Months",
    outcome: "Backend Specialist",
    longDescription: "Specialize in backend development with Node.js. Learn event-driven architecture, building REST and GraphQL APIs, working with SQL and NoSQL databases, and microservices.",
    syllabus: [
      "Node.js Internals",
      "Express.js Framework",
      "Databases (SQL vs NoSQL)",
      "GraphQL API",
      "Microservices Architecture",
      "Serverless Functions"
    ],
    roadmap: [
      {
        level: "Month 1",
        title: "Node Fundamentals",
        description: "Event loop, file system, and asynchronous architecture.",
        message: "The core of speed. Understand why Node powers the top real-time apps."
      },
      {
        level: "Month 2",
        title: "Express & APIs",
        description: "Middleware, RESTful routes, and error handling.",
        message: "Seamless communication. Build APIs that developer loves to use."
      },
      {
        level: "Month 3",
        title: "Database Mastery",
        description: "Relational vs Document oriented (MongoDB & PostgreSQL).",
        message: "Data architect. Design systems that handle millions of records."
      },
      {
        level: "Month 4",
        title: "Microservices & GraphQL",
        description: "Scaling backends and modern API query languages.",
        message: "Future-proof! Build modular architectures used by Netflix and Uber."
      }
    ]
  }
];
