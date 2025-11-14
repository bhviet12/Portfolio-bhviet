import { useState, useEffect } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';

export default function Navigation() {
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage, t } = useLanguage();
  const [activeSection, setActiveSection] = useState('home');

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: t('home') },
    { id: 'about', label: t('about') },
    { id: 'skills', label: t('skills') },
    { id: 'projects', label: t('projects') },
    { id: 'contact', label: t('contact') },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-[#2d2d2d] shadow-lg z-50">
      <div className="mx-auto w-full max-w-[1400px] px-12 h-16 flex items-center justify-between">
        {/* Logo - Left */}
        <div className="flex-shrink-0 w-[150px]">
          <h1 className="text-white text-2xl font-bold">Portfolio</h1>
        </div>

        {/* Navigation - Center */}
        <div className="flex items-center justify-center gap-12 flex-1">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(item.id);
              }}
              className={`relative text-white hover:text-gray-300 transition-colors font-medium text-base cursor-pointer pb-1 whitespace-nowrap ${
                activeSection === item.id ? 'text-white' : 'text-gray-300'
              }`}
            >
              {item.label}
              {activeSection === item.id && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-red-500"></span>
              )}
            </a>
          ))}
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-3 flex-shrink-0 w-[150px] justify-end">
          {/* Language Toggle */}
          <button
            onClick={toggleLanguage}
            className="px-3 py-1.5 text-sm rounded-lg bg-zinc-700 text-white hover:bg-zinc-600 transition-colors font-medium"
            aria-label="Toggle language"
          >
            {language === 'vi' ? 'EN' : 'VI'}
          </button>

          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 text-2xl rounded-full bg-zinc-700 hover:bg-zinc-600 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
        </div>
      </div>
    </nav>
  );
}
