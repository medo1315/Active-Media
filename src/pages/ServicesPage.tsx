import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { Video, Camera, Palette, Sparkles, Target, TrendingUp, Users, Award } from 'lucide-react';

export function ServicesPage() {
  const { t } = useLanguage();

  const services = [
    {
      icon: Video,
      titleKey: 'services.items.video.title',
      descKey: 'services.items.video.description',
      features: ['Motion Graphics', '2D/3D Animation', 'Video Editing', 'Color Grading'],
      color: '#9B8A5E'
    },
    {
      icon: Camera,
      titleKey: 'services.items.photography.title',
      descKey: 'services.items.photography.description',
      features: ['Product Photography', 'Commercial Shoots', 'Event Coverage', 'Portrait Sessions'],
      color: '#B8A570'
    },
    {
      icon: Palette,
      titleKey: 'services.items.design.title',
      descKey: 'services.items.design.description',
      features: ['Brand Identity', 'UI/UX Design', 'Print Design', 'Social Media Graphics'],
      color: '#C5B882'
    },
    {
      icon: Sparkles,
      titleKey: 'services.items.creative.title',
      descKey: 'services.items.creative.description',
      features: ['Creative Direction', 'Art Direction', 'Concept Development', 'Campaign Strategy'],
      color: '#D2CB94'
    }
  ];

  const processSteps = [
    {
      number: '01',
      title: t('services.process.discovery'),
      description: 'Understanding your vision, goals, and target audience to create the perfect strategy.',
      icon: Target
    },
    {
      number: '02',
      title: t('services.process.planning'),
      description: 'Developing a comprehensive plan with timelines, deliverables, and creative concepts.',
      icon: TrendingUp
    },
    {
      number: '03',
      title: t('services.process.execution'),
      description: 'Bringing your vision to life with our expert team and cutting-edge technology.',
      icon: Users
    },
    {
      number: '04',
      title: t('services.process.delivery'),
      description: 'Final touches, revisions, and delivering exceptional results that exceed expectations.',
      icon: Award
    }
  ];

  return (
    <div className="min-h-screen bg-[#0D0D0D] pt-32 pb-20">
      {/* Hero Section */}
      <section className="container mx-auto px-6 mb-32">
        <motion.div
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.span
            className="text-[#9B8A5E] text-sm tracking-[0.4em] uppercase font-light mb-6 block"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {t('services.subtitle')}
          </motion.span>

          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl text-white mb-8 tracking-tight"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            {t('services.title')}
          </motion.h1>

          <motion.p
            className="text-white/60 text-lg md:text-xl leading-relaxed font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            {t('services.description')}
          </motion.p>
        </motion.div>
      </section>

      {/* Services Grid */}
      <section className="container mx-auto px-6 mb-32">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <motion.div
                key={index}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-12 overflow-hidden hover:border-white/20 transition-all duration-500"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -8 }}
              >
                {/* Glow Effect */}
                <motion.div
                  className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle at top left, ${service.color} 0%, transparent 70%)`
                  }}
                />

                {/* Icon */}
                <motion.div
                  className="mb-8"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <Icon size={48} className="text-white/80" strokeWidth={1.5} />
                </motion.div>

                {/* Title */}
                <h3 className="text-3xl md:text-4xl text-white mb-4 tracking-tight">
                  {t(service.titleKey)}
                </h3>

                {/* Description */}
                <p className="text-white/60 text-base md:text-lg leading-relaxed mb-8 font-light">
                  {t(service.descKey)}
                </p>

                {/* Features */}
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <motion.li
                      key={idx}
                      className="flex items-center gap-3 text-white/70 text-sm"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.6 + idx * 0.1 }}
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-[#9B8A5E]" />
                      {feature}
                    </motion.li>
                  ))}
                </ul>

                {/* Corner Accent */}
                <div className="absolute bottom-0 right-0 w-32 h-32 opacity-10">
                  <Icon size={128} className="text-white" strokeWidth={0.5} />
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Process Section */}
      <section className="container mx-auto px-6 mb-32">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-[#9B8A5E] text-sm tracking-[0.4em] uppercase font-light mb-6 block">
            {t('services.process.subtitle')}
          </span>
          <h2 className="text-4xl md:text-6xl lg:text-7xl text-white tracking-tight">
            {t('services.process.title')}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {processSteps.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
              >
                {/* Number */}
                <motion.div
                  className="text-8xl font-bold text-white/5 mb-4"
                  initial={{ opacity: 0, scale: 0.5 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 + 0.2 }}
                >
                  {step.number}
                </motion.div>

                {/* Icon */}
                <motion.div
                  className="mb-6"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <Icon size={32} className="text-[#9B8A5E]" strokeWidth={1.5} />
                </motion.div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl text-white mb-4 tracking-tight">
                  {step.title}
                </h3>

                {/* Description */}
                <p className="text-white/60 text-sm md:text-base leading-relaxed font-light">
                  {step.description}
                </p>

                {/* Connector Line (except last item) */}
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-20 left-full w-full h-px bg-gradient-to-r from-white/20 to-transparent" />
                )}
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6">
        <motion.div
          className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-white/10 to-white/5 border border-white/10 p-12 md:p-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0" style={{
              backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
              backgroundSize: '50px 50px'
            }} />
          </div>

          <motion.h2
            className="text-3xl md:text-5xl lg:text-6xl text-white mb-6 tracking-tight relative z-10"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            {t('services.cta.title')}
          </motion.h2>

          <motion.p
            className="text-white/60 text-lg md:text-xl mb-10 max-w-2xl mx-auto font-light relative z-10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {t('services.cta.description')}
          </motion.p>

          <motion.a
            href="/"
            className="inline-block px-10 py-4 bg-white text-black rounded-full font-medium hover:bg-white/90 transition-all relative z-10"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {t('services.cta.button')}
          </motion.a>
        </motion.div>
      </section>
    </div>
  );
}
