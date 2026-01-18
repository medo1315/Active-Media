import { Instagram, Facebook, Linkedin, Twitter, Magnet } from 'lucide-react';
import { motion } from 'motion/react';
import logo from '../assets/30db22424ddeca550d6f82028b6980b8e2ce95d6.png';

export function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram' },
    { icon: Facebook, href: '#', label: 'Facebook' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
    { icon: Twitter, href: '#', label: 'Twitter' }
  ];

  return (
    <footer className="bg-[#0D0D0D] text-white border-t border-white/10">
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Brand Philosophy Message */}
          <motion.div
            className="text-center mb-12 pb-12 border-b border-white/10"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="inline-flex items-center gap-3 mb-4"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <motion.div
                animate={{
                  rotate: [0, 360],
                  scale: [1, 1.2, 1]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <Magnet className="text-white" size={28} />
              </motion.div>
              <span className="text-2xl font-light text-white">
                قوة الجذب
              </span>
            </motion.div>
            <p className="text-gray-400 max-w-2xl mx-auto leading-relaxed">
              مثل المغناطيس، نجذب الجمهور من خلال محتوى استثنائي ونبني علاقات مستدامة من خلال التفاعل المستمر
            </p>
          </motion.div>

          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <motion.div
              className="text-center md:text-left"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <motion.img
                src={logo}
                alt="Active Media"
                className="h-12 w-auto mb-3 mx-auto md:mx-0"
                whileHover={{ scale: 1.05 }}
              />
              <div className="text-sm text-white/40">
                {currentYear} © جميع الحقوق محفوظة
              </div>
            </motion.div>

            <div className="flex gap-6">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    className="text-white/40 hover:text-white transition-colors relative"
                    aria-label={social.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
                    whileHover={{
                      y: -6,
                      scale: 1.2
                    }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-white rounded-full opacity-0"
                      whileHover={{ opacity: 0.2, scale: 1.5 }}
                      transition={{ duration: 0.3 }}
                    />
                    <Icon size={20} />
                  </motion.a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}