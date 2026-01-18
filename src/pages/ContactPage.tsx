import { motion } from 'motion/react';
import { Facebook, Instagram, Linkedin, Twitter, Youtube, MapPin, Mail, Phone } from 'lucide-react';

export function ContactPage() {
    return (
        <div className="min-h-screen pt-20 pb-0 bg-black text-white relative overflow-hidden">
            {/* Background Large Text */}
            <div className="absolute top-0 left-0 w-full h-[50vh] overflow-hidden pointer-events-none select-none z-0 flex items-center justify-center opacity-5">
                <h1 className="text-[20vw] font-bold text-transparent stroke-white" style={{ WebkitTextStroke: '2px white' }}>
                    Contact
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
                        <span>Home</span>
                        <span>/</span>
                        <span className="text-[#a3ae30]">Talk About Your Project.</span>
                    </div>
                    <h2 className="text-4xl md:text-6xl font-bold uppercase tracking-wide">
                        Let's <br />
                        <span className="text-white">Talk About Your Project.</span>
                    </h2>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
                    {/* Left Column: Form */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h3 className="text-2xl font-bold mb-8">Get In Touch.</h3>
                        <form className="space-y-6">
                            <div>
                                <input
                                    type="text"
                                    placeholder="Name"
                                    className="w-full bg-transparent border-b border-gray-800 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-white transition-colors"
                                />
                            </div>
                            <div>
                                <input
                                    type="text"
                                    placeholder="Mobile"
                                    className="w-full bg-transparent border-b border-gray-800 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-white transition-colors"
                                />
                            </div>
                            <div>
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="w-full bg-transparent border-b border-gray-800 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-white transition-colors"
                                />
                            </div>
                            <div>
                                <input
                                    type="text"
                                    placeholder="Company"
                                    className="w-full bg-transparent border-b border-gray-800 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-white transition-colors"
                                />
                            </div>
                            <div>
                                <input
                                    type="text"
                                    placeholder="Title"
                                    className="w-full bg-transparent border-b border-gray-800 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-white transition-colors"
                                />
                            </div>
                            <div>
                                <input
                                    type="text"
                                    placeholder="Interest with:"
                                    className="w-full bg-transparent border-b border-gray-800 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-white transition-colors"
                                />
                            </div>
                            <div>
                                <textarea
                                    placeholder="Message"
                                    rows={4}
                                    className="w-full bg-black border border-gray-800 p-4 text-white placeholder-gray-600 focus:outline-none focus:border-white transition-colors resize-none rounded-sm"
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="px-8 py-3 border border-white text-xs font-bold tracking-widest uppercase hover:bg-white hover:text-black transition-colors duration-300"
                            >
                                Send Message
                            </button>
                        </form>
                    </motion.div>

                    {/* Right Column: Info */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <h3 className="text-2xl font-bold mb-8">Contact Info.</h3>

                        <div className="space-y-8">
                            <div>
                                <h4 className="text-xs font-bold tracking-widest text-[#a3ae30] mb-4 uppercase">Let's Talk.</h4>
                                <p className="text-gray-400 mb-1 hover:text-white transition-colors cursor-pointer">Hello@dawayertstudio.com</p>
                                <p className="text-gray-400 hover:text-white transition-colors cursor-pointer">+201112922926</p>
                            </div>

                            <div>
                                <h4 className="text-xs font-bold tracking-widest text-[#a3ae30] mb-4 uppercase">Visit Us.</h4>
                                <p className="text-gray-400">
                                    Villa 67, Industrial Area, New Cairo, Cairo Governorate.
                                </p>
                            </div>

                            {/* Social Icons */}
                            <div className="flex items-center gap-6 pt-8">
                                <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-white/5 hover:bg-white hover:text-black transition-all duration-300 text-white group">
                                    <Facebook size={14} />
                                </a>
                                <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-white/5 hover:bg-white hover:text-black transition-all duration-300 text-white group">
                                    <Youtube size={14} />
                                </a>
                                <a href="#" className="w-8 h-8 flex items-center justify-center rounded-full bg-white/5 hover:bg-white hover:text-black transition-all duration-300 text-white group">
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
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110502.60389552708!2d31.18928394467551!3d30.059618165684534!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1458479e0a81176b%3A0xe6e216266e85cb3!2sNew%20Cairo%201%2C%20Cairo%20Governorate!5e0!3m2!1sen!2seg!4v1709420000000!5m2!1sen!2seg"
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
                    Use ctrl + scroll to zoom the map
                </div>
            </div>

            {/* Copyright Footer */}
            <div className="bg-[#0D0D0D] py-8 text-center border-t border-white/5">
                <p className="text-gray-500 text-xs">© 2024 Dawayer Studio.</p>
            </div>
        </div>
    );
}
