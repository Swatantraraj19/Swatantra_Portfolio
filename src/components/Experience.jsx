const EXPERIENCES = [
  {
    role: "Software Developer",
    company: "Jeeyoride Pvt. Ltd.",
    tenure: "Mar 2025 - Present",
    displayYear: "2025 — PRESENT",
    current: true,
    highlights: ["Admin Panel Architecture", "Production Releases", "Agile Execution"],
    points: [
      "Developed production-ready web applications and responsive user interfaces, delivering high-quality features that enhanced user experience and business operations.",
      "Designed and enhanced Admin Panel modules with interactive dashboards, data tables, forms, and workflow management features to improve operational efficiency.",
      "Collaborated with cross-functional teams in an Agile environment to develop new features, optimize application performance, resolve production issues, and deliver reliable software releases."
    ],
    skills: ["React.js", "JavaScript (ES6+)", "Admin Modules", "Tailwind CSS", "Agile / Scrum", "GenAI"]
  },
  {
    role: "Web Development Intern",
    company: "JetaTech InfoServices Pvt. Ltd.",
    tenure: "Dec 2024 - Feb 2025",
    displayYear: "DEC 2024 — FEB 2025",
    current: false,
    highlights: ["3 Web Apps Deployed", "Frontend Optimization"],
    points: [
      "Collaborated with the development team in an Agile environment to build and maintain responsive web applications.",
      "Built and deployed three web applications while contributing to debugging, frontend optimization, testing, and application deployment."
    ],
    skills: ["HTML5", "CSS3", "JavaScript", "Responsive Design", "Git Workflow"]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="max-w-5xl mx-auto px-4 sm:px-8 py-16 md:py-28">
      <h2 className="section-title">Work Experience</h2>
      <p className="section-subtitle">
        Engineering career progression, production systems built, and corporate impact.
      </p>

      {/* Sleek Vertical Electric Line with Glowing Pulse Nodes */}
      <div className="relative space-y-8 sm:space-y-12 before:absolute before:inset-0 before:left-3 md:before:left-1/2 before:-translate-x-px before:w-0.5 before:bg-gradient-to-b before:from-brand-primary before:via-brand-accent/40 before:to-transparent">
        {EXPERIENCES.map((exp, index) => (
          <div
            key={index}
            className={`relative flex flex-col md:flex-row items-center ${
              index % 2 === 0 ? 'md:flex-row-reverse' : ''
            } gap-4 sm:gap-6 md:gap-12 pl-7 sm:pl-8 md:pl-0`}
          >
            {/* Glowing Pulse Node */}
            <div className="absolute left-3 md:left-1/2 -translate-x-1/2 top-6 w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#060813] border-2 border-brand-primary flex items-center justify-center shadow-[0_0_15px_rgba(0,240,255,0.7)] z-10">
              <span className="w-1.5 h-1.5 rounded-full bg-brand-primary animate-pulse"></span>
            </div>

            {/* Opposite-Side Floating Timestamp on Laptop View */}
            <div className={`hidden md:flex w-[calc(50%-1.5rem)] items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'} px-4 select-none`}>
              <div className="p-3 sm:p-3.5 rounded-2xl bg-white/[0.02] border border-white/10 backdrop-blur-xl flex flex-col items-center gap-1 shadow-lg hover:border-brand-primary/30 transition-all duration-300">
                <span className="text-xs font-mono font-bold text-brand-primary tracking-widest uppercase">
                  {exp.displayYear}
                </span>
                <span className="text-[10px] text-brand-muted font-medium">
                  {exp.company}
                </span>
              </div>
            </div>

            {/* Experience Card */}
            <div className={`w-full md:w-[calc(50%-1.5rem)] bento-card spotlight-card p-4 sm:p-6 md:p-8 space-y-3.5 sm:space-y-4 hover:border-white/25 transition-all duration-300 text-left ${
              exp.current ? 'border-brand-primary/25 shadow-[0_0_30px_rgba(0,240,255,0.08)]' : ''
            }`}>
              {/* Card Header with Role Title, Company & Tenure */}
              <div className="flex flex-wrap items-start justify-between gap-3 border-b border-white/[0.08] pb-3.5 sm:pb-4">
                <div>
                  <h3 className="text-base sm:text-xl font-bold text-white leading-tight">
                    {exp.role}
                  </h3>
                  <div className="text-xs sm:text-sm font-semibold text-brand-primary mt-0.5">
                    {exp.company}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row items-start sm:items-center gap-1.5 sm:gap-2">
                  {exp.current && (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-[10px] sm:text-[11px] font-semibold border border-emerald-500/30 shadow-[0_0_10px_rgba(16,185,129,0.15)]">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                      <span>ACTIVE ROLE</span>
                    </span>
                  )}
                  <span className={`text-[10px] sm:text-xs font-semibold px-2.5 py-0.5 rounded-full border ${
                    exp.current 
                      ? 'bg-white/[0.05] text-brand-light border-white/15' 
                      : 'bg-white/[0.04] text-brand-muted border-white/10'
                  }`}>
                    {exp.tenure}
                  </span>
                </div>
              </div>

              {/* Impact Micro-Chips */}
              <div className="flex flex-wrap gap-1.5 pt-0.5">
                {exp.highlights.map((h, hIdx) => (
                  <span 
                    key={hIdx} 
                    className="text-[10px] sm:text-[10.5px] px-2 py-0.5 rounded-md bg-white/[0.03] text-brand-light/80 border border-white/[0.08] flex items-center gap-1"
                  >
                    <i className="fas fa-bolt text-[8px] text-amber-400"></i>
                    <span>{h}</span>
                  </span>
                ))}
              </div>

              {/* Bullet Points with subtle glowing chevron accents & hover state */}
              <ul className="space-y-2 sm:space-y-2.5 pt-1">
                {exp.points.map((point, idx) => (
                  <li 
                    key={idx} 
                    className="group/item flex items-start gap-2 sm:gap-2.5 text-xs sm:text-sm text-brand-muted hover:text-brand-light/95 transition-colors leading-relaxed"
                  >
                    <i className="fas fa-chevron-right text-brand-primary text-[10px] sm:text-xs mt-1 shrink-0 group-hover/item:translate-x-0.5 group-hover/item:text-brand-primary transition-all"></i>
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-1.5 pt-2.5 sm:pt-3 border-t border-white/[0.08]">
                {exp.skills.map((tech) => (
                  <span
                    key={tech}
                    className="text-[10px] sm:text-[10.5px] font-medium text-brand-light/80 bg-white/[0.04] border border-white/[0.08] hover:border-brand-primary/40 hover:bg-brand-primary/10 hover:text-white px-2.5 py-0.5 rounded-md active:scale-95 transition-all cursor-default"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;

