import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { ChevronLeft, ArrowRight, ExternalLink, Calendar, User } from 'lucide-react';

const projectsData: Record<string, any> = {
    'stone-africa': {
        title: 'Mega Trade Industrial Event Video Stone Africa',
        image: 'https://images.unsplash.com/photo-1762028892701-692dc360db08?auto=format&fit=crop&q=80&w=1200',
        client: 'Mega Trade',
        date: 'August 2025',
        category: 'Video Production',
        fullDesc: 'Comprehensive video coverage for the Stone Africa industrial exhibition. We captured the scale of the event, detailed machinery displays, and high-level networking moments to create a powerful promotional film.',
        tags: ['Industrial', 'Exhibition', 'Cinematography', 'Editing'],
        gallery: [
            'https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?auto=format&fit=crop&q=80&w=800',
            'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80&w=800'
        ]
    },
    'al-nas': {
        title: 'Al Nas Hospital Website Design & Development',
        image: 'https://images.unsplash.com/photo-1654762930571-dcf2ebc11542?auto=format&fit=crop&q=80&w=1200',
        client: 'Al Nas Hospital',
        date: 'January 2026',
        category: 'Web Design',
        fullDesc: 'A modern, accessible, and user-friendly website for one of the leading medical institutions. Focusing on ease of use for patients and clear information hierarchy for donors.',
        tags: ['Medical', 'UI/UX', 'Development', 'Responsive Design'],
        gallery: [
            'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&q=80&w=800',
            'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800'
        ]
    }
};

export function ProjectDetailPage() {
    const { id } = useParams();
    const { language } = useLanguage();

    // For demo: find by slug or just default to stone-africa
    const project = id ? (projectsData[id] || projectsData['stone-africa']) : projectsData['stone-africa'];

    return (
        <div className="min-h-screen bg-[#0a0a0a] text-white pt-24 pb-20">
            <div className="container mx-auto px-6">
                {/* Navigation */}
                <Link to="/portfolio" className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-12 transition-colors">
                    <ChevronLeft size={20} />
                    <span>{language === 'ar' ? 'العودة للمعرض' : 'Back to Portfolio'}</span>
                </Link>

                {/* Hero Section */}
                <div className="relative aspect-[21/9] w-full overflow-hidden rounded-3xl mb-16 group">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                    <div className="absolute bottom-10 left-10">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-4xl md:text-6xl font-black max-w-4xl"
                        >
                            {project.title}
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
                            <h2 className="text-3xl font-bold mb-8">{language === 'ar' ? 'عن المشروع' : 'About the Project'}</h2>
                            <p className="text-white/70 text-lg leading-relaxed font-light">
                                {project.fullDesc}
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
                                        alt="Work showcase"
                                        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                                    />
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Sidebar / Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="bg-white/5 backdrop-blur-md rounded-3xl p-10 border border-white/10 h-fit space-y-10"
                    >
                        <div className="space-y-6">
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-2xl bg-[#a3ae30]/20 flex items-center justify-center text-[#a3ae30]">
                                    <User size={24} />
                                </div>
                                <div>
                                    <p className="text-white/40 text-xs uppercase tracking-widest">{language === 'ar' ? 'العميل' : 'CLIENT'}</p>
                                    <p className="text-white font-bold">{project.client}</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-2xl bg-[#a3ae30]/20 flex items-center justify-center text-[#a3ae30]">
                                    <Calendar size={24} />
                                </div>
                                <div>
                                    <p className="text-white/40 text-xs uppercase tracking-widest">{language === 'ar' ? 'التارِيخ' : 'DATE'}</p>
                                    <p className="text-white font-bold">{project.date}</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-2xl bg-[#a3ae30]/20 flex items-center justify-center text-[#a3ae30]">
                                    <ExternalLink size={24} />
                                </div>
                                <div>
                                    <p className="text-white/40 text-xs uppercase tracking-widest">{language === 'ar' ? 'التصنيف' : 'CATEGORY'}</p>
                                    <p className="text-white font-bold">{project.category}</p>
                                </div>
                            </div>
                        </div>

                        <div className="pt-10 border-t border-white/10 space-y-4">
                            <p className="text-white/40 text-xs uppercase tracking-widest mb-6">{language === 'ar' ? 'المهام' : 'TASKS'}</p>
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map((tag: string, idx: number) => (
                                    <span key={idx} className="bg-white/10 px-4 py-2 rounded-full text-sm font-medium border border-white/5">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <button className="w-full py-5 bg-white text-black rounded-2xl font-black flex items-center justify-center gap-3 hover:bg-[#a3ae30] hover:text-white transition-all group">
                            <span>{language === 'ar' ? 'ابدأ مشروعك معنا' : 'Start Your Project'}</span>
                            <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
                        </button>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
