import { useState } from 'react';

const PROJECT_TABS = [
  { id: "all", label: "All" },
  { id: "personal", label: "Personal Projects" },
  { id: "freelance", label: "Freelance Projects" }
];

const PROJECT_LIST = [
  {
    title: "ArogyamPath :  AI-Assisted Healthcare Platform",
    category: "ai",
    type: "personal",
    status: "Live App",
    metric: "AI Symptom Analysis & Specialist Matching",
    desc: "Developed and deployed an AI-assisted patient-doctor healthcare platform that helps patients understand their symptoms, connect with the right specialist, and book appointments, while enabling doctors to efficiently manage appointments, availability, and their daily practice.",
    tags: ["React 19", "Tailwind CSS", "Firebase Auth", "Firestore", "Gemini API", "Google Maps API", "PWA"],
    img: "/arogyampath.png",
    demo: "https://arogyampath.vercel.app/",
    github: "https://github.com/Swatantraraj19/Arogyampath"
  },
  {
    title: "Mono Mathematics Classes – EdTech Platform & PWA",
    category: "web",
    type: "freelance",
    status: "Live App",
    metric: "Installable PWA • Offline Notes • Admin CMS",
    desc: "Designed and deployed a full-featured EdTech platform and installable PWA for Mono Mathematics Classes (Class 6–12). Features chapter-wise recorded video lectures, IndexedDB offline notes, live classes integration (Zoom/Meet), and a role-based Institute Admin Panel for admissions and content management.",
    tags: ["React.js", "Vite", "Tailwind CSS", "Firebase Auth", "Cloud Firestore", "PWA", "IndexedDB", "SEO"],
    img: "/mono_mathematics.png",
    demo: "https://monomathematics.com/",
    github: "https://github.com/Swatantraraj19/Mono_Mathematics_Student.git"
  },
  {
    title: "Food Junction Bikram – Digital Menu & Ordering PWA",
    category: "web",
    type: "freelance",
    status: "Live App",
    metric: "90+ Lighthouse Score",
    desc: "Developed a PWA-based digital menu & ordering system with WhatsApp integration for Food Junction Bikram. Built a responsive UI with Framer Motion animations and SEO optimization using JSON-LD. Achieved 90+ Lighthouse scores through performance optimization.",
    tags: ["React.js", "PWA", "Tailwind CSS", "WhatsApp API", "Framer Motion", "SEO"],
    img: "/FJ_project.png",
    demo: "https://foodjunctionbikram.in/",
    github: "https://github.com/Swatantraraj19/Food_Junction_Bikram_Showcase.git"
  },
  {
    title: "Tree House Hotel & Restaurant – Platform",
    category: "web",
    type: "freelance",
    status: "Live App",
    metric: "Three.js 3D Emblem • Sub-80KB Bundle • 1-Tap Booking",
    desc: "Built a modern hospitality web platform for Tree House Hotel & Restaurant featuring an interactive 3D WebGL emblem with Three.js, a digital dining menu with Veg/Non-Veg filtering, and direct 1-tap room booking.",
    tags: ["React 19", "Three.js", "Framer Motion", "Tailwind CSS", "Vite", "SEO", "JSON-LD"],
    img: "/treehouse.png",
    demo: "https://treehouse-gamma.vercel.app/",
    github: "https://github.com/Swatantraraj19/Treehouse"
  },
  {
    title: "Hacker News Job Board",
    category: "web",
    type: "personal",
    status: "Live App",
    metric: "~40% Performance Boost",
    desc: "Built a full-stack React app using the Hacker News API with Firebase Auth & Firestore. Implemented pagination, bookmarking, filtering, and protected routes. Improved performance by ~40% using Context API, modular architecture, and Snyk.",
    tags: ["React.js", "Tailwind CSS", "Firebase Auth", "React Router DOM", "Snyk"],
    img: "/Hacker.png",
    demo: "https://job-board-alpha-lake.vercel.app/",
    github: "https://github.com/Swatantraraj19/Job_Board"
  },
  {
    title: "Soil Organic Carbon Prediction System ",
    category: "ml",
    type: "personal",
    status: "Live App",
    metric: "~15% R² Improvement",
    desc: "Built SOC prediction models using VNIR spectroscopy (ElasticNet, Support Vector Regression (SVR), Polynomial Regression) improving ~15% (R²), and developed a Streamlit web app with PCA-based reduction, spectral resampling, and real-time prediction with visualization.",
    tags: ["Python", "Machine Learning", "Streamlit", "Scikit-learn"],
    img: "/SOC.png",
    demo: "https://jalynatmucetgtplmgqf22.streamlit.app/",
    github: "https://github.com/Swatantraraj19/SOC_Prediction_System_Using_ML_and_VNIR_Spectroscopy_Data"
  },
  {
    title: "Internship Projects",
    category: "web",
    type: "personal",
    status: "Completed",
    metric: "30% UI Responsiveness Boost",
    desc: "Developed three key projects during my internship: a responsive registration form, a dynamic calculator, and a weather app. Achieving 30% improvement in UI responsiveness and ensuring seamless cross-platform compatibility using HTML, CSS, and JavaScript.",
    tags: ["HTML", "CSS", "JavaScript"],
    img: "/internship.png",
    github: "https://github.com/Swatantraraj19/LGM-Registration-Form"
  }
];

