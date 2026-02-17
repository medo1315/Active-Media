import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { ImageWithFallback } from './figma/ImageWithFallback';

const teamMembers = [
  {
    id: 1,
    nameKey: 'team.member1.name',
    roleKey: 'team.member1.role',
    image: 'https://images.unsplash.com/photo-1737574821698-862e77f044c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzc21hbiUyMHBvcnRyYWitfGVufDF8fHx8MTc2ODY1NzQ3NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 2,
    nameKey: 'team.member2.name',
    roleKey: 'team.member2.role',
    image: 'https://images.unsplash.com/photo-1581065178047-8ee15951ede6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMGJ1c2luZXRzcyUyMHBvcnRyYWl0fGVufDF8fHx8MTc2ODY2Mjc4MHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 3,
    nameKey: 'team.member3.name',
    roleKey: 'team.member3.role',
    image: 'https://images.unsplash.com/photo-1719257751404-1dea075324bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHxjcmVhdGl2ZSUyMHByb2Zlc3Npb25hbCUyMG1hbnxlbnwxfHx8fDE3Njg3NDExMTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 4,
    nameKey: 'team.member4.name',
    roleKey: 'team.member4.role',
    image: 'https://images.unsplash.com/photo-1724941407869-f8fb46a3cc38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHx5b3VuZyUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc2ODc0MTExNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 5,
    nameKey: 'team.member5.name',
    roleKey: 'team.member5.role',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80'
  },
  {
    id: 6,
    nameKey: 'team.member6.name',
    roleKey: 'team.member6.role',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=688&q=80'
  },
  {
    id: 7,
    nameKey: 'team.member7.name',
    roleKey: 'team.member7.role',
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80'
  },
  {
    id: 8,
    nameKey: 'team.member8.name',
    roleKey: 'team.member8.role',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=687&q=80'
  }
];

export function Team() {
  const { language, t } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(true);

  const cardWidth = 200;
  const gap = 24;

  // Tripling the list for seamless infinite loop
  const displayMembers = [...teamMembers, ...teamMembers, ...teamMembers];

  const nextSlide = () => {
    setCurrentIndex((prev) => prev + 1);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => prev - 1);
  };

  useEffect(() => {
    // If we've reached the end of our virtual sequence, snap back to the middle
    if (currentIndex >= teamMembers.length) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(0);
      }, 800); // Wait for animation duration
    } else if (currentIndex < 0) {
      setTimeout(() => {
        setIsTransitioning(false);
        setCurrentIndex(teamMembers.length - 1);
      }, 800);
    } else {
      setIsTransitioning(true);
    }
  }, [currentIndex]);

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [isHovered]);

  return (
    <section id="team" className="py-24 bg-[#0a0a0a] overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-12">

          {/* Left Column: Title Control */}
          <div className="lg:w-1/4 flex flex-col items-center lg:items-start text-center lg:text-left z-20 bg-[#0a0a0a] py-6">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-[#a3ae30] text-[10px] md:text-xs tracking-[0.5em] uppercase font-bold mb-4 opacity-100">
                {language === 'ar' ? 'فريقنا المبدع' : 'OUR CREATIVE'}
              </p>
              <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-none mb-8">
                {language === 'ar' ? 'الفريق' : 'TEAM'}
              </h2>

              {/* Navigation Arrows */}
              <div className="flex gap-2 justify-center lg:justify-start">
                <button
                  onClick={prevSlide}
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-[#a3ae30] hover:text-black hover:border-[#a3ae30] transition-all duration-300"
                >
                  <ChevronLeft size={18} />
                </button>
                <button
                  onClick={nextSlide}
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-[#a3ae30] hover:text-black hover:border-[#a3ae30] transition-all duration-300"
                >
                  <ChevronRight size={18} />
                </button>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Seamless Sliding Strip */}
          <div
            className="lg:w-3/4 w-full relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="overflow-hidden py-6">
              <motion.div
                className="flex"
                style={{ gap: `${gap}px` }}
                animate={{
                  x: -(currentIndex * (cardWidth + gap))
                }}
                transition={isTransitioning ? { duration: 0.8, ease: [0.4, 0, 0.2, 1] } : { duration: 0 }}
              >
                {/* Looping triple list ensures the strip is always populated during the snap back */}
                {displayMembers.map((member, idx) => (
                  <div
                    key={`${member.id}-${idx}`}
                    style={{ minWidth: `${cardWidth}px`, width: `${cardWidth}px` }}
                    className="flex flex-col group/card"
                  >
                    <div className="relative aspect-square overflow-hidden bg-[#111] rounded-xl mb-4 shadow-2xl">
                      <ImageWithFallback
                        src={member.image}
                        alt={t(member.nameKey)}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover/card:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover/card:opacity-100 transition-opacity duration-500" />
                    </div>

                    <div className="px-1 text-center lg:text-left transition-transform duration-300 group-hover/card:translate-x-1">
                      <h3 className="text-white text-base font-bold leading-tight mb-1 truncate">
                        {t(member.nameKey)}
                      </h3>
                      <p className="text-[#a3ae30]/80 text-[10px] font-bold uppercase tracking-widest">
                        {t(member.roleKey)}
                      </p>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Premium Overlay Shadows */}
            <div className="absolute top-0 left-0 w-24 h-full bg-gradient-to-r from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent z-10 pointer-events-none" />
            <div className="absolute top-0 right-0 w-24 h-full bg-gradient-to-l from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent z-10 pointer-events-none" />
          </div>

        </div>
      </div>
    </section>
  );
}