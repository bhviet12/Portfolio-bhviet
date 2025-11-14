import { useLanguage } from '../contexts/LanguageContext';
import type { PersonalInfo } from '../types';

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

  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center bg-zinc-50 dark:bg-zinc-800 py-20"
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-black dark:text-white mb-8 md:mb-12">
          {t('aboutTitle')}
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-zinc-900 rounded-xl shadow-lg p-6 sm:p-8 md:p-12 border border-zinc-200 dark:border-zinc-700">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 mb-6 md:mb-8">
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
              </div>

              <div className="space-y-3 sm:space-y-4">
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

            <div className="border-t border-zinc-200 dark:border-zinc-700 pt-6 sm:pt-8">
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
