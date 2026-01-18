import { motion } from 'motion/react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import studioBackground from '../assets/1a926a2cd86cf9ac49817308fe17ca28e058fba7.png';
import { useLanguage } from '../contexts/LanguageContext';

interface HeroProps {
  onOpenContact: () => void;
}

export function Hero({ onOpenContact }: HeroProps) {
  const { language, t } = useLanguage();

  const ArrowIcon = language === 'ar' ? ArrowLeft : ArrowRight;

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Studio Background Image - واضحة جداً */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="absolute inset-0 bg-black">
          <img
            src={studioBackground}
            alt="Active Media Studio"
            className="w-full h-full object-cover opacity-100"
          />
        </div>
        {/* Overlay خفيف جداً - بس عشان النص يبقى واضح */}
        <div className="absolute inset-0 bg-[#0D0D0D]/40" />
      </motion.div>

      {/* Animated Background Grid - شفاف جداً */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-32 h-32 border border-white/10 rounded-lg"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              rotate: [0, 90, 0],
              opacity: [0.05, 0.15, 0.05],
            }}
            transition={{
              duration: 8 + i,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 0.2,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="container mx-auto px-6 py-32 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.h1
              className="text-6xl md:text-8xl lg:text-9xl font-light mb-8 tracking-tight text-white"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Visual Excellence مع تأثير نبض */}
              <motion.span
                className="inline-block relative"
                initial={{ opacity: 0, scale: 0.5, y: 100 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{
                  duration: 1.2,
                  delay: 0.3,
                  ease: [0.22, 1, 0.36, 1]
                }}
              >
                <motion.span
                  className="inline-block"
                  animate={{
                    scale: [1, 1.02, 1],
                    textShadow: [
                      "0 0 20px rgba(255, 255, 255, 0.3)",
                      "0 0 40px rgba(255, 255, 255, 0.5)",
                      "0 0 20px rgba(255, 255, 255, 0.3)"
                    ]
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  {t('hero.title1')}
                </motion.span>

                {/* Glow effect */}
                <motion.div
                  className="absolute inset-0 blur-xl opacity-30"
                  animate={{
                    opacity: [0.2, 0.5, 0.2],
                    scale: [0.95, 1.05, 0.95]
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                  style={{
                    background: "radial-gradient(circle, rgba(255,255,255,0.6) 0%, transparent 70%)",
                    pointerEvents: "none"
                  }}
                />
              </motion.span>

              <br />

              {/* Since 2018 مع تأثير نبض */}
              <motion.span
                className="font-normal text-white inline-block relative"
                initial={{ opacity: 0, scale: 0.5, y: -100 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{
                  duration: 1.2,
                  delay: 0.6,
                  ease: [0.22, 1, 0.36, 1]
                }}
              >
                <motion.span
                  className="inline-block"
                  animate={{
                    scale: [1, 1.03, 1],
                    textShadow: [
                      "0 0 15px rgba(255, 255, 255, 0.2)",
                      "0 0 30px rgba(255, 255, 255, 0.4)",
                      "0 0 15px rgba(255, 255, 255, 0.2)"
                    ]
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1.2
                  }}
                >
                  {t('hero.title2')}
                </motion.span>

                {/* Glow effect */}
                <motion.div
                  className="absolute inset-0 blur-xl opacity-20"
                  animate={{
                    opacity: [0.15, 0.4, 0.15],
                    scale: [0.9, 1.1, 0.9]
                  }}
                  transition={{
                    duration: 2.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1.2
                  }}
                  style={{
                    background: "radial-gradient(circle, rgba(255,255,255,0.5) 0%, transparent 70%)",
                    pointerEvents: "none"
                  }}
                />
              </motion.span>
            </motion.h1>
          </motion.div>

          {/* الوصف مع تأثير نبض خفيف */}
          <motion.p
            className="text-xl md:text-2xl text-gray-300 mb-12 max-w-3xl mx-auto font-light leading-relaxed relative"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.span
              className="inline-block"
              animate={{
                opacity: [0.7, 1, 0.7],
                y: [0, -2, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.5
              }}
            >
              {t('hero.description')}
            </motion.span>
          </motion.p>

          <motion.button
            onClick={onOpenContact}
            className="group inline-flex items-center gap-3 text-lg transition-all bg-white text-black px-8 py-4 rounded-full font-medium hover:bg-gray-200"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 20px 40px rgba(255, 255, 255, 0.2)"
            }}
            whileTap={{ scale: 0.95 }}
          >
            <span>{t('hero.cta')}</span>
            <motion.div
              animate={{ x: language === 'ar' ? [-2, 2, -2] : [2, -2, 2] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ArrowIcon size={20} />
            </motion.div>
          </motion.button>
        </div>
      </div>
    </section>
  );
}