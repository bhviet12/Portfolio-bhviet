import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';
import type { Language } from '../types';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  vi: {
    // Navigation
    home: 'Trang chủ',
    about: 'Về tôi',
    projects: 'Dự án',
    skills: 'Kỹ năng',
    contact: 'Liên hệ',

    // Home Section
    greeting: 'Xin chào',
    intro: 'Tôi là lập trình viên Frontend đầy đam mê',
    viewGithub: 'Xem GitHub',
    contactMe: 'Liên hệ với tôi',

    // About Section
    aboutTitle: 'Về tôi',
    personalInfo: 'Thông tin cá nhân',
    name: 'Tên',
    dob: 'Năm sinh',
    school: 'Trường',
    gpa: 'GPA',
    major: 'Ngành học',
    email: 'Email',
    phone: 'Số điện thoại',
    futureGoals: 'Mục tiêu phát triển trong 3 năm tới',

    // Personal Info Values
    nameValue: 'Bùi Hoàng Việt',
    schoolValue: 'Đại học Kinh tế - Kỹ thuật Công nghiệp Hà Nội',
    majorValue: 'Công nghệ thông tin',
    goal1: 'Trở thành Full-stack Developer chuyên nghiệp',
    goal2: 'Nắm vững các công nghệ Cloud (AWS/Azure)',
    goal3: 'Đóng góp cho các dự án Open Source lớn',
    goal4: 'Xây dựng sản phẩm công nghệ có ích cho cộng đồng',
    downloadCV: 'Tải CV',

    // Skills Section
    skillsTitle: 'Kỹ năng',
    frontendFrameworks: 'Frontend Frameworks',
    programmingLanguages: 'Ngôn ngữ lập trình',
    backendFrameworks: 'Backend Frameworks',
    tools: 'Công cụ (Windows & Ubuntu)',

    // Projects Section
    projectsTitle: 'Dự án của tôi',
    viewProject: 'Xem dự án',

    // Contact Dialog
    contactTitle: 'Liên hệ',
    close: 'Đóng',
  },
  en: {
    // Navigation
    home: 'Home',
    about: 'About Us',
    projects: 'Projects',
    skills: 'Skills',
    contact: 'Contact',

    // Home Section
    greeting: 'Hello',
    intro: 'I am a passionate Frontend Developer',
    viewGithub: 'View GitHub',
    contactMe: 'Contact Me',

    // About Section
    aboutTitle: 'About Me',
    personalInfo: 'Personal Information',
    name: 'Name',
    dob: 'Date',
    school: 'School',
    gpa: 'GPA',
    major: 'Major',
    email: 'Email',
    phone: 'Phone',
    futureGoals: '3-Year Development Goals',

    // Personal Info Values
    nameValue: 'Bui Hoang Viet',
    schoolValue: 'University of Economics and Technology - Hanoi',
    majorValue: 'Information Technology',
    goal1: 'Become a professional Full-stack Developer',
    goal2: 'Master Cloud technologies (AWS/Azure)',
    goal3: 'Contribute to large Open Source projects',
    goal4: 'Build technology products useful for the community',
    downloadCV: 'Download CV',

    // Skills Section
    skillsTitle: 'Skills',
    frontendFrameworks: 'Frontend Frameworks',
    programmingLanguages: 'Programming Languages',
    backendFrameworks: 'Backend Frameworks',
    tools: 'Tools (Windows & Ubuntu)',

    // Projects Section
    projectsTitle: 'My Projects',
    viewProject: 'View Project',

    // Contact Dialog
    contactTitle: 'Contact',
    close: 'Close',
  },
};

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('vi');

  const toggleLanguage = () => {
    setLanguage(prevLang => prevLang === 'vi' ? 'en' : 'vi');
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations.vi] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
