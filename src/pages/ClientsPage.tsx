import { motion } from 'motion/react';
import { useLanguage } from '../contexts/LanguageContext';
import { Home, ChevronRight, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// Extensive client logos array with actual brand names
const clients = [
  'BENJOMO', 'THE YARD', 'ROXY', 'SESCO', 'AL AHLY',
  'PEPSI', 'VODAFONE', 'ORANGE', 'WE', 'ETISALAT',
  'COCA COLA', 'SAMSUNG', 'LG', 'SONY', 'PHILIPS',
  'ADIDAS', 'NIKE', 'PUMA', 'REEBOK', 'UNDER ARMOUR',
  'BMW', 'MERCEDES', 'AUDI', 'VOLKSWAGEN', 'TOYOTA',
  'HYUNDAI', 'KIA', 'FORD', 'CHEVROLET', 'NISSAN',
  'OPPO', 'VIVO', 'XIAOMI', 'HUAWEI', 'REALME',
  'DELL', 'HP', 'LENOVO', 'ASUS', 'ACER',
  'LOREAL', 'GARNIER', 'NIVEA', 'DOVE', 'PANTENE',
  'AMAZON', 'NOON', 'JUMIA', 'SOUQ', 'ALIBABA',
  'STARBUCKS', 'MCDONALDS', 'KFC', 'BURGER KING', 'SUBWAY',
  'CARREFOUR', 'LULU', 'SPINNEYS', 'METRO', 'KHEIR ZAMAN',
  'BANK MISR', 'CIB', 'NBE', 'QNB', 'ALEXBANK',
  'EMAAR', 'SODIC', 'PALM HILLS', 'TATWEER MISR', 'MAVEN',
  'VODAFONE CASH', 'INSTAPAY', 'FAWRY', 'PAYMOB', 'MASARY',
  'UBER', 'CAREEM', 'SWVL', 'DIDI', 'BOLT',
  'TALABAT', 'ELMENUS', 'OTLOB', 'ZOMATO', 'DELIVEROO',
  'ARAMEX', 'DHL', 'FEDEX', 'UPS', 'BOSTA',
  'GOOGLE', 'FACEBOOK', 'TWITTER', 'INSTAGRAM', 'TIKTOK',
  'MICROSOFT', 'APPLE', 'IBM', 'ORACLE', 'SAP',
  'ZARA', 'H&M', 'MANGO', 'FOREVER21', 'PULL&BEAR',
  'IKEA', 'HOME CENTER', 'MOBILIA', 'DANUBE', 'ACE',
  'NETFLIX', 'SPOTIFY', 'YOUTUBE', 'SHAHID', 'WATCH IT',
  'AIRBNB', 'BOOKING', 'EXPEDIA', 'TRIVAGO', 'KAYAK'
];

export function ClientsPage() {
  const { language, t } = useLanguage();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0D0D0D] pt-20">
      {/* Breadcrumb */}
      <motion.div
        className="container mx-auto px-6 py-8"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className={`flex items-center gap-2 text-sm ${language === 'ar' ? 'flex-row-reverse' : 'flex-row'}`}>
          <Link to="/">
            <motion.div
              className="flex items-center gap-2 text-white/40 hover:text-white/70 transition-colors group"
              whileHover={{ x: language === 'ar' ? 3 : -3 }}
            >
              <Home size={16} />
              <span className="tracking-wide">{language === 'ar' ? 'الرئيسية' : 'Home'}</span>
            </motion.div>
          </Link>
          <ChevronRight size={16} className={`text-white/20 ${language === 'ar' ? 'rotate-180' : ''}`} />
          <span className="text-white/70 tracking-wide">{language === 'ar' ? 'العملاء' : 'Clients'}</span>
        </div>
      </motion.div>

      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            className="absolute top-1/4 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.05, 0.1, 0.05]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl"
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.1, 0.05, 0.1]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 4
            }}
          />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Main Title */}
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.h1
              className="text-7xl md:text-9xl lg:text-[12rem] font-bold text-white tracking-tight mb-8"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              CLIENTS
            </motion.h1>

            {/* Decorative Line */}
            <motion.div
              className="w-24 h-px bg-white/20 mx-auto mb-12"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />

            {/* Subtitle */}
            <motion.div
              className="space-y-3 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <p className="text-white/60 text-base md:text-lg tracking-wide leading-relaxed">
                {language === 'ar' 
                  ? 'العميل المستمر هو استراتيجية عمل قوية واحدة.'
                  : 'A Continued Client is One Solid Business Strategy.'
                }
              </p>
              <p className="text-white/40 text-sm md:text-base tracking-wider">
                {language === 'ar' ? 'ثقة مُثبتة.' : 'a proven trust.'}
              </p>
            </motion.div>
          </motion.div>

          {/* Clients Grid - 4 columns with actual logos */}
          <motion.div
            className="max-w-7xl mx-auto mb-24"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 md:gap-8 lg:gap-10">
              {clients.map((client, index) => (
                <motion.div
                  key={index}
                  className="relative group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ 
                    duration: 0.5, 
                    delay: 0.4 + (index % 24) * 0.02,
                    ease: [0.22, 1, 0.36, 1]
                  }}
                >
                  {/* Logo Container */}
                  <div className="aspect-[4/3] flex items-center justify-center">
                    <div className="relative w-full h-full flex items-center justify-center bg-[#1A1A1A] backdrop-blur-sm rounded-xl border border-white/[0.08] group-hover:border-white/20 transition-all duration-500 group-hover:bg-[#222222] overflow-hidden">
                      {/* Logo Text */}
                      <span className="text-white/50 text-[11px] md:text-xs font-medium tracking-[0.15em] text-center px-4 group-hover:text-white/80 transition-all duration-500 relative z-10">
                        {client}
                      </span>
                      
                      {/* Hover Gradient Background */}
                      <motion.div
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        style={{
                          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, transparent 100%)'
                        }}
                      />
                      
                      {/* Hover Glow Effect */}
                      <motion.div
                        className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                        style={{
                          background: 'radial-gradient(circle at center, rgba(255, 255, 255, 0.08) 0%, transparent 70%)',
                          filter: 'blur(12px)'
                        }}
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA Section */}
          <motion.div
            className="max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            {/* Divider Line */}
            <motion.div
              className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent mb-16"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 1.2, delay: 0.7 }}
            />

            {/* CTA Content */}
            <div className="text-center">
              <motion.p
                className="text-white/30 text-xs tracking-[0.3em] uppercase mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.8 }}
              >
                {language === 'ar' ? 'مفتوح حالياً لـ' : 'CURRENTLY OPEN FOR'}
              </motion.p>
              
              <motion.h3
                className="text-4xl md:text-6xl font-light text-white mb-10 tracking-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.9 }}
              >
                {language === 'ar' ? 'المشروع التالي' : 'NEXT PROJECT'}
              </motion.h3>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
              >
                <motion.button
                  className="group relative px-12 py-5 bg-white text-black text-sm tracking-[0.2em] uppercase font-medium rounded-full overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    // Scroll to top then navigate to home with contact
                    window.scrollTo({ top: 0 });
                    setTimeout(() => {
                      window.location.href = '/#contact';
                    }, 300);
                  }}
                >
                  {/* Button Background Effect */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-white via-gray-100 to-white"
                    initial={{ x: '-100%' }}
                    whileHover={{ x: '100%' }}
                    transition={{ duration: 0.6 }}
                  />
                  
                  <span className="relative z-10 flex items-center gap-3">
                    {language === 'ar' ? 'تواصل معنا' : 'REACH OUT'}
                    <ArrowUpRight size={18} className="group-hover:rotate-45 transition-transform duration-300" />
                  </span>
                  
                  {/* Glow Effect */}
                  <motion.div
                    className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{
                      background: 'radial-gradient(circle, rgba(255, 255, 255, 0.4) 0%, transparent 70%)',
                      filter: 'blur(20px)',
                      transform: 'scale(1.5)'
                    }}
                  />
                </motion.button>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <motion.section
        className="relative py-20 border-t border-white/5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.1 }}
      >
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 max-w-5xl mx-auto">
            {[
              { number: '118+', label: language === 'ar' ? 'عميل سعيد' : 'Happy Clients' },
              { number: '216+', label: language === 'ar' ? 'مشروع مكتمل' : 'Completed Projects' },
              { number: '6+', label: language === 'ar' ? 'سنوات خبرة' : 'Years Experience' },
              { number: '15+', label: language === 'ar' ? 'جائزة دولية' : 'International Awards' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center group cursor-default"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <motion.h3
                  className="text-4xl md:text-5xl font-bold text-white mb-3 tracking-tight group-hover:text-white/90 transition-colors"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: 1.3 + index * 0.1 }}
                >
                  {stat.number}
                </motion.h3>
                <p className="text-white/50 text-xs md:text-sm tracking-[0.2em] uppercase group-hover:text-white/70 transition-colors">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
}
