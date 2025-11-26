import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../hooks/useTheme';
import type { Skill } from '../types';
import '../styles/layout.css';
import { FaReact, FaVuejs, FaBootstrap, FaJs, FaNodeJs, FaGitAlt, FaDocker, FaLinux, FaWindows } from 'react-icons/fa';
import { SiTailwindcss, SiTypescript, SiLaravel, SiPostman, SiMongodb, SiPostgresql } from 'react-icons/si';
import { VscCode } from 'react-icons/vsc';
import React from 'react';

const skillIcons: Record<string, React.ReactElement> = {
  'React': <FaReact />,
  'Vue.js': <FaVuejs />,
  'Tailwind CSS': <SiTailwindcss />,
  'Bootstrap': <FaBootstrap />,
  'JavaScript': <FaJs />,
  'TypeScript': <SiTypescript />,
  'Node.js': <FaNodeJs />,
  'Laravel': <SiLaravel />,
  'Git': <FaGitAlt />,
  'Docker': <FaDocker />,
  'VS Code': <VscCode />,
  'Linux (Ubuntu)': <FaLinux />,
  'Windows': <FaWindows />,
  'Postman': <SiPostman />,
  'MongoDB': <SiMongodb />,
  'PostgreSQL': <SiPostgresql />
};


const skills: Skill[] = [
  {
    category: 'frontendFrameworks',
    items: ['React', 'Vue.js', 'Tailwind CSS', 'Bootstrap']
  },
  {
    category: 'programmingLanguages',
    items: ['JavaScript', 'TypeScript']
  },
  {
    category: 'backendFrameworks',
    items: ['Node.js', 'Laravel']
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

          <div className="skills-grid w-full grid grid-cols-4 md:grid-cols-4 gap-8">
            {skills.map((skillCategory, categoryIndex) => (
              <div
                key={categoryIndex}
                className="flex flex-col items-center"
                data-aos="fade-down"
              >
                <h3
                  className="text-xl sm:text-2xl font-bold"
                  style={{ color: '#ef4444', marginBottom: '16px' }}
                >
                  {t(skillCategory.category)}
                </h3>
                <div className="space-y-10">
                  {skillCategory.items.map((skill, skillIndex) => (
                    <div
                      key={skillIndex}
                      className="flex flex-col items-center"
                      data-aos="fade-down"
                    >
                      <div
                        className="flex items-center"
                        style={{
                          gap: '20px',
                          transition: 'transform 0.3s ease',
                          cursor: 'pointer'
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.transform = 'scale(1.15)';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.transform = 'scale(1)';
                        }}
                      >
                        <span
                          style={{
                            color: '#ef4444',
                            fontSize: '20px',
                            display: 'flex',
                            alignItems: 'center'
                          }}
                        >
                          {skillIcons[skill]}
                        </span>
                        <span
                          className="text-lg sm:text-xl font-medium"
                          style={{ color: theme === 'light' ? '#000000' : '#ffffff' }}
                        >
                          {skill}
                        </span>
                      </div>
                      <div
                        style={{
                          borderBottom: '3px solid #ef4444',
                          marginTop: '18px',
                          width: '150px',
                          marginBottom: '8px'
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