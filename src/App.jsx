import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // 1. Reveal on Scroll (Intersection Observer)
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.15 });

    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

    // 2. Active Section & Scrolled state
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
      
      const sections = ['home', 'about', 'skills', 'experience', 'projects', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el && el.getBoundingClientRect().top < 300) {
          setActiveSection(section);
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      revealObserver.disconnect();
    };
  }, []);

  return (
    <div className="bg-brand-dark text-brand-light min-h-screen selection:bg-brand-primary/30 selection:text-brand-primary">
      <Navbar activeSection={activeSection} />
      
      <main>
        <div id="home" className="reveal"><Hero /></div>
        <div id="about" className="reveal"><About /></div>
        <div id="skills" className="reveal"><Skills /></div>
        <div id="experience" className="reveal"><Experience /></div>
        <div id="projects" className="reveal"><Projects /></div>
        <div id="contact" className="reveal"><Contact /></div>
      </main>

      <Footer />
      
      {/* Premium Back to Top */}
      <button 
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-10 right-10 w-14 h-14 glass glass-hover rounded-2xl flex items-center justify-center text-brand-primary transition-all duration-500 z-50 shadow-2xl group ${scrolled ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-10 scale-50 pointer-events-none'}`}
        aria-label="Back to Top"
      >
        <i className="fas fa-arrow-up group-hover:-translate-y-1 transition-transform"></i>
      </button>

      {/* Background Decor */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none -z-10 overflow-hidden">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-brand-primary/10 rounded-full blur-[120px]"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-brand-secondary/10 rounded-full blur-[120px]"></div>
      </div>
    </div>
  );
}

export default App;