const Projects = () => {
  const [activeTab, setActiveTab] = useState("all");

  const filteredProjects = activeTab === "all"
    ? PROJECT_LIST
    : PROJECT_LIST.filter(project => project.type === activeTab);

  return (
    <section id="projects" className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-16 md:py-28 overflow-hidden">
      <h2 className="section-title">Projects</h2>
      <p className="section-subtitle">
        Production software, full-stack applications, and real-world engineering solutions.
      </p>

      {/* Top Production Stats Strip - Single line on mobile */}
      <div className="flex items-center justify-center gap-2 sm:gap-3 mb-5 sm:mb-8 text-[10px] sm:text-xs font-mono max-w-full px-1">
        <div className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-brand-light shadow-sm shrink-0">
          <span className="w-1.5 h-1.5 rounded-full bg-brand-primary animate-pulse"></span>
          <span className="font-semibold text-white">
            {PROJECT_LIST.length} <span className="hidden sm:inline">Production </span>Projects
          </span>
        </div>
        <div className="flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-brand-light shadow-sm shrink-0">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
          <span className="font-semibold text-emerald-400">
            100% Live<span className="hidden sm:inline"> Deployments</span>
          </span>
        </div>
        <div className="hidden md:flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/10 text-brand-light shadow-sm shrink-0">
          <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse"></span>
          <span className="font-semibold text-purple-300">GenAI &amp; Web Architecture</span>
        </div>
      </div>

      {/* Interactive Project Type Filter Tabs (All / Personal / Freelance) */}
      <div className="flex items-center justify-center gap-1.5 sm:gap-3 mb-8 sm:mb-12 max-w-full px-1">
        {PROJECT_TABS.map((tab) => {
          const isActive = activeTab === tab.id;
          const count = tab.id === "all"
            ? PROJECT_LIST.length
            : PROJECT_LIST.filter((p) => p.type === tab.id).length;

          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`px-2.5 sm:px-4 py-1 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-semibold whitespace-nowrap transition-all duration-300 flex items-center gap-1.5 sm:gap-2 cursor-pointer active:scale-95 border ${
                isActive
                  ? "bg-white/15 text-white border-white/20 shadow-[0_0_15px_rgba(0,240,255,0.2)]"
                  : "bg-white/[0.03] text-brand-muted hover:text-white hover:bg-white/[0.08] border-white/10"
              }`}
            >
              <span>
                {tab.id === 'all' ? (
                  'All'
                ) : tab.id === 'personal' ? (
                  <>Personal <span className="hidden sm:inline">Projects</span></>
                ) : (
                  <>Freelance <span className="hidden sm:inline">Projects</span></>
                )}
              </span>
              <span
                className={`text-[9.5px] sm:text-[10px] font-mono px-1.5 py-0.2 rounded-full font-bold transition-colors ${
                  isActive
                    ? "bg-brand-primary/20 text-brand-primary"
                    : "bg-white/10 text-brand-muted"
                }`}
              >
                {count}
              </span>
            </button>
          );
        })}
      </div>

      {/* Projects List Container */}
      <div className="space-y-8 sm:space-y-10">
        {filteredProjects.map((project) => {
          const isFeatured = project.title.includes("ArogyamPath");
          // Extract a clean display URL for browser bar
          const displayUrl = project.demo 
            ? project.demo.replace('https://', '').replace(/\/$/, '')
            : 'github.com/Swatantraraj19';

          return (
            <div
              key={project.title}
              className={`bento-card spotlight-card flex flex-col lg:flex-row group transition-all duration-500 hover:border-white/30 ${
                isFeatured ? 'border-beam shadow-[0_0_50px_rgba(0,240,255,0.12)]' : ''
              }`}
            >
              {/* SaaS Browser Mockup Media Container */}
              <div className="relative w-full lg:w-5/12 overflow-hidden shrink-0 bg-[#060813] border-b lg:border-b-0 lg:border-r border-white/[0.08] flex flex-col justify-between p-3 sm:p-5">
                {/* Ambient Glow Underlay */}
                <img
                  src={project.img}
                  alt=""
                  className="absolute inset-0 w-full h-full object-cover blur-2xl opacity-30 scale-125 pointer-events-none"
                />

                {/* Simulated Browser Frame */}
                <div className="browser-frame relative z-10 w-full h-full flex flex-col my-auto shadow-2xl">
                  {/* Browser Window Header Bar */}
                  <div className="browser-header flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56] opacity-90 inline-block"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e] opacity-90 inline-block"></span>
                      <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f] opacity-90 inline-block"></span>
                    </div>

                    {/* Simulated URL Pill */}
                    <div className="px-2.5 sm:px-3 py-0.5 rounded-md bg-white/[0.06] border border-white/10 text-[9px] sm:text-[10px] font-mono text-brand-muted/80 flex items-center gap-1.5 max-w-[130px] sm:max-w-[220px] truncate">
                      <i className="fas fa-lock text-[7px] sm:text-[8px] text-emerald-400"></i>
                      <span className="truncate">{displayUrl}</span>
                    </div>

                    <div className="w-6 sm:w-8"></div>
                  </div>

                  {/* Browser Viewport with Uncropped Media */}
                  <div className="bg-[#030611] p-2 flex items-center justify-center min-h-[165px] sm:min-h-[220px] lg:min-h-[240px] relative overflow-hidden group/img">
                    <img
                      src={project.img}
                      alt={project.title}
                      className="max-w-full max-h-[260px] object-contain rounded-lg shadow-xl transition-transform duration-500 group-hover/img:scale-105"
                    />
                  </div>
                </div>
              </div>

              {/* Content & Specs Container */}
              <div className="p-4 sm:p-7 lg:p-8 flex-1 flex flex-col justify-between text-left space-y-4 sm:space-y-5 relative z-10">
                <div className="space-y-2.5 sm:space-y-3">
                  {/* Meta Badge Bar: Live status indicator, Project Type, Metric Pill & Featured Star */}
                  <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
                    <span className="inline-flex items-center gap-1.5 text-[10px] sm:text-[11px] font-semibold text-emerald-400 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/20">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                      <span>{project.status}</span>
                    </span>

                    {/* Project Type Badge */}
                    <span className={`inline-flex items-center gap-1.5 text-[10px] sm:text-[11px] font-semibold px-2.5 py-0.5 rounded-full border ${
                      project.type === 'freelance'
                        ? 'text-cyan-300 bg-cyan-500/10 border-cyan-500/30 shadow-[0_0_10px_rgba(0,240,255,0.15)]'
                        : 'text-indigo-300 bg-indigo-500/10 border-indigo-500/30'
                    }`}>
                      <i className={`text-[9px] ${project.type === 'freelance' ? 'fas fa-briefcase' : 'fas fa-user-astronaut'}`}></i>
                      <span>{project.type === 'freelance' ? 'Freelance / Client' : 'Personal'}</span>
                    </span>

                    {project.metric && (
                      <span className="inline-flex items-center gap-1.5 text-[10px] sm:text-[11px] font-semibold text-emerald-400 px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 shadow-[0_0_10px_rgba(16,185,129,0.15)]">
                        <i className="fas fa-chart-line text-[8px] sm:text-[9px]"></i>
                        <span>{project.metric}</span>
                      </span>
                    )}

                    {isFeatured && (
                      <span className="text-[10px] sm:text-[11px] font-bold text-amber-300 px-2.5 py-0.5 rounded-full bg-amber-500/10 border border-amber-500/30 flex items-center gap-1">
                        <i className="fas fa-star text-[9px]"></i> Featured Architecture
                      </span>
                    )}
                  </div>

                  {/* Project Title */}
                  <h3 className="text-lg sm:text-2xl font-bold text-white group-hover:text-brand-primary transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xs sm:text-base text-brand-muted leading-relaxed font-normal">
                    {project.desc}
                  </p>
                </div>

                {/* Tags & Action CTAs */}
                <div className="space-y-3.5 sm:space-y-4 pt-3.5 sm:pt-4 border-t border-white/[0.08]">
                  {/* Tech Pills */}
                  <div className="flex flex-wrap gap-1.5 sm:gap-2">
                    {project.tags.map(tag => (
                      <span 
                        key={tag} 
                        className="text-[10.5px] sm:text-[11px] font-medium text-brand-light/90 bg-white/[0.04] border border-white/[0.08] hover:border-brand-primary/40 hover:bg-brand-primary/10 hover:text-white px-2 py-0.5 sm:px-2.5 sm:py-1 rounded-lg transition-colors cursor-default"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action buttons styled as refined SaaS pills with micro-icons */}
                  <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 pt-1">
                    {project.demo && (
                      <a 
                        href={project.demo} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="btn-shimmer px-4 sm:px-5 py-2 text-xs sm:text-sm font-bold inline-flex items-center gap-2 shadow-lg"
                      >
                        <span>Live Demo</span>
                        <i className="fas fa-arrow-up-right-from-square text-[10px]"></i>
                      </a>
                    )}
                    {project.github && (
                      <a 
                        href={project.github} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="btn-glass px-4 sm:px-5 py-2 text-xs sm:text-sm font-semibold inline-flex items-center gap-2"
                      >
                        <i className="fab fa-github text-xs sm:text-sm"></i>
                        <span>Source Code</span>
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;

