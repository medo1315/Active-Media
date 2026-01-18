import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

const services = [
  {
    title: 'Branding & Logo Design',
    image: 'https://images.unsplash.com/photo-1640975972263-1f73398e943b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmFuZGluZyUyMGxvZ28lMjBkZXNpZ258ZW58MXx8fHwxNzY4NjQ3NDk5fDA&ixlib=rb-4.1.0&q=80&w=1080',
    key: 'services.branding'
  },
  {
    title: 'Catalogs & Profiles',
    image: 'https://images.unsplash.com/photo-1636247499180-13285c86be9b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXRhbG9nJTIwcG9ydGZvbGlvJTIwZGVzaWdufGVufDF8fHx8MTc2ODczODk5N3ww&ixlib=rb-4.1.0&q=80&w=1080',
    key: 'services.catalogs'
  },
  {
    title: 'Animation & Motion Graphics',
    image: 'https://images.unsplash.com/photo-1740174459694-4da6669ef2b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3Rpb24lMjBncmFwaGljcyUyMGFuaW1hdGlvbnxlbnwxfHx8fDE3Njg2ODI4NjB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    key: 'services.animation'
  },
  {
    title: 'Web & Mobile Application',
    image: 'https://images.unsplash.com/photo-1633250391894-397930e3f5f2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXZlbG9wbWVudHxlbnwxfHx8fDE3Njg3MDk2MjR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    key: 'services.webapp'
  },
  {
    title: 'Social Media',
    image: 'https://images.unsplash.com/photo-1683721003111-070bcc053d8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMG1hcmtldGluZ3xlbnwxfHx8fDE3Njg2NDEwMjN8MA&ixlib=rb-4.1.0&q=80&w=1080',
    key: 'services.social'
  },
  {
    title: 'Photography & Video Shooting',
    image: 'https://images.unsplash.com/photo-1633119232877-5ad2588a37ab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaG90b2dyYXBoeSUyMHZpZGVvJTIwcHJvZHVjdGlvbnxlbnwxfHx8fDE3Njg3Mzg5OTd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    key: 'services.photography'
  },
  {
    title: 'Booths & Exhibitions',
    image: 'https://images.unsplash.com/photo-1761225646548-bc92fea0dc72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxleGhpYml0aW9uJTIwYm9vdGglMjBkZXNpZ258ZW58MXx8fHwxNzY4NzM4OTk4fDA&ixlib=rb-4.1.0&q=80&w=1080',
    key: 'services.booths'
  },
  {
    title: 'Giveaways & Production',
    image: 'https://images.unsplash.com/photo-1598052162797-ba3530cc75b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9tb3Rpb25hbCUyMHByb2R1Y3RzJTIwZ2l2ZWF3YXlzfGVufDF8fHx8MTc2ODczODk5OXww&ixlib=rb-4.1.0&q=80&w=1080',
    key: 'services.giveaways'
  },
  {
    title: 'Food & Beverage Reel Production',
    image: 'https://images.unsplash.com/photo-1757256271916-5eb3c98751c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmb29kJTIwcGhvdG9ncmFwaHklMjBwcm9kdWN0aW9ufGVufDF8fHx8MTc2ODczODk5OXww&ixlib=rb-4.1.0&q=80&w=1080',
    key: 'services.food'
  },
  {
    title: 'Industrial Documentaries',
    image: 'https://images.unsplash.com/photo-1577190651915-bf62d54d5b36?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwZmFjdG9yeSUyMHZpZGVvfGVufDF8fHx8MTc2ODczODk5OXww&ixlib=rb-4.1.0&q=80&w=1080',
    key: 'services.industrial'
  },
  {
    title: 'Packaging Design Services',
    image: 'https://images.unsplash.com/photo-1759459981078-35c1befc695b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwYWNrYWdpbmclMjBkZXNpZ24lMjBwcm9kdWN0c3xlbnwxfHx8fDE3Njg3Mzg5OTl8MA&ixlib=rb-4.1.0&q=80&w=1080',
    key: 'services.packaging'
  },
  {
    title: 'Events Covering Video Production',
    image: 'https://images.unsplash.com/photo-1763598811139-175c9ad6b96b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxldmVudCUyMHZpZGVvZ3JhcGh5JTIwcHJvZHVjdGlvbnxlbnwxfHx8fDE3Njg3MzkwMDB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    key: 'services.events'
  }
];

export function Services() {
  const { t } = useLanguage();

  return (
    <section id="services" className="relative py-32 bg-[#0D0D0D] overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-40 left-20 w-96 h-96 border border-white/5 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 90, 0],
            opacity: [0.2, 0.05, 0.2]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-40 right-20 w-64 h-64 border border-white/5"
          animate={{
            rotate: [0, 180, 0],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Subtitle */}
          <motion.div
            className="mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <span className="text-[#9B8A5E] text-sm tracking-[0.4em] uppercase font-light">
              {t('services.subtitle')}
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h2
            className="text-6xl md:text-8xl font-bold text-white mb-6 tracking-tight"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {t('services.title')}
          </motion.h2>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="group relative aspect-[4/3] overflow-hidden rounded-lg cursor-pointer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.05,
                ease: [0.22, 1, 0.36, 1]
              }}
              whileHover={{ scale: 1.02 }}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/20 transition-opacity duration-500 group-hover:from-black/80 group-hover:via-black/40" />

              {/* Content */}
              <div className="absolute inset-0 flex items-end p-6">
                <motion.h3
                  className="text-white text-xl md:text-2xl font-medium leading-tight"
                  initial={{ y: 10, opacity: 0.8 }}
                  whileHover={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {t(service.key)}
                </motion.h3>
              </div>

              {/* Hover Border Effect */}
              <motion.div
                className="absolute inset-0 border-2 border-white/0 rounded-lg pointer-events-none transition-colors duration-300 group-hover:border-white/20"
              />

              {/* Corner Accent */}
              <motion.div
                className="absolute top-4 right-4 w-12 h-12 border-t-2 border-r-2 border-white/0 rounded-tr-lg transition-all duration-300 group-hover:border-white/40 group-hover:w-16 group-hover:h-16"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
