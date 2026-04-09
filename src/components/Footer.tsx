import { useLanguage } from '@/contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer className="bg-white dark:bg-black border-t-4 border-black dark:border-white py-6 px-6 md:px-10 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] tracking-[0.2em] font-black uppercase">
      <div className="text-black dark:text-white">©2025_DEV_MONOLITH.BHV()</div>
      <div className="flex gap-6">
        <a
          className="text-black dark:text-white hover:text-[#E31B23] dark:hover:text-[#E31B23] transition-colors"
          href="https://github.com/bhviet12"
          target="_blank"
          rel="noopener noreferrer"
        >
          {t('footer_github')}
        </a>
        <a
          className="text-black dark:text-white hover:text-[#E31B23] dark:hover:text-[#E31B23] transition-colors"
          href="#"
        >
          {t('footer_linkedin')}
        </a>
        <a
          className="text-black dark:text-white hover:text-[#E31B23] dark:hover:text-[#E31B23] transition-colors"
          href="#"
        >
          {t('footer_source')}
        </a>
      </div>
    </footer>
  );
}
