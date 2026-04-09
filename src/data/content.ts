// src/data/content.ts
import type { SkillItem } from '../types';

export const frontendStack: SkillItem[] = [
  { name: 'React', icon: 'deployed_code', tag: 'FRAMEWORK' },
  { name: 'Vue 3', icon: 'category', tag: 'FRAMEWORK' },
  { name: 'TypeScript', icon: 'javascript', tag: 'LANGUAGE' },
  { name: 'HTML / CSS', icon: 'code', tag: 'LANGUAGE' },
];

export const backendStack: SkillItem[] = [
  { name: 'Node.js', icon: 'memory', tag: 'LANGUAGE' },
  { name: 'Laravel', icon: 'code', tag: 'FRAMEWORK' },
  { name: 'Spring Boot', icon: 'settings_ethernet', tag: 'FRAMEWORK' },
  { name: 'MySQL', icon: 'storage', tag: 'DATABASE' },
  { name: 'PostgreSQL', icon: 'storage', tag: 'DATABASE' },
  { name: 'MongoDB', icon: 'database', tag: 'DATABASE' },
];

export const uiLibrariesStack: SkillItem[] = [
  { name: 'Bootstrap', icon: 'grid_view', tag: 'UI_LIB' },
  { name: 'Tailwind CSS', icon: 'palette', tag: 'UI_LIB' },
  { name: 'Ant Design', icon: 'dashboard', tag: 'UI_LIB' },
];

export const toolsStack: SkillItem[] = [
  { name: 'Git', icon: 'git', tag: 'TOOLS' },
  { name: 'Jira', icon: 'task', tag: 'TOOLS' },
  { name: 'Trello', icon: 'view_column', tag: 'TOOLS' },
  { name: 'Postman', icon: 'send', tag: 'TOOLS' },
  { name: 'Figma', icon: 'design_services', tag: 'TOOLS' },
  { name: 'Linux / Windows', icon: 'computer', tag: 'OS' },
];

export const projects = [
  {
    id: 'ecommerce' as const,
    titleKey: 'proj_ecommerce_name' as const,
    descKey: 'proj_ecommerce_desc' as const,
    tagsKey: 'proj_ecommerce_tags' as const,
    isDeployed: true,
    img: '/bg1.png',
  },
  {
    id: 'fitapp' as const,
    titleKey: 'proj_fitapp_name' as const,
    descKey: 'proj_fitapp_desc' as const,
    tagsKey: 'proj_fitapp_tags' as const,
    isDeployed: false,
    img: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 'corpweb' as const,
    titleKey: 'proj_corpweb_name' as const,
    descKey: 'proj_corpweb_desc' as const,
    tagsKey: 'proj_corpweb_tags' as const,
    isDeployed: true,
    img: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=600&q=80',
  },
];
