import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import { useLanguage } from './contexts/LanguageContext';
import { Header } from './components/Header';
import { HomePage } from './pages/HomePage';
import { ServicesPage } from './pages/ServicesPage';
import { PortfolioPage } from './pages/PortfolioPage';
import { PhilosophyPage } from './pages/PhilosophyPage';
import { ClientsPage } from './pages/ClientsPage';
import { TeamPage } from './pages/TeamPage';
import { ContactPage } from './pages/ContactPage';
import { Footer } from './components/Footer';
import { ContactModal } from './components/ContactModal';
import { Toaster } from 'sonner';
import './styles/globals.css';

function AppContent() {
  const { language } = useLanguage();
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white" dir={language === 'ar' ? 'rtl' : 'ltr'}>
      <Toaster position="top-center" richColors />
      <Header onOpenContact={() => setIsContactModalOpen(true)} />

      <Routes>
        <Route path="/" element={<HomePage onOpenContact={() => setIsContactModalOpen(true)} />} />
        <Route path="/philosophy" element={<PhilosophyPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/clients" element={<ClientsPage />} />
        <Route path="/team" element={<TeamPage />} />
        <Route path="/contact" element={<ContactPage />} />
      </Routes>

      <Footer />

      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
      />
    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <Router>
        <AppContent />
      </Router>
    </LanguageProvider>
  );
}

export default App;