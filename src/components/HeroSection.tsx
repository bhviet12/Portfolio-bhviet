import { useLanguage } from '@/contexts/LanguageContext';

const stats = [
  { value: '1+', labelKey: 'hero_stat_years' as const },
  { value: '8+', labelKey: 'hero_stat_projects' as const },
  { value: '10+', labelKey: 'hero_stat_tech' as const },
];

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <section
      id="home"
      className="min-h-[calc(100vh-64px)] flex items-center justify-center p-4 sm:p-6 lg:p-10 bg-white dark:bg-[#0a0a0a] pt-20 sm:pt-24"
    >
      <div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">

        {/* Left: Text Content */}
        <div className="lg:col-span-7 text-center lg:text-left" data-aos="fade-up">
          {/* Status Badge */}
          <div className="inline-block bg-black dark:bg-white text-white dark:text-black px-3 py-1 text-[10px] font-black mb-6 tracking-[0.2em] uppercase">
            {t('hero_status')}
          </div>

          {/* Heading */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.95] mb-6 text-black dark:text-white uppercase">
            {t('hero_greeting')}<br />
            <span className="text-[#E31B23]">{t('hero_name')}</span>
          </h1>

          {/* Subheading */}
          <p className="text-sm sm:text-base md:text-lg text-black/60 dark:text-white/60 max-w-2xl leading-relaxed mb-8 font-medium">
            {t('hero_subtitle')}
          </p>

          {/* CTA Buttons */}
          <div className="flex gap-4 flex-wrap justify-center lg:justify-start">
            <a
              href="#contact"
              className="px-8 py-4 bg-[#E31B23] text-white font-black uppercase text-xs kinetic-hover kinetic-shadow-red transition-transform duration-100 border-2 border-black dark:border-white"
            >
              {t('hero_btnProject')}
            </a>
            <a
              href="/CV-BuiHoangViet.pdf"
              download
              className="px-8 py-4 border-4 border-black dark:border-white text-black dark:text-white font-black uppercase text-xs hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-colors duration-100"
            >
              TẢI CV
            </a>
          </div>
        </div>

        {/* Right: Image + Stats */}
        <div className="lg:col-span-5" data-aos="fade-left" data-aos-delay="200">
          {/* Portrait Image */}
          <div className="aspect-square border-4 border-black dark:border-white flex items-center justify-center relative overflow-hidden group kinetic-shadow-red max-w-[320px] sm:max-w-sm mx-auto lg:max-w-none lg:mx-0">
            <img
              src="/bhv.png"
              alt="Bùi Hoàng Việt"
              className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 group-hover:contrast-100 transition-all duration-500 scale-110 group-hover:scale-100"
            />
          </div>

          {/* Stats Row */}
          <div className="flex gap-6 mt-6 pt-6 border-t-2 border-black/20 dark:border-white/20 justify-center lg:justify-start">
            {stats.map((s) => (
              <div key={s.labelKey}>
                <div className="text-2xl sm:text-3xl font-black text-black dark:text-white">{s.value}</div>
                <div className="text-[8px] sm:text-[9px] font-black uppercase tracking-widest text-black/50 dark:text-white/50 mt-1">{t(s.labelKey)}</div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}