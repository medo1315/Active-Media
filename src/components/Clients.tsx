import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

// Extensive client logos array
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
  'REAL ESTATE', 'EMAAR', 'SODIC', 'PALM HILLS', 'TATWEER MISR',
  'VODAFONE CASH', 'INSTAPAY', 'FAWRY', 'PAYMOB', 'MASARY',
  'UBER', 'CAREEM', 'SWVL', 'DIDI', 'BOLT',
  'TALABAT', 'ELMENUS', 'OTLOB', 'ZOMATO', 'DELIVEROO',
  'ARAMEX', 'DHL', 'FEDEX', 'UPS', 'BOSTA',
  'GOOGLE', 'FACEBOOK', 'TWITTER', 'INSTAGRAM', 'TIKTOK',
  'MICROSOFT', 'APPLE', 'IBM', 'ORACLE', 'SAP',
  'ZARA', 'H&M', 'MANGO', 'FOREVER21', 'PULL&BEAR',
  'IKEA', 'HOME CENTER', 'MOBILIA', 'DANUBE', 'ACE'
];

export function Clients() {
  const { language } = useLanguage();
  // Using a subset of clients for the slider to keep it performant and clean
  const visibleClientsCount = 4;
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setStartIndex((prev) => (prev + visibleClientsCount) % clients.length);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  const currentClients = clients.slice(startIndex, startIndex + visibleClientsCount);
  // Handle edge case where slice goes beyond array length (though modulo handles start index)
  if (currentClients.length < visibleClientsCount) {
    currentClients.push(...clients.slice(0, visibleClientsCount - currentClients.length));
  }

  return (
    <section id="clients" className="relative py-32 bg-black overflow-hidden flex flex-col items-center justify-center min-h-[60vh]">

      {/* Background 'Clients' Text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex justify-center pointer-events-none select-none z-0">
        <h2 className="text-[15vw] font-bold text-transparent stroke-white opacity-[0.03] tracking-wider" style={{ WebkitTextStroke: '2px white' }}>
          Clients
        </h2>
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center">

        {/* Header Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-20"
        >
          <h3 className="text-[#a3ae30] text-sm md:text-base tracking-[0.5em] uppercase mb-4 font-light">
            {language === 'ar' ? 'عملائنا السعداء' : 'OUR HAPPY & SATISFIED'}
          </h3>
          <h2 className="text-5xl md:text-7xl font-bold text-white uppercase tracking-tight">
            {language === 'ar' ? 'العملاء' : 'CLIENTS'}
          </h2>
        </motion.div>

        {/* Sliding Logos */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 items-center justify-items-center">
            <AnimatePresence mode="popLayout">
              {currentClients.map((client, index) => (
                <motion.div
                  key={`${startIndex}-${index}`}
                  initial={{ opacity: 0, y: 20, filter: 'blur(10px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, y: -20, filter: 'blur(10px)' }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.1,
                    ease: "easeOut"
                  }}
                  className="w-full flex justify-center"
                >
                  <div className="w-full aspect-[3/2] flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 opacity-70 hover:opacity-100">
                    {/* 
                        For now using text as placeholder for logos based on array. 
                        In a real scenario, this would be an <img> tag.
                      */}
                    <span className="text-white text-xl md:text-2xl font-bold text-center">
                      {client}
                    </span>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  );
}
