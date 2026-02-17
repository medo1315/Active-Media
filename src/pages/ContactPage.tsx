import { motion } from 'framer-motion';
import { Facebook, Instagram, Linkedin, Twitter, Youtube } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';

export function ContactPage() {
    const { t, language } = useLanguage();
    const isAr = language === 'ar';

    return (
        <div className="min-h-screen pt-20 pb-0 bg-black text-white relative overflow-hidden" dir={isAr ? 'rtl' : 'ltr'}>
            {/* Background Large Text */}
            <div className="absolute top-0 left-0 w-full h-[50vh] overflow-hidden pointer-events-none select-none z-0 flex items-center justify-center opacity-5">
                <h1 className="text-[20vw] font-bold text-transparent stroke-white" style={{ WebkitTextStroke: '2px white' }}>
                    {isAr ? 'اتصل بنا' : 'Contact'}
                </h1>
            </div>

            <div className="container mx-auto px-6 relative z-10 pt-16">
                {/* Breadcrumb / Intro */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="mb-12"
                >
                    <div className="flex items-center gap-2 text-sm text-gray-500 mb-4 uppercase tracking-wider">
                        <span>{t('contact.breadcrumbHome')}</span>
                        <span>/</span>
                        <span className="text-[#9B8A5E]">{t('contact.breadcrumbCurrent')}</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-wide leading-tight">
                        {isAr ? 'لنتحدث عن' : 'Let\'s'} <br />
                        <span className="text-white">{isAr ? 'مشروعك التالي.' : 'Talk About Your Project.'}</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
                    {/* Left Column: Form */}
                    <motion.div
                        initial={{ opacity: 0, x: isAr ? 30 : -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h3 className="text-2xl font-bold mb-8">{t('contact.formTitle')}</h3>
                        <form className="space-y-6">
                            <div>
                                <input
                                    type="text"
                                    placeholder={t('contact.namePlaceholder')}
                                    className="w-full bg-transparent border-b border-gray-800 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-white transition-colors"
                                />
                            </div>
                            <div>
                                <input
                                    type="text"
                                    placeholder={t('contact.mobilePlaceholder')}
                                    className="w-full bg-transparent border-b border-gray-800 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-white transition-colors"
                                />
                            </div>
                            <div>
                                <input
                                    type="email"
                                    placeholder={t('contact.emailPlaceholder')}
                                    className="w-full bg-transparent border-b border-gray-800 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-white transition-colors"
                                />
                            </div>
                            <div>
                                <input
                                    type="text"
                                    placeholder={t('contact.companyPlaceholder')}
                                    className="w-full bg-transparent border-b border-gray-800 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-white transition-colors"
                                />
                            </div>
                            <div>
                                <input
                                    type="text"
                                    placeholder={t('contact.titlePlaceholder')}
                                    className="w-full bg-transparent border-b border-gray-800 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-white transition-colors"
                                />
                            </div>
                            <div>
                                <input
                                    type="text"
                                    placeholder={t('contact.interestPlaceholder')}
                                    className="w-full bg-transparent border-b border-gray-800 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-white transition-colors"
                                />
                            </div>
                            <div>
                                <textarea
                                    placeholder={t('contact.messagePlaceholder')}
                                    rows={4}
                                    className="w-full bg-black border border-gray-800 p-4 text-white placeholder-gray-600 focus:outline-none focus:border-white transition-colors resize-none rounded-sm"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="px-8 py-3 border border-white text-xs font-bold tracking-widest uppercase hover:bg-white hover:text-black transition-colors duration-300"
                            >
                                {t('contact.send')}
                            </button>
                        </form>
                    </motion.div>

                    {/* Right Column: Info */}
                    <motion.div
                        initial={{ opacity: 0, x: isAr ? -30 : 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h3 className="text-2xl font-bold mb-8">{t('contact.infoTitle')}</h3>

                        <div className="space-y-8">
                            <div>
                                <h4 className="text-xs font-bold tracking-widest text-[#9B8A5E] mb-4 uppercase">{t('contact.letsTalk')}</h4>
                                <p className="text-gray-400 mb-1 hover:text-white transition-colors cursor-pointer">Hello@activemediaeg.com</p>
                                <p className="text-gray-400 hover:text-white transition-colors cursor-pointer">+201025299199</p>
                            </div>

                            <div>
                                <h4 className="text-xs font-bold tracking-widest text-[#9B8A5E] mb-4 uppercase">{t('contact.visitUs')}</h4>
                                <p className="text-gray-400 mb-4">
                                    3 El-Shaikh Ghalib St, behind the Family Park, near Suez Rd, New Cairo.
                                </p>
                                <a
                                    href="https://maps.app.goo.gl/3U3kJDxZ4EMifZPBA"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 text-xs text-[#9B8A5E] hover:text-white transition-colors uppercase tracking-widest font-bold"
                                >
                                    {t('contact.getDirections')}
                                </a>
                            </div>

                            {/* Social Icons */}
                            <div className="flex items-center gap-6 pt-8">
                                <a href="https://www.facebook.com/ActiveMediaEg" target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex items-center justify-center rounded-full bg-white/5 hover:bg-white hover:text-black transition-all duration-300 text-white group">
                                    <Facebook size={14} />
                                </a>
                                <a href="https://www.youtube.com/@activemediaeg" target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex items-center justify-center rounded-full bg-white/5 hover:bg-white hover:text-black transition-all duration-300 text-white group">
                                    <Youtube size={14} />
                                </a>
                                <a href="https://www.instagram.com/activemediaeg" target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex items-center justify-center rounded-full bg-white/5 hover:bg-white hover:text-black transition-all duration-300 text-white group">
                                    <Instagram size={14} />
                                </a>
                                <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-white/5 hover:bg-white hover:text-black transition-all duration-300 text-white group">
                                    <Linkedin size={14} />
                                </a>
                                <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-white/5 hover:bg-white hover:text-black transition-all duration-300 text-white group">
                                    <Twitter size={14} />
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Map Section */}
            <div className="w-full h-[400px] bg-gray-900 border-t border-gray-800 relative group">
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13813.435728340153!2d31.4286667!3d30.0573937!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14582f3484f2c8db%3A0xa59be1c4800742f3!2zYWN0aXZlIG1lZGlhIC0gzpHOus-EzrnPhiBNzrXOtM65zrE!5e0!3m2!1sen!2seg!4v1709420000000!5m2!1sen!2seg"
                    width="100%"
                    height="100%"
                    style={{ border: 0, filter: 'grayscale(100%) invert(90%)' }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="opacity-70 group-hover:opacity-100 transition-opacity duration-500"
                ></iframe>

                {/* Map Overlay Text */}
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none bg-black/60 backdrop-blur-sm px-6 py-3 rounded text-white text-sm">
                    {isAr ? 'استخدم ctrl + scroll لتكبير الخريطة' : 'Use ctrl + scroll to zoom the map'}
                </div>
            </div>

            {/* Copyright Footer */}
            <div className="bg-[#0D0D0D] py-8 text-center border-t border-white/5">
                <p className="text-gray-500 text-xs">
                    {isAr
                        ? `${new Date().getFullYear()} © Active Media. جميع الحقوق محفوظة`
                        : `© ${new Date().getFullYear()} Active Media. All Rights Reserved.`}
                </p>
            </div>
        </div>
    );
}
