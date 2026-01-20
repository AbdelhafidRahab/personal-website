export interface Project {
  id: string;
  title: string;
  description: string;
  techStack: string[];
  link?: string;
  github?: string;
  image: string;
  category: 'deployed' | 'open-source' | 'product';
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