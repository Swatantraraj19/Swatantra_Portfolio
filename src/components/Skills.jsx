import { useState } from 'react';

const SKILL_CATEGORIES = [
  {
    id: "frontend",
    name: "Frontend Development",
    icon: "fas fa-desktop",
    accent: "text-brand-primary",
    bgAccent: "bg-brand-primary/10",
    borderGlow: "hover:border-brand-primary/40",
    badgeTheme: "hover:border-brand-primary/50 hover:bg-brand-primary/10 hover:text-white hover:shadow-[0_0_14px_rgba(0,240,255,0.25)] shadow-[0_0_8px_rgba(0,240,255,0.06)]",
    skills: ["React JS", "HTML5", "CSS3", "Tailwind CSS", "Framer Motion", "PWA Architecture", "Responsive UI"]
  },
  {
    id: "languages",
    name: "Programming Languages",
    icon: "fas fa-code",
    accent: "text-amber-400",
    bgAccent: "bg-amber-500/10",
    borderGlow: "hover:border-amber-500/40",
    badgeTheme: "hover:border-amber-400/50 hover:bg-amber-500/10 hover:text-white hover:shadow-[0_0_14px_rgba(245,158,11,0.25)] shadow-[0_0_8px_rgba(245,158,11,0.06)]",
    skills: ["C++", "JavaScript", "Python", "TypeScript"]
  },
   {
    id: "ai",
    name: "AI & Generative AI",
    icon: "fas fa-robot",
    accent: "text-purple-400",
    bgAccent: "bg-purple-500/10",
    borderGlow: "hover:border-purple-500/40",
    badgeTheme: "hover:border-purple-400/50 hover:bg-purple-500/10 hover:text-white hover:shadow-[0_0_14px_rgba(168,85,247,0.25)] shadow-[0_0_8px_rgba(168,85,247,0.06)]",
    skills: ["Prompt Engineering", "Generative AI Fundamentals", "LLMs", "RAG", "AI Agents", "MCP", "Langchain"]
  },
  {
    id: "backend",
    name: "Backend & Databases",
    icon: "fas fa-database",
    accent: "text-emerald-400",
    bgAccent: "bg-emerald-500/10",
    borderGlow: "hover:border-emerald-500/40",
    badgeTheme: "hover:border-emerald-400/50 hover:bg-emerald-500/10 hover:text-white hover:shadow-[0_0_14px_rgba(16,185,129,0.25)] shadow-[0_0_8px_rgba(16,185,129,0.06)]",
    skills: ["Firebase Authentication", "Firestore", "REST APIs", "API Integration", "JSON-LD & SEO"]
  },
  {
    id: "cs",
    name: "Computer Science Fundamentals",
    icon: "fas fa-brain",
    accent: "text-cyan-400",
    bgAccent: "bg-cyan-500/10",
    borderGlow: "hover:border-cyan-500/40",
    badgeTheme: "hover:border-cyan-400/50 hover:bg-cyan-500/10 hover:text-white hover:shadow-[0_0_14px_rgba(6,182,212,0.25)] shadow-[0_0_8px_rgba(6,182,212,0.06)]",
    skills: ["OOPS", "System Design Fundamentals", "DSA", "Computer Networks"]
  },
  {
    id: "tools",
    name: "Tools & Management",
    icon: "fas fa-toolbox",
    accent: "text-indigo-400",
    bgAccent: "bg-indigo-500/10",
    borderGlow: "hover:border-indigo-500/40",
    badgeTheme: "hover:border-indigo-400/50 hover:bg-indigo-500/10 hover:text-white hover:shadow-[0_0_14px_rgba(99,102,241,0.25)] shadow-[0_0_8px_rgba(99,102,241,0.06)]",
    skills: ["Git/GitHub", "VS Code", "AI Tools (Antigravity, Claude, Codex)", "Jira", "Asana", "Agile/Scrum"]
  }
];

const FILTER_TABS = [
  { id: "all", label: "All Skills" },
  { id: "frontend", label: "Frontend" },
  { id: "languages", label: "Languages" },
  { id: "ai", label: "AI & GenAI" },
  { id: "backend", label: "Backend" },
  { id: "cs", label: "Core CS" },
  { id: "tools", label: "Tools" },
];

const MARQUEE_TECH = [
  { name: "React 19", icon: "fab fa-react", color: "text-brand-primary" },
  { name: "JavaScript", icon: "fab fa-js", color: "text-amber-400" },
  { name: "TypeScript", icon: "fas fa-code", color: "text-blue-400" },
  { name: "Python", icon: "fab fa-python", color: "text-yellow-400" },
  { name: "Generative AI", icon: "fas fa-robot", color: "text-purple-400" },
  { name: "Tailwind CSS", icon: "fab fa-css3-alt", color: "text-cyan-400" },
  { name: "Firebase", icon: "fas fa-fire", color: "text-amber-500" },
  { name: "REST APIs", icon: "fas fa-network-wired", color: "text-emerald-400" },
  { name: "C++", icon: "fas fa-laptop-code", color: "text-sky-400" },
  { name: "Git & GitHub", icon: "fab fa-github", color: "text-white" },
  { name: "System Design", icon: "fas fa-diagram-project", color: "text-indigo-400" },
  { name: "PWA Architecture", icon: "fas fa-mobile-screen-button", color: "text-emerald-300" }
];

