import { TimelineRow, Skill, Project } from "@/types";

export const aboutIntro = "Passionate about crafting digital solutions. My expertise lies in designing, building, and shipping systems that directly address user needs and deliver smooth experiences. Freelancing has equipped me to expertly manage every project phase: planning, requirements, design, writing clean/maintainable code, testing, and production deployment.";

export const timelineData: TimelineRow[] = [
  {
    period: "Nov 2025 - Present",
    work: [
      {
        title: "Full Stack Developer",
        organization: "@Intaj Company",
        description: "Core member of the team behind 1Tik, The biggest social network platform in Algeria. Contributor to other projects."
      },
    ]
  },
  {
    period: "Dec 2024 - Present",
    work: [
      {
        title: "Software Engineer",
        organization: "Self-Employed",
        description: "Led full-cycle development for multiple projects, translating requirements into scalable solutions. Collaborated with stakeholders achieving 100% on-time delivery."
      }
    ]
  },
  {
    period: "2023 - 2025",
    work: [
      {
        title: "Web Developer",
        organization: "Freelance",
        description: "Built responsive web applications, ensuring optimal user experience across devices. Implemented features based on client requirements, conducted testing, and managed deployments"
      },
      {
        title: "Mobile Developer",
        organization: "Freelance",
        description: "Developed cross-platform apps. Contributed to all stages from concept to deployment, focusing on responsive design and performance optimization."
      },
    ],
    education: [
      {
        title: "Master's in Distributed Architecture",
        organization: "Larbi Ben M'Hidi University",
        description: "Specialized in distributed systems and software architecture."
      }
    ]
  },
  {
    period: "2020 - 2023",
    education: [
      {
        title: "Bachelor's in Computer Science",
        organization: "Larbi Ben M'Hidi University",
        description: "Foundation in computer science principles and software engineering."
      }
    ]
  }
];

export const skills: Skill[] = [
  // Technical
  { name: "JavaScript", category: "technical", highlight: true},
  { name: "Node.js", category: "technical", highlight: true},
  { name: "NestJS", category: "technical", highlight: true},
  { name: "Next.js", category: "technical", highlight: true},
  { name: "AngularJS", category: "technical", highlight: true},
  { name: "ReactJS", category: "technical", highlight: true},
  { name: "HTML", category: "technical", highlight: true},
  { name: "CSS", category: "technical", highlight: true},
  { name: "Tailwind", category: "technical", highlight: true},
  { name: "PHP", category: "technical" },
  { name: "Laravel", category: "technical" },
  { name: "Flutter", category: "technical" },
  { name: "Python", category: "technical" },
  { name: "Java", category: "technical" },
  { name: "Spring Boot", category: "technical" },
  { name: "PostgreSQL", category: "technical", highlight: true},
  { name: "MySQL", category: "technical", highlight: true},
  { name: "Firebase", category: "technical" },
  { name: "Docker", category: "technical" },
  { name: "Git", category: "technical", highlight: true},
  { name: "GitLab", category: "technical", highlight: true},
  { name: "GitHub", category: "technical", highlight: true},
  { name: "Linux", category: "technical" },
  
  // Soft Skills
  { name: "Problem Solving", category: "soft", highlight: true},
  { name: "Product Thinking", category: "soft", highlight: true},
  { name: "System Design", category: "soft", highlight: true},
  { name: "Time Management", category: "soft", highlight: true},
  { name: "Team Collaboration", category: "soft", highlight: true},
  { name: "Communication", category: "soft", highlight: true},
  { name: "Agile (Scrum)", category: "soft" },
  { name: "Team Leadership", category: "soft", highlight: true},
  { name: "Project Management", category: "soft" },
];

export const projectsData: Project[] = [
  {
    id: "1",
    title: "1Tik Social Network",
    description: "The largest social networking platform in Algeria. Core member of the team, Responsible for critical modules, ensuring scalability and high performance.",
    image: "/projects/1tik.jpeg",
    techStack: ["NestJS", "PostgreSQL", "Redis", "VueJs", "Docker", "Git", "GitLab"],
    category: "proprietary",
    role: "Core Contributor",
    stats: "150k+ Users • 100k+ Downloads",
    links: {
      demo: "https://1tik.social/",
    },
  },
  {
    id: "2",
    title: "Clone Amazon Website",
    description: "A Full Stack Amazon website clone, built with Laravel and Blade templating. Features user authentication, product listings, shopping cart, payment and order management.",
    image: "/projects/amazon-clone.png",
    techStack: ["Laravel", "Blade", "Tailwind CSS", "JavaScript", "MySQL", "Git", "GitHub"],
    category: "open-source",
    role: "Creator",
    stats: "Open Source",
    links: {
      repo: "https://github.com/AbdelhafidRahab/Clone_Amazon_Website"
    },
  },
  {
    id: "3",
    title: "Medium Clone",
    description: "A fully-functional Medium-style blogging platform. Supports article creation, editing, tagging, and commenting with a focus on a clean writing experience.",
    image: "/projects/medium-clone.jpeg",
    techStack: ["Laravel", "Blade", "Tailwind CSS", "MySQL", "Git", "GitHub"],
    category: "open-source",
    role: "Creator",
    stats: "Open Source",
    links: {
      repo: "https://github.com/AbdelhafidRahab/medium-clone"
    },
  },
  {
    id: "4",
    title: "WhatsApp Clone",
    description: "A full-stack WhatsApp clone built with Spring Boot (backend) and Angular (frontend). Implements real-time messaging and follows professional development practices for structure and scalability.",
    image: "/projects/whatsapp-clone.jpg",
    techStack: ["Spring Boot", "Angular", "WebSocket", "Maven", "Keycloak", "Git", "GitHub"],
    category: "open-source",
    role: "Creator",
    stats: "Open Source",
    links: {
      repo: "https://github.com/AbdelhafidRahab/whatsapp-clone"
    },
  },
  {
    id: "5",
    title: "Personal Website",
    description: "My professional website built with the latest Next.js features. Open sourced to help other developers learn modern architecture.",
    image: "/projects/personal-website.png",
    techStack: ["Next.js", "Tailwind CSS", "Git", "GitHub"],
    category: "open-source",
    role: "Creator",
    stats: "Open Source",
    links: {
      demo: "https://abdelhafidrahab.net",
      repo: "https://github.com/AbdelhafidRahab/personal-website",
    },
  },
];