import { useLanguage } from '@/contexts/LanguageContext';
import { portfolioItems } from '@/data/content';

type ProjectType = 'Web' | 'App' | 'Thiết kế';

const TECH_TAGS: Record<ProjectType, string[]> = {
  Web: ['Vue', 'Node.js', 'PostgreSQL'],
  App: ['React Native', 'Firebase'],
  'Thiết kế': ['Figma', 'Illustrator'],
};

export default function ProjectSection() {
  const { t } = useLanguage();

  return (
    <section
      id="projects"
      className="py-20 px-6 md:px-10 bg-[#FAFAFA] dark:bg-[#111111] border-b-2 border-black dark:border-white"
    >
      <div className="max-w-6xl mx-auto">

        {/* Section Header (right-aligned) */}
        <div className="flex items-baseline gap-4 mb-12 justify-end">
          <div className="text-[10px] font-mono text-[#E31B23] hidden sm:block">
            {/* project_archive.log */}
          </div>
          <div className="h-[4px] flex-1 bg-black dark:bg-white" />
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-black dark:text-white">
            {t('proj_title')}
          </h2>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
          {portfolioItems.map((project) => {
            const type = project.type as ProjectType;
            const isDeployed = type === 'Web';
            const techTags = TECH_TAGS[type] ?? [];

            return (
              <div key={project.title} className="group relative">
                {/* Card */}
                <div className="bg-white dark:bg-[#0a0a0a] border-4 border-black dark:border-white p-6 md:p-8 transition-all group-hover:translate-x-2 group-hover:-translate-y-1 group-hover:shadow-brutal">
                  {/* Image */}
                  <div className="aspect-video mb-6 overflow-hidden bg-black border-2 border-black dark:border-white">
                    <img
                      src={project.img}
                      alt={project.title}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                    />
                  </div>

                  {/* Title + Status */}
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-black uppercase text-black dark:text-white tracking-tight leading-tight">
                      {project.title}
                    </h3>
                    <span
                      className={`text-[9px] font-black px-2 py-1 uppercase ${
                        isDeployed
                          ? 'bg-[#E31B23] text-white'
                          : 'border-2 border-black dark:border-white text-black dark:text-white'
                      }`}
                    >
                      {isDeployed ? t('proj_deployed') : t('proj_beta')}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-black/60 dark:text-white/60 text-sm mb-6 leading-relaxed font-medium">
                    {project.desc}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2">
                    {techTags.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-black dark:bg-white text-[10px] font-black text-white dark:text-black uppercase"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
