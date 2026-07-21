const Contact = () => {
    return (
      <section id="contact" className="max-w-4xl mx-auto px-4 sm:px-8 pt-16 pb-12 md:pt-24 md:pb-16 text-center">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="space-y-8 py-6">
          <p className="text-lg md:text-[1.1rem] text-brand-light/90 leading-relaxed max-w-2xl mx-auto">
            Thanks for visiting my portfolio. If you'd like to discuss an opportunity, collaborate on a project, or simply connect, I'd love to hear from you.
          </p>

          <div className="pt-2">
            <a 
              href="mailto:swatantrarajsingh1901@gmail.com" 
              className="btn-premium px-10 py-4 text-base sm:text-lg font-bold tracking-wide transition-all duration-300 shadow-xl"
            >
              Contact Me
            </a>
          </div>

          <div className="flex flex-col sm:flex-row flex-wrap items-center justify-center gap-3 sm:gap-6 pt-6 text-brand-light/80 text-xs sm:text-base">
            <a 
              href="mailto:swatantrarajsingh1901@gmail.com" 
              className="flex items-center gap-2 hover:text-brand-primary transition-colors duration-300"
            >
              <i className="fas fa-envelope text-brand-primary"></i> swatantrarajsingh1901@gmail.com
            </a>
            <span className="hidden sm:inline text-white/20">•</span>
            <a 
              href="https://linkedin.com/in/swatantra-raj-kumar-singh-39b3a020a" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 hover:text-brand-primary transition-colors duration-300"
            >
              <i className="fab fa-linkedin text-brand-primary"></i> LinkedIn
            </a>
            <span className="hidden sm:inline text-white/20">•</span>
            <a 
              href="https://github.com/Swatantraraj19" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="flex items-center gap-2 hover:text-brand-primary transition-colors duration-300"
            >
              <i className="fab fa-github text-brand-primary"></i> GitHub
            </a>
          </div>
        </div>
      </section>
    );
};
  
export default Contact;
