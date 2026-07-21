const Experience = () => {
  const experiences = [
    {
      role: "Software Developer",
      company: "Jeeyoride Pvt. Ltd. | Mar 2025 - Present",
      points: [
        "Developed production-ready web applications and responsive user interfaces, delivering high-quality features that enhanced user experience and business operations.",
        "Designed and enhanced Admin Panel modules with interactive dashboards, data tables, forms, and workflow management features to improve operational efficiency.",
        "Collaborated with cross-functional teams in an Agile environment to develop new features, optimize application performance, resolve production issues, and deliver reliable software releases."
      ]
    },

    {
      role: "Web Development Intern",
      company: "JetaTech InfoServices Pvt. Ltd. | Dec 2024 - Feb 2025",
      points: [
        "Collaborated with the development team in an Agile environment to build and maintain responsive web applications.",
        "Built and deployed three web applications while contributing to debugging, frontend optimization, testing, and application deployment."
      ]
    }
  ];

  return (
    <section id="experience" className="max-w-5xl mx-auto px-4 sm:px-8 py-16 md:py-32">
      <h2 className="section-title">Work Experience</h2>

      <div className="relative border-l-2 sm:border-l-4 border-brand-primary/20 space-y-12 sm:space-y-16 py-8 sm:py-10 ml-2 sm:ml-4 md:ml-0 md:border-l-0">
        {/* Subtle Timeline Backbone for Desktop */}
        <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-brand-card via-brand-primary/80 to-brand-card"></div>

        {experiences.map((exp, index) => (
          <div
            key={index}
            className={`relative flex flex-col md:flex-row items-start md:items-center justify-between w-full opacity-100 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
          >
            {/* Timeline Indicator for Desktop */}
            <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-5 h-5 bg-brand-dark border-4 border-brand-secondary rounded-full z-10"></div>

            <div className={`w-full md:w-[46%] glass-card space-y-4 shadow-xl`}>
              <h3 className="text-xl font-bold text-brand-primary">{exp.role}</h3>
              <p className="italic text-brand-light/90">{exp.company}</p>
              <ul className="space-y-3">
                {exp.points.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-[0.95rem] md:text-[1rem] leading-relaxed">
                    <i className="fas fa-check text-brand-primary text-sm mt-1 shrink-0"></i>
                    <span className="flex-1 text-left">{point}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="hidden md:block w-[46%]"></div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
