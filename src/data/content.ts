// src/data/content.ts
import { LiaAnkhSolid } from 'react-icons/lia';
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
    id: 'crypto_chart' as const,
    titleKey: 'proj_crypto_chart_name' as const,
    descKey: 'proj_crypto_chart_desc' as const,
    tagsKey: 'proj_crypto_chart_tags' as const,
    isDeployed: true,
    img: '/bg1.png',
    link: 'https://chart-blockchainblockchain.vercel.app/',
  },
  {
    id: 'christmas_movie' as const,
    titleKey: 'proj_christmas_movie_name' as const,
    descKey: 'proj_christmas_movie_desc' as const,
    tagsKey: 'proj_christmas_movie_tags' as const,
    isDeployed: true,
    img: '/bg2.png',
    link: 'https://booking-omega-vert.vercel.app/',
  },
  {
    id: 'clinic_td' as const,
    titleKey: 'proj_clinic_td_name' as const,
    descKey: 'proj_clinic_td_desc' as const,
    tagsKey: 'proj_clinic_td_tags' as const,
    isDeployed: false,
    img: '/bg3.png',
      link: 'http://160.30.173.225:8009/',
  },
];
