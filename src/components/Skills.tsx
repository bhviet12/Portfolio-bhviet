import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';
import type { Skill } from '../types';
import '../styles/layout.css';

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
  const { theme } = useTheme();

  return (
    <section
      id="skills"
      className="min-h-screen flex items-center justify-center py-20"
      style={{
        backgroundColor: theme === 'light' ? '#fafafa' : '#000000'
      }}
    >
      <div className="containerest">
        <div className="w-full flex flex-col items-center">
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h1
              className="text-4xl sm:text-5xl md:text-6xl font-bold"
              style={{
                color: '#ef4444',
                display: 'inline-block',
                borderBottom: '4px solid #ef4444',
                paddingBottom: '10px'
              }}
            >
              {t('skillsTitle')}
            </h1>
          </div>

          <div className="w-full grid grid-cols-1 md:grid-cols-4 gap-8">
            {skills.map((skillCategory, categoryIndex) => (
              <div key={categoryIndex}>
                <h3
                  className="text-xl sm:text-2xl font-bold mb-6"
                  style={{ color: '#ef4444' }}
                >
                  {t(skillCategory.category)}
                </h3>
                <div className="space-y-6">
                  {skillCategory.items.map((skill, skillIndex) => (
                    <div key={skillIndex}>
                      <div className="flex items-center">
                        <span
                          className="text-base sm:text-lg font-medium"
                          style={{ color: theme === 'light' ? '#000000' : '#ffffff' }}
                        >
                          {skill}
                        </span>
                      </div>
                      <div
                        style={{
                          borderBottom: '2px solid #ef4444',
                          marginTop: '12px'
                        }}
                      />
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
