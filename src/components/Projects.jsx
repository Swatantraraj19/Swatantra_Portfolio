const Projects = () => {
  const projectList = [
    {
      title: "Food Junction Bikram – Digital Menu & Ordering PWA",
      desc: "Developed a high-performance PWA with 90+ Lighthouse scores. Featuring WhatsApp-integrated ordering, structured address validation, and SEO optimization using JSON-LD.",
      tags: ["React.js", "PWA", "Tailwind CSS", "WhatsApp API", "SEO"],
      img: "/FJ_project.png",
      demo: "https://foodjunctionbikram.in/",
      github: "https://github.com/Swatantraraj19/Food_Junction_Bikram_Showcase.git"
    },
    {
      title: "Hacker News Job Board",
      desc: "Developed a React-based job board using the Hacker News API with authentication, protected routes, bookmarking, and optimized performance & security.",
      tags: ["React.js", "Tailwind CSS", "Snyk"],
      img: "/Hacker.png",
      demo: "https://job-board-alpha-lake.vercel.app/",
      github: "https://github.com/Swatantraraj19/Job_Board"
    },
    {
      title: "Soil Organic Carbon Prediction System ",
      desc: "Built SOC prediction models using VNIR spectroscopy (ElasticNet, SVR, Polynomial Regression) improving ~15% (R²), and developed a Streamlit web app with PCA-based reduction, spectral resampling, and real-time prediction with visualization.",
      tags: ["Python", "Machine Learning", "Streamlit"],
      img: "/SOC.png",
      demo: "https://jalynatmucetgtplmgqf22.streamlit.app/",
      github: "https://github.com/Swatantraraj19/Soil-Analysis-and-Prediction-Using-Machine-Learning-and-VNIR-Spectroscopy-Data"
    },

    {
      title: "Jeeyoride Website & Admin Panel",
      desc: "Developed a responsive web interfaces, UI components and a functional admin dashboards that streamlined ride, user, and report management.. The design enhanced navigation efficiency by 25%.",
      tags: ["HTML", "CSS", "JavaScript", "React.js"],
      img: "/ride.jpg",
      demo: "https://jeeyoride.com/services.php"
    },
    {
      title: "Internship Projects",
      desc: "Developed three key projects during my internship: a responsive registration form, a dynamic calculator, and a weather app with a focus on cross-platform compatibility.",
      tags: ["HTML", "CSS", "JavaScript"],
      img: "/internship.png",
      github: "https://github.com/Swatantraraj19/LGM-Registration-Form"
    }
  ];

  return (
    <section id="projects" className="max-w-7xl mx-auto px-8 lg:px-12 py-24 md:py-32">
      <h2 className="section-title">Projects</h2>

      <div className="space-y-12 pt-8">
        {projectList.map((project, index) => (
          <div
            key={index}
            className="glass-card group overflow-hidden flex flex-col md:flex-row h-auto md:h-64 shadow-2xl hover:shadow-brand-primary/20 border-white/10 hover:border-brand-primary/50 transition-all duration-500"
          >
            <div className="h-48 md:h-full md:w-1/3 overflow-hidden relative border-b md:border-b-0 md:border-r border-white/10">
              <img
                src={project.img}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-brand-dark/40 group-hover:bg-transparent transition-all duration-500"></div>
            </div>

            <div className="p-8 flex-1 flex flex-col justify-between text-left">
              <div className="space-y-4">
                <h3 className="text-2xl font-black text-brand-primary">
                  {project.title}
                </h3>
                <p className="text-brand-light/80 text-[1rem] leading-relaxed">
                  {project.desc}
                </p>
              </div>

              <div className="flex flex-col md:flex-row md:items-center justify-start gap-x-12 gap-y-6 pt-6 border-t border-white/5">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] font-black tracking-wider text-brand-primary border border-brand-primary/20 bg-brand-primary/5 px-2.5 py-1 rounded-full uppercase">{tag}</span>
                  ))}
                </div>

                <div className="flex gap-6 uppercase font-black text-xs tracking-widest">
                  {project.demo && (
                    <a href={project.demo} target="_blank" className="text-brand-light hover:text-brand-primary hover:underline transition-all">Live Demo</a>
                  )}
                  {project.github && (
                    <a href={project.github} target="_blank" className="text-brand-light hover:text-brand-primary hover:underline transition-all">Source Code</a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
