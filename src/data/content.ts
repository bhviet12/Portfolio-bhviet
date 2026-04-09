// src/data/content.ts
import type { SkillItem } from '../types';

export const frontendStack: SkillItem[] = [
  { name: 'React', icon: 'deployed_code', tag: 'FRAMEWORK' },
  { name: 'Vue 3', icon: 'category', tag: 'FRAMEWORK' },
  { name: 'Tailwind CSS', icon: 'palette', tag: 'FRAMEWORK' },
  { name: 'Bootstrap', icon: 'grid_view', tag: 'FRAMEWORK' },
  { name: 'TypeScript', icon: 'javascript', tag: 'LANGUAGE' },
  { name: 'HTML / CSS', icon: 'code', tag: 'LANGUAGE' },
];

export const backendStack: SkillItem[] = [
  { name: 'Java', icon: 'memory', tag: 'LANGUAGE' },
  { name: 'PHP', icon: 'terminal', tag: 'LANGUAGE' },
  { name: 'Node.js', icon: 'settings_ethernet', tag: 'LANGUAGE' },
  { name: 'SpringBoot', icon: 'bolt', tag: 'FRAMEWORK' },
  { name: 'Laravel', icon: 'code', tag: 'FRAMEWORK' },
  { name: 'REST API', icon: 'cloud', tag: 'FRAMEWORK' },
];

export const infraStack: SkillItem[] = [
  { name: 'PostgreSQL', icon: 'storage', tag: 'DATABASE' },
  { name: 'MySQL', icon: 'dns', tag: 'DATABASE' },
  { name: 'MongoDB', icon: 'database', tag: 'DATABASE' },
  { name: 'Docker', icon: 'widgets', tag: 'TOOLS' },
  { name: 'GitHub', icon: 'code_blocks', tag: 'TOOLS' },
  { name: 'Ubuntu / Windows', icon: 'computer', tag: 'TOOLS' },
];

export const projects = [
  {
    id: 'ecommerce' as const,
    titleKey: 'proj_ecommerce_name' as const,
    descKey: 'proj_ecommerce_desc' as const,
    tagsKey: 'proj_ecommerce_tags' as const,
    isDeployed: true,
    img: '/src/assets/bg1.png',
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