const Skills = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const totalSkillsCount = SKILL_CATEGORIES.reduce((acc, cat) => acc + cat.skills.length, 0);

  const displayedCategories = activeFilter === "all" 
    ? SKILL_CATEGORIES 
    : SKILL_CATEGORIES.filter(cat => cat.id === activeFilter);

  return (
    <section id="skills" className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-16 md:py-28 overflow-hidden">
      <h2 className="section-title">Technical Skills</h2>
      <p className="section-subtitle">
        Curated stack of languages, frameworks, AI tools, and core computer science fundamentals.
      </p>

      {/* Dynamic Category Filter Tabs Bar */}
      <div className="flex items-center justify-start md:justify-center gap-1.5 sm:gap-2 overflow-x-auto pb-4 mb-6 sm:mb-8 pt-1 no-scrollbar px-1">
        {FILTER_TABS.map((tab) => {
          const isActive = activeFilter === tab.id;
          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveFilter(tab.id)}
              className={`px-3 sm:px-4 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-300 flex items-center gap-1.5 cursor-pointer active:scale-95 border ${
                isActive
                  ? "bg-white/15 text-white border-white/20 shadow-[0_0_15px_rgba(0,240,255,0.2)]"
                  : "bg-white/[0.03] text-brand-muted hover:text-white hover:bg-white/[0.08] border-white/10"
              }`}
            >
              <span>{tab.label}</span>
              {tab.id === "all" && (
                <span className="text-[10px] font-mono px-1.5 py-0.2 rounded-full bg-brand-primary/20 text-brand-primary font-bold">
                  {totalSkillsCount}
                </span>
              )}
            </button>
          );
        })}
      </div>
      
      {/* Interactive Bento Grid Layout with Tailored Neon Accent Badges */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
        {displayedCategories.map((category) => (
          <div 
            key={category.id} 
            className={`bento-card spotlight-card p-4 sm:p-6 md:p-7 flex flex-col justify-between space-y-4 sm:space-y-6 group transition-all duration-300 ${category.borderGlow}`}
          >
            {/* Category Header */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3 sm:gap-3.5">
                <div className={`w-9 h-9 sm:w-11 sm:h-11 rounded-xl sm:rounded-2xl ${category.bgAccent} border border-white/10 flex items-center justify-center ${category.accent} text-base sm:text-lg shadow-sm group-hover:scale-105 transition-transform shrink-0`}>
                  <i className={category.icon}></i>
                </div>
                <h3 className="text-sm sm:text-base md:text-lg font-bold text-white group-hover:text-brand-primary transition-colors">
                  {category.name}
                </h3>
              </div>
              <span className="text-[10px] font-mono font-semibold px-2 py-0.5 rounded-full bg-white/[0.04] text-brand-muted border border-white/10">
                {category.skills.length}
              </span>
            </div>

            {/* Interactive Micro-badges with glowing hover & mobile luminous depth */}
            <div className="flex flex-wrap gap-1.5 sm:gap-2 pt-1 sm:pt-2">
              {category.skills.map((skill, sIdx) => (
                <span 
                  key={sIdx}
                  className={`text-[11px] sm:text-xs font-medium px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg sm:rounded-xl bg-white/[0.04] text-brand-light/90 border border-white/[0.08] active:scale-95 transition-all duration-200 cursor-default ${category.badgeTheme}`}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>

      {/* Infinite Tech Ribbon / Continuous Marquee Ticker */}
      <div className="mt-12 sm:mt-16 pt-6 border-t border-white/[0.08] relative overflow-hidden">
        {/* Left & Right Glass Gradient Fade Masks */}
        <div className="absolute left-0 inset-y-0 w-12 sm:w-20 bg-gradient-to-r from-[#04060f] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 inset-y-0 w-12 sm:w-20 bg-gradient-to-l from-[#04060f] to-transparent z-10 pointer-events-none"></div>

        <div className="animate-marquee gap-3 sm:gap-4 py-2">
          {[...MARQUEE_TECH, ...MARQUEE_TECH].map((tech, i) => (
            <div 
              key={i} 
              className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/10 shadow-sm whitespace-nowrap text-xs sm:text-sm font-medium text-brand-muted hover:text-white hover:border-brand-primary/40 hover:bg-white/[0.08] transition-all cursor-default"
            >
              <i className={`${tech.icon} ${tech.color} text-sm`}></i>
              <span>{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

