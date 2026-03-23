const Experience = () => {
    const experiences = [
      {
        role: "Software Developer",
        company: "Jeeyoride Pvt. Ltd. | Mar 2025 - Present",
        points: [
          "Developed responsive web interfaces, improving customer engagement and reducing bounce rate by 15%.",
          "Collaborated with senior developers to architect and implement the Admin Panel for managing rides, users, and reports.",
          "Collaborated with the team using Git and Jira for code management and sprint coordination."
        ]
      },
      {
        role: "Freelance Web Developer",
        company: "Self-Employed | Feb 2026 - Present",
        points: [
          "Developed end-to-end web solutions for local clients, focusing on high-impact business needs.",
          "Managed client relationships and translated complex requirements into scalable technical architectures.",
          "Delivered optimized, responsive applications with a focus on quick time-to-market and clean code."
        ]
      },
      {
        role: "Web Development Intern",
        company: "JetaTech InfoServices Pvt. Ltd. | Nov 2024 - Feb 2025",
        points: [
          "Gained hands-on experience with agile workflows, debugging, and front-end optimization.",
          "Built and deployed 3 projects, achieving a 30% improvement in UI responsiveness."
        ]
      }
    ];
  
    return (
      <section id="experience" className="max-w-4xl mx-auto px-8 py-24 md:py-32">
        <h2 className="section-title">Work Experience</h2>
        
        <div className="relative border-l-4 border-brand-primary/20 space-y-16 py-10 ml-4 md:ml-0 md:border-l-0">
          {/* Subtle Timeline Backbone for Desktop */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-brand-card via-brand-primary/80 to-brand-card"></div>
  
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className={`relative flex flex-col md:flex-row items-start md:items-center justify-between w-full opacity-100 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
            >
              {/* Timeline Indicator for Desktop */}
              <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-5 h-5 bg-brand-dark border-4 border-brand-secondary rounded-full z-10"></div>
              
              <div className={`w-full md:w-[42%] glass-card space-y-4 shadow-xl`}>
                <h3 className="text-xl font-bold text-brand-primary">{exp.role}</h3>
                <p className="italic text-brand-light/90">{exp.company}</p>
                <ul className="space-y-3">
                  {exp.points.map((point, idx) => (
                    <li key={idx} className="flex gap-3 text-[1rem] leading-relaxed">
                      <span className="text-brand-primary text-lg">✓</span>
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="hidden md:block w-[42%]"></div>
            </div>
          ))}
        </div>
      </section>
    );
};
  
export default Experience;
