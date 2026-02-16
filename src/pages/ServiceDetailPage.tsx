import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { ChevronLeft, CheckCircle2, ArrowRight } from 'lucide-react';

const servicesData: Record<string, any> = {
    'branding': {
        titleKey: 'services.branding',
        image: 'https://images.unsplash.com/photo-1640975972263-1f73398e943b?auto=format&fit=crop&q=80&w=1200',
        fullDesc: 'We craft unique brand identities that resonate with your target audience. From logo design to complete brand guidelines, we ensure your business stands out in a crowded market.',
        features: ['Logo Design', 'Brand Strategy', 'Typography & Color Palette', 'Visual Identity Systems', 'Brand Guidelines'],
        gallery: [
            'https://images.unsplash.com/photo-1545235617-9465d2a55698?auto=format&fit=crop&q=80&w=800',
            'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&q=80&w=800'
        ]
    },
    'catalogs': {
        titleKey: 'services.catalogs',
        image: 'https://images.unsplash.com/photo-1636247499180-13285c86be9b?auto=format&fit=crop&q=80&w=1200',
        fullDesc: 'Professional catalog and company profile design that tells your story effectively. We combine high-quality layouts with compelling visual storytelling.',
        features: ['Company Profiles', 'Product Catalogs', 'Annual Reports', 'Sales Pitch Decks', 'Digital Magazines'],
        gallery: [
            'https://images.unsplash.com/photo-1544233726-9f1d2b27be8b?auto=format&fit=crop&q=80&w=800',
            'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800'
        ]
    },
    'animation': {
        titleKey: 'services.animation',
        image: 'https://images.unsplash.com/photo-1740174459694-4da6669ef2b0?auto=format&fit=crop&q=80&w=1200',
        fullDesc: 'Bringing ideas to life through movement. Our motion graphics and animation services transform complex concepts into engaging visual experiences.',
        features: ['2D/3D Animation', 'Motion Graphics', 'Explainer Videos', 'Logo Animation', 'Character Design'],
        gallery: [
            'https://images.unsplash.com/photo-1550745165-9bc0b252723f?auto=format&fit=crop&q=80&w=800',
            'https://images.unsplash.com/photo-1558655146-d09347e92766?auto=format&fit=crop&q=80&w=800'
        ]
    }
};

export function ServiceDetailPage() {
    const { id } = useParams();
    const { t, language } = useLanguage();
    const service = id ? servicesData[id] : null;

    if (!service) {
        return (
            <div className="min-h-screen bg-[#0a0a0a] flex flex-col items-center justify-center text-white p-6">
                <h1 className="text-4xl font-bold mb-6">Service Not Found</h1>
                <Link to="/" className="text-[#a3ae30] hover:underline">Back to Home</Link>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-[#0a0a0a] text-white pt-24 pb-20">
            <div className="container mx-auto px-6">
                {/* Back Button */}
                <Link to="/" className="inline-flex items-center gap-2 text-white/60 hover:text-white mb-12 transition-colors">
                    <ChevronLeft size={20} className={language === 'ar' ? "rotate-180" : ""} />
                    <span>{language === 'ar' ? 'العودة للرئيسية' : 'Back to Home'}</span>
                </Link>

                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    {/* Left: Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span className="text-[#a3ae30] text-sm tracking-[0.4em] uppercase font-bold mb-6 block">
                            {language === 'ar' ? 'الخدمة المميزة' : 'PREMIUM SERVICE'}
                        </span>
                        <h1 className="text-5xl md:text-7xl font-black mb-8 leading-tight">
                            {t(service.titleKey)}
                        </h1>
                        <p className="text-white/70 text-lg md:text-xl leading-relaxed mb-10 font-light max-w-2xl">
                            {service.fullDesc}
                        </p>

                        <div className="space-y-4 mb-12">
                            <h3 className="text-xl font-bold mb-6">{language === 'ar' ? 'ماذا نقدم:' : 'What We Offer:'}</h3>
                            <div className="grid sm:grid-cols-2 gap-4">
                                {service.features.map((feature: string, idx: number) => (
                                    <div key={idx} className="flex items-center gap-3 bg-white/5 p-4 rounded-xl border border-white/10">
                                        <CheckCircle2 size={18} className="text-[#a3ae30] shrink-0" />
                                        <span className="text-white/80 text-sm font-medium">{feature}</span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <motion.button
                            className="px-10 py-4 bg-[#a3ae30] text-black rounded-full font-bold hover:bg-[#c1ce3b] transition-all flex items-center gap-3 group"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            <span>{language === 'ar' ? 'اطلب الخدمة الآن' : 'Request Service'}</span>
                            <ArrowRight size={20} className={`transition-transform duration-300 group-hover:translate-x-2 ${language === 'ar' ? 'rotate-180 group-hover:-translate-x-2' : ''}`} />
                        </motion.button>
                    </motion.div>

                    {/* Right: Featured Image & Gallery */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="space-y-8"
                    >
                        <div className="aspect-[4/5] overflow-hidden rounded-3xl shadow-2xl relative group">
                            <img
                                src={service.image}
                                alt={t(service.titleKey)}
                                className="w-full h-full object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </div>

                        <div className="grid grid-cols-2 gap-6">
                            {service.gallery.map((img: string, idx: number) => (
                                <div key={idx} className="aspect-square overflow-hidden rounded-2xl border border-white/10 group">
                                    <img
                                        src={img}
                                        alt="Gallery"
                                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}
