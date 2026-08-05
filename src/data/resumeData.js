export const resumeData = {
  personalInfo: {
    name: "Praveen Kumar S",
    title: "Computer Science Student & UI/UX Specialist",
    tagline: "Building scalable software solutions with intuitive user experiences.",
    email: "princepraveen2426@gmail.com",
    phone: "+91 8110839448",
    location: "Chennai, Tamil Nadu, India",
    linkedin: "https://www.linkedin.com/in/praveen-kumar-5b3081282",
    github: "https://github.com/Praveenkumar265",
    profilePic: "/praveen.jpg",
    cgpa: "7.75 / 10",
    summary: "Final-year Bachelor of Engineering student in Computer Science and Engineering with a CGPA of 7.75. Proficient in Python and UI/UX Design. Strong leadership, problem-solving, and decision-making skills with a passion for building scalable software solutions and continuously enhancing technical expertise."
  },
  
  education: [
    {
      institution: "Jeppiaar Engineering College",
      degree: "Bachelor of Engineering (Computer Science and Engineering)",
      period: "2023 - 2027 (Expected)",
      cgpa: "7.75 / 10",
      status: "Final Year Student",
      highlights: [
        "Specializing in Software Development, Database Management, and UI/UX Design",
        "Consistent academic performer with a 7.75 CGPA",
        "Active member of student tech projects and practical workshops"
      ]
    }
  ],

  skills: {
    programming: [
      { name: "Python", level: 90, icon: "Code2", category: "Core" },
      { name: "JavaScript (ES6+)", level: 85, icon: "FileCode", category: "Frontend" },
      { name: "HTML5", level: 95, icon: "Layout", category: "Frontend" },
      { name: "CSS3 / Modern Styling", level: 92, icon: "Palette", category: "Frontend" }
    ],
    webTech: [
      { name: "HTML5 & CSS3", level: 95, icon: "Globe" },
      { name: "JavaScript", level: 85, icon: "Cpu" },
      { name: "Python Flask", level: 80, icon: "Server" },
      { name: "REST APIs", level: 82, icon: "Network" }
    ],
    databases: [
      { name: "MySQL", level: 88, icon: "Database" },
      { name: "Relational DB Design", level: 85, icon: "Table" },
      { name: "SQL Queries & Indexing", level: 86, icon: "Search" }
    ],
    designAndTools: [
      { name: "UI/UX Design", level: 92, icon: "Figma" },
      { name: "Figma Prototyping", level: 90, icon: "Layers" },
      { name: "Git & GitHub", level: 88, icon: "GitBranch" },
      { name: "Visual Studio Code", level: 95, icon: "Terminal" }
    ],
    coreSubjects: [
      "Data Structures and Algorithms (Basic)",
      "Object-Oriented Programming (OOP)",
      "Database Management Systems (DBMS)",
      "Operating Systems (OS)",
      "Computer Networks (CN)"
    ]
  },

  projects: [
    {
      id: "student-management",
      title: "Student Management System",
      category: "Web & Python",
      tech: ["Python", "Flask", "MySQL", "HTML5", "CSS3", "JavaScript", "VS Code", "Git"],
      shortDesc: "A complete web application to manage student records with secure authentication, full CRUD operations, and data validation.",
      longDesc: "Developed a robust web-based system designed to streamline student administrative tasks. Features full CRUD (Create, Read, Update, Delete) capability, fast search queries, secure user login authentication, and interactive tables.",
      features: [
        "Web-based dashboard built with Flask and MySQL",
        "Comprehensive CRUD operations for student records",
        "Secure user authentication & input data validation",
        "Responsive, user-friendly frontend built with HTML5, CSS3, and JavaScript"
      ],
      github: "https://github.com/Praveenkumar265",
      badge: "Featured Project"
    },
    {
      id: "portfolio-website",
      title: "Personal Portfolio Website",
      category: "UI/UX & Web",
      tech: ["HTML5", "CSS3", "JavaScript", "Figma", "VS Code", "GitHub"],
      shortDesc: "A high-performance responsive personal website crafted with Figma UI/UX prototyping and implemented with smooth animations.",
      longDesc: "Designed and engineered a high-impact personal portfolio website. Built starting from high-fidelity Figma prototypes to clean, cross-browser compliant, and mobile-optimized frontend code.",
      features: [
        "Crafted custom UI/UX design in Figma",
        "Fluid animations and compact cross-device responsiveness",
        "Optimized page speed and interactive UI components",
        "Seamless display of skills, projects, and career milestones"
      ],
      github: "https://github.com/Praveenkumar265",
      badge: "UI/UX Highlight"
    },
    {
      id: "task-scheduler",
      title: "Task Scheduler Application",
      category: "Python & DB",
      tech: ["Python", "MySQL", "VS Code", "Git"],
      shortDesc: "A Python-powered scheduling tool with priority tracking, due date monitoring, and MySQL storage backend.",
      longDesc: "Built an intelligent task management and scheduling software using Python and MySQL. Enables users to organize tasks by priority, track deadlines, update status flags, and generate performance reports.",
      features: [
        "Task prioritization queuing & deadline tracking",
        "Direct integration with MySQL database backend",
        "Status update system with custom reporting output",
        "Scalable Python backend architecture"
      ],
      github: "https://github.com/Praveenkumar265",
      badge: "Utility App"
    }
  ],

  internships: [
    {
      title: "Virtual Intern – Learning Management System",
      company: "AdroIT Technologies Innovative Solutions Pvt. Ltd.",
      period: "Dec 2025 - Feb 2026",
      type: "Virtual Internship",
      description: "Completed an intensive virtual internship program focused on developing a Learning Management System (LMS).",
      bullets: [
        "Engineered key modules for student course enrollment and progress tracking",
        "Gained hands-on practical exposure to full software development lifecycle (SDLC)",
        "Performed unit testing, bug debugging, and detailed software documentation",
        "Collaborated with project mentors to refine application performance"
      ]
    }
  ],

  certifications: [
    {
      title: "AI Fundamentals: Foundations for Understanding AI",
      issuer: "IBM SkillsBuild",
      date: "Issued: June 2026",
      credentialId: "IBM-AI-2026",
      icon: "Award",
      details: "Comprehensive certification covering AI core principles, neural networks, machine learning concepts, and AI ethics."
    },
    {
      title: "Virtual Internship Certificate - Learning Management System",
      issuer: "AdroIT Technologies Innovative Solutions Pvt. Ltd.",
      date: "Dec 2025 - Feb 2026",
      credentialId: "ADROIT-LMS-2026",
      icon: "Briefcase",
      details: "Official certificate of completion for hands-on software development of an enterprise Learning Management System."
    }
  ],

  achievements: [
    {
      title: "Virtual Internship Completion",
      description: "Successfully built and delivered an LMS project during internship at AdroIT Technologies.",
      icon: "CheckCircle2"
    },
    {
      title: "Academic Excellence (7.75 CGPA)",
      description: "Maintained a strong 7.75 CGPA throughout B.E. Computer Science & Engineering program.",
      icon: "GraduationCap"
    },
    {
      title: "Full-Stack Software Projects",
      description: "Developed end-to-end academic applications in Python, Flask, MySQL, and Web Technologies.",
      icon: "Code"
    }
  ]
};
