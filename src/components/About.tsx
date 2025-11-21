import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';
import type { PersonalInfo } from '../types';
import '../styles/layout.css';
import '../styles/button.css';

const personalInfo: PersonalInfo = {
  name: 'Tên của bạn',
  age: 22,
  school: 'Tên trường đại học',
  gpa: '3.5/4.0',
  major: 'Công nghệ thông tin',
  email: 'your.email@example.com',
  phone: '+84 123 456 789',
  goals: [
    'Trở thành Full-stack Developer chuyên nghiệp',
    'Nắm vững các công nghệ Cloud (AWS/Azure)',
    'Đóng góp cho các dự án Open Source lớn',
    'Xây dựng sản phẩm công nghệ có ích cho cộng đồng'
  ]
};

export default function About() {
  const { t } = useLanguage();
  const { theme } = useTheme();

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

          <div className="w-full grid grid-cols-2 md:grid-cols-2 gap-6">
            {/* Box 1: Personal Information */}
            <div
              className="bg-white dark:bg-zinc-900 rounded-xl shadow-xl p-6 sm:p-8"
              data-aos="fade-right"
              data-aos-duration="1000"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-red-500 mb-4 sm:mb-6">
                {t('personalInfo')}
              </h3>
              <div className="space-y-3 sm:space-y-4">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                  <span className="text-red-500 font-semibold text-sm sm:text-base sm:min-w-[100px]">
                    {t('name')}:
                  </span>
                  <span className="text-zinc-800 dark:text-zinc-200 text-sm sm:text-base break-words">{personalInfo.name}</span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                  <span className="text-red-500 font-semibold text-sm sm:text-base sm:min-w-[100px]">
                    {t('age')}:
                  </span>
                  <span className="text-zinc-800 dark:text-zinc-200 text-sm sm:text-base">{personalInfo.age}</span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                  <span className="text-red-500 font-semibold text-sm sm:text-base sm:min-w-[100px]">
                    {t('school')}:
                  </span>
                  <span className="text-zinc-800 dark:text-zinc-200 text-sm sm:text-base break-words">{personalInfo.school}</span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                  <span className="text-red-500 font-semibold text-sm sm:text-base sm:min-w-[100px]">
                    {t('gpa')}:
                  </span>
                  <span className="text-zinc-800 dark:text-zinc-200 text-sm sm:text-base">{personalInfo.gpa}</span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                  <span className="text-red-500 font-semibold text-sm sm:text-base sm:min-w-[100px]">
                    {t('major')}:
                  </span>
                  <span className="text-zinc-800 dark:text-zinc-200 text-sm sm:text-base break-words">{personalInfo.major}</span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                  <span className="text-red-500 font-semibold text-sm sm:text-base sm:min-w-[100px]">
                    {t('email')}:
                  </span>
                  <span className="text-zinc-800 dark:text-zinc-200 text-sm sm:text-base break-words">{personalInfo.email}</span>
                </div>

                <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
                  <span className="text-red-500 font-semibold text-sm sm:text-base sm:min-w-[100px]">
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
              <h3 className="text-xl sm:text-2xl font-bold text-red-500 mb-3 sm:mb-4">
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
        </div>
      </div>
    </section>
  );
}
