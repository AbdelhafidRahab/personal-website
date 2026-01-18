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

export interface Experience {
  company: string;
  position: string;
  period: string;
  description: string;
}

export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'devops' | 'soft';
  proficiency: number; // 1-100
}