import { useState } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

export default function ContactSection() {
  const { t } = useLanguage();
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      alert(`Thanks! I'll be in touch soon.`);
      setForm({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <section
      id="contact"
      className="py-20 px-6 md:px-10 bg-white dark:bg-[#0a0a0a] border-t-2 border-black dark:border-white"
    >
      <div className="max-w-4xl mx-auto text-center">

        {/* Label */}
        <div className="text-[#E31B23] font-mono text-[10px] mb-6 tracking-[0.3em] uppercase font-black">
          system.connect()
        </div>

        {/* Heading */}
        <h2 className="text-5xl md:text-7xl font-black uppercase tracking-tighter text-black dark:text-white mb-12 leading-none">
          {t('contact_title')}<br />
          <span className="text-[#E31B23]">{t('contact_subtitle')}</span>
        </h2>

        {/* Contact Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          <div className="p-6 md:p-8 border-4 border-black dark:border-white hover:border-[#E31B23] transition-colors text-left bg-white dark:bg-[#111111] shadow-brutal">
            <div className="text-[10px] font-black text-black/30 dark:text-white/30 uppercase tracking-widest mb-4">
              {t('contact_emailLabel')}
            </div>
            <a
              href="mailto:bhviet1510@gmail.com"
              className="text-lg md:text-xl font-black text-black dark:text-white hover:text-[#E31B23] transition-colors break-all"
            >
              bhviet1510@gmail.com
            </a>
          </div>
          <div className="p-6 md:p-8 border-4 border-black dark:border-white hover:border-[#E31B23] transition-colors text-left bg-white dark:bg-[#111111] shadow-brutal">
            <div className="text-[10px] font-black text-black/30 dark:text-white/30 uppercase tracking-widest mb-4">
              {t('contact_phoneLabel')}
            </div>
            <a
              href="tel:0912687955"
              className="text-lg md:text-xl font-black text-black dark:text-white hover:text-[#E31B23] transition-colors"
            >
              0912687955
            </a>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-8 mb-16">
          <a
            href="https://github.com/bhviet12"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-4 border-2 border-black dark:border-white hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-all duration-100 font-black uppercase text-xs"
          >
            <i className="fab fa-github text-base"></i>
            GITHUB
          </a>
          <a
            href="#"
            className="flex items-center gap-2 px-6 py-4 border-2 border-black dark:border-white hover:bg-black dark:hover:bg-white hover:text-white dark:hover:text-black transition-all duration-100 font-black uppercase text-xs"
          >
            <i className="fab fa-linkedin text-base"></i>
            LINKEDIN
          </a>
        </div>

        {/* Contact Form */}
        <form
          onSubmit={handleSubmit}
          className="space-y-6 text-left max-w-2xl mx-auto border-4 border-black dark:border-white p-8 md:p-10 bg-white dark:bg-[#111111] shadow-brutal-red"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-black dark:text-white block">
                {t('contact_formName')}
              </label>
              <input
                type="text"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                placeholder={t('contact_namePlaceholder')}
                className="w-full bg-[#FAFAFA] dark:bg-[#1a1a1a] border-0 border-b-4 border-black dark:border-white focus:border-[#E31B23] text-black dark:text-white font-bold placeholder:text-black/20 dark:placeholder:text-white/20 py-4 px-2 focus:outline-none transition-colors"
                required
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black uppercase tracking-widest text-black dark:text-white block">
                {t('contact_formEmail')}
              </label>
              <input
                type="email"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                placeholder={t('contact_emailPlaceholder')}
                className="w-full bg-[#FAFAFA] dark:bg-[#1a1a1a] border-0 border-b-4 border-black dark:border-white focus:border-[#E31B23] text-black dark:text-white font-bold placeholder:text-black/20 dark:placeholder:text-white/20 py-4 px-2 focus:outline-none transition-colors"
                required
              />
            </div>
          </div>
          <div className="space-y-2">
            <label className="text-[10px] font-black uppercase tracking-widest text-black dark:text-white block">
              {t('contact_formMessage')}
            </label>
            <textarea
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              placeholder={t('contact_messagePlaceholder')}
              rows={4}
              className="w-full bg-[#FAFAFA] dark:bg-[#1a1a1a] border-0 border-b-4 border-black dark:border-white focus:border-[#E31B23] text-black dark:text-white font-bold placeholder:text-black/20 dark:placeholder:text-white/20 py-4 px-2 focus:outline-none transition-colors resize-none"
              required
            />
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full py-5 bg-black dark:bg-white text-white dark:text-black font-black uppercase text-sm hover:bg-[#E31B23] dark:hover:bg-[#E31B23] hover:text-white dark:hover:text-white transition-all duration-100 disabled:opacity-50"
          >
            {isSubmitting ? t('contact_sending') : t('contact_submit')}
          </button>
        </form>

      </div>
    </section>
  );
}
