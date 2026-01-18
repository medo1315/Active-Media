import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'ar' | 'en';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations = {
  ar: {
    // Navigation
    'nav.home': 'Active Media',
    'nav.philosophy': 'Philosophy',
    'nav.clients': 'Clients',
    'nav.portfolio': 'Portfolio',
    'nav.services': 'Services',
    'nav.team': 'Team',
    'nav.contact': 'Contact Us',
    
    // Hero Section
    'hero.title1': 'Visual Excellence',
    'hero.title2': 'Since 2018',
    'hero.description': 'وكالة إنتاج متخصصة في صناعة تجارب بصرية راقية',
    'hero.cta': 'ابدأ مشروعك',
    
    // Showreel Section
    'showreel.label': 'Showreel',
    'showreel.title': 'رحلتنا المرئية',
    'showreel.description': 'استمتع بمشاهدة أبرز أعمالنا في دقائق معدودة',
    'showreel.stat1': 'مشروع مكتمل',
    'showreel.stat2': 'عميل سعيد',
    'showreel.stat3': 'سنوات خبرة',
    'showreel.stat4': 'جائزة دولية',
    
    // Services Section
    'services.label': 'خدماتنا',
    'services.title': 'SERVICES',
    'services.subtitle': 'ALL INCLUSIVE ADVERTISING SERVICES',
    'services.description': 'نقدم مجموعة متكاملة من خدمات الإنتاج المرئي بأعلى معايير الجودة',
    
    // Service Items
    'services.branding': 'الهوية البصرية',
    'services.brandingDesc': 'تصميم هوية بصرية مميزة لعلامتك التجارية',
    'services.catalogs': 'Catalogs & Profiles',
    'services.animation': 'Animation & Motion Graphics',
    'services.webapp': 'Web & Mobile Application',
    'services.social': 'Social Media',
    'services.photography': 'Photography & Video Shooting',
    'services.booths': 'Booths & Exhibitions',
    'services.giveaways': 'Giveaways & Production',
    'services.food': 'Food & Beverage Reel Production',
    'services.industrial': 'Industrial Documentaries',
    'services.packaging': 'Packaging Design Services',
    'services.events': 'Events Covering Video Production',
    
    'services.items.video.title': 'إنتاج الفيديو',
    'services.items.video.description': 'إنتاج فيديو احترافي من البداية للنهاية مع تركيز على الجودة والإبداع',
    'services.items.photography.title': 'التصوير الفوتوغرافي',
    'services.items.photography.description': 'تصوير احترافي يبرز جمال منتجاتك وعلامتك التجارية',
    'services.motion': 'الهوية البصرية والتصم��م',
    'services.motionDesc': 'إنشاء هويات تجارية قوية، شعارات، ملفات الشركات، ومواد مطبوعة تعكس قيم عملك',
    'services.animationDesc': 'إدارة قنوات التواصل الاجتماعي والحملات الإعلانية المدفوعة، مدعومة بالمحتوى عالي الجودة الذي ننتجه',
    'services.editing': 'المونتاج',
    'services.editingDesc': 'مونتاج احترافي يحكي قصتك بأفضل شكل',
    'services.items.design.title': 'التصميم الجرافيكي',
    'services.items.design.description': 'تصميمات إبداعية تعكس هوية علامتك التجارية بشكل مميز',
    'services.items.creative.title': 'التوجيه الإبداعي',
    'services.items.creative.description': 'إدارة إبداعية شاملة لمشاريعك من الفكرة إلى التنفيذ',
    'services.process.subtitle': 'عمليتنا',
    'services.process.title': 'كيف نعمل',
    'services.process.discovery': 'الاكتشاف',
    'services.process.planning': 'التخطيط',
    'services.process.execution': 'التنفيذ',
    'services.process.delivery': 'التسليم',
    'services.cta.title': 'هل أنت مستعد لبدء مشروعك؟',
    'services.cta.description': 'دعنا نحول رؤيتك إلى واقع مذهل',
    'services.cta.button': 'تواصل معنا',
    
    // Portfolio Section
    'portfolio.label': 'أعمالنا',
    'portfolio.title': 'PROJECTS',
    'portfolio.subtitle': 'QUALITY & VARIETY',
    'portfolio.description': 'مجموعة مختارة من أفضل أعمالنا التي حققت نجاحاً باهراً',
    'portfolio.all': 'الكل',
    'portfolio.video': 'فيديو',
    'portfolio.photography': 'تصوير',
    'portfolio.motion': 'تصميم',
    'portfolio.viewProject': 'عرض المشروع',
    'portfolio.readMore': 'READ MORE',
    'portfolio.categories.all': 'الكل',
    'portfolio.categories.video': 'فيديو',
    'portfolio.categories.photography': 'تصوير',
    'portfolio.categories.design': 'تصميم',
    'portfolio.stats.projects': 'مشروع',
    'portfolio.stats.clients': 'عميل',
    'portfolio.stats.awards': 'جائزة',
    'portfolio.stats.years': 'سنوات خبرة',
    
    // About Section
    'about.label': 'من نحن',
    'about.title': 'Active Media',
    'about.description': 'تأسست في عام 2018، Active Media هي وكالة إنتاج متخصصة في صناعة تجارب بصرية راقية تجذب الجمهور وتحتفظ به.',
    'about.description2': 'مثل المغناطيس، نجذب انتباه جمهورك من خلال محتوى استثنائي يجمع بين الإنتاج السينمائي والتصميم الاحترافي.',
    'about.description3': 'نركز على جمهورك المستهدف مع الانفتاح على فرص أوسع، ونبني علاقات مستدامة من خلال التفاعل المستمر والجودة التي تتحدث عن نفسها.',
    'about.vision': 'قوة الجذب',
    'about.visionText': 'مثل المغناطيس، نجذب الجمهور من خلال محتوى مميز لا يُقاوم',
    'about.mission': 'جمهور مستهدف',
    'about.missionText': 'نركز على جمهورك المثالي مع الانفتاح على فرص أوسع',
    'about.values': 'تفاعل اجتماعي',
    'about.valuesText': 'نبني علاقات مستدامة من خلال التواصل المستمر',
    'about.stat1': 'مشروع منجز',
    'about.stat2': 'عميل راضٍ',
    'about.stat3': 'سنوات خبرة',
    
    // Philosophy Section
    'philosophy.label': 'فلسفتنا',
    'philosophy.title': 'قوة الجذب',
    'philosophy.description': 'شعارنا ليس مجرد رمز، بل قصة كاملة عن كيفية جذب الجمهور وبناء علاقات مستدامة',
    'philosophy.heroTitle': 'فلسفة Active Media',
    'philosophy.intro': 'في Active Media، نؤمن بأن المحتوى المرئي الاستثنائي هو أكثر من مجرد صور وفيديوهات - إنه تجربة تجذب الجمهور وتبني علاقات مستدامة.',
    'philosophy.approach': 'مثل المغناطيس، نحن نجذب انتباه جمهورك من خلال محتوى استثنائي يجمع بين الإبداع والاحترافية. نركز على جمهورك المستهدف مع الانفتاح على فرص أوسع، ونبني علاقات قوية من خلال التفاعل المستمر والجودة العالية.',
    'philosophy.missionTitle': 'مهمتنا',
    'philosophy.missionIntro': 'مهمتنا هي الوصول إلى كل عميل في لحظة مناسبة من إبداعه، رسالة واضحة وصادقة ومليئة بالإبداع.',
    'philosophy.missionDescription': 'تتمثل مهمتنا في الوصول إلى كل عميل بطريقة تعبر عن التفكير في ثقافتهم، وهدفهم. نحن نجلبهم لنا مع الفن الأصلي والثقافة، وهذا ما نفعله بطريقة بسيطة تحقق الإبداع المطلق لما يمثلونه.',
    'philosophy.missionGoal': 'نسعى لتحقيق التميز في كل مشروع، ونجعل علامتك التجارية تبرز وسط المنافسة من خلال محتوى بصري استثنائي يحكي قصتك بأفضل شكل ممكن.',
    
    // Clients Section
    'clients.label': 'شركاؤنا',
    'clients.title': 'CLIENTS',
    'clients.subtitle': 'OUR HAPPY & SATISFIED',
    'clients.description': 'نتعاون مع علامات تجارية رائدة لتقديم محتوى بصري استثنائي',
    'clients.more': 'وأكثر من 200+ علامة تجارية أخرى',
    
    // Testimonials Section
    'testimonials.label': 'آراء العملاء',
    'testimonials.title': 'TESTIMONIALS',
    'testimonials.subtitle': 'ENDORSEMENT TWEETS',
    'testimonials.description': 'ماذا يقول عملاؤنا عن تجربتهم معنا',
    
    // Team Section
    'team.label': 'OUR CREATIVE',
    'team.title': 'TEAM',
    'team.description': 'فريق مبدع من المتخصصين في الإنتاج البصري والتسويق',
    'team.member1.name': 'Mohammed Tarek',
    'team.member1.role': 'Media Specialist',
    'team.member2.name': 'Mariem Elawady',
    'team.member2.role': 'Marketing Team',
    'team.member3.name': 'Ahmed Issa',
    'team.member3.role': 'Creative Team',
    'team.member4.name': 'Mohamed Ashraf',
    'team.member4.role': 'Creative Team',
    
    // CTA Section
    'cta.subtitle': 'LET\'S TALK',
    'cta.titlePrefix': 'ABOUT YOUR',
    'cta.titleHighlight': 'NEXT PROJECT',
    'cta.button': 'Get In Touch',
    'cta.viewWork': 'استعرض أعمالنا',
    
    // Stats Section
    'stats.clients': 'Clients',
    'stats.clientsCount': '118',
    'stats.projects': 'Projects',
    'stats.projectsCount': '216',
    'stats.years': 'Years',
    'stats.yearsCount': '10',
    'stats.services': 'Services',
    'stats.servicesCount': '13',
    
    // Blog Section
    'blog.label': 'المدونة',
    'blog.title': 'رؤى ومقالات',
    'blog.description': 'نصائح وأفكار من خبراء Active Media في عالم الإنتاج والتصميم',
    'blog.readMore': 'اقرأ المزيد',
    'blog.viewAll': 'عرض جميع المقالات',
    'blog.minutes': 'دقائق',
    
    // Contact Section
    'contact.label': 'تواصل معنا',
    'contact.title': 'لنبدأ معاً',
    'contact.description': 'نحن متحمسون لسماع أفكارك ومساعدتك في تحقيقها',
    'contact.name': 'الاسم',
    'contact.email': 'البريد الإلكتروني',
    'contact.phone': 'الهاتف',
    'contact.message': 'رسالتك',
    'contact.send': 'إرسال',
    'contact.namePlaceholder': 'أدخل اسمك',
    'contact.emailPlaceholder': 'أدخل بريدك الإلكتروني',
    'contact.phonePlaceholder': 'أدخل رقم هاتفك',
    'contact.messagePlaceholder': 'أبرنا عن مشروعك...',
    'contact.success': 'تم إرسال رسالتك بنجاح!',
    'contact.error': 'حدث خطأ. يرجى المحاولة مرة أخرى.',
    
    // Footer
    'footer.tagline': 'قوة الجذب',
    'footer.description': 'مثل المغناطيس، نجذب الجمهور من خلال محتوى استثنائي ونبني علاقات مستدامة من خلال التفاعل المستمر',
    'footer.quickLinks': 'روابط سريعة',
    'footer.services': 'خدماتنا',
    'footer.contact': 'تواصل معنا',
    'footer.rights': '© جميع الحقوق محفوظة',
    'footer.address': 'القاهرة، مصر',
  },
  en: {
    // Navigation
    'nav.home': 'Active Media',
    'nav.philosophy': 'Philosophy',
    'nav.clients': 'Clients',
    'nav.portfolio': 'Portfolio',
    'nav.services': 'Services',
    'nav.team': 'Team',
    'nav.contact': 'Contact Us',
    
    // Hero Section
    'hero.title1': 'Visual Excellence',
    'hero.title2': 'Since 2018',
    'hero.description': 'A production agency specialized in creating premium visual experiences',
    'hero.cta': 'Start Your Project',
    
    // Showreel Section
    'showreel.label': 'Showreel',
    'showreel.title': 'Our Visual Journey',
    'showreel.description': 'Enjoy watching our best work in a few minutes',
    'showreel.stat1': 'Completed Projects',
    'showreel.stat2': 'Happy Clients',
    'showreel.stat3': 'Years of Experience',
    'showreel.stat4': 'International Awards',
    
    // Services Section
    'services.label': 'Our Services',
    'services.title': 'SERVICES',
    'services.subtitle': 'ALL INCLUSIVE ADVERTISING SERVICES',
    'services.description': 'We offer a comprehensive range of visual production services with the highest quality standards',
    
    // Service Items
    'services.branding': 'Branding & Logo Design',
    'services.brandingDesc': 'Designing a distinctive visual identity for your brand',
    'services.catalogs': 'Catalogs & Profiles',
    'services.animation': 'Animation & Motion Graphics',
    'services.webapp': 'Web & Mobile Application',
    'services.social': 'Social Media',
    'services.photography': 'Photography & Video Shooting',
    'services.booths': 'Booths & Exhibitions',
    'services.giveaways': 'Giveaways & Production',
    'services.food': 'Food & Beverage Reel Production',
    'services.industrial': 'Industrial Documentaries',
    'services.packaging': 'Packaging Design Services',
    'services.events': 'Events Covering Video Production',
    
    'services.items.video.title': 'Media Production',
    'services.items.video.description': 'Complete video production from start to finish for commercials, corporate films, and promotional content with a focus on storytelling and visual quality',
    'services.items.photography.title': 'Professional Photography',
    'services.items.photography.description': 'Professional product and lifestyle photography designed to elevate your brand image across all platforms',
    'services.motion': 'Visual Identity & Design',
    'services.motionDesc': 'Creating strong brand identities, logos, company profiles, and printed materials that reflect your business values',
    'services.animationDesc': 'Managing social media channels and paid advertising campaigns, supported by high-quality content we produce',
    'services.editing': 'Editing',
    'services.editingDesc': 'Professional editing that tells your story perfectly',
    'services.items.design.title': 'Graphic Design',
    'services.items.design.description': 'Creative designs that highlight your brand identity in a unique way',
    'services.items.creative.title': 'Creative Direction',
    'services.items.creative.description': 'Comprehensive creative management for your projects from concept to execution',
    'services.process.subtitle': 'Our Process',
    'services.process.title': 'How We Work',
    'services.process.discovery': 'Discovery',
    'services.process.planning': 'Planning',
    'services.process.execution': 'Execution',
    'services.process.delivery': 'Delivery',
    'services.cta.title': 'Are You Ready to Start Your Project?',
    'services.cta.description': 'Let\'s turn your vision into a stunning reality',
    'services.cta.button': 'Contact Us',
    
    // Portfolio Section
    'portfolio.label': 'Our Work',
    'portfolio.title': 'PROJECTS',
    'portfolio.subtitle': 'QUALITY & VARIETY',
    'portfolio.description': 'A curated selection of our best work that achieved remarkable success',
    'portfolio.all': 'All',
    'portfolio.video': 'Video',
    'portfolio.photography': 'Photography',
    'portfolio.motion': 'Design',
    'portfolio.viewProject': 'View Project',
    'portfolio.readMore': 'READ MORE',
    'portfolio.categories.all': 'All',
    'portfolio.categories.video': 'Video',
    'portfolio.categories.photography': 'Photography',
    'portfolio.categories.design': 'Design',
    'portfolio.stats.projects': 'Project',
    'portfolio.stats.clients': 'Client',
    'portfolio.stats.awards': 'Award',
    'portfolio.stats.years': 'Years of Experience',
    
    // About Section
    'about.label': 'About Us',
    'about.title': 'Active Media',
    'about.description': 'Founded in 2018, Active Media is a production agency specialized in creating premium visual experiences that attract and retain audiences.',
    'about.description2': 'Like a magnet, we attract your audience\'s attention through exceptional content that combines cinematic production and professional design.',
    'about.description3': 'We focus on your target audience while remaining open to broader opportunities, building sustainable relationships through continuous engagement and quality that speaks for itself.',
    'about.vision': 'Power of Attraction',
    'about.visionText': 'Like a magnet, we attract audiences through irresistible distinctive content',
    'about.mission': 'Targeted Audience',
    'about.missionText': 'We focus on your ideal audience while remaining open to broader opportunities',
    'about.values': 'Social Engagement',
    'about.valuesText': 'We build sustainable relationships through continuous communication',
    'about.stat1': 'Completed Projects',
    'about.stat2': 'Satisfied Clients',
    'about.stat3': 'Years of Experience',
    
    // Philosophy Section
    'philosophy.label': 'Our Philosophy',
    'philosophy.title': 'Power of Attraction',
    'philosophy.description': 'Our logo is not just a symbol, but a complete story about how to attract audiences and build sustainable relationships',
    'philosophy.heroTitle': 'Active Media Philosophy',
    'philosophy.intro': 'At Active Media, we believe that exceptional visual content is more than just images and videos - it\'s an experience that attracts audiences and builds sustainable relationships.',
    'philosophy.approach': 'Like a magnet, we attract your audience\'s attention through exceptional content that combines creativity and professionalism. We focus on your target audience while remaining open to broader opportunities, building strong relationships through continuous engagement and high-quality.',
    'philosophy.missionTitle': 'Our Mission',
    'philosophy.missionIntro': 'Our mission is to reach every client at the right moment of their creativity, with a clear, honest, and creative message.',
    'philosophy.missionDescription': 'Our mission is to reach every client in a way that reflects their culture and goals. We bring them to us with original art and culture, and we do it in a simple way that achieves absolute creativity for what they represent.',
    'philosophy.missionGoal': 'We strive to achieve excellence in every project, and make your brand stand out in the competition through exceptional visual content that tells your story in the best possible way.',
    
    // Clients Section
    'clients.label': 'Our Partners',
    'clients.title': 'CLIENTS',
    'clients.subtitle': 'OUR HAPPY & SATISFIED',
    'clients.description': 'We collaborate with leading brands to deliver exceptional visual content',
    'clients.more': 'And more than 200+ other brands',
    
    // Testimonials Section
    'testimonials.label': 'Client Testimonials',
    'testimonials.title': 'TESTIMONIALS',
    'testimonials.subtitle': 'ENDORSEMENT TWEETS',
    'testimonials.description': 'What our clients say about their experience with us',
    
    // Team Section
    'team.label': 'OUR CREATIVE',
    'team.title': 'TEAM',
    'team.description': 'A creative team of professionals in visual production and marketing',
    'team.member1.name': 'Mohammed Tarek',
    'team.member1.role': 'Media Specialist',
    'team.member2.name': 'Mariem Elawady',
    'team.member2.role': 'Marketing Team',
    'team.member3.name': 'Ahmed Issa',
    'team.member3.role': 'Creative Team',
    'team.member4.name': 'Mohamed Ashraf',
    'team.member4.role': 'Creative Team',
    
    // CTA Section
    'cta.subtitle': 'LET\'S TALK',
    'cta.titlePrefix': 'ABOUT YOUR',
    'cta.titleHighlight': 'NEXT PROJECT',
    'cta.button': 'Get In Touch',
    'cta.viewWork': 'View Our Work',
    
    // Stats Section
    'stats.clients': 'Clients',
    'stats.clientsCount': '118',
    'stats.projects': 'Projects',
    'stats.projectsCount': '216',
    'stats.years': 'Years',
    'stats.yearsCount': '10',
    'stats.services': 'Services',
    'stats.servicesCount': '13',
    
    // Blog Section
    'blog.label': 'Blog',
    'blog.title': 'Latest Articles',
    'blog.description': 'Tips and ideas about visual production and content creation',
    'blog.readMore': 'Read More',
    'blog.viewAll': 'View All Articles',
    'blog.minutes': 'minutes',
    
    // Contact Section
    'contact.label': 'Contact Us',
    'contact.title': 'Let\'s Start Together',
    'contact.description': 'We are excited to hear your ideas and help you achieve them',
    'contact.name': 'Name',
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    'contact.message': 'Your Message',
    'contact.send': 'Send',
    'contact.namePlaceholder': 'Enter your name',
    'contact.emailPlaceholder': 'Enter your email',
    'contact.phonePlaceholder': 'Enter your phone number',
    'contact.messagePlaceholder': 'Tell us about your project...',
    'contact.success': 'Your message has been sent successfully!',
    'contact.error': 'An error occurred. Please try again.',
    
    // Footer
    'footer.tagline': 'Power of Attraction',
    'footer.description': 'Like a magnet, we attract audiences through exceptional content and build sustainable relationships through continuous engagement',
    'footer.quickLinks': 'Quick Links',
    'footer.services': 'Our Services',
    'footer.contact': 'Contact Us',
    'footer.rights': '© All Rights Reserved',
    'footer.address': 'Cairo, Egypt',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('ar');

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'ar' ? 'en' : 'ar');
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
}