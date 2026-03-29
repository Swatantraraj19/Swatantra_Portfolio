import { useState, useEffect } from 'react';

const Navbar = ({ activeSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      setScrollProgress((winScroll / height) * 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMenuOpen]);

  const navLinks = [
    { name: 'Home', href: '#home', id: 'home' },
    { name: 'About', href: '#about', id: 'about' },
    { name: 'Skills', href: '#skills', id: 'skills' },
    { name: 'Experience', href: '#experience', id: 'experience' },
    { name: 'Projects', href: '#projects', id: 'projects' },
    { name: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 h-[70px] flex items-center ${isScrolled || isMenuOpen ? 'bg-brand-dark/95 backdrop-blur-xl border-b border-white/5 py-4' : 'bg-transparent py-8'}`}>
      {/* Scroll Progress Tube */}
      <div 
        className="absolute bottom-0 left-0 h-[2px] bg-brand-primary/80 transition-all duration-75 z-50" 
        style={{ width: `${scrollProgress}%` }}
      ></div>
      <nav className={`max-w-[1240px] w-full mx-auto px-8 flex justify-between items-center transition-all duration-500 ${isScrolled ? 'scale-95' : 'scale-100'}`}>
        {/* Mobile Menu Icon */}
        <div className="md:hidden order-2 text-2xl cursor-pointer z-50" onClick={() => setIsMenuOpen(!isMenuOpen)}>
           <i className={isMenuOpen ? "fas fa-times" : "fas fa-bars"}></i>
        </div>

        {/* Global Nav Links */}
        <ul className={`md:flex items-center ml-auto gap-8 ${isMenuOpen ? 'flex flex-col fixed top-[70px] left-0 w-full h-[calc(100vh-70px)] bg-brand-dark backdrop-blur-3xl py-10 shadow-3xl text-center overflow-y-auto' : 'hidden'}`}>
          {navLinks.map((link) => (
            <li key={link.name}>
              <a
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className={`text-[1rem] transition-colors duration-300 relative group py-2 
                  ${activeSection === link.id ? 'text-brand-primary font-bold' : 'text-brand-light hover:text-brand-primary'}`}
              >
                {link.name}
              </a>
            </li>
          ))}
          <li>
            <a 
              href="https://drive.google.com/file/d/1Lz5LkyjxhHB3qRiYZE860DbkbzhyEANN/view?usp=sharing" 
              target="_blank" rel="noopener noreferrer"
              className="px-6 py-2 border border-brand-primary/50 text-brand-primary rounded-full text-sm font-bold hover:bg-brand-primary/10 transition-all"
            >
              Resume <i className="fas fa-download ml-2 text-xs"></i>
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
