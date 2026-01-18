import { motion } from 'framer-motion';
import { useState } from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { Play, ExternalLink } from 'lucide-react';

export function PortfolioPage() {
  const { t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', label: t('portfolio.categories.all') },
    { id: 'video', label: t('portfolio.categories.video') },
    { id: 'photography', label: t('portfolio.categories.photography') },
    { id: 'design', label: t('portfolio.categories.design') }
  ];

  const projects = [
    {
      id: 1,
      category: 'video',
      title: 'Brand Campaign 2024',
      client: 'Tech Innovations',
      description: 'A comprehensive video campaign showcasing cutting-edge technology through stunning visuals and compelling storytelling.',
      year: '2024',
      tags: ['Motion Graphics', '3D Animation', 'Commercials']
    },
    {
      id: 2,
      category: 'photography',
      title: 'Product Excellence',
      client: 'Luxury Goods Co.',
      description: 'High-end product photography capturing the essence of luxury and craftsmanship in every detail.',
      year: '2024',
      tags: ['Product Photography', 'Luxury', 'Commercial']
    },
    {
      id: 3,
      category: 'design',
      title: 'Brand Identity System',
      client: 'StartUp Ventures',
      description: 'Complete brand identity design including logo, visual language, and brand guidelines for a modern startup.',
      year: '2023',
      tags: ['Branding', 'UI/UX', 'Identity']
    },
    {
      id: 4,
      category: 'video',
      title: 'Corporate Documentary',
      client: 'Global Industries',
      description: 'Documentary-style corporate video highlighting company values, culture, and achievements.',
      year: '2023',
      tags: ['Documentary', 'Corporate', 'Storytelling']
    },
    {
      id: 5,
      category: 'photography',
      title: 'Event Coverage',
      client: 'Annual Conference',
      description: 'Professional event photography capturing key moments, speakers, and atmosphere of a major industry conference.',
      year: '2024',
      tags: ['Event', 'Corporate', 'Editorial']
    },
    {
      id: 6,
      category: 'design',
      title: 'Social Media Campaign',
      client: 'Fashion Brand',
      description: 'Creative social media graphics and visual content strategy for a fashion brand\'s seasonal campaign.',
      year: '2024',
      tags: ['Social Media', 'Fashion', 'Digital']
    },
    {
      id: 7,
      category: 'video',
      title: 'Product Launch Video',
      client: 'Innovation Labs',
      description: 'Dynamic product launch video combining live action and motion graphics to showcase new technology.',
      year: '2023',
      tags: ['Product', 'Motion Graphics', 'Launch']
    },
    {
      id: 8,
      category: 'photography',
      title: 'Architectural Photography',
      client: 'Design Studio',
      description: 'Architectural photography highlighting modern design, space, and lighting in commercial properties.',
      year: '2023',
      tags: ['Architecture', 'Commercial', 'Interior']
    }
  ];

  const filteredProjects = selectedCategory === 'all'
    ? projects
    : projects.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-[#0D0D0D] pt-32 pb-20">
      {/* Hero Section */}
      <section className="container mx-auto px-6 mb-20">
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
            {t('portfolio.subtitle')}
          </motion.span>

          <motion.h1
            className="text-5xl md:text-7xl lg:text-8xl text-white mb-8 tracking-tight"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            {t('portfolio.title')}
          </motion.h1>

          <motion.p
            className="text-white/60 text-lg md:text-xl leading-relaxed font-light"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            {t('portfolio.description')}
          </motion.p>
        </motion.div>
      </section>

      {/* Filter Categories */}
      <section className="container mx-auto px-6 mb-16">
        <motion.div
          className="flex flex-wrap justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              className={`px-8 py-3 rounded-full text-sm font-light tracking-wide transition-all duration-300 ${selectedCategory === category.id
                  ? 'bg-white text-black'
                  : 'bg-white/5 text-white/70 hover:bg-white/10 hover:text-white border border-white/10'
                }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.label}
            </motion.button>
          ))}
        </motion.div>
      </section>

      {/* Projects Grid */}
      <section className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden hover:border-white/20 transition-all duration-500"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              whileHover={{ y: -8 }}
            >
              {/* Image/Video Placeholder */}
              <div className="relative aspect-video bg-gradient-to-br from-white/10 to-white/5 overflow-hidden">
                {/* Placeholder with Icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  {project.category === 'video' ? (
                    <motion.div
                      className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center"
                      whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,255,255,0.2)' }}
                    >
                      <Play size={24} className="text-white ml-1" fill="white" />
                    </motion.div>
                  ) : (
                    <motion.div
                      className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center"
                      whileHover={{ scale: 1.1, backgroundColor: 'rgba(255,255,255,0.2)' }}
                    >
                      <ExternalLink size={24} className="text-white" />
                    </motion.div>
                  )}
                </div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-transparent opacity-60" />

                {/* Year Badge */}
                <div className="absolute top-4 right-4 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20">
                  <span className="text-white text-xs font-light">{project.year}</span>
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                {/* Category Badge */}
                <span className="inline-block px-3 py-1 rounded-full bg-[#9B8A5E]/20 text-[#9B8A5E] text-xs uppercase tracking-wider mb-4">
                  {project.category}
                </span>

                {/* Title */}
                <h3 className="text-2xl md:text-3xl text-white mb-2 tracking-tight">
                  {project.title}
                </h3>

                {/* Client */}
                <p className="text-white/40 text-sm mb-4 font-light">
                  {project.client}
                </p>

                {/* Description */}
                <p className="text-white/60 text-base leading-relaxed mb-6 font-light">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-full bg-white/5 text-white/50 text-xs"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Hover Glow Effect */}
              <motion.div
                className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: 'radial-gradient(circle at top left, #9B8A5E 0%, transparent 70%)'
                }}
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="container mx-auto px-6 mt-32">
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {[
            { number: '500+', label: t('portfolio.stats.projects') },
            { number: '200+', label: t('portfolio.stats.clients') },
            { number: '50+', label: t('portfolio.stats.awards') },
            { number: '6+', label: t('portfolio.stats.years') }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <motion.div
                className="text-5xl md:text-6xl text-white mb-3"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.2 }}
              >
                {stat.number}
              </motion.div>
              <div className="text-white/60 text-sm md:text-base font-light">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>
    </div>
  );
}
