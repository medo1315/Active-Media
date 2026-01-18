import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { useLanguage } from '../contexts/LanguageContext';

export function ShowreelVideo() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <section
      ref={containerRef}
      className="relative py-32 overflow-hidden bg-[#0D0D0D]"
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 right-20 w-96 h-96 border border-white/5 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            opacity: [0.3, 0.1, 0.3]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-64 h-64 border border-white/5 rounded-full"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, -90, 0],
            opacity: [0.2, 0.05, 0.2]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <motion.div
            className="inline-block mb-4"
            animate={{
              y: [0, -5, 0]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          >
            <span className="text-white/40 text-sm tracking-[0.3em] uppercase">{t('showreel.label')}</span>
          </motion.div>

          <h2 className="text-5xl md:text-7xl font-light mb-6 text-white">
            <motion.span
              className="inline-block"
              animate={{
                textShadow: [
                  "0 0 20px rgba(255, 255, 255, 0.1)",
                  "0 0 40px rgba(255, 255, 255, 0.2)",
                  "0 0 20px rgba(255, 255, 255, 0.1)"
                ]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              {t('showreel.title')}
            </motion.span>
          </h2>

          <p className="text-xl text-gray-400 max-w-2xl mx-auto font-light">
            {t('showreel.description')}
          </p>
        </motion.div>

        {/* Video Container */}
        <motion.div
          style={{ scale, opacity }}
          className="relative max-w-6xl mx-auto"
        >
          <motion.div
            className="relative rounded-3xl overflow-hidden shadow-2xl group"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Glowing Border Effect */}
            <motion.div
              className="absolute inset-0 rounded-3xl pointer-events-none z-10"
              animate={{
                boxShadow: [
                  "0 0 0 1px rgba(255, 255, 255, 0.1)",
                  "0 0 0 1px rgba(255, 255, 255, 0.2), 0 0 40px rgba(255, 255, 255, 0.1)",
                  "0 0 0 1px rgba(255, 255, 255, 0.1)"
                ]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />

            {/* Cloudinary Video Player */}
            <div className="relative w-full aspect-video bg-black">
              <iframe
                src="https://player.cloudinary.com/embed/?cloud_name=dbgtxchfg&public_id=From_KlickPin_CF_Alejandro_Valencia_on_Instagram_pov_estas_cumpliendo_tu_sue%C3%B1o_Video_Video___Estudio_de_grabaci%C3%B3n_en_casa_Fotografia_analogica_Podcast_eohujr&fluid=true&controls=true&autoplay=false&muted=false&loop=true"
                className="w-full h-full"
                allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
                frameBorder="0"
              />
            </div>
          </motion.div>

          {/* Corner Decorations */}
          <motion.div
            className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-white/20 rounded-tr-3xl pointer-events-none"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          />
          <motion.div
            className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-white/20 rounded-bl-3xl pointer-events-none"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          />
        </motion.div>

        {/* Stats Below Video */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {[
            { number: "200+", label: t('showreel.stat1') },
            { number: "50+", label: t('showreel.stat2') },
            { number: "6", label: t('showreel.stat3') },
            { number: "15+", label: t('showreel.stat4') }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
            >
              <motion.div
                className="text-4xl md:text-5xl font-light text-white mb-2"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {stat.number}
              </motion.div>
              <div className="text-gray-400 text-sm font-light tracking-wide">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}