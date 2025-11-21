import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';
import type { PersonalInfo } from '../types';
import '../styles/layout.css';
import '../styles/button.css';

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
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-center"
            style={{ color: theme === 'light' ? '#000000' : '#ffffff', marginBottom: '24px' }}
          >
            {t('aboutTitle')}
          </h1>
          <div
            className="w-24 h-1"
            style={{ backgroundColor: '#ef4444', marginBottom: '28px' }}
          />

          <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Box 1: Personal Information */}
            <div
              className="bg-white dark:bg-zinc-900 rounded-xl shadow-xl p-6 sm:p-8"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-red-500 mb-6">
                {t('personalInfo')}
              </h3>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex items-center gap-2">
                  <span className="text-red-500 font-semibold text-sm sm:text-base min-w-[100px]">
                    {t('name')}:
                  </span>
                  <span className="text-zinc-800 dark:text-zinc-200 text-sm sm:text-base break-words">{personalInfo.name}</span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-red-500 font-semibold text-sm sm:text-base min-w-[100px]">
                    {t('age')}:
                  </span>
                  <span className="text-zinc-800 dark:text-zinc-200 text-sm sm:text-base">{personalInfo.age}</span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-red-500 font-semibold text-sm sm:text-base min-w-[100px]">
                    {t('school')}:
                  </span>
                  <span className="text-zinc-800 dark:text-zinc-200 text-sm sm:text-base break-words">{personalInfo.school}</span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-red-500 font-semibold text-sm sm:text-base min-w-[100px]">
                    {t('gpa')}:
                  </span>
                  <span className="text-zinc-800 dark:text-zinc-200 text-sm sm:text-base">{personalInfo.gpa}</span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-red-500 font-semibold text-sm sm:text-base min-w-[100px]">
                    {t('major')}:
                  </span>
                  <span className="text-zinc-800 dark:text-zinc-200 text-sm sm:text-base break-words">{personalInfo.major}</span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-red-500 font-semibold text-sm sm:text-base min-w-[100px]">
                    {t('email')}:
                  </span>
                  <span className="text-zinc-800 dark:text-zinc-200 text-sm sm:text-base break-words">{personalInfo.email}</span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-red-500 font-semibold text-sm sm:text-base min-w-[100px]">
                    {t('phone')}:
                  </span>
                  <span className="text-zinc-800 dark:text-zinc-200 text-sm sm:text-base break-words">{personalInfo.phone}</span>
                </div>
              </div>
            </div>

            {/* Box 2: Future Goals */}
            <div
              className="bg-white dark:bg-zinc-900 rounded-xl shadow-xl p-6 sm:p-8"
              data-aos="fade-left"
              data-aos-duration="1000"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-red-500 mb-6">
                {t('futureGoals')}
              </h3>
              <ul className="space-y-2 sm:space-y-3">
                {personalInfo.goals.map((goal, index) => (
                  <li
                    key={index}
                    className="flex items-start gap-2 sm:gap-3 text-zinc-800 dark:text-zinc-200 text-sm sm:text-base"
                  >
                    <span className="text-red-500 mt-0.5 sm:mt-1 flex-shrink-0">▸</span>
                    <span className="break-words">{goal}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Download CV Button - Outside both boxes */}
          <div className="mt-12 flex justify-center">
            <a
              href="/CV.pdf"
              download="Bui_Hoang_Viet_CV.pdf"
              className="btn-primary inline-flex items-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
              {t('downloadCV')}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
