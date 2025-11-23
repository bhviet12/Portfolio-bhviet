export interface Project {
  id: number;
  title: string;
  description: string;
  image?: string;
  link: string;
  technologies: string[];
}

export interface PersonalInfo {
  name: string;
  date: string;
  school: string;
  gpa: string;
  major: string;
  email: string;
  phone: string;
  goals: string[];
}

export interface Skill {
  category: string;
  items: string[];
}

export type Language = 'vi' | 'en';
