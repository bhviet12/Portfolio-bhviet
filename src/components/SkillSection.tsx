import { useLanguage } from '@/contexts/LanguageContext';
import { frontendStack, backendStack, infraStack } from '@/data/content';
import {
  MdWeb, MdBolt, MdPalette, MdMemory, MdStorage, MdCached,
  MdApi, MdWidgets, MdDns, MdComputer,
  MdCode, MdCategory, MdGridView,
} from 'react-icons/md';
import { FaJs, FaCode } from 'react-icons/fa';

const iconMap: Record<string, React.ReactNode> = {
  deployed_code: <MdWeb />,
  bolt: <MdBolt />,
  palette: <MdPalette />,
  javascript: <FaJs />,
  code: <MdCode />,
  category: <MdCategory />,
  memory: <MdMemory />,
  settings_ethernet: <MdMemory />,
  storage: <MdStorage />,
  database: <MdCached />,
  cached: <MdCached />,
  api: <MdApi />,
  terminal: <FaCode />,
  cloud: <MdApi />,
  widgets: <MdWidgets />,
  code_blocks: <FaCode />,
  computer: <MdComputer />,
  dns: <MdDns />,
  grid_view: <MdGridView />,
};

const columns = [
  { labelKey: 'skill_fe' as const, items: frontendStack },
  { labelKey: 'skill_be' as const, items: backendStack },
  { labelKey: 'skill_data' as const, items: infraStack },
] as const;

export default function SkillSection() {
  const { t } = useLanguage();

  return (
    <section id="skills" className="py-20 px-6 md:px-10 bg-white dark:bg-[#0a0a0a] border-b-2 border-black dark:border-white font-body">
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <div className="flex items-baseline gap-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-black dark:text-white">
            {t('skill_title')}
          </h2>
          <div className="h-[4px] flex-1 bg-black dark:bg-white" />
          <div className="text-[10px] font-mono text-[#E31B23] hidden sm:block">/* sys.get_capabilities() */</div>
        </div>

        {/* Arsenal Grid: 3 columns */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {columns.map((col) => (
            <div key={col.labelKey} className="border-t-4 border-black dark:border-white">
              {/* Column header */}
              <div className="bg-black dark:bg-white text-white dark:text-black px-4 py-2 text-[10px] font-black uppercase tracking-[0.2em] mb-4">
                {t(col.labelKey)}
              </div>

              {/* Arsenal Grid */}
              <div className="grid grid-cols-2 border-l-2 border-black border-t-2 dark:border-white">
                {col.items.map((tech) => (
                  <div
                    key={tech.name}
                    className="arsenal-grid-item p-4 group cursor-default"
                  >
                    <span className="text-xl text-[#E31B23] mb-2 block">
                      {iconMap[tech.icon] ?? <MdCode />}
                    </span>
                    <div className="text-xs font-black uppercase text-black dark:text-white group-hover:text-white">
                      {tech.name}
                    </div>
                    <div className="text-[8px] font-mono opacity-40 text-black/40 dark:text-white/40 uppercase">
                      {tech.tag}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}