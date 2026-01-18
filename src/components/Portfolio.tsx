import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';

const projects = [
  {
    title: 'Mega Trade Industrial Event Video Stone Africa',
    image: 'https://images.unsplash.com/photo-1762028892701-692dc360db08?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwZXhoaWJpdGlvbiUyMGJvb3RofGVufDF8fHx8MTc2ODczOTI0Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Industrial', 'Video Production']
  },
  {
    title: 'Al Nas Hospital Website Design & Development',
    image: 'https://images.unsplash.com/photo-1654762930571-dcf2ebc11542?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxob3NwaXRhbCUyMG1lZGljYWwlMjB3ZWJzaXRlfGVufDF8fHx8MTc2ODczOTI0M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Medical']
  },
  {
    title: 'Shorouk Press Industrial Documentary Video',
    image: 'https://images.unsplash.com/photo-1721578006568-17901600cff3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwZmFjdG9yeSUyMGRvY3VtZW50YXJ5fGVufDF8fHx8MTc2ODczOTI0M3ww&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Copywriting', 'Industrial', 'Photography', '...']
  },
  {
    title: 'Luxury Real Estate Villa Showcase',
    image: 'https://images.unsplash.com/photo-1645807380313-71980928cb8e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZWFsJTIwZXN0YXRlJTIwdmlsbGF8ZW58MXx8fHwxNzY4NzM5MjQ0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Real Estate', 'Photography']
  },
  {
    title: 'Premium Restaurant Food Photography',
    image: 'https://images.unsplash.com/photo-1617650555983-eaf0230972c2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXN0YXVyYW50JTIwZm9vZCUyMHBob3RvZ3JhcGh5fGVufDF8fHx8MTc2ODYzNjg2Mnww&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Food', 'Photography']
  },
  {
    title: 'Corporate Branding & Identity Design',
    image: 'https://images.unsplash.com/photo-1764383381195-5daa5902c3f8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBicmFuZGluZyUyMGRlc2lnbnxlbnwxfHx8fDE3Njg3MzkyNDR8MA&ixlib=rb-4.1.0&q=80&w=1080',
    tags: ['Branding', 'Design']
  }
];

export function Portfolio() {
  const { t } = useLanguage();

  return (
    <section id="portfolio" className="relative py-32 bg-black overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-40 right-20 w-96 h-96 border border-white/5 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, -90, 0],
            opacity: [0.2, 0.05, 0.2]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut"
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
              {t('portfolio.subtitle')}
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.h2
            className="text-6xl md:text-8xl font-bold text-white tracking-tight"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {t('portfolio.title')}
          </motion.h2>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="group relative aspect-[4/3] overflow-hidden cursor-pointer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: [0.22, 1, 0.36, 1]
              }}
              whileHover={{ y: -10 }}
            >
              {/* Background Image */}
              <div className="absolute inset-0">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent opacity-80 group-hover:opacity-70 transition-opacity duration-500" />

              {/* Content */}
              <div className="absolute inset-0 flex flex-col justify-end p-8">
                {/* Project Title */}
                <motion.h3
                  className="text-white text-xl md:text-2xl font-medium leading-tight mb-4"
                  initial={{ y: 10, opacity: 0.8 }}
                  whileHover={{ y: 0, opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {project.title}
                </motion.h3>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-xs font-medium bg-[#4A5568] text-white rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Read More Button */}
                <motion.button
                  className="text-white text-sm tracking-[0.2em] uppercase font-light opacity-70 group-hover:opacity-100 transition-opacity text-left"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  {t('portfolio.readMore')}
                </motion.button>
              </div>

              {/* Hover Border */}
              <motion.div
                className="absolute inset-0 border-2 border-white/0 pointer-events-none transition-colors duration-300 group-hover:border-white/10"
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
