const Skills = () => {
    const skillList = [
      { name: "Languages", icon: "fas fa-code", desc: "C, C++, Python" },
      { name: "Web Development", icon: "fas fa-desktop", desc: "HTML, CSS, Tailwind CSS, JavaScript, React JS" },
      { name: "AI & Generative AI", icon: "fas fa-robot", desc: "Prompt Engineering, Generative AI (GenAI) Fundamentals, LLM Basics" },
      { name: "Concepts", icon: "fas fa-brain", desc: "OOPS, DSA, Computer Networks" },
      { name: "Tools & Platforms", icon: "fas fa-tools", desc: "Git/GitHub, Firebase, API, VS Code, Snyk" },
      { name: "Project Management", icon: "fas fa-tasks", desc: "Jira, Asana, Agile/Scrum, Sprint Planning" }
    ];
  
    return (
      <section id="skills" className="max-w-7xl mx-auto px-8 lg:px-12 py-24 md:py-32">
        <h2 className="section-title">Technical Skills</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pt-8">
          {skillList.map((skill, index) => (
            <div 
              key={index} 
              className="glass-card flex flex-col items-center justify-center text-center space-y-4 hover:-translate-y-2 transition-transform duration-300"
            >
              <i className={`${skill.icon} text-[3rem] text-brand-primary mb-4`}></i>
              <h3 className="text-xl font-black text-white">{skill.name}</h3>
              <p className="text-brand-light/80 text-lg">{skill.desc}</p>
            </div>
          ))}
        </div>
      </section>
    );
};
  
export default Skills;
