export type Language = 'vi' | 'en';

export interface HeroData {
  status: string;
  greeting: string;
  name: string;
  subtitle: string;
  btnHire: string;
  btnCV: string;
  expYears: string;
}

export interface InfoCard {
  label: string;
  value: string;
}

export interface AboutData {
  title: string;
  eduTitle: string;
  goalsTitle: string;
  school: string;
  major: string;
  gpa: string;
  bio: string[];
  infoCards: InfoCard[];
  goals: string[];
}

export interface ExperienceTask {
  company: string;
  title: string;
  period: string;
  tasks: string[];
  isCurrent?: boolean;
}

export interface SkillItem {
  name: string;
  icon: string;
  tag: string;
}

export interface PortfolioItem {
  title: string;
  desc: string;
  img: string;
  type: string;
}

export interface ContactData {
  title: string;
  subtitle: string;
  emailLabel: string;
  phoneLabel: string;
  formName: string;
  formEmail: string;
  formMessage: string;
  namePlaceholder: string;
  emailPlaceholder: string;
  messagePlaceholder: string;
  submit: string;
  sending: string;
}

export interface Content {
  navbar: string[];
  hero: HeroData;
  about: AboutData;
  skills: SkillItem[];
  portfolio: PortfolioItem[];
  contact: ContactData;
  footer: { copyright: string };
  langBtn: string;
}
