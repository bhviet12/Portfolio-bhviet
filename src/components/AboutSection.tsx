// src/components/AboutSection.tsx
import { useLanguage } from '@/contexts/LanguageContext';
import type { TransKey } from '@/contexts/LanguageContext';
import { aboutInfoCards } from '@/data/content';

const goalKeys = ['about_goal1', 'about_goal2', 'about_goal3', 'about_goal4'] as const;

type InfoCardEntry = { labelKey: TransKey; value: string };

export default function AboutSection() {
  const { lang, t } = useLanguage();
  const cards = aboutInfoCards[lang];

  return (
    <section
      id="about"
      className="py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-10 bg-[#FAFAFA] dark:bg-[#111111] border-y-2 border-black dark:border-white"
    >
      <div className="max-w-6xl mx-auto">

        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 mb-8 sm:mb-12 text-center sm:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-black uppercase tracking-tight text-black dark:text-white whitespace-nowrap">
            {t('about_title')}
          </h2>
          <div className="h-[4px] flex-1 bg-black dark:bg-white hidden sm:block" />
          <div className="text-[10px] font-mono text-[#E31B23] hidden sm:block">/* bio.data */</div>
        </div>

        {/* Top Row: Image + Info Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-10 mb-10 sm:mb-12 items-start">

          {/* Profile Image */}
          <div className="sm:col-span-1 lg:col-span-4 flex justify-center lg:justify-start">
            <div className="relative inline-block">
              <img
                src="/src/assets/bhviet.png"
                alt="Bùi Hoàng Việt"
                className="w-48 sm:w-full sm:max-w-xs border-2 sm:border-4 border-black dark:border-white"
              />
              <div className="absolute -bottom-3 sm:-bottom-4 -right-3 sm:-right-4 w-full h-full border-2 sm:border-4 border-[#E31B23] z-[-1]" />
            </div>
          </div>

          {/* Info Cards + Bio */}
          <div className="sm:col-span-1 lg:col-span-8">
            {/* Cards Grid — 2→3→4 cols */}
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-2 sm:gap-3">
              {cards.map((card: InfoCardEntry) => (
                <div
                  key={card.labelKey}
                  className="bg-white dark:bg-[#0a0a0a] border-2 border-black dark:border-white p-2 sm:p-3 hover:bg-[#E31B23] group transition-colors duration-100 cursor-default overflow-hidden flex flex-col"
                >
                  <div className="text-[7px] sm:text-[8px] font-black uppercase tracking-widest text-black/40 dark:text-white/40 group-hover:text-white/60 mb-1 leading-tight truncate">
                    {t(card.labelKey as TransKey)}
                  </div>
                  <div className="text-[10px] sm:text-xs font-bold text-black dark:text-white group-hover:text-white leading-tight break-words">
                    {card.value}
                  </div>
                </div>
              ))}
            </div>

            {/* Bio Paragraphs */}
            <div className="mt-5 sm:mt-6 space-y-3 sm:space-y-4">
              <p className="text-xs sm:text-sm leading-relaxed text-black/70 dark:text-white/70 font-medium">
                {t('about_bio1')}
              </p>
              <p className="text-xs sm:text-sm leading-relaxed text-black/70 dark:text-white/70 font-medium">
                {t('about_bio2')}
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Row: Education Timeline + Career Goals */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 sm:gap-10 lg:gap-16">

          {/* Education Timeline */}
          <div>
            <h3 className="text-lg sm:text-xl font-black uppercase tracking-tight text-black dark:text-white mb-6 sm:mb-8 border-b-2 sm:border-b-4 border-black dark:border-white inline-block pb-2">
              {t('about_eduTitle')}
            </h3>
            <div className="relative pl-6 sm:pl-8 border-l-4 border-[#E31B23]">
              <div className="absolute -left-[11px] top-1 w-5 h-5 bg-[#E31B23]" />
              <div className="text-[#E31B23] font-mono text-[10px] sm:text-xs mb-2 sm:mb-3 font-black uppercase tracking-widest">
                2021 — 2025
              </div>
              <h4 className="text-sm sm:text-base font-black uppercase mb-2 text-black dark:text-white leading-tight">
                {t('about_school')}
              </h4>
              <p className="text-black/60 dark:text-white/60 text-[10px] sm:text-xs mb-3 sm:mb-4 font-bold uppercase tracking-wide">
                {t('about_major')}
              </p>
              <div className="inline-block px-2 sm:px-3 py-1 bg-black dark:bg-white text-[9px] sm:text-[10px] font-black text-white dark:text-black uppercase">
                GPA: {t('about_gpa')}
              </div>
            </div>
          </div>

          {/* Career Goals */}
          <div>
            <h3 className="text-lg sm:text-xl font-black uppercase tracking-tight text-black dark:text-white mb-6 sm:mb-8 border-b-2 sm:border-b-4 border-black dark:border-white inline-block pb-2">
              {t('about_goalsTitle')}
            </h3>
            <div className="space-y-3 sm:space-y-4">
              {goalKeys.map((key) => (
                <div
                  key={key}
                  className="flex items-start gap-3 sm:gap-4 bg-white dark:bg-[#0a0a0a] border-2 border-black dark:border-white p-3 sm:p-4 hover:border-[#E31B23] dark:hover:border-[#E31B23] group transition-colors duration-100"
                >
                  <span className="material-symbols-outlined text-[#E31B23] mt-0 flex-shrink-0 text-base sm:text-lg">
                    keyboard_double_arrow_right
                  </span>
                  <p className="text-xs sm:text-sm font-bold text-black dark:text-white group-hover:text-[#E31B23] transition-colors duration-100 leading-tight">
                    {t(key)}
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
