import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { Home, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// Team data structure
const teamData = {
  cofounder: {
    name: 'Ahmed Khaled',
    role: 'Co-founder / Creative Director',
    image: 'https://images.unsplash.com/photo-1610631066894-62452ccb927c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMGNlb3xlbnwxfHx8fDE3Njg3NDQ2ODd8MA&ixlib=rb-4.1.0&q=80&w=1080'
  },
  leadership: [
    { name: 'Sarah Ahmed', role: 'Managing Director', image: 'https://images.unsplash.com/photo-1762522927402-f390672558d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMGhlYWRzaG90fGVufDF8fHx8MTc2ODY5NzY5MXww&ixlib=rb-4.1.0&q=80&w=1080' },
    { name: 'Mohamed Hassan', role: 'Executive Producer', image: 'https://images.unsplash.com/photo-1626784579980-db39c1a13aa9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGRlc2lnbmVyJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY4NzQ0Njg4fDA&ixlib=rb-4.1.0&q=80&w=1080' },
    { name: 'Layla Mahmoud', role: 'Art Director', image: 'https://images.unsplash.com/photo-1548414545-026475d88256?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJrZXRpbmclMjBwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdHxlbnwxfHx8fDE3Njg3NDQ2ODl8MA&ixlib=rb-4.1.0&q=80&w=1080' }
  ],
  creativeTeam: [
    { name: 'Omar Fathy', role: 'Senior Designer', image: 'https://images.unsplash.com/photo-1643968612613-fd411aecd1fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaG90b2dyYXBoZXIlMjBwb3J0cmFpdCUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3Njg2NzA1ODV8MA&ixlib=rb-4.1.0&q=80&w=1080' },
    { name: 'Nour Saleh', role: 'Motion Designer', image: 'https://images.unsplash.com/photo-1758390851244-1434c9c1e26f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMHByb2R1Y2VyJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc2ODc0NDY5MHww&ixlib=rb-4.1.0&q=80&w=1080' },
    { name: 'Youssef Ali', role: 'Creative Copywriter', image: 'https://images.unsplash.com/photo-1610631066894-62452ccb927c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMGNlb3xlbnwxfHx8fDE3Njg3NDQ2ODd8MA&ixlib=rb-4.1.0&q=80&w=1080' },
    { name: 'Mona Adel', role: 'Brand Strategist', image: 'https://images.unsplash.com/photo-1762522927402-f390672558d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMGhlYWRzaG90fGVufDF8fHx8MTc2ODY5NzY5MXww&ixlib=rb-4.1.0&q=80&w=1080' },
    { name: 'Karim Nabil', role: 'Video Editor', image: 'https://images.unsplash.com/photo-1626784579980-db39c1a13aa9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGRlc2lnbmVyJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY4NzQ0Njg4fDA&ixlib=rb-4.1.0&q=80&w=1080' },
    { name: 'Dina Ibrahim', role: 'UX/UI Designer', image: 'https://images.unsplash.com/photo-1548414545-026475d88256?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJrZXRpbmclMjBwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdHxlbnwxfHx8fDE3Njg3NDQ2ODl8MA&ixlib=rb-4.1.0&q=80&w=1080' },
    { name: 'Hassan Tarek', role: 'Photographer', image: 'https://images.unsplash.com/photo-1643968612613-fd411aecd1fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaG90b2dyYXBoZXIlMjBwb3J0cmFpdCUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3Njg2NzA1ODV8MA&ixlib=rb-4.1.0&q=80&w=1080' },
    { name: 'Rana Mostafa', role: '3D Artist', image: 'https://images.unsplash.com/photo-1758390851244-1434c9c1e26f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMHByb2R1Y2VyJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc2ODc0NDY5MHww&ixlib=rb-4.1.0&q=80&w=1080' },
    { name: 'Amr Samir', role: 'Content Creator', image: 'https://images.unsplash.com/photo-1610631066894-62452ccb927c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMGNlb3xlbnwxfHx8fDE3Njg3NDQ2ODd8MA&ixlib=rb-4.1.0&q=80&w=1080' },
    { name: 'Salma Gamal', role: 'Social Media Manager', image: 'https://images.unsplash.com/photo-1762522927402-f390672558d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMGhlYWRzaG90fGVufDF8fHx8MTc2ODY5NzY5MXww&ixlib=rb-4.1.0&q=80&w=1080' },
    { name: 'Mahmoud Sayed', role: 'Sound Designer', image: 'https://images.unsplash.com/photo-1626784579980-db39c1a13aa9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGRlc2lnbmVyJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY4NzQ0Njg4fDA&ixlib=rb-4.1.0&q=80&w=1080' },
    { name: 'Heba Fouad', role: 'Illustrator', image: 'https://images.unsplash.com/photo-1548414545-026475d88256?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJrZXRpbmclMjBwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdHxlbnwxfHx8fDE3Njg3NDQ2ODl8MA&ixlib=rb-4.1.0&q=80&w=1080' }
  ],
  production: [
    { name: 'Tamer Khaled', role: 'Director of Photography', image: 'https://images.unsplash.com/photo-1643968612613-fd411aecd1fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaG90b2dyYXBoZXIlMjBwb3J0cmFpdCUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3Njg2NzA1ODV8MA&ixlib=rb-4.1.0&q=80&w=1080' },
    { name: 'Yasmin Zaki', role: 'Producer', image: 'https://images.unsplash.com/photo-1758390851244-1434c9c1e26f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMHByb2R1Y2VyJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc2ODc0NDY5MHww&ixlib=rb-4.1.0&q=80&w=1080' },
    { name: 'Eslam Ahmed', role: 'Colorist', image: 'https://images.unsplash.com/photo-1610631066894-62452ccb927c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMGNlb3xlbnwxfHx8fDE3Njg3NDQ2ODd8MA&ixlib=rb-4.1.0&q=80&w=1080' },
    { name: 'Mariam Said', role: 'Production Manager', image: 'https://images.unsplash.com/photo-1762522927402-f390672558d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMGhlYWRzaG90fGVufDF8fHx8MTc2ODY5NzY5MXww&ixlib=rb-4.1.0&q=80&w=1080' },
    { name: 'Ali Ragab', role: 'Camera Operator', image: 'https://images.unsplash.com/photo-1626784579980-db39c1a13aa9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGRlc2lnbmVyJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY4NzQ0Njg4fDA&ixlib=rb-4.1.0&q=80&w=1080' },
    { name: 'Noha Farouk', role: 'Lighting Technician', image: 'https://images.unsplash.com/photo-1548414545-026475d88256?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJrZXRpbmclMjBwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdHxlbnwxfHx8fDE7Njg3NDQ2ODl8MA&ixlib=rb-4.1.0&q=80&w=1080' },
    { name: 'Khaled Hamdy', role: 'Gaffer', image: 'https://images.unsplash.com/photo-1643968612613-fd411aecd1fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaG90b2dyYXBoZXIlMjBwb3J0cmFpdCUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3Njg2NzA1ODV8MA&ixlib=rb-4.1.0&q=80&w=1080' },
    { name: 'Nada Magdy', role: 'Makeup Artist', image: 'https://images.unsplash.com/photo-1758390851244-1434c9c1e26f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMHByb2R1Y2VyJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc2ODc0NDY5MHww&ixlib=rb-4.1.0&q=80&w=1080' },
    { name: 'Sherif Hany', role: 'Stylist', image: 'https://images.unsplash.com/photo-1610631066894-62452ccb927c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMGNlb3xlbnwxfHx8fDE3Njg3NDQ2ODd8MA&ixlib=rb-4.1.0&q=80&w=1080' }
  ],
  agencyTeam: [
    { name: 'Reem Tarek', role: 'Account Manager', image: 'https://images.unsplash.com/photo-1762522927402-f390672558d8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb2Zlc3Npb25hbCUyMGhlYWRzaG90fGVufDF8fHx8MTc2ODY5NzY5MXww&ixlib=rb-4.1.0&q=80&w=1080' },
    { name: 'Adel Fahmy', role: 'Business Developer', image: 'https://images.unsplash.com/photo-1626784579980-db39c1a13aa9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjcmVhdGl2ZSUyMGRlc2lnbmVyJTIwcG9ydHJhaXR8ZW58MXx8fHwxNzY4NzQ0Njg4fDA&ixlib=rb-4.1.0&q=80&w=1080' },
    { name: 'Farah Ashraf', role: 'Project Coordinator', image: 'https://images.unsplash.com/photo-1548414545-026475d88256?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYXJrZXRpbmclMjBwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdHxlbnwxfHx8fDE3Njg3NDQ2ODl8MA&ixlib=rb-4.1.0&q=80&w=1080' },
    { name: 'Ibrahim Youssef', role: 'Finance Manager', image: 'https://images.unsplash.com/photo-1643968612613-fd411aecd1fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwaG90b2dyYXBoZXIlMjBwb3J0cmFpdCUyMHByb2Zlc3Npb25hbHxlbnwxfHx8fDE3Njg2NzA1ODV8MA&ixlib=rb-4.1.0&q=80&w=1080' },
    { name: 'Nourhan Waleed', role: 'HR Specialist', image: 'https://images.unsplash.com/photo-1758390851244-1434c9c1e26f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMHByb2R1Y2VyJTIwcHJvZmVzc2lvbmFsfGVufDF8fHx8MTc2ODc0NDY5MHww&ixlib=rb-4.1.0&q=80&w=1080' },
    { name: 'Ziad Nasser', role: 'Office Manager', image: 'https://images.unsplash.com/photo-1610631066894-62452ccb927c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBwb3J0cmFpdCUyMGNlb3xlbnwxfHx8fDE3Njg3NDQ2ODd8MA&ixlib=rb-4.1.0&q=80&w=1080' }
  ]
};

export function TeamPage() {
  const { language } = useLanguage();

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
          <span className="text-white/70 tracking-wide">{language === 'ar' ? 'الفريق' : 'Team'}</span>
        </div>
      </motion.div>

      {/* Hero Section with Team Header */}
      <section className="relative py-16 overflow-hidden">
        {/* Background with Image Overlay */}
        <div className="absolute inset-0">
          {/* Dark Overlay */}
          <div className="absolute inset-0 bg-[#0D0D0D]/90 z-10" />

          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0" style={{
              backgroundImage: `radial-gradient(circle at 1px 1px, rgba(255,255,255,0.1) 1px, transparent 0)`,
              backgroundSize: '40px 40px'
            }} />
          </div>
        </div>

        <div className="container mx-auto px-6 relative z-20">
          {/* Main Title */}
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          >
            <motion.h1
              className="text-6xl md:text-8xl lg:text-9xl font-bold text-white tracking-tight mb-8"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.1 }}
            >
              {language === 'ar' ? 'فريقنا' : 'OUR TEAM'}
            </motion.h1>

            {/* Decorative Line */}
            <motion.div
              className="w-24 h-px bg-white/20 mx-auto mb-10"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            />

            {/* Subtitle */}
            <motion.p
              className="text-white/60 text-base md:text-lg max-w-3xl mx-auto leading-relaxed px-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {language === 'ar'
                ? 'فريق متكامل من المبدعين والمتخصصين الذين يعملون معاً لتحقيق رؤيتك الإبداعية. نحن نؤمن بأن النجاح يأتي من التعاون والشغف والتفاني في كل مشروع.'
                : 'A complete team of creatives and specialists working together to achieve your creative vision. We believe that success comes from collaboration, passion, and dedication in every project.'
              }
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Co-founder Section */}
      <section className="relative py-16">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            {/* Large Profile Image */}
            <motion.div
              className="relative w-48 h-48 md:w-56 md:h-56 mx-auto mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
            >
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/20 to-white/5 blur-2xl opacity-50" />
              <img
                src={teamData.cofounder.image}
                alt={teamData.cofounder.name}
                className="relative w-full h-full rounded-full object-cover border-4 border-white/10 shadow-2xl"
              />
            </motion.div>

            {/* Name and Role */}
            <motion.h3
              className="text-2xl md:text-3xl font-light text-white mb-2 tracking-wide"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {teamData.cofounder.name}
            </motion.h3>
            <motion.p
              className="text-white/50 text-sm tracking-[0.2em] uppercase"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
            >
              {teamData.cofounder.role}
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="relative py-16">
        <div className="container mx-auto px-6">
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 md:gap-16 max-w-5xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            {teamData.leadership.map((member, index) => (
              <TeamMember key={index} member={member} index={index} delay={0.9 + index * 0.1} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Divider */}
      <motion.div
        className="container mx-auto px-6 py-16"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
        <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </motion.div>

      {/* Creative Team Section */}
      <section className="relative py-16">
        <div className="container mx-auto px-6">
          <motion.h2
            className="text-4xl md:text-5xl font-light text-white text-center mb-16 tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {language === 'ar' ? 'الفريق الإبداعي' : 'Creative Team'}
          </motion.h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-8 md:gap-12 max-w-6xl mx-auto">
            {teamData.creativeTeam.map((member, index) => (
              <TeamMember key={index} member={member} index={index} delay={0.1 + index * 0.05} />
            ))}
          </div>
        </div>
      </section>

      {/* Production Team Section */}
      <section className="relative py-16">
        <div className="container mx-auto px-6">
          <motion.h2
            className="text-4xl md:text-5xl font-light text-white text-center mb-16 tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {language === 'ar' ? 'فريق الإنتاج' : 'Production Team'}
          </motion.h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-8 md:gap-12 max-w-6xl mx-auto">
            {teamData.production.map((member, index) => (
              <TeamMember key={index} member={member} index={index} delay={0.1 + index * 0.05} />
            ))}
          </div>
        </div>
      </section>

      {/* Agency Team Section */}
      <section className="relative py-16 mb-20">
        <div className="container mx-auto px-6">
          <motion.h2
            className="text-4xl md:text-5xl font-light text-white text-center mb-16 tracking-wide"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {language === 'ar' ? 'فريق الوكالة' : "Creative Agency's Team"}
          </motion.h2>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 gap-8 md:gap-12 max-w-4xl mx-auto">
            {teamData.agencyTeam.map((member, index) => (
              <TeamMember key={index} member={member} index={index} delay={0.1 + index * 0.05} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <motion.section
        className="relative py-20 border-t border-white/5"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="container mx-auto px-6 text-center">
          <motion.h3
            className="text-3xl md:text-5xl font-light text-white mb-8 tracking-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {language === 'ar' ? 'انضم إلى فريقنا' : 'Join Our Team'}
          </motion.h3>

          <motion.p
            className="text-white/60 text-base md:text-lg mb-10 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
          >
            {language === 'ar'
              ? 'هل أنت مستعد لإحداث فرق؟ نحن نبحث دائماً عن مواهب جديدة للانضمام إلى عائلتنا الإبداعية.'
              : "Ready to make a difference? We're always looking for talented individuals to join our creative family."
            }
          </motion.p>

          <motion.button
            className="group relative px-12 py-5 bg-white text-black text-sm tracking-[0.2em] uppercase font-medium rounded-full overflow-hidden"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              window.scrollTo({ top: 0 });
              setTimeout(() => {
                window.location.href = '/#contact';
              }, 300);
            }}
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-white via-gray-100 to-white"
              initial={{ x: '-100%' }}
              whileHover={{ x: '100%' }}
              transition={{ duration: 0.6 }}
            />

            <span className="relative z-10">
              {language === 'ar' ? 'تواصل معنا' : 'GET IN TOUCH'}
            </span>
          </motion.button>
        </div>
      </motion.section>
    </div>
  );
}

// Team Member Component
function TeamMember({ member, index, delay }: { member: { name: string; role: string; image: string }, index: number, delay: number }) {
  return (
    <motion.div
      className="group text-center"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.6,
        delay: delay,
        ease: [0.22, 1, 0.36, 1]
      }}
    >
      {/* Profile Image */}
      <motion.div
        className="relative w-32 h-32 md:w-36 md:h-36 mx-auto mb-5"
        whileHover={{ scale: 1.08, y: -5 }}
        transition={{ duration: 0.3 }}
      >
        {/* Glow Effect */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/10 to-white/5 blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        {/* Image */}
        <img
          src={member.image}
          alt={member.name}
          className="relative w-full h-full rounded-full object-cover border-2 border-white/10 group-hover:border-white/30 transition-all duration-500 shadow-lg"
          loading="lazy"
        />

        {/* Hover Overlay */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-white/0 to-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </motion.div>

      {/* Name */}
      <motion.h4
        className="text-white text-sm md:text-base font-light mb-1 tracking-wide group-hover:text-white/90 transition-colors"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: delay + 0.1 }}
      >
        {member.name}
      </motion.h4>

      {/* Role */}
      <motion.p
        className="text-white/40 text-xs tracking-wider uppercase group-hover:text-white/60 transition-colors"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: delay + 0.2 }}
      >
        {member.role}
      </motion.p>
    </motion.div>
  );
}
