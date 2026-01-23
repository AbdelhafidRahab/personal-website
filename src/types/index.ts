export interface Project {
  id: string;
  title: string;
  description: string;
  image: string; // Path to image in public folder
  techStack: string[]; // specific technologies used by me
  category: 'proprietary' | 'open-source';
  role: 'Owner' | 'Creator' | 'Co-Creator' | 'Core Contributor' | 'Contributor' | 'Full Stack Developer' | 'Frontend Developer' | 'Backend Developer'; 
  stats?: string;
  links: {
    demo?: string; // Live Link
    repo?: string; // GitHub Link (optional)
  };
}

export interface TimelineItemDetail {
  title: string;
  organization: string;
  description: string;
  tags?: string[];
}

export interface TimelineRow {
  period: string;
  work?: TimelineItemDetail[];
  education?: TimelineItemDetail[];
}

export interface Skill {
  name: string;
  category: 'technical' | 'soft';
  highlight?: boolean;
}