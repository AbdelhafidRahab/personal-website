import { TimelineRow, Skill, Project } from "@/types";

export const aboutIntro = "intro";

export const timelineData: TimelineRow[] = [
  {
    period: "Nov 2025 - Present",
    work: [
      {
        title: "intaj",
        organization: "intaj",
        description: "intaj"
      },
    ]
  },
  {
    period: "Dec 2024 - Present",
    work: [
      {
        title: "self_employed",
        organization: "self_employed",
        description: "self_employed"
      }
    ]
  },
  {
    period: "2023 - 2025",
    work: [
      {
        title: "freelance_web",
        organization: "freelance_web",
        description: "freelance_web"
      },
      {
        title: "freelance_mobile",
        organization: "freelance_mobile",
        description: "freelance_mobile"
      },
    ],
    education: [
      {
        title: "master",
        organization: "master",
        description: "master"
      }
    ]
  },
  {
    period: "2020 - 2023",
    education: [
      {
        title: "bachelor",
        organization: "bachelor",
        description: "bachelor"
      }
    ]
  }
];

export const skills: Skill[] = [
  // Technical
  { name: "JavaScript", category: "technical", highlight: true },
  { name: "TypeScript", category: "technical", highlight: true },
  { name: "Node.js", category: "technical", highlight: true },
  { name: "NestJS", category: "technical", highlight: true },
  { name: "Next.js", category: "technical", highlight: true },
  { name: "AngularJS", category: "technical", highlight: true },
  { name: "ReactJS", category: "technical", highlight: true },
  { name: "HTML", category: "technical", highlight: true },
  { name: "CSS", category: "technical", highlight: true },
  { name: "Tailwind", category: "technical", highlight: true },
  { name: "PHP", category: "technical" },
  { name: "Laravel", category: "technical" },
  { name: "Flutter", category: "technical" },
  { name: "Python", category: "technical" },
  { name: "Java", category: "technical" },
  { name: "Spring Boot", category: "technical" },
  { name: "PostgreSQL", category: "technical", highlight: true },
  { name: "MySQL", category: "technical", highlight: true },
  { name: "Firebase", category: "technical" },
  { name: "Docker", category: "technical" },
  { name: "Git", category: "technical", highlight: true },
  { name: "GitLab", category: "technical", highlight: true },
  { name: "GitHub", category: "technical", highlight: true },
  { name: "Linux", category: "technical" },

  // Soft Skills
  { name: "problem_solving", category: "soft", highlight: true },
  { name: "product_thinking", category: "soft", highlight: true },
  { name: "system_design", category: "soft", highlight: true },
  { name: "time_management", category: "soft", highlight: true },
  { name: "team_collaboration", category: "soft", highlight: true },
  { name: "communication", category: "soft", highlight: true },
  { name: "agile", category: "soft" },
  { name: "leadership", category: "soft", highlight: true },
  { name: "project_management", category: "soft" },
];

export const projectsData: Project[] = [
  {
    id: "1tik", // The ID is the key to look up in JSON
    title: "1tik",
    description: "1tik",
    image: "/projects/1tik.jpeg",
    techStack: ["TypeScript", "Node.js", "NestJS", "PostgreSQL", "Redis", "VueJs", "Docker", "Git", "GitLab"],
    category: "proprietary", // Changed from 'deployed' to match your input
    role: "Core Contributor",
    stats: "150k+ Users",
    links: {
      demo: "https://1tik.social/",
    },
  },
  {
    id: "personal",
    title: "personal",
    description: "personal",
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
  {
    id: "amazon",
    title: "amazon",
    description: "amazon",
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
    id: "medium",
    title: "medium",
    description: "medium",
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
    id: "whatsapp",
    title: "whatsapp",
    description: "whatsapp",
    image: "/projects/whatsapp-clone.jpg",
    techStack: ["Spring Boot", "Angular", "WebSocket", "Maven", "Keycloak", "Git", "GitHub"],
    category: "open-source",
    role: "Creator",
    stats: "Open Source",
    links: {
      repo: "https://github.com/AbdelhafidRahab/whatsapp-clone"
    },
  }
];