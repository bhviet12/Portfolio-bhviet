import { useState, useEffect } from 'react';
import { useTheme } from '@/contexts/ThemeContext';
import { useLanguage } from '@/contexts/LanguageContext';
import { MdDarkMode, MdLightMode, MdLanguage, MdMenu, MdClose } from 'react-icons/md';

const SECTION_IDS = ['home', 'about', 'experience', 'skills', 'projects', 'contact'] as const;

type SectionId = (typeof SECTION_IDS)[number];

const NAV_KEYS: Record<SectionId,
  'navbar_home' | 'navbar_about' | 'navbar_experience'
  | 'navbar_skills' | 'navbar_projects' | 'navbar_contact'
> = {
  home: 'navbar_home',
  about: 'navbar_about',
  experience: 'navbar_experience',
  skills: 'navbar_skills',
  projects: 'navbar_projects',
  contact: 'navbar_contact',
};

export default function Navbar() {
  const { isDark, toggleTheme } = useTheme();
  const { lang, setLang, t } = useLanguage();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSection, setCurrentSection] = useState<SectionId>('home');

  useEffect(() => {
    function handleScroll() {
      const scrollY = window.scrollY + 120;
      for (let i = SECTION_IDS.length - 1; i >= 0; i--) {
        const el = document.getElementById(SECTION_IDS[i]);
        if (el && scrollY >= el.offsetTop) {
          setCurrentSection(SECTION_IDS[i]);
          break;
        }
      }
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-0 left-0 w-full z-50 border-b-2 border-black dark:border-white bg-white/90 dark:bg-[#0a0a0a]/90 backdrop-blur-md flex justify-between items-center px-6 py-4 font-body uppercase tracking-[0.1em]">
      {/* Logo */}
      <div className="text-xl md:text-2xl font-black text-black dark:text-white tracking-[-0.04em] select-none cursor-pointer">
        DEV_<span className="text-[#E31B23]">MONOLITH</span>
      </div>

      {/* Desktop Nav */}
      <nav className="hidden md:flex gap-8 items-center">
        {SECTION_IDS.map((id) => {
          const isActive = currentSection === id;
          return (
            <a
              key={id}
              href={`#${id}`}
              className={`text-xs font-bold transition-colors duration-100 ${
                isActive
                  ? 'text-[#E31B23] border-b-4 border-[#E31B23] pb-1'
                  : 'text-black dark:text-white hover:text-[#E31B23]'
              }`}
            >
              {t(NAV_KEYS[id])}
            </a>
          );
        })}
      </nav>

      {/* Right Controls */}
      <div className="flex items-center gap-3">
        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          aria-label={isDark ? 'Light mode' : 'Dark mode'}
          className="flex items-center justify-center w-9 h-9 border-2 border-black dark:border-white hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-all duration-100"
        >
          {isDark ? <MdLightMode className="text-base" /> : <MdDarkMode className="text-base" />}
        </button>

        {/* Lang Toggle */}
        <button
          onClick={() => setLang(lang === 'vi' ? 'en' : 'vi')}
          aria-label="Toggle language"
          className="flex items-center gap-1 px-2 py-1 border-2 border-black dark:border-white text-[10px] font-black tracking-widest text-black dark:text-white hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-all duration-100 uppercase"
        >
          <MdLanguage className="text-sm" />
          {lang === 'vi' ? 'EN' : 'VI'}
        </button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden flex items-center justify-center w-9 h-9 border-2 border-black dark:border-white text-black dark:text-white hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-all duration-100"
        >
          {isMenuOpen ? <MdClose className="text-base" /> : <MdMenu className="text-base" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 top-[60px] bg-white dark:bg-[#0a0a0a] border-t-2 border-black dark:border-white flex flex-col items-center justify-center gap-10 z-[999] md:hidden">
          {SECTION_IDS.map((id) => {
            const isActive = currentSection === id;
            return (
              <a
                key={id}
                href={`#${id}`}
                onClick={() => setIsMenuOpen(false)}
                className={`text-3xl font-black uppercase tracking-wider transition-colors duration-100 ${
                  isActive
                    ? 'text-[#E31B23]'
                    : 'text-black dark:text-white hover:text-[#E31B23]'
                }`}
              >
                {t(NAV_KEYS[id])}
              </a>
            );
          })}
        </div>
      )}
    </header>
  );
}
