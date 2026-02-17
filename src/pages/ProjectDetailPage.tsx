import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { ChevronLeft, ArrowRight, ExternalLink, Calendar, User } from 'lucide-react';

const projectsData: Record<string, any> = {
    'stone-africa': {
        titleKey: 'projects.stone.title',
        image: 'https://images.unsplash.com/photo-1762028892701-692dc360db08?auto=format&fit=crop&q=80&w=1200',
        client: 'Mega Trade',
        date: 'August 2025',
        categoryKey: 'portfolio.categories.video', // Reuse existing category translation
        descKey: 'projects.stone.desc',
        tagsKeys: ['projects.stone.tag1', 'projects.stone.tag2', 'projects.stone.tag3', 'projects.stone.tag4'],
        gallery: [
            'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800',
            'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800'
        ]
    }
};

export function ProjectDetailPage() {
    const navigate = useNavigate();
    const { id } = useParams();
    const { t, language } = useLanguage();
    const isAr = language === 'ar';

    const handleBack = (e: React.MouseEvent) => {
        e.preventDefault();
        navigate(-1);
    };

    // For demo: find by slug or just default to stone-africa
    const project = id ? (projectsData[id] || projectsData['stone-africa']) : projectsData['stone-africa'];

    return (
        <div className="min-h-screen bg-[#0a0a0a] text-white pt-24 pb-20" dir={isAr ? 'rtl' : 'ltr'}>
            <div className="container mx-auto px-6">
                {/* Navigation */}
                <a
                    href="#"
                    onClick={handleBack}
                    className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-12 transition-colors cursor-pointer group"
                >
                    <ChevronLeft size={20} className={`${isAr ? 'rotate-180 group-hover:translate-x-1' : 'group-hover:-translate-x-1'} transition-transform`} />
                    <span>{t('portfolio.back')}</span>
                </a>

                {/* Hero Section */}
                <div className="relative aspect-[21/9] w-full overflow-hidden rounded-3xl mb-16 group">
                    <img
                        src={project.image}
                        alt={t(project.titleKey)}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                    <div className={`absolute bottom-10 ${isAr ? 'right-10' : 'left-10'}`}>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-6xl font-black max-w-4xl"
                        >
                            {t(project.titleKey)}
                        </motion.h1>
                    </div>
                </div>

                <div className="grid lg:grid-cols-3 gap-16">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-12">
                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                        >
                            <h2 className="text-3xl font-bold mb-8">{t('portfolio.aboutProject')}</h2>
                            <p className="text-white/70 text-lg leading-relaxed font-light">
                                {t(project.descKey)}
                            </p>
                        </motion.div>

                        {/* Gallery Grid */}
                        <div className="grid grid-cols-2 gap-8">
                            {project.gallery.map((img: string, idx: number) => (
                                <motion.div
                                    key={idx}
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    className="aspect-video overflow-hidden rounded-2xl group border border-white/5"
                                >
                                    <img
                                        src={img}
                                        alt={t('portfolio.workShowcase')}
                                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                                    />
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Sidebar / Info */}
                    <motion.div
                        initial={{ opacity: 0, x: isAr ? -30 : 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="bg-white/5 backdrop-blur-md rounded-3xl p-10 border border-white/10 h-fit space-y-10"
                    >
                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-2xl bg-[#9B8A5E]/20 flex items-center justify-center text-[#9B8A5E]">
                                    <User size={24} />
                                </div>
                                <div>
                                    <p className="text-white/40 text-xs uppercase tracking-widest">{t('portfolio.client')}</p>
                                    <p className="text-white font-bold">{project.client}</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-2xl bg-[#9B8A5E]/20 flex items-center justify-center text-[#9B8A5E]">
                                    <Calendar size={24} />
                                </div>
                                <div>
                                    <p className="text-white/40 text-xs uppercase tracking-widest">{t('portfolio.date')}</p>
                                    <p className="text-white font-bold">{isAr ? project.date.replace('August', 'أغسطس') : project.date}</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-2xl bg-[#9B8A5E]/20 flex items-center justify-center text-[#9B8A5E]">
                                    <ExternalLink size={24} />
                                </div>
                                <div>
                                    <p className="text-white/40 text-xs uppercase tracking-widest">{t('portfolio.category')}</p>
                                    <p className="text-white font-bold">{t(project.categoryKey)}</p>
                                </div>
                            </div>
                        </div>

                        <div className="pt-10 border-t border-white/10 space-y-4">
                            <p className="text-white/40 text-xs uppercase tracking-widest mb-6">{t('portfolio.tasks')}</p>
                            <div className="flex flex-wrap gap-2">
                                {project.tagsKeys.map((tagKey: string, idx: number) => (
                                    <span key={idx} className="bg-white/10 px-4 py-2 rounded-full text-sm font-medium border border-white/5 hover:border-[#9B8A5E]/30 transition-colors">
                                        {t(tagKey)}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <button className="w-full py-5 bg-white text-black rounded-2xl font-black flex items-center justify-center gap-3 hover:bg-[#9B8A5E] hover:text-white transition-all group">
                            <span>{t('portfolio.startProject')}</span>
                            <ArrowRight size={20} className={`${isAr ? 'rotate-180 group-hover:-translate-x-2' : 'group-hover:translate-x-2'} transition-transform`} />
                        </button>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
