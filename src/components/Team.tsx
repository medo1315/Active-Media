import { useRef } from 'react';
import { motion } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../contexts/LanguageContext';
import { ImageWithFallback } from './figma/ImageWithFallback';

const teamMembers = [
  {
    id: 1,
    nameKey: 'team.member1.name',
    roleKey: 'team.member1.role',
    image: 'https://images.unsplash.com/photo-1737574821698-862e77f044c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBidXNpbmVzc21hbiUyMHBvcnRyYWl0fGVufDF8fHx8MTc2ODY1NzQ3NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 2,
    nameKey: 'team.member2.name',
    roleKey: 'team.member2.role',
    image: 'https://images.unsplash.com/photo-1581065178047-8ee15951ede6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMGJ1c2luZXNzJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY4NjYyNzgwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 3,
    nameKey: 'team.member3.name',
    roleKey: 'team.member3.role',
    image: 'https://images.unsplash.com/photo-1719257751404-1dea075324bd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMHByb2Zlc3Npb25hbCUyMG1hbnxlbnwxfHx8fDE3Njg3NDExMTZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 4,
    nameKey: 'team.member4.name',
    roleKey: 'team.member4.role',
    image: 'https://images.unsplash.com/photo-1724941407869-f8fb46a3cc38?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMHByb2Zlc3Npb25hbCUyMHBvcnRyYWl0fGVufDF8fHx8MTc2ODc0MTExNnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  {
    id: 5,
    nameKey: 'team.member1.name', // Reusing keys for demo consistency if needed or add more keys
    roleKey: 'team.member1.role',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'
  }
];

export function Team() {
  const { language, t } = useLanguage();
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -300, behavior: 'smooth' });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <section id="team" className="relative py-24 bg-[#0D0D0D] overflow-hidden border-t border-white/5">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12 items-center">

          {/* Left Column: Title & Controls */}
          <div className="lg:w-1/3 flex flex-col items-start min-w-[300px]">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-[#a3ae30] text-sm tracking-[0.4em] uppercase font-light mb-4">
                {language === 'ar' ? 'فريقنا المبدع' : 'OUR CREATIVE'}
              </p>
              <h2 className="text-7xl lg:text-8xl font-bold text-white uppercase tracking-tighter mb-12">
                {language === 'ar' ? 'الفريق' : 'TEAM'}
              </h2>

              {/* Navigation Buttons */}
              <div className="flex gap-4">
                <button
                  onClick={scrollLeft}
                  className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300 group"
                >
                  <ChevronLeft size={24} className={language === 'ar' ? "rotate-180" : ""} />
                </button>
                <button
                  onClick={scrollRight}
                  className="w-14 h-14 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-all duration-300 group"
                >
                  <ChevronRight size={24} className={language === 'ar' ? "rotate-180" : ""} />
                </button>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Scrollable Team Cards */}
          <div className="lg:w-2/3 w-full overflow-hidden">
            <motion.div
              className="flex gap-6 overflow-x-auto pb-8 hide-scrollbar cursor-grab active:cursor-grabbing"
              ref={scrollContainerRef}
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              {teamMembers.map((member, index) => (
                <div
                  key={member.id}
                  className="min-w-[280px] md:min-w-[320px] group"
                >
                  {/* Card Container */}
                  <div className="relative aspect-[3/4] overflow-hidden mb-6 bg-[#1a1a1a]">
                    <ImageWithFallback
                      src={member.image}
                      alt={t(member.nameKey)}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0"
                    />
                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>

                  {/* Text Content */}
                  <div className="text-center bg-[#1a1a1a] py-6 px-4 -mt-2 relative z-10 transition-colors duration-300 group-hover:bg-[#222]">
                    <h3 className="text-white text-xl font-bold mb-2 tracking-wide">
                      {t(member.nameKey)}
                    </h3>
                    <p className="text-white/50 text-sm tracking-wider uppercase">
                      {t(member.roleKey)}
                    </p>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
}