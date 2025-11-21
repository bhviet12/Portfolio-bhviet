import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';
import type { PersonalInfo } from '../types';
import '../styles/layout.css';
import '../styles/button.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDownload } from '@fortawesome/free-solid-svg-icons';

const personalInfoStatic: PersonalInfo = {
  name: '',
  age: 22,
  school: '',
  gpa: '2.9/4.0',
  major: '',
  email: 'bhviet1510@gmail.com',
  phone: '+84 912687955',
  goals: []
};

export default function About() {
  const { t } = useLanguage();
  const { theme } = useTheme();

  const personalInfo = {
    name: t('nameValue'),
    age: personalInfoStatic.age,
    school: t('schoolValue'),
    gpa: personalInfoStatic.gpa,
    major: t('majorValue'),
    email: personalInfoStatic.email,
    phone: personalInfoStatic.phone,
    goals: [
      t('goal1'),
      t('goal2'),
      t('goal3'),
      t('goal4')
    ]
  };

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center py-20"
      style={{
        backgroundColor: theme === 'light' ? '#fafafa' : '#000000'
      }}
    >
      <div className="containerest">
        <div className="w-full flex flex-col items-center">
          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-center"
            style={{
              color: theme === 'light' ? '#000000' : '#ffffff',
              marginBottom: '30px',
              borderBottom: '4px solid #ef4444',
              paddingBottom: '20px'
            }}
          >
            {t('aboutTitle')}
          </h1>
          <div style={{ marginBottom: '58px' }} />

          <div className="w-full grid grid-cols-2 md:grid-cols-2 gap-12 justify-items-center">
            {/* Box 1: Personal Information */}
            <div
              className="bg-white dark:bg-zinc-900 rounded-xl shadow-xl p-6 sm:p-8"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <h3 className="text-2xl sm:text-3xl font-bold" style={{ marginBottom: '40px', color: theme === 'light' ? '#000000' : '#ffffff' }}>
                {t('personalInfo')}
              </h3>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center gap-4">
                  <span className="text-red-500 font-semibold text-base sm:text-lg min-w-[100px]">
                    {t('name')}:
                  </span>
                  <span className="text-base sm:text-lg break-words" style={{ color: theme === 'light' ? '#000000' : '#ffffff' }}>{personalInfo.name}</span>
                </div>

                <div className="flex items-center gap-4">
                  <span className="text-red-500 font-semibold text-base sm:text-lg min-w-[100px]">
                    {t('age')}:
                  </span>
                  <span className="text-base sm:text-lg" style={{ color: theme === 'light' ? '#000000' : '#ffffff' }}>{personalInfo.age}</span>
                </div>

                <div className="flex items-center gap-4">
                  <span className="text-red-500 font-semibold text-base sm:text-lg min-w-[100px]">
                    {t('school')}:
                  </span>
                  <span className="text-base sm:text-lg break-words" style={{ color: theme === 'light' ? '#000000' : '#ffffff' }}>{personalInfo.school}</span>
                </div>

                <div className="flex items-center gap-4">
                  <span className="text-red-500 font-semibold text-base sm:text-lg min-w-[100px]">
                    {t('gpa')}:
                  </span>
                  <span className="text-base sm:text-lg" style={{ color: theme === 'light' ? '#000000' : '#ffffff' }}>{personalInfo.gpa}</span>
                </div>

                <div className="flex items-center gap-4">
                  <span className="text-red-500 font-semibold text-base sm:text-lg min-w-[100px]">
                    {t('major')}:
                  </span>
                  <span className="text-base sm:text-lg break-words" style={{ color: theme === 'light' ? '#000000' : '#ffffff' }}>{personalInfo.major}</span>
                </div>

                <div className="flex items-center gap-4">
                  <span className="text-red-500 font-semibold text-base sm:text-lg min-w-[100px]">
                    {t('email')}:
                  </span>
                  <span className="text-base sm:text-lg break-words" style={{ color: theme === 'light' ? '#000000' : '#ffffff' }}>{personalInfo.email}</span>
                </div>

                <div className="flex items-center gap-4">
                  <span className="text-red-500 font-semibold text-base sm:text-lg min-w-[100px]">
                    {t('phone')}:
                  </span>
                  <span className="text-base sm:text-lg break-words" style={{ color: theme === 'light' ? '#000000' : '#ffffff' }}>{personalInfo.phone}</span>
                </div>
              </div>
            </div>

            {/* Box 2: Future Goals */}
            <div
              className="bg-white dark:bg-zinc-900 rounded-xl shadow-xl p-6 sm:p-8"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <h3 className="text-2xl sm:text-3xl font-bold" style={{ marginBottom: '40px', color: theme === 'light' ? '#000000' : '#ffffff' }}>
                {t('futureGoals')}
              </h3>
              <ul className="space-y-2 sm:space-y-3">
                {personalInfo.goals.map((goal, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-4 text-base sm:text-lg"
                  >
                    <span className="text-red-500 mt-0.5 sm:mt-1 flex-shrink-0">▸</span>
                    <span className="break-words" style={{ color: theme === 'light' ? '#000000' : '#ffffff' }}>{goal}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Download CV Button - Outside both boxes */}
          <div className="flex justify-center" style={{ marginTop: '72px' }}>
            <a
              href="/CV.pdf"
              download="Bui_Hoang_Viet_CV.pdf"
              className="btn-primary inline-flex items-center text-base font-semibold px-12 py-3 w-full"
              style={{ gap: '16px' }}
            >
              <FontAwesomeIcon icon={faDownload} className="flex-shrink-0" />
              <span style={{ whiteSpace: 'nowrap' }}>{t('downloadCV')}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
