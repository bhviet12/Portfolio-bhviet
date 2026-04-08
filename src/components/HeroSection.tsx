import { useLanguage } from '@/contexts/LanguageContext';

const CV_LINK = '/CV-Bui-Hoang-Viet.pdf';

const STATS = [
  { value: '1+', key: 'hero_statYears' as const },
  { value: '8+', key: 'hero_statProjects' as const },
  { value: '10+', key: 'hero_statTech' as const },
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
        <div className="lg:col-span-7 order-1 text-center lg:text-left">
          {/* Status Badge */}
          <div className="inline-block bg-black dark:bg-white text-white dark:text-black px-3 py-1 text-[10px] font-black mb-4 sm:mb-6 tracking-[0.2em] uppercase">
            {t('hero_status')}
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tighter leading-[0.95] mb-4 sm:mb-6 text-black dark:text-white uppercase">
            {t('hero_greeting')}<br />
            <span className="text-[#E31B23]">{t('hero_name')}</span>
          </h1>

          {/* Subheading */}
          <p className="text-sm sm:text-base md:text-lg text-black/60 dark:text-white/60 max-w-2xl leading-relaxed mb-6 sm:mb-8 font-medium">
            {t('hero_subtitle')}
          </p>

          {/* CTA Buttons */}
          <div className="flex gap-3 sm:gap-4 flex-wrap justify-center lg:justify-start">
            <a
              href="#contact"
              className="px-6 sm:px-8 py-3 sm:py-4 bg-[#E31B23] text-white font-black uppercase text-[10px] sm:text-xs kinetic-hover kinetic-shadow border-2 border-black dark:border-white transition-transform duration-100"
            >
              {t('hero_btnHire')}
            </a>
            <a
              href={CV_LINK}
              download
              className="px-6 sm:px-8 py-3 sm:py-4 border-2 sm:border-4 border-black dark:border-white text-black dark:text-white font-black uppercase text-[10px] sm:text-xs hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-colors duration-100"
            >
              {t('hero_btnCV')}
            </a>
          </div>
        </div>

        {/* Right: Image + Badge + Stats */}
        <div className="lg:col-span-5 order-2 mt-8 lg:mt-0 relative">
          {/* Image */}
          <div className="aspect-square border-2 sm:border-4 border-black dark:border-white flex items-center justify-center relative overflow-hidden group kinetic-shadow-brutal max-w-[280px] sm:max-w-sm mx-auto lg:max-w-none lg:mx-0">
            <img
              src="/src/assets/bhviet.png"
              alt="Bùi Hoàng Việt"
              className="w-full h-full object-cover grayscale contrast-125 group-hover:grayscale-0 group-hover:contrast-100 transition-all duration-500 scale-110 group-hover:scale-100"
            />
          </div>

          {/* Floating Badge (lg+) */}
          <div className="absolute -bottom-4 -right-4 lg:-bottom-6 lg:-right-6 bg-[#E31B23] p-3 lg:p-6 border-2 border-black dark:border-white hidden lg:block">
            <div className="text-2xl lg:text-4xl font-black text-white">1+</div>
            <div className="text-[9px] font-black uppercase tracking-widest text-white/80">
              {t('hero_expYears')}
            </div>
          </div>

          {/* Stats Row */}
          <div className="flex gap-4 sm:gap-6 mt-6 pt-4 sm:pt-6 border-t-2 border-black/20 dark:border-white/20 justify-center lg:justify-start">
            {STATS.map((stat) => (
              <div key={stat.key}>
                <div className="text-2xl sm:text-3xl font-black text-black dark:text-white">
                  {stat.value}
                </div>
                <div className="text-[8px] sm:text-[9px] font-black uppercase tracking-widest text-black/50 dark:text-white/50 mt-1">
                  {t(stat.key)}
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
