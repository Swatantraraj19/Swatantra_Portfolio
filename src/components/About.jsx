const About = () => {
    return (
      <section id="about" className="max-w-4xl mx-auto px-8 py-24 md:py-32">
        <h2 className="section-title">About Me</h2>
        
        <div className="text-center space-y-8 text-[1.1rem] leading-relaxed">
          <p>
            I am a passionate Software Developer with experience in building dynamic and responsive web applications. My journey in tech began at Bharati Vidyapeeth College of Engineering Pune, and has led me through valuable experiences at JetaTech InfoServices and Jeeyoride Pvt. Ltd.
          </p>
          <p>
            I thrive on solving complex problems, collaborating in agile environments, and leveraging <strong>AI & Generative AI</strong> to build smarter, more efficient user experiences. Here are a few things I'm proficient in:
          </p>
          
          <ul className="flex flex-wrap justify-center gap-6 pt-6">
            <li className="bg-brand-card px-6 py-2 rounded-full flex items-center gap-3 border border-white/10">
              <i className="fas fa-robot text-brand-primary"></i> AI & Generative AI
            </li>
            <li className="bg-brand-card px-6 py-2 rounded-full flex items-center gap-3 border border-white/10">
              <i className="fas fa-code text-brand-primary"></i> Core Web Technologies
            </li>
            <li className="bg-brand-card px-6 py-2 rounded-full flex items-center gap-3 border border-white/10">
              <i className="fas fa-tachometer-alt text-brand-primary"></i> Performance Optimization
            </li>
            <li className="bg-brand-card px-6 py-2 rounded-full flex items-center gap-3 border border-white/10">
              <i className="fas fa-users text-brand-primary"></i> Agile/Scrum Methodologies
            </li>
          </ul>
        </div>
      </section>
    );
};
  
export default About;
