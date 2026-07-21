const Projects = () => {
  const projectList = [
    {
      title: "ArogyamPath :  AI-Assisted Healthcare Platform",
      desc: "It is an AI-assisted patient-doctor healthcare platform that helps patients understand their symptoms, connect with the right specialist, and book appointments, while enabling doctors to efficiently manage appointments, availability, and their daily practice.",
      tags: ["React 19","Tailwind CSS","Firebase Auth","Firestore","Gemini API","Google Maps API","PWA"],
      img: "/arogyampath.png",
      demo: "https://arogyampath.vercel.app/",
      github: "https://github.com/Swatantraraj19/Arogyampath"
    },
    {
      title: "Food Junction Bikram – Digital Menu & Ordering PWA",
      desc: "Developed a PWA-based digital menu & ordering system with WhatsApp integration for Food Junction Bikram. Built a responsive UI with Framer Motion animations and SEO optimization using JSON-LD. Achieved 90+ Lighthouse scores through performance optimization.",
      tags: ["React.js", "PWA", "Tailwind CSS", "WhatsApp API","Framer Motion", "SEO"],
      img: "/FJ_project.png",
      demo: "https://foodjunctionbikram.in/",
      github: "https://github.com/Swatantraraj19/Food_Junction_Bikram_Showcase.git"
    },
    {
      title: "Hacker News Job Board",
      desc: "Built a full-stack React app using the Hacker News API with Firebase Auth & Firestore. Implemented pagination, bookmarking, filtering, and protected routes. Improved performance by ~40% using Context API, modular architecture, and Snyk.",
      tags: ["React.js", "Tailwind CSS","Firebase Auth","React Router DOM", "Snyk"],
      img: "/Hacker.png",
      demo: "https://job-board-alpha-lake.vercel.app/",
      github: "https://github.com/Swatantraraj19/Job_Board"
    },
    {
      title: "Soil Organic Carbon Prediction System ",
      desc: "Built SOC prediction models using VNIR spectroscopy (ElasticNet, Support Vector Regression (SVR), Polynomial Regression) improving ~15% (R²), and developed a Streamlit web app with PCA-based reduction, spectral resampling, and real-time prediction with visualization.",
      tags: ["Python", "Machine Learning", "Streamlit","Scikit-learn"],
      img: "/SOC.png",
      demo: "https://jalynatmucetgtplmgqf22.streamlit.app/",
      github: "https://github.com/Swatantraraj19/SOC_Prediction_System_Using_ML_and_VNIR_Spectroscopy_Data"
    },

    // {
    //   title: "Jeeyoride Website & Admin Panel",
    //   desc: "Developed a responsive web interfaces, UI components and a functional admin dashboards that streamlined ride, user, and report management.. The design enhanced navigation efficiency by 25%.",
    //   tags: ["HTML", "CSS", "JavaScript", "React.js"],
    //   img: "/ride.jpg",
    //   demo: "https://jeeyoride.com/services.php"
    // },
    {
      title: "Internship Projects",
      desc: "Developed three key projects during my internship: a responsive registration form, a dynamic calculator, and a weather app. Achieving 30% improvement in UI responsiveness and ensuring seamless cross-platform compatibility using HTML, CSS, and JavaScript.",
      tags: ["HTML", "CSS", "JavaScript"],
      img: "/internship.png",
      github: "https://github.com/Swatantraraj19/LGM-Registration-Form"
    }
  ];

  return (
    <section id="projects" className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-16 md:py-32">
      <h2 className="section-title">Projects</h2>

      <div className="space-y-8 md:space-y-12 pt-4 md:pt-8">
        {projectList.map((project, index) => (
          <div
            key={index}
            className="group overflow-hidden rounded-2xl bg-brand-card backdrop-blur-xl border border-white/10 hover:border-brand-primary/50 transition-all duration-500 shadow-2xl flex flex-col md:flex-row hover:-translate-y-1 h-auto md:min-h-[290px]"
          >
            {/* Image Container - Strictly locked dimensions for symmetry without cropping */}
            <div className="relative w-full md:w-5/12 lg:w-4/12 aspect-[16/9] md:aspect-auto min-h-[220px] md:min-h-full overflow-hidden shrink-0 border-b md:border-b-0 md:border-r border-white/10 bg-brand-dark/90 flex items-center justify-center p-2.5 sm:p-3">
              {/* Ambient Blurred Background to fit empty space seamlessly */}
              <img
                src={project.img}
                alt=""
                className="absolute inset-0 w-full h-full object-cover blur-xl opacity-35 scale-125 pointer-events-none"
              />
              {/* Main Uncropped Image */}
              <img
                src={project.img}
                alt={project.title}
                className="relative z-10 max-w-full max-h-full object-contain rounded-lg shadow-md transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Content Container */}
            <div className="p-4 sm:p-6 lg:p-7 flex-1 flex flex-col justify-between text-left space-y-3.5 sm:space-y-4">
              <div className="space-y-2">
                <h3 className="text-xl sm:text-2xl font-bold text-brand-primary group-hover:text-white transition-colors">
                  {project.title}
                </h3>
                <p className="text-brand-light/80 text-sm sm:text-base leading-relaxed">
                  {project.desc}
                </p>
              </div>

              <div className="space-y-3 pt-2.5 md:pt-4 border-t border-white/10">
                {/* Tech Tags - Compact layout */}
                <div className="flex flex-wrap gap-1.5 sm:gap-2">
                  {project.tags.map(tag => (
                    <span 
                      key={tag} 
                      className="text-[10px] sm:text-[11px] font-semibold tracking-wide text-brand-primary bg-brand-primary/10 border border-brand-primary/20 px-2 sm:px-2.5 py-0.5 rounded-md uppercase"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Links */}
                <div className="flex flex-wrap items-center gap-2.5 pt-0.5">
                  {project.demo && (
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-xl bg-brand-primary/10 text-brand-primary border border-brand-primary/30 hover:bg-brand-primary hover:text-black font-bold text-xs sm:text-sm transition-all duration-300 shadow-md"
                    >
                      <i className="fas fa-external-link-alt text-xs"></i>
                      <span>Live Demo</span>
                    </a>
                  )}
                  {project.github && (
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="inline-flex items-center gap-1.5 px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-xl bg-white/5 text-brand-light border border-white/15 hover:border-brand-primary/50 hover:text-brand-primary font-bold text-xs sm:text-sm transition-all duration-300"
                    >
                      <i className="fab fa-github text-xs sm:text-sm"></i>
                      <span>Source Code</span>
                    </a>
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
