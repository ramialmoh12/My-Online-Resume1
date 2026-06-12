export interface Project {
  id: string;
  title: string;
  category: string;
  type: string;
  tech: string[];
  description: string[];
  url?: string;
  github?: string;
  image?: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  points: string[];
}

export interface SkillCategory {
  id: string;
  title: string;
  skills: { name: string; level: number }[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  credentialId?: string;
}

export interface Education {
  id: string;
  degree: string;
  school: string;
  period: string;
  status: string;
}

export interface Language {
  name: string;
  level: string;
  percentage: number;
}
