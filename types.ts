
export interface Project {
  title: string;
  description: string;
  tech: string[];
  liveLink?: string;
  githubLink?: string;
  image: string;
}

export interface Skill {
  name: string;
  level: number;
}

export interface SkillCategory {
  title: string;
  skills: Skill[];
}

export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string[];
}
