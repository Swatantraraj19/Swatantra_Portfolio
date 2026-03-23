const Hero = () => {
    return (
      <section id="home" className="max-w-7xl mx-auto px-8 lg:px-12 py-24 md:py-40 flex flex-col md:flex-row items-center justify-between gap-12 overflow-visible">
        <div className="flex-1 flex justify-center animate-slide-left opacity-0 [animation-fill-mode:forwards]">
          <div className="profile-photo-container">
            <img 
              src="/pro_swatantra.jpg" 
              alt="Profile photograph of Swatantra Raj Kumar Singh" 
              className="profile-photo"
            />
          </div>
        </div>
  
        <div className="flex-1 space-y-6 text-center md:text-left animate-slide-right opacity-0 [animation-fill-mode:forwards]">
          <h1 className="text-4xl md:text-[3.5rem] font-black leading-tight">
            Hi, I'm  <span className="text-white">  Swatantra   Raj   Kumar   Singh</span>
          </h1>
          <p className="text-2xl md:text-[2rem] font-bold text-brand-secondary">
            Software Developer
          </p>
          <p className="text-lg md:text-[1.1rem] text-brand-light max-w-lg leading-relaxed font-medium">
            Building high-performance, <strong>AI-driven</strong> web applications that enhance user engagement and deliver intelligent results.
          </p>
          
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-8 pt-8">
            <div className="flex gap-8 text-3xl">
              <a href="https://linkedin.com/in/swatantra-raj-kumar-singh-39b3a020a" target="_blank" rel="noopener noreferrer" className="text-brand-light hover:text-brand-primary transition-all duration-300">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://github.com/Swatantraraj19" target="_blank" rel="noopener noreferrer" className="text-brand-light hover:text-brand-primary transition-all duration-300">
                <i className="fab fa-github"></i>
              </a>
              <a href="mailto:swatantrarajsingh1901@gmail.com" className="text-brand-light hover:text-brand-primary transition-all duration-300">
                <i className="fas fa-envelope"></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    );
};
  
export default Hero;
