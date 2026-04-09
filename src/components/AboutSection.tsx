import { useLanguage } from '@/contexts/LanguageContext';
import { MdKeyboardArrowRight } from 'react-icons/md';

const infoCards = [
  { labelKey: 'about_fullname' as const, valueKey: 'about_fullname_val' as const },
  { labelKey: 'about_birth' as const, valueKey: 'about_birth_val' as const },
  { labelKey: 'about_university' as const, valueKey: 'about_univ_val' as const },
  { labelKey: 'about_gpa' as const, valueKey: 'about_gpa_val' as const },
  { labelKey: 'about_major' as const, valueKey: 'about_major_val' as const },
  { labelKey: 'about_email' as const, valueKey: 'about_email_val' as const },
  { labelKey: 'about_phone' as const, valueKey: 'about_phone_val' as const },
  { labelKey: 'about_location' as const, valueKey: 'about_location_val' as const },
];

const goals = [
  { key: 'about_goal1' as const },
  { key: 'about_goal2' as const },
  { key: 'about_goal3' as const },
  { key: 'about_goal4' as const },
];

export default function AboutSection() {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-20 px-6 md:px-10 bg-[#FAFAFA] dark:bg-[#111111] border-y-2 border-black dark:border-white font-body">
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <div className="flex items-baseline gap-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-black uppercase tracking-tight text-black dark:text-white">
            {t('about_title')}
          </h2>
          <div className="h-[4px] flex-1 bg-black dark:bg-white" />
          <div className="text-[10px] font-mono text-[#E31B23] hidden sm:block">/* bio.data */</div>
        </div>

        {/* Top Row: Image + Info Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-12 items-start">

          {/* Profile Image */}
          <div className="lg:col-span-4 flex justify-center lg:justify-start" data-aos="fade-up">
            <div className="relative inline-block">
              <img
                src="/bhv.png"
                alt="Bùi Hoàng Việt"
                className="w-full max-w-xs border-4 border-black dark:border-white"
              />
              <div className="absolute -bottom-4 -right-4 w-full h-full border-4 border-[#E31B23] z-[-1]"></div>
            </div>
          </div>

          {/* Personal Info Cards + Bio */}
          <div className="lg:col-span-8" data-aos="fade-up" data-aos-delay="150">
            {/* Info Cards Grid */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
              {infoCards.map((card) => (
                <div
                  key={card.labelKey}
                  className="bg-white dark:bg-[#0a0a0a] border-2 border-black dark:border-white p-3 hover:bg-[#E31B23] group transition-colors duration-100 cursor-default"
                >
                  <div className="text-[8px] font-black uppercase tracking-widest text-black/40 dark:text-white/40 group-hover:text-white/60 mb-1 leading-tight truncate">
                    {t(card.labelKey)}
                  </div>
                  <div className="text-xs font-bold text-black dark:text-white group-hover:text-white leading-tight break-words">
                    {t(card.valueKey)}
                  </div>
                </div>
              ))}
            </div>

            {/* Bio Paragraphs */}
            <div className="space-y-4">
              <p className="text-sm leading-relaxed text-black/70 dark:text-white/70 font-medium">
                {t('about_bio1')}
              </p>
              <p className="text-sm leading-relaxed text-black/70 dark:text-white/70 font-medium">
                {t('about_bio2')}
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Row: Education Timeline + Career Goals */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">

          {/* Education Timeline */}
          <div data-aos="fade-up" data-aos-delay="100">
            <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight text-black dark:text-white mb-8 border-b-4 border-black dark:border-white inline-block pb-2">
              {t('about_edu_title')}
            </h3>

            <div className="relative pl-8 border-l-4 border-[#E31B23]">
              <div className="absolute -left-[11px] top-1 w-5 h-5 bg-[#E31B23]" />
              <div className="text-[#E31B23] font-mono text-[10px] font-black uppercase mb-3">
                2021 — 2025
              </div>
              <h4 className="text-base md:text-lg font-black uppercase mb-2 text-black dark:text-white leading-tight">
                {t('about_school')}
              </h4>
              <p className="text-black/60 dark:text-white/60 text-xs mb-4 font-bold uppercase">
                {t('about_major')}
              </p>
              <div className="inline-block px-3 py-1 bg-black dark:bg-white text-[10px] font-black text-white dark:text-black uppercase">
                GPA: {t('about_gpa_val')}
              </div>
            </div>
          </div>

          {/* Career Goals */}
          <div data-aos="fade-up" data-aos-delay="250">
            <h3 className="text-xl md:text-2xl font-black uppercase tracking-tight text-black dark:text-white mb-8 border-b-4 border-black dark:border-white inline-block pb-2">
              {t('about_goals_title')}
            </h3>

            <div className="space-y-4">
              {goals.map((goal) => (
                <div
                  key={goal.key}
                  className="flex items-start gap-4 bg-white dark:bg-[#0a0a0a] border-2 border-black dark:border-white p-4 hover:border-[#E31B23] dark:hover:border-[#E31B23] group transition-colors duration-100"
                >
                  <MdKeyboardArrowRight className="text-[#E31B23] mt-0 flex-shrink-0 text-lg" />
                  <p className="text-sm font-bold text-black dark:text-white group-hover:text-[#E31B23] transition-colors duration-100 leading-tight">
                    {t(goal.key)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}