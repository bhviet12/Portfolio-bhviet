export type Language = 'vi' | 'en';

export interface SkillItem {
  name: string;
  icon: string;
  tag: string;
}

export interface Project {
  id: string;
  titleKey: string;
  descKey: string;
  tagsKey: string;
  isDeployed: boolean;
  img: string;
  link?: string;
}
