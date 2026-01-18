import { motion } from 'motion/react';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function PhilosophyPage() {
  const { t, language } = useLanguage();

  const philosophyImages = [
    "https://images.unsplash.com/photo-1603201667106-0e3e0ae584c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHRlYW0lMjBtZWV0aW5nJTIwb2ZmaWNlfGVufDF8fHx8MTc2ODc0Mjc3Mnww&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1612773073063-5dc1e48fa47b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMGJyYWluc3Rvcm1pbmclMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzY4NzQyNzczfDA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1627873828947-b567eaec80e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGRlc2lnbiUyMHByb2Nlc3N8ZW58MXx8fHwxNjg1NDcyfDA&ixlib=rb-4.1.0&q=80&w=1080"
  ];

  const missionImages = [
    "https://images.unsplash.com/photo-1758873268786-52af523052f7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhZ2VuY3klMjBjb2xsYWJvcmF0aW9uJTIwd29ya3xlbnwxfHx8fDE3Njg3NDI3NzN8MA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1627873828947-b567eaec80e2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGRlc2lnbiUyMHByb2Nlc3N8ZW58MXx8fHwxNjg1NDcyfDA&ixlib=rb-4.1.0&q=80&w=1080",
    "https://images.unsplash.com/photo-1603201667106-0e3e0ae584c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHRlYW0lMjBtZWV0aW5nJTIwb2ZmaWNlfGVufDF8fHx8MTc2ODc0Mjc3Mnww&ixlib=rb-4.1.0&q=80&w=1080"
  ];

  const stats = [
    { number: "118", label: t('stats.clients') },
    { number: "216", label: t('stats.projects') },
    { number: "10", label: t('stats.years') },
    { number: "13", label: t('stats.services') }
  ];

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <ImageWithFallback
            src="https://images.unsplash.com/photo-1603201667106-0e3e0ae584c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHRlYW0lMjBtZWV0aW5nJTIwb2ZmaWNlfGVufDF8fHx8MTc2ODc0Mjc3Mnww&ixlib=rb-4.1.0&q=80&w=1080"
            alt="Active Media Team"
            className="w-full h-full object-cover"
          />
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-black/60" />
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80" />
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-6">
          <motion.h1
            className="text-5xl md:text-7xl font-bold tracking-tight mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            {t('philosophy.heroTitle')}
          </motion.h1>

          {/* Breadcrumb */}
          <motion.div
            className="flex items-center justify-center gap-2 text-sm text-white/60"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <Link to="/" className="hover:text-white transition-colors">
              {t('nav.home')}
            </Link>
            <ChevronRight size={16} />
            <span className="text-white">{t('nav.philosophy')}</span>
          </motion.div>
        </div>

        {/* Animated Shapes */}
        <motion.div
          className="absolute top-20 left-20 w-32 h-32 border border-white/10 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.1, 0.3]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </section>

      {/* Philosophy Section */}
      <section className="py-24 px-6">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Images Grid */}
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: language === 'ar' ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="grid grid-cols-2 gap-4">
                {philosophyImages.map((img, index) => (
                  <motion.div
                    key={index}
                    className={`relative overflow-hidden rounded-2xl ${
                      index === 0 ? 'col-span-2' : ''
                    }`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <ImageWithFallback
                      src={img}
                      alt={`Philosophy ${index + 1}`}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  </motion.div>
                ))}
              </div>

              {/* Decorative Element */}
              <motion.div
                className="absolute -z-10 -top-8 -right-8 w-64 h-64 bg-white/5 rounded-full blur-3xl"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              />
            </motion.div>

            {/* Content */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: language === 'ar' ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <motion.h2
                className="text-4xl md:text-5xl font-bold"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                {t('philosophy.title')}
              </motion.h2>

              <div className="space-y-4 text-white/70 leading-relaxed">
                <p>{t('philosophy.intro')}</p>
                <p>{t('philosophy.description')}</p>
                <p>{t('philosophy.approach')}</p>
              </div>

              {/* Stats Mini */}
              <motion.div
                className="grid grid-cols-2 gap-4 pt-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {stats.slice(0, 2).map((stat, index) => (
                  <div
                    key={index}
                    className="p-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl"
                  >
                    <div className="text-3xl font-bold mb-2">{stat.number}</div>
                    <div className="text-white/60 text-sm">{stat.label}</div>
                  </div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 px-6 bg-white/5">
        <div className="container mx-auto max-w-7xl">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Content */}
            <motion.div
              className={`space-y-6 ${language === 'ar' ? 'lg:order-2' : ''}`}
              initial={{ opacity: 0, x: language === 'ar' ? 50 : -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <motion.h2
                className="text-4xl md:text-5xl font-bold"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                {t('philosophy.missionTitle')}
              </motion.h2>

              <div className="space-y-4 text-white/70 leading-relaxed">
                <p>{t('philosophy.missionIntro')}</p>
                <p>{t('philosophy.missionDescription')}</p>
                <p>{t('philosophy.missionGoal')}</p>
              </div>

              {/* CTA Button */}
              <motion.button
                className="group relative overflow-hidden px-8 py-4 bg-white text-black rounded-full font-medium flex items-center gap-3 mt-8"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10">{t('cta.viewWork')}</span>
                <ArrowRight
                  size={20}
                  className="relative z-10 group-hover:translate-x-1 transition-transform"
                />
                <motion.div
                  className="absolute inset-0 bg-white/90"
                  initial={{ x: '-100%' }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            </motion.div>

            {/* Images Grid */}
            <motion.div
              className={`relative ${language === 'ar' ? 'lg:order-1' : ''}`}
              initial={{ opacity: 0, x: language === 'ar' ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="grid grid-cols-2 gap-4">
                {missionImages.map((img, index) => (
                  <motion.div
                    key={index}
                    className={`relative overflow-hidden rounded-2xl ${
                      index === 2 ? 'col-span-2' : ''
                    }`}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <ImageWithFallback
                      src={img}
                      alt={`Mission ${index + 1}`}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-6 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-white/5 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1]
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>

        <div className="container mx-auto max-w-5xl text-center relative z-10">
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="text-sm text-white/40 tracking-[0.3em] uppercase">
              {t('cta.subtitle')}
            </div>

            <h2 className="text-5xl md:text-7xl font-bold">
              <span className="text-white/40">{t('cta.titlePrefix')}</span>
              <br />
              <span className="bg-gradient-to-r from-white to-white/60 bg-clip-text text-transparent">
                {t('cta.titleHighlight')}
              </span>
            </h2>

            <motion.button
              className="group relative overflow-hidden px-10 py-5 border border-white/20 rounded-full text-lg font-light flex items-center gap-4 mx-auto mt-12"
              whileHover={{ scale: 1.05, borderColor: 'rgba(255,255,255,0.4)' }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10">{t('cta.button')}</span>
              <ArrowRight
                size={24}
                className="relative z-10 group-hover:translate-x-2 transition-transform"
              />
              <motion.div
                className="absolute inset-0 bg-white"
                initial={{ x: '-100%' }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
              <motion.span
                className="absolute inset-0 flex items-center justify-center gap-4 text-black opacity-0 group-hover:opacity-100 transition-opacity"
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 1 }}
              >
                {t('cta.button')}
                <ArrowRight size={24} />
              </motion.span>
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-6 border-t border-white/10">
        <div className="container mx-auto max-w-7xl">
          <motion.div
            className="grid grid-cols-2 md:grid-cols-4 gap-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <div className="text-5xl md:text-6xl font-bold mb-2 bg-gradient-to-b from-white to-white/60 bg-clip-text text-transparent">
                  {stat.number}
                </div>
                <div className="text-white/40 text-sm tracking-wide uppercase">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Footer Info */}
      <section className="py-8 px-6 border-t border-white/5">
        <div className="container mx-auto text-center">
          <p className="text-white/30 text-xs">
            © 2025 Active Media. {t('footer.rights')}
          </p>
        </div>
      </section>
    </div>
  );
}