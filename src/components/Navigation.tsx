import { useState, useEffect } from 'react';
import { useTheme } from '../hooks/useTheme';
import { useLanguage } from '../contexts/LanguageContext';
import '../styles/navigation.css';

export default function Navigation() {
  const { theme, toggleTheme } = useTheme();
  const { language, toggleLanguage, t } = useLanguage();
  const [activeSection, setActiveSection] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
      setIsMenuOpen(false);
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
    <>
      <nav
        className={`fixed z-50 flex items-center justify-between px-4 md:px-8 h-[95px] backdrop-blur transition ${
          theme === 'light' ? 'bg-[#ffffffF2] border-b-[1px] border-[#e5e7eb]' : 'bg-[#2c2c2e]'
        }`}
        style={
          theme === 'light'
            ? { top: 0, left: 0, right: 0, margin: 0, boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)' }
            : { top: 0, left: 0, right: 0, margin: 0 }
        }
      >
        <div className="mx-auto w-full max-w-[1400px] px-4 md:px-12 h-[95px] flex items-center justify-between">
          {/* Logo - Left */}
          <div className="flex-shrink-0">
            <h1 className={`text-[28px] font-bold ${theme === 'light' ? 'text-[#000000]' : 'text-[#ffffff]'}`}>
              Portfolio
            </h1>
          </div>

          {/* Navigation - Center (Desktop only - hidden on mobile) */}
          <div className="nav-menu-desktop flex-1 justify-center">
            <ul className="flex gap-[32px] list-none m-0 p-0">
              {navItems.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(item.id);
                    }}
                    className={`cursor-pointer text-[18px] font-semibold transition whitespace-nowrap no-underline pb-[16px] ${
                      theme === 'light'
                        ? activeSection === item.id
                          ? 'text-[#000000] border-b-[2px] border-[#ef4444]'
                          : 'text-[#000000] border-b-[2px] border-transparent hover:border-[#ef4444]'
                        : activeSection === item.id
                        ? 'text-[#ffffff] border-b-[2px] border-[#ef4444]'
                        : 'text-[#ffffff] border-b-[2px] border-transparent hover:border-[#ef4444]'
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Right Side */}
          <div className="flex items-center gap-[12px] md:gap-[28px] flex-shrink-0">
            {/* Language Toggle */}
            <button
              onClick={toggleLanguage}
              className={`px-[12px] md:px-[24px] py-[8px] md:py-[12px] text-[16px] md:text-[18px] rounded-[8px] font-semibold transition-colors border-0 outline-none bg-transparent ${
                theme === 'light'
                  ? 'text-[#111827]'
                  : 'text-[#ffffff]'
              }`}
              aria-label="Toggle language"
            >
              {language === 'vi' ? 'EN' : 'VI'}
            </button>

            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-[12px] md:p-[16px] text-[28px] md:text-[32px] rounded-full transition-colors border-0 outline-none bg-transparent"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? '🌙' : '☀️'}
            </button>

            {/* Hamburger Button (Mobile only - hidden on desktop) */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`nav-hamburger p-[8px] text-[32px] border-0 outline-none bg-transparent ${
                theme === 'light' ? 'text-[#000000]' : 'text-[#ffffff]'
              }`}
              aria-label="Toggle menu"
            >
              {isMenuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Dropdown Menu (only visible on mobile when isMenuOpen is true) */}
      {isMenuOpen && (
        <>
          {/* Backdrop overlay */}
          <div
            className="nav-dropdown fixed inset-0 z-30"
            onClick={() => setIsMenuOpen(false)}
          />

          {/* Dropdown menu */}
          <div
            className={`nav-dropdown fixed z-40 ${
              theme === 'light' ? 'bg-[#ffffff] border border-gray-200' : 'bg-[#2c2c2e] border border-gray-700'
            }`}
            style={{
              top: '95px',
              right: '16px',
              borderRadius: '8px',
              boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
              minWidth: '100px'
            }}
          >
          <ul className="flex flex-col gap-0 list-none m-0 p-2">
            {navItems.map((item, index) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.id);
                  }}
                  className={`cursor-pointer text-[16px] font-medium transition no-underline block px-4 py-3 rounded-md ${
                    theme === 'light'
                      ? activeSection === item.id
                        ? 'text-[#ef4444] bg-red-50'
                        : 'text-[#000000] hover:bg-gray-100'
                      : activeSection === item.id
                      ? 'text-[#ef4444] bg-red-900/20'
                      : 'text-[#ffffff] hover:bg-gray-800'
                  }`}
                >
                  {item.label}
                </a>
                {/* Divider - không hiện ở item cuối cùng */}
                {index < navItems.length - 1 && (
                  <div
                    className={`my-1 mx-2 ${
                      theme === 'light' ? 'border-t border-gray-200' : 'border-t border-gray-700'
                    }`}
                  />
                )}
              </li>
            ))}
          </ul>
          </div>
        </>
      )}
    </>
  );
}
