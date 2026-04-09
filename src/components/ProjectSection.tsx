import { useLanguage } from '@/contexts/LanguageContext';
import type { TransKey } from '@/contexts/LanguageContext';
import { projects } from '@/data/content';

export default function ProjectSection() {
  const { t } = useLanguage();

  return (
    <section id="projects" className="py-20 px-6 md:px-10 bg-[#FAFAFA] dark:bg-[#111111] border-b-2 border-black dark:border-white font-body">
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <div className="flex items-baseline gap-4 mb-12 justify-end">
          <div className="text-[10px] font-mono text-[#E31B23] hidden sm:block">/* deploy.manifest() */</div>
          <div className="h-[4px] flex-1 bg-black dark:bg-white" />
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-black dark:text-white">
            {t('proj_title')}
          </h2>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
          {projects.map((project) => (
            <div key={project.id} className="group relative" data-aos="fade-up">
              {/* Card */}
              <div className="bg-white dark:bg-[#0a0a0a] border-4 border-black dark:border-white p-6 md:p-8 transition-all group-hover:-translate-y-1 group-hover:shadow-brutal">
                {/* Image */}
                <div className="aspect-video mb-6 overflow-hidden bg-black border-2 border-black dark:border-white">
                  <img
                    src={project.img}
                    alt={t(project.titleKey as TransKey)}
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                  />
                </div>

                {/* Title + Status */}
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-black uppercase text-black dark:text-white tracking-tight leading-tight">
                    {t(project.titleKey as TransKey)}
                  </h3>
                  <span
                    className={`text-[9px] font-black px-2 py-1 uppercase flex-shrink-0 ${
                      project.isDeployed
                        ? 'bg-[#E31B23] text-white'
                        : 'border-2 border-black dark:border-white text-black dark:text-white'
                    }`}
                  >
                    {project.isDeployed ? t('proj_deployed') : t('proj_beta')}
                  </span>
                </div>

                {/* Description */}
                <p className="text-black/60 dark:text-white/60 text-sm mb-6 leading-relaxed font-medium">
                  {t(project.descKey as TransKey)}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2">
                  {t(project.tagsKey as TransKey).split('·').map((tech) => (
                    <span
                      key={tech.trim()}
                      className="px-2 py-1 bg-black dark:bg-white text-[10px] font-black text-white dark:text-black uppercase"
                    >
                      {tech.trim()}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}