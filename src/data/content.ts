// src/data/content.ts
import type { SkillItem } from '../types';

export const frontendStack: SkillItem[] = [
  { name: 'React', icon: 'deployed_code', tag: 'UI_LIB' },
  { name: 'Next.js', icon: 'bolt', tag: 'FRAMEWORK' },
  { name: 'Tailwind', icon: 'palette', tag: 'STYLING' },
  { name: 'TypeScript', icon: 'javascript', tag: 'LANGUAGE' },
  { name: 'Vue 3', icon: 'category', tag: 'FRAMEWORK' },
  { name: 'Vite', icon: 'speed', tag: 'TOOLING' },
];

export const backendStack: SkillItem[] = [
  { name: 'Node.js', icon: 'settings_ethernet', tag: 'RUNTIME' },
  { name: 'PostgreSQL', icon: 'storage', tag: 'DATABASE' },
  { name: 'Redis', icon: 'database', tag: 'CACHE' },
  { name: 'GraphQL', icon: 'api', tag: 'API' },
  { name: 'REST API', icon: 'cloud', tag: 'API' },
  { name: 'MongoDB', icon: 'dns', tag: 'DATABASE' },
];

export const infraStack: SkillItem[] = [
  { name: 'Docker', icon: 'terminal', tag: 'CONTAINER' },
  { name: 'AWS', icon: 'cloud', tag: 'CLOUD' },
  { name: 'Kubernetes', icon: 'hub', tag: 'ORCHESTRA' },
  { name: 'GitHub', icon: 'code_blocks', tag: 'CI/CD' },
  { name: 'Nginx', icon: 'lan', tag: 'REVERSE_PROXY' },
  { name: 'Linux', icon: 'computer', tag: 'OS' },
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
