import { TimelineRow, Skill } from "@/types";

export const aboutIntro = "Passionate about crafting digital solutions. My expertise lies in designing, building, and shipping systems that directly address user needs and deliver smooth experiences. Freelancing has equipped me to expertly manage every project phase: planning, requirements, design, writing clean/maintainable code, testing, and production deployment.";

export const timelineData: TimelineRow[] = [
  {
    period: "Nov 2025 - Present",
    work: [
      {
        title: "Full Stack Developer",
        organization: "@Intaj Company",
        description: "Core member of the team behind 1Tik, The biggest social network platform in Algeria. Responsible for critical modules, ensuring scalability and high performance."
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