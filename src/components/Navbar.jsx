import { useState, useEffect } from 'react';

const NAV_LINKS = [
  { name: 'Home', href: '#home', id: 'home' },
  { name: 'About', href: '#about', id: 'about' },
  { name: 'Skills', href: '#skills', id: 'skills' },
  { name: 'Experience', href: '#experience', id: 'experience' },
  { name: 'Projects', href: '#projects', id: 'projects' },
  { name: 'Contact', href: '#contact', id: 'contact' },
];

const Navbar = ({ activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      setScrollProgress(height > 0 ? (winScroll / height) * 100 : 0);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  return (
    <header className="fixed top-3 sm:top-5 inset-x-0 z-50 px-3 sm:px-6 pointer-events-none">
      {/* Mobile Backdrop Overlay - dims and blurs background elements so nothing bleeds through */}
      <div 
        className={`md:hidden fixed inset-0 bg-[#04060f]/80 backdrop-blur-md transition-all duration-300 pointer-events-auto ${
          isMenuOpen ? 'opacity-100 z-40' : 'opacity-0 pointer-events-none -z-10'
        }`}
        onClick={() => setIsMenuOpen(false)}
        aria-hidden="true"
      />

      {/* Floating Pill Island Navbar */}
      <nav 
        className={`relative overflow-hidden w-full max-w-[94%] md:max-w-max mx-auto rounded-full border transition-all duration-500 pointer-events-auto px-3.5 sm:px-4 py-2 sm:py-2.5 flex items-center justify-between md:justify-center gap-3 sm:gap-5 shadow-[0_12px_40px_-10px_rgba(0,0,0,0.85)] backdrop-blur-2xl z-50 ${
          isScrolled 
            ? 'bg-[#060813]/90 border-white/[0.14] shadow-cyan-950/20' 
            : 'bg-[#090d1a]/80 border-white/[0.08]'
        }`}
      >
        {/* Subtle Bottom Scroll Progress Line */}
        <div 
          className="absolute bottom-0 left-0 h-[2px] bg-gradient-to-r from-brand-primary via-brand-accent to-brand-secondary transition-all duration-75 pointer-events-none opacity-80"
          style={{ width: `${scrollProgress}%` }}
        ></div>

        {/* Mobile Left Status Beacon */}
        <div className="md:hidden flex items-center gap-2 pl-1">
          <span className="radar-beacon"></span>
          <span className="text-[11px] font-semibold text-emerald-400">Available</span>
        </div>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex items-center gap-1 sm:gap-1.5 text-xs lg:text-sm font-medium">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <li key={link.name}>
                <a
                  href={link.href}
                  className={`px-3.5 py-1.5 rounded-full transition-all duration-300 relative ${
                    isActive
                      ? 'text-white font-semibold bg-white/[0.08] shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)] border border-white/10'
                      : 'text-brand-muted hover:text-white hover:bg-white/[0.04]'
                  }`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 bg-brand-primary rounded-full shadow-[0_0_6px_#00f0ff]"></span>
                  )}
                </a>
              </li>
            );
          })}
        </ul>

        {/* Desktop Vertical Divider */}
        <div className="hidden md:block w-px h-4 bg-white/15"></div>

        {/* Right Action: Resume Button & Mobile Trigger */}
        <div className="flex items-center gap-2">
          <a
            href="https://drive.google.com/file/d/1272eqeIHiYgvucmMqpfHSaHFNp-uUnDG/view?usp=sharing"
            target="_blank" 
            rel="noopener noreferrer"
            className="px-3 py-1.5 rounded-full text-[11px] sm:text-xs font-bold text-white bg-gradient-to-r from-brand-primary/15 to-brand-accent/15 border border-brand-primary/30 hover:border-brand-primary hover:bg-brand-primary hover:text-black transition-all duration-300 shadow-sm inline-flex items-center gap-1.5"
          >
            <span>Resume</span>
            <i className="fas fa-arrow-up-right-from-square text-[9px] sm:text-[10px]"></i>
          </a>

          {/* Mobile Hamburger Button */}
          <button
            type="button"
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={isMenuOpen}
            className="md:hidden w-8 h-8 rounded-full border border-white/15 bg-white/[0.05] flex items-center justify-center text-sm text-brand-light hover:text-brand-primary focus:outline-none transition-colors"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <i className={isMenuOpen ? "fas fa-times" : "fas fa-bars"}></i>
          </button>
        </div>
      </nav>

      {/* Mobile Drawer (Floating Frosted Glass Card) */}
      <div 
        className={`md:hidden fixed inset-x-3 top-[62px] z-50 rounded-2xl sm:rounded-3xl bg-[#060813]/98 backdrop-blur-3xl border border-white/10 shadow-[0_25px_60px_rgba(0,0,0,0.95)] transition-all duration-300 pointer-events-auto p-4 sm:p-5 flex flex-col max-h-[calc(100dvh-78px)] overflow-y-auto ${
          isMenuOpen ? 'opacity-100 scale-100 pointer-events-auto translate-y-0' : 'opacity-0 scale-95 pointer-events-none -translate-y-4'
        }`}
      >
        <ul className="space-y-1.5 shrink-0">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <li key={link.name}>
                <a
                  href={link.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`flex items-center justify-between text-base font-semibold py-2.5 px-4 rounded-xl border transition-all ${
                    isActive 
                      ? 'text-brand-primary bg-brand-primary/10 border-brand-primary/30' 
                      : 'text-brand-muted hover:text-white border-transparent hover:bg-white/[0.04]'
                  }`}
                >
                  <span>{link.name}</span>
                  <i className={`fas fa-chevron-right text-xs ${isActive ? 'text-brand-primary' : 'text-white/20'}`}></i>
                </a>
              </li>
            );
          })}
        </ul>

        {/* Bottom Actions - firmly anchored with divider, zero overlap */}
        <div className="mt-4 pt-3.5 border-t border-white/10 space-y-2.5 shrink-0">
          <a
            href="https://drive.google.com/file/d/1272eqeIHiYgvucmMqpfHSaHFNp-uUnDG/view?usp=sharing"
            target="_blank" 
            rel="noopener noreferrer"
            onClick={() => setIsMenuOpen(false)}
            className="w-full py-3 rounded-xl btn-shimmer font-bold text-sm text-center flex items-center justify-center gap-2"
          >
            <span>Download Resume</span>
            <i className="fas fa-download text-xs"></i>
          </a>
          <p className="text-center text-[11px] text-brand-muted pb-1">
            &copy; {new Date().getFullYear()} Swatantra Raj Kumar Singh
          </p>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
