import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../hooks/useTheme';
import bhvietImage from '../assets/bhviet.png';
import './Home.css';

export default function Home() {
  const { t } = useLanguage();
  const { theme } = useTheme();

  console.log('Home component theme:', theme);

  const socialLinks = [
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/vi%E1%BB%87t-b%C3%B9i-ho%C3%A0ng-40b4a0364/',
      icon: (
        <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      )
    },
    {
      name: 'GitHub',
      url: 'https://github.com/bhviet12',
      icon: (
        <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd"/>
        </svg>
      )
    },
    {
      name: 'Facebook',
      url: 'https://www.facebook.com/pcbqr8669/',
      icon: (
        <svg width="24" height="24" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      )
    }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20"
      style={{
        backgroundColor: theme === 'light' ? '#ffffff' : '#000000'
      }}
    >
      <div className="home-container">
          {/* Content - Left */}
          <div
            className="home-content"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <h1
              className="text-[48px] sm:text-[64px] md:text-[80px] lg:text-[96px] font-bold mb-[16px] leading-tight"
              style={{ color: theme === 'light' ? '#000000' : '#ffffff' }}
            >
              <div>{t('greeting')},</div>
              <div>I'm <span style={{ color: '#ef4444' }}>Bui Hoang Viet</span></div>
            </h1>
            <p
              className="text-[24px] sm:text-[28px] md:text-[32px] font-semibold mb-[16px]"
              style={{ color: theme === 'light' ? '#52525b' : '#a1a1aa' }}
            >
              {t('intro')}
            </p>

            {/* Social Icons */}
            <div
              className="flex items-center gap-[16px] mb-[16px]"
            >
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-[12px] rounded-full hover:bg-[#ef4444] hover:text-[#ffffff] transition-all cursor-pointer"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    backgroundColor: theme === 'light' ? '#f4f4f5' : '#3f3f46',
                    color: theme === 'light' ? '#000000' : '#ffffff'
                  }}
                  aria-label={link.name}
                >
                  {link.icon}
                </a>
              ))}
            </div>

            {/* Contact Button */}
            <button
              onClick={() => scrollToSection('contact')}
              className="btn-primary"
            >
              {t('contactMe')}
            </button>
          </div>

          {/* Profile Image - Right */}
          <div
            className="home-image-wrapper"
            data-aos="fade-left"
            data-aos-duration="1000"
          >
            <div className={`home-profile-image ${theme === 'dark' ? 'dark' : ''}`}>
              <img
                src={bhvietImage}
                alt="Bui Hoang Viet Profile"
              />
            </div>
          </div>
      </div>
    </section>
  );
}
