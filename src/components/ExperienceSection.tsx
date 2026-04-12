import { useLanguage } from '@/contexts/LanguageContext';
import type { TransKey } from '@/contexts/LanguageContext';

const experienceRoles = [
  {
    companyKey: 'exp_role1_company' as TransKey,
    titleKey: 'exp_role1_title' as TransKey,
    periodKey: 'exp_role1_period' as TransKey,
    taskKeys: [
      'exp_role1_task1',
      'exp_role1_task2',
      'exp_role1_task3',
      'exp_role1_task4',
      'exp_role1_task5',
      'exp_role1_task6',
      'exp_role1_task7',
    ] as TransKey[],
    isCurrent: true,
    shadowClass: 'shadow-brutal-red',
    iconColor: 'text-[#E31B23]',
  },
  {
    companyKey: 'exp_role2_company' as TransKey,
    titleKey: 'exp_role2_title' as TransKey,
    periodKey: 'exp_role2_period' as TransKey,
    taskKeys: [
      'exp_role2_task1',
      'exp_role2_task2',
      'exp_role2_task3',
      'exp_role2_task4',
      'exp_role2_task5',
      'exp_role2_task6',
      'exp_role2_task7',
    ] as TransKey[],
    isCurrent: false,
    shadowClass: 'shadow-brutal',
    iconColor: 'text-black dark:text-white',
  },
  {
    companyKey: 'exp_role3_company' as TransKey,
    titleKey: 'exp_role3_title' as TransKey,
    periodKey: 'exp_role3_period' as TransKey,
    taskKeys: [
      'exp_role3_task1',
      'exp_role3_task2',
      'exp_role3_task3',
      'exp_role3_task4',
      'exp_role3_task5',
      'exp_role3_task6',
      'exp_role3_task7',
      'exp_role3_task8',
      'exp_role3_task9',
    ] as TransKey[],
    isCurrent: false,
    shadowClass: '',
    iconColor: 'text-black dark:text-white',
    opacity: true,
  },
];

export default function ExperienceSection() {
  const { t } = useLanguage();

  return (
    <section id="experience" className="py-20 px-6 md:px-10 bg-[#F5F5F5] dark:bg-[#1a1a1a] border-b-2 border-black dark:border-white font-body">
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <div className="flex items-baseline gap-4 mb-12 justify-end">
          <div className="text-[10px] font-mono text-[#E31B23] hidden sm:block">/* exec.profile_history() */</div>
          <div className="h-[4px] flex-1 bg-black dark:bg-white" />
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-black dark:text-white">
            {t('exp_title')}
          </h2>
        </div>

        {/* Experience Cards */}
        <div className="space-y-10">
          {experienceRoles.map((role) => (
            <div
              key={role.companyKey}
              className={`
                bg-white dark:bg-[#0a0a0a] border-4 border-black dark:border-white
                p-6 md:p-8 relative overflow-hidden transition-transform duration-100
                hover:-translate-y-1 hover:shadow-brutal group
                ${role.shadowClass}
                ${role.opacity ? 'opacity-80 hover:opacity-100 transition-opacity' : ''}
              `}
            >
              {/* Current badge */}
              {role.isCurrent && (
                <div className="absolute top-0 right-0 bg-[#E31B23] text-white px-4 md:px-6 py-2 font-black uppercase text-[10px] md:text-xs tracking-widest">
                  {t('exp_current')}
                </div>
              )}

              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6 gap-3">
                <div>
                  <h3 className={`text-xl md:text-2xl font-black uppercase tracking-tighter leading-tight pr-28 md:pr-36 text-black dark:text-white ${!role.isCurrent ? 'pr-0' : ''}`}>
                    {t(role.companyKey)}
                  </h3>
                  <p className="text-[#E31B23] font-bold text-sm md:text-base uppercase tracking-tight">
                    {t(role.titleKey)}
                  </p>
                </div>
                <div className="bg-black dark:bg-white text-white dark:text-black px-3 py-1 text-xs font-black uppercase tracking-widest h-fit">
                  {t(role.periodKey)}
                </div>
              </div>

              <ul className="space-y-4">
                {role.taskKeys.map((taskKey) => (
                  <li key={taskKey} className="flex items-start gap-4">
                    <span className={`${role.iconColor} mt-1 flex-shrink-0`}>
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20 3H4c-.6 0-1 .4-1 1v16c0 .6.4 1 1 1h16c.6 0 1-.4 1-1V4c0-.6-.4-1-1-1zm-1 16H5V5h14v14zM7 15l3-3-3-3 1.4-1.4L9.8 11l1.6 1.6L7 15zm5 1H9v-2h2v2zm0-4H9V9h2v2z"/></svg>
                    </span>
                    <p className={`font-bold leading-tight uppercase text-xs md:text-sm ${role.isCurrent ? 'text-black dark:text-white' : 'text-black/70 dark:text-white/70'}`}>
                      {t(taskKey)}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}