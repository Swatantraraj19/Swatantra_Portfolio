import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';

const SECTIONS = ['home', 'about', 'skills', 'experience', 'projects', 'contact'];

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    // 0. Force scroll to top on fresh load
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }
    window.scrollTo(0, 0);

    // 1. Reveal on Scroll (Intersection Observer)
    const revealObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.05 });

    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

    // 2. Global Mouse-Reactive Spotlight for .spotlight-card elements
    const handleMouseMove = (e) => {
      const cards = document.querySelectorAll('.spotlight-card');
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        // Only set CSS variables if mouse is within proximity (padding of 120px)
        if (x >= -120 && x <= rect.width + 120 && y >= -120 && y <= rect.height + 120) {
          card.style.setProperty('--mouse-x', `${x}px`);
          card.style.setProperty('--mouse-y', `${y}px`);
        }
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // 3. Optimized Active Section & Scrolled state via requestAnimationFrame
    let ticking = false;

    const updateScrollState = () => {
      setScrolled(window.scrollY > 100);

      for (const section of SECTIONS) {
        const el = document.getElementById(section);
        if (el && el.getBoundingClientRect().top < 300) {
          setActiveSection(section);
        }
      }
      ticking = false;
    };

    const handleScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollState);
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
      revealObserver.disconnect();
    };
  }, []);

  return (
    <div className="bg-[#04060f] text-brand-light min-h-screen selection:bg-brand-primary/20 selection:text-brand-primary relative font-body antialiased overflow-x-hidden w-full max-w-full">
      {/* Background Decor - Linear-style Ambient Grid & Atmospheric Orbs */}
      <div className="fixed inset-0 pointer-events-none -z-10 overflow-hidden">
        {/* Subtle 32px Grid with Radial Mask */}
        <div 
          className="absolute inset-0 bg-grid-pattern opacity-40"
          style={{
            maskImage: 'radial-gradient(ellipse at 50% 20%, black 30%, transparent 75%)',
            WebkitMaskImage: 'radial-gradient(ellipse at 50% 20%, black 30%, transparent 75%)'
          }}
        ></div>

        {/* Multi-layered Atmospheric Glow Orbs with Living Aurora Pulse */}
        <div className="absolute top-[-5%] left-[20%] w-[520px] h-[520px] bg-brand-primary/15 rounded-full blur-[140px] animate-aurora"></div>
        <div className="absolute top-[25%] right-[-10%] w-[620px] h-[620px] bg-brand-accent/12 rounded-full blur-[160px] animate-aurora" style={{ animationDelay: '-4s' }}></div>
        <div className="absolute bottom-[10%] left-[-10%] w-[550px] h-[550px] bg-brand-secondary/10 rounded-full blur-[160px] animate-aurora" style={{ animationDelay: '-7s' }}></div>
      </div>

      <Navbar activeSection={activeSection} />

      <main className="relative z-10">
        <Hero />
        <div className="reveal"><About /></div>
        <div className="reveal"><Skills /></div>
        <div className="reveal"><Experience /></div>
        <div className="reveal"><Projects /></div>
        <div className="reveal"><Contact /></div>
      </main>

      <Footer />

      {/* Floating Back to Top Button */}
      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className={`fixed bottom-5 right-4 sm:bottom-8 sm:right-8 w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/15 bg-[#060813]/85 backdrop-blur-xl flex items-center justify-center text-brand-primary transition-all duration-500 z-30 shadow-2xl hover:border-brand-primary/50 hover:scale-110 active:scale-95 group ${
          scrolled ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-8 pointer-events-none'
        }`}
        aria-label="Scroll Back to Top"
      >
        <i className="fas fa-arrow-up text-xs sm:text-sm group-hover:-translate-y-0.5 transition-transform"></i>
      </button>
    </div>
  );
}


export default App;
