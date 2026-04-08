import { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';
import type { Language } from '../types';

interface LanguageContextType {
  lang: Language;
  setLang: (l: Language) => void;
  t: (key: TransKey) => string;
}

export type TransKey = keyof typeof translations.vi;

const translations = {
  vi: {
    navbar_home: 'Trang_Chủ',
    navbar_about: 'Tiểu_Sử',
    navbar_experience: 'Kinh_Nghiệm',
    navbar_skills: 'Kho_Công_Nghệ',
    navbar_projects: 'Dự_Án',
    navbar_contact: 'Liên_Hợp',
    hero_status: 'TRẠNG_THÁI: TRỰC_TUYẾN',
    hero_greeting: 'XIN CHÀO, TÔI LÀ',
    hero_name: 'Bùi Hoàng Việt',
    hero_subtitle: 'Lập trình viên Frontend đầy đam mê, chuyên xây dựng giao diện web hiện đại và trải nghiệm người dùng mượt mà. Luôn học hỏi công nghệ mới để tạo ra những sản phẩm chất lượng.',
    hero_btnHire: 'THUÊ TÔI',
    hero_btnCV: 'TẢI CV',
    hero_expYears: 'Năm_Kinh_Nghiệm',
    hero_statYears: 'Năm_Kinh_Nghiệm',
    hero_statProjects: 'Dự_Án_Hoàn_Thành',
    hero_statTech: 'Công_Nghệ_Sử_Dụng',
    about_title: 'Tiểu_Sử',
    about_eduTitle: 'Học_Vấn',
    about_goalsTitle: 'Mục_Tiêu_3_Năm',
    about_school: 'Đại học Kinh tế — Kỹ thuật Công nghiệp Hà Nội',
    about_major: 'Công nghệ Thông tin',
    about_gpa: '3.1 / 4.0',
    about_bio1: 'Tôi là một lập trình viên Frontend đầy đam mê, luôn tìm kiếm những giải pháp sáng tạo cho giao diện người dùng. Thành thạo Vue 3 và React để xây dựng những trải nghiệm web hiện đại, mượt mà.',
    about_bio2: 'Mục tiêu của tôi là không ngừng học hỏi, phát triển kỹ năng chuyên môn để trở thành một Full-Stack Developer toàn diện, đóng góp giá trị thực sự cho cộng đồng công nghệ.',
    about_goal1: 'Trở thành Full-stack Developer chuyên nghiệp',
    about_goal2: 'Nắm vững các công nghệ Cloud (AWS / Azure)',
    about_goal3: 'Đóng góp cho các dự án Open Source lớn',
    about_goal4: 'Xây dựng sản phẩm công nghệ có ích cho cộng đồng',
    about_card_name: 'Họ_tên',
    about_card_birth: 'Năm_sinh',
    about_card_school: 'Trường',
    about_card_gpa: 'GPA',
    about_card_major: 'Ngành',
    about_card_email: 'Email',
    about_card_phone: 'SĐT',
    about_card_address: 'Địa_chỉ',
    exp_title: 'Kinh_Nghiệm_Chuyên_Môn',
    exp_current: 'Hiện Tại',
    exp_role1_company: 'Công Ty TNHH ABC',
    exp_role1_title: 'Fresher Frontend Developer',
    exp_role1_period: '2024 — NAY',
    exp_role1_task1: 'Phát triển và bảo trì các tính năng giao diện người dùng cho ứng dụng web sử dụng Vue 3 và Tailwind CSS.',
    exp_role1_task2: 'Tối ưu hiệu năng giao diện, giảm thời gian tải trang xuống 40% thông qua lazy-loading và code-splitting.',
    exp_role1_task3: 'Tham gia xây dựng và chuẩn hóa Design System nội bộ, tái sử dụng component trên 5 dự án khác nhau.',
    exp_role2_company: 'Freelance / Dự án cá nhân',
    exp_role2_title: 'Lập trình viên Frontend (Freelance)',
    exp_role2_period: '2023 — 2024',
    exp_role2_task1: 'Nhận việc freelance xây dựng landing page và website thương mại điện tử cho khách hàng trong nước.',
    exp_role2_task2: 'Sử dụng React và Next.js để phát triển giao diện responsive, tương thích đa trình duyệt và thiết bị di động.',
    exp_role2_task3: 'Quản lý và triển khai dự án độc lập từ giai đoạn thiết kế đến deploy lên Vercel và Netlify.',
    exp_role3_company: 'Trường ĐH Kinh tế — Kỹ thuật Công nghiệp',
    exp_role3_title: 'Sinh viên ngành Công nghệ Thông tin',
    exp_role3_period: '2021 — 2025',
    exp_role3_task1: 'Tốt nghiệp chuyên ngành CNTT với GPA 3.2/4.0, hoàn thành các đồ án môn học về phát triển web và ứng dụng di động.',
    exp_role3_task2: 'Tham gia các dự án nhóm xây dựng ứng dụng web sử dụng React và Node.js, đạt điểm A trên các môn học chuyên ngành.',
    exp_role3_task3: 'Tự học và cập nhật các công nghệ mới như TypeScript, Vite, và các framework CSS hiện đại.',
    skill_title: 'Kho_Công_Nghệ',
    skill_fe: '01. FRONTEND_STACK',
    skill_be: '02. BACKEND_CORE',
    skill_infra: '03. INFRA_TOOLS',
    proj_title: 'Dự_Án_Triển_Khai',
    proj_deployed: 'ĐÃ_TRIỂN_KHAI',
    proj_beta: 'Bản_Thử_Nghiệm',
    contact_title: 'Liên hệ',
    contact_subtitle: 'với tôi',
    contact_emailLabel: 'ĐỊA_CHỈ_EMAIL',
    contact_phoneLabel: 'LIÊN_LẠC_BẢO_MẬT',
    contact_formName: 'ĐỊNH_DANH_NGƯỜI_DÙNG',
    contact_formEmail: 'ĐỊA_CHỈ_PHẢN_HỒI',
    contact_formMessage: 'DỮ_LIỆU_TRUYỀN_TẢI',
    contact_namePlaceholder: 'HỌ TÊN',
    contact_emailPlaceholder: 'EMAIL',
    contact_messagePlaceholder: 'NỘI DUNG TIN NHẮN',
    contact_submit: 'GỬI_GÓI_TIN',
    contact_sending: 'ĐANG_GỬI...',
    footer_copyright: '©2025_DEV_MONOLITH.BHV()',
    footer_github: 'GITHUB',
    footer_linkedin: 'LINKEDIN',
  },
  en: {
    navbar_home: 'Home',
    navbar_about: 'About',
    navbar_experience: 'Experience',
    navbar_skills: 'Skills',
    navbar_projects: 'Projects',
    navbar_contact: 'Contact',
    hero_status: 'STATUS: ONLINE',
    hero_greeting: 'HELLO, I AM',
    hero_name: 'Bui Hoang Viet',
    hero_subtitle: "Passionate Frontend Developer specializing in building modern web interfaces and seamless user experiences. Always learning new technologies to deliver quality products.",
    hero_btnHire: 'HIRE ME',
    hero_btnCV: 'DOWNLOAD CV',
    hero_expYears: 'Years_Experience',
    hero_statYears: 'Years_Experience',
    hero_statProjects: 'Projects_Completed',
    hero_statTech: 'Technologies_Used',
    about_title: 'Biography',
    about_eduTitle: 'Education',
    about_goalsTitle: '3-Year_Goals',
    about_school: 'University of Economics — Technology for Industries, Hanoi',
    about_major: 'Information Technology',
    about_gpa: '3.1 / 4.0',
    about_bio1: "I'm a passionate Frontend developer always seeking creative solutions for user interfaces. Proficient in Vue 3 and React to build modern, seamless web experiences.",
    about_bio2: "My goal is to continuously learn and develop professional skills to become a well-rounded Full-Stack Developer, contributing real value to the tech community.",
    about_goal1: 'Become a professional Full-stack Developer',
    about_goal2: 'Master Cloud technologies (AWS / Azure)',
    about_goal3: 'Contribute to major Open Source projects',
    about_goal4: 'Build tech products that benefit the community',
    about_card_name: 'Full_Name',
    about_card_birth: 'Birthdate',
    about_card_school: 'University',
    about_card_gpa: 'GPA',
    about_card_major: 'Major',
    about_card_email: 'Email',
    about_card_phone: 'Phone',
    about_card_address: 'Location',
    exp_title: 'Professional_Experience',
    exp_current: 'Present',
    exp_role1_company: 'ABC Tech Co., Ltd.',
    exp_role1_title: 'Fresher Frontend Developer',
    exp_role1_period: '2024 — NOW',
    exp_role1_task1: 'Developed and maintained UI features for web applications using Vue 3 and Tailwind CSS.',
    exp_role1_task2: 'Optimized frontend performance, reducing page load time by 40% through lazy-loading and code-splitting.',
    exp_role1_task3: 'Contributed to building and standardizing internal Design System, reusing components across 5 different projects.',
    exp_role2_company: 'Freelance / Personal Projects',
    exp_role2_title: 'Frontend Developer (Freelance)',
    exp_role2_period: '2023 — 2024',
    exp_role2_task1: 'Built landing pages and e-commerce websites for local clients as a freelance developer.',
    exp_role2_task2: 'Used React and Next.js to develop responsive interfaces compatible with all browsers and mobile devices.',
    exp_role2_task3: 'Managed and deployed projects independently from design phase through deployment on Vercel and Netlify.',
    exp_role3_company: 'University of Economics — Technology for Industries',
    exp_role3_title: 'IT Student',
    exp_role3_period: '2021 — 2025',
    exp_role3_task1: 'Graduated in IT with GPA 3.2/4.0, completed course projects on web development and mobile applications.',
    exp_role3_task2: 'Participated in team projects building web applications using React and Node.js, achieving A grades in major courses.',
    exp_role3_task3: 'Self-learned and kept up with new technologies such as TypeScript, Vite, and modern CSS frameworks.',
    skill_title: 'Tech_Arsenal',
    skill_fe: '01. FRONTEND_STACK',
    skill_be: '02. BACKEND_CORE',
    skill_infra: '03. INFRA_TOOLS',
    proj_title: 'Project_Archive',
    proj_deployed: 'DEPLOYED',
    proj_beta: 'BETA',
    contact_title: 'Contact',
    contact_subtitle: 'Me',
    contact_emailLabel: 'EMAIL_ADDRESS',
    contact_phoneLabel: 'SECURE_CONTACT',
    contact_formName: 'USER_IDENTIFIER',
    contact_formEmail: 'REPLY_ADDRESS',
    contact_formMessage: 'TRANSMISSION_DATA',
    contact_namePlaceholder: 'FULL NAME',
    contact_emailPlaceholder: 'EMAIL',
    contact_messagePlaceholder: 'YOUR MESSAGE',
    contact_submit: 'SEND_PACKET',
    contact_sending: 'SENDING...',
    footer_copyright: '©2025_DEV_MONOLITH.BHV()',
    footer_github: 'GITHUB',
    footer_linkedin: 'LINKEDIN',
  },
} as const;

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Language>(() => {
    return (localStorage.getItem('lang') as Language) || 'vi';
  });

  const setLang = (l: Language) => {
    setLangState(l);
    localStorage.setItem('lang', l);
  };

  const t = (key: keyof typeof translations.vi): string => {
    return translations[lang][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
