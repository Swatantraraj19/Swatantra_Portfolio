const Contact = () => {
    return (
      <section id="contact" className="max-w-4xl mx-auto px-8 py-24 md:py-32 text-center">
        <h2 className="section-title">Get In Touch</h2>
        
        <div className="space-y-8 py-10">
          <p className="text-xl md:text-[1.1rem] text-brand-light/90 leading-relaxed max-w-2xl mx-auto">
            I'm currently open to new opportunities. Feel free to reach out via email or connect with me on LinkedIn!
          </p>
          <a 
            href="mailto:swatantrarajsingh1901@gmail.com" 
            className="btn-premium px-16 py-4 text-lg font-black tracking-widest uppercase hover:scale-110 active:scale-95 transition-all shadow-xl"
          >
            Say Hello
          </a>
        </div>
      </section>
    );
};
  
export default Contact;
