import { useLanguage } from '../contexts/LanguageContext';
import { useTheme } from '../contexts/ThemeContext';
import type { Project } from '../types';

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
    technologies: ['React', 'Tailwind CSS', 'OpenWeather API']
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
      <div className="container mx-auto px-4 max-w-7xl">
        <h2
          className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 md:mb-12"
          style={{ color: theme === 'light' ? '#000000' : '#ffffff' }}
        >
          {t('projectsTitle')}
        </h2>

        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative overflow-hidden rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 hover:border-red-500 dark:hover:border-red-500 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
            >
              <div className="relative h-48 sm:h-56 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-300 flex items-center justify-center">
                  <span className="text-white font-bold text-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    {t('viewProject')}
                  </span>
                </div>
              </div>

              <div className="p-4 sm:p-6">
                <h3
                  className="text-lg sm:text-xl font-bold mb-2 group-hover:text-red-500 transition-colors"
                  style={{ color: theme === 'light' ? '#000000' : '#ffffff' }}
                >
                  {project.title}
                </h3>
                <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-3 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span
                      key={index}
                      className="text-xs text-zinc-600 dark:text-zinc-400"
                    >
                      {tech}
                      {index < project.technologies.length - 1 && ' •'}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
