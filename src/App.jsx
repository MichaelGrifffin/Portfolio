import React, { useState, useEffect } from 'react';
import ParticleCanvas from './components/ParticleCanvas';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Certifications from './components/Certifications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import MobileNav from './components/MobileNav';
import ResumeModal from './components/ResumeModal';
import { CheckCircle } from 'lucide-react';

function App() {
  const [activeTheme, setActiveTheme] = useState('default');
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', activeTheme);
  }, [activeTheme]);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  return (
    <div className="app-root">
      {/* Background Interactive Particle System */}
      <ParticleCanvas />

      {/* Header Navigation */}
      <Navbar
        activeTheme={activeTheme}
        setActiveTheme={setActiveTheme}
        onOpenResume={() => setIsResumeModalOpen(true)}
      />

      {/* Main Sections */}
      <main>
        <Hero onOpenResume={() => setIsResumeModalOpen(true)} />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Certifications />
        <Contact onShowToast={showToast} />
      </main>

      {/* Footer */}
      <Footer />

      {/* Mobile Bottom Quick Bar */}
      <MobileNav onOpenResume={() => setIsResumeModalOpen(true)} />

      {/* Printable Interactive Resume Modal */}
      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />

      {/* Live Toast Notification */}
      {toastMessage && (
        <div className="toast-notification">
          <CheckCircle size={20} style={{ color: 'var(--accent-emerald)' }} />
          <span>{toastMessage}</span>
        </div>
      )}
    </div>
  );
}

export default App;
