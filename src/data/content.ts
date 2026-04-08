// src/data/content.ts
import type { SkillItem } from '../types';
import type { TransKey } from '../contexts/LanguageContext';

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

export const portfolioItems = [
  {
    title: 'Sàn TMĐT',
    desc: 'Website thương mại điện tử full chức năng',
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&q=80',
    type: 'Web',
  },
  {
    title: 'App theo dõi tập luyện',
    desc: 'Ứng dụng quản lý fitness',
    img: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=400&q=80',
    type: 'App',
  },
  {
    title: 'Bộ nhận diện thương hiệu',
    desc: 'Thiết kế branding cho startup',
    img: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=400&q=80',
    type: 'Thiết kế',
  },
  {
    title: 'Website doanh nghiệp',
    desc: 'Landing page hiện đại cho doanh nghiệp',
    img: 'https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&fit=crop&w=400&q=80',
    type: 'Web',
  },
  {
    title: 'App công thức nấu ăn',
    desc: 'App gợi ý món ăn bằng AI',
    img: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=400&q=80',
    type: 'App',
  },
  {
    title: 'UI Kit',
    desc: 'Bộ thiết kế UI cho web-app',
    img: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=400&q=80',
    type: 'Thiết kế',
  },
];

export const navbarMenu = ['home', 'about', 'experience', 'skills', 'projects', 'contact'];

export const navbarLabels = {
  vi: ['Trang_Chủ', 'Tiểu_Sử', 'Kinh_Nghiệm', 'Kho_Công_Nghệ', 'Dự_Án', 'Liên_Hợp'],
  en: ['Home', 'About', 'Experience', 'Skills', 'Projects', 'Contact'],
} as const;

export const experienceItems = [
  {
    companyKey: 'exp_role1_company' as const,
    titleKey: 'exp_role1_title' as const,
    periodKey: 'exp_role1_period' as const,
    taskKeys: ['exp_role1_task1', 'exp_role1_task2', 'exp_role1_task3'] as const,
    isCurrent: true,
  },
  {
    companyKey: 'exp_role2_company' as const,
    titleKey: 'exp_role2_title' as const,
    periodKey: 'exp_role2_period' as const,
    taskKeys: ['exp_role2_task1', 'exp_role2_task2', 'exp_role2_task3'] as const,
    isCurrent: false,
  },
  {
    companyKey: 'exp_role3_company' as const,
    titleKey: 'exp_role3_title' as const,
    periodKey: 'exp_role3_period' as const,
    taskKeys: ['exp_role3_task1', 'exp_role3_task2', 'exp_role3_task3'] as const,
    isCurrent: false,
  },
];

export const aboutInfoCards: Record<'vi' | 'en', Array<{ labelKey: TransKey; value: string }>> = {
  vi: [
    { labelKey: 'about_card_name', value: 'Bùi Hoàng Việt' },
    { labelKey: 'about_card_birth', value: '15/10/2003' },
    { labelKey: 'about_card_school', value: 'ĐH KT-KTCN Hà Nội' },
    { labelKey: 'about_card_gpa', value: '3.1 / 4.0' },
    { labelKey: 'about_card_major', value: 'Công nghệ Thông tin' },
    { labelKey: 'about_card_email', value: 'bhviet1510@gmail.com' },
    { labelKey: 'about_card_phone', value: '+84 912 687 955' },
    { labelKey: 'about_card_address', value: 'Hà Nội, Việt Nam' },
  ],
  en: [
    { labelKey: 'about_card_name', value: 'Bui Hoang Viet' },
    { labelKey: 'about_card_birth', value: '15/10/2003' },
    { labelKey: 'about_card_school', value: 'UNETI, Hanoi' },
    { labelKey: 'about_card_gpa', value: '3.1 / 4.0' },
    { labelKey: 'about_card_major', value: 'Information Technology' },
    { labelKey: 'about_card_email', value: 'bhviet1510@gmail.com' },
    { labelKey: 'about_card_phone', value: '+84 912 687 955' },
    { labelKey: 'about_card_address', value: 'Hanoi, Vietnam' },
  ],
};
