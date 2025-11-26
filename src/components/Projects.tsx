import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../hooks/useTheme';
import type { Project } from '../types';
import '../styles/layout.css';

const projects: Project[] = [
  {
    id: 1,
    title: 'E-commerce Website',
    description: 'Một trang web thương mại điện tử với giỏ hàng và thanh toán',
    image: 'https://placehold.co/600x400/4F46E5/FFFFFF?text=E-commerce',
    link: 'https://github.com/yourusername/project1',
    technologies: ['React', 'Node.js', 'MongoDB']
  },
  {
    id: 2,
    title: 'Task Management App',
    description: 'Ứng dụng quản lý công việc với drag & drop',
    image: 'https://placehold.co/600x400/06B6D4/FFFFFF?text=Task+Manager',
    link: 'https://github.com/yourusername/project2',
    technologies: ['Vue.js', 'Express', 'PostgreSQL']
  },
  {
    id: 3,
    title: 'Social Media Dashboard',
    description: 'Dashboard phân tích mạng xã hội với biểu đồ real-time',
    image: 'https://placehold.co/600x400/8B5CF6/FFFFFF?text=Dashboard',
    link: 'https://github.com/yourusername/project3',
    technologies: ['Next.js', 'TypeScript', 'Chart.js']
  },
  {
    id: 4,
    title: 'Weather Forecast App',
    description: 'Ứng dụng dự báo thời tiết với API tích hợp',
    image: 'https://placehold.co/600x400/10B981/FFFFFF?text=Weather+App',
    link: 'https://github.com/yourusername/project4',
    technologies: ['React', 'Tailwind CSS', 'MogoDB','Node.js']
  }
];

export default function Projects() {
  const { t } = useLanguage();
  const { theme } = useTheme();

  return (
    <section
      id="projects"
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
              {t('projectsTitle')}
            </h1>
          </div>

          <div className="projects-grid w-full grid grid-cols-4 md:grid-cols-4" style={{ gap: '40px' }}>
            {projects.map((project) => (
              <a
                key={project.id}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group relative overflow-hidden rounded-2xl"
                data-aos="fade-up"
                data-aos-duration="1000"
                style={{
                  backgroundColor: theme === 'light' ? '#ffffff' : '#18181b',
                  transition: 'all 0.3s ease',
                  textDecoration: 'none',
                  border: `2px solid ${theme === 'light' ? '#e5e7eb' : '#27272a'}`,
                  padding: '0',
                  borderRadius: '16px'
                }}
              >
                <div className="relative h-20 md:h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300 flex items-center justify-center">
                    <span className="text-white font-bold text-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {t('viewProject')}
                    </span>
                  </div>
                </div>

                <div className="" style={{padding :'18px'}}>
                  <h3
                    className="text-xl md:text-2xl font-bold"
                    style={{ color: theme === 'light' ? '#000000' : '#ffffff', marginBottom: '12px' }}
                  >
                    {project.title}
                  </h3>
                  <p
                    className="text-base"
                    style={{ color: theme === 'light' ? '#6b7280' : '#9ca3af', marginBottom: '16px' }}
                  >
                    {project.description}
                  </p>

                  <div className="flex flex-wrap" style={{ gap: '12px' }}>
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-sm font-medium rounded-full"
                        style={{
                          backgroundColor: theme === 'light' ? '#fee2e2' : '#7f1d1d',
                          color: theme === 'light' ? '#991b1b' : '#fca5a5'
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
