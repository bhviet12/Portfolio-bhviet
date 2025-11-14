import { useLanguage } from '../contexts/LanguageContext';
import type { Skill } from '../types';

const skills: Skill[] = [
  {
    category: 'frontendFrameworks',
    items: ['React', 'Vue.js', 'Angular', 'Next.js', 'Tailwind CSS', 'Bootstrap']
  },
  {
    category: 'programmingLanguages',
    items: ['JavaScript', 'TypeScript', 'Python', 'Java', 'C++', 'Go']
  },
  {
    category: 'backendFrameworks',
    items: ['Node.js', 'Express', 'Django', 'Spring Boot', 'NestJS', 'FastAPI']
  },
  {
    category: 'tools',
    items: ['Git', 'Docker', 'VS Code', 'Linux (Ubuntu)', 'Windows', 'Postman', 'MongoDB', 'PostgreSQL']
  }
];

export default function Skills() {
  const { t } = useLanguage();

  return (
    <section
      id="skills"
      className="min-h-screen flex items-center justify-center bg-white dark:bg-zinc-900 py-20"
    >
      <div className="container mx-auto px-4 max-w-7xl">
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-black dark:text-white mb-8 md:mb-12">
          {t('skillsTitle')}
        </h2>

        <div className="max-w-4xl mx-auto">
          {skills.map((skillCategory, index) => (
            <div
              key={index}
              className="mb-8 sm:mb-10"
            >
              <h3 className="text-xl sm:text-2xl font-bold text-red-500 mb-4 sm:mb-6 text-center md:text-left">
                {t(skillCategory.category)}
              </h3>
              <div className="flex flex-wrap justify-center md:justify-start gap-3 sm:gap-4">
                {skillCategory.items.map((skill, idx) => (
                  <span
                    key={idx}
                    className="text-base sm:text-lg text-zinc-700 dark:text-zinc-300 font-medium hover:text-red-500 dark:hover:text-red-500 transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
