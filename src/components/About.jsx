import { useState } from 'react';

const About = () => {
  const [copiedConfig, setCopiedConfig] = useState(false);

  const handleCopyConfig = () => {
    const code = `const softwareEngineer = {
  name: "Swatantra Raj Kumar Singh",
  experience: "1.7+ Years",
  status: "Building Scalable & High-Impact Products",
  mindset: ["Clean Code", "Modern Architecture", "User-Focused"]
};`;
    navigator.clipboard.writeText(code);
    setCopiedConfig(true);
    setTimeout(() => setCopiedConfig(false), 2000);
  };

  return (
    <section
      id="about"
      className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-16 md:py-28 overflow-hidden"
    >
      <h2 className="section-title">About Me</h2>
      <p className="section-subtitle">
        Engineering philosophy, modern stack proficiency, and collaborative software delivery.
      </p>

      {/* SaaS Bento Grid Showcase */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 sm:gap-6">
        {/* Card 1: Core Engineering Philosophy (Large 2-column card) */}
        <div className="lg:col-span-2 bento-card spotlight-card p-4 sm:p-6 md:p-8 flex flex-col justify-between space-y-5 sm:space-y-6">
          <div className="space-y-3.5 sm:space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-brand-primary/10 border border-brand-primary/20 flex items-center justify-center text-brand-primary shrink-0 shadow-[0_0_15px_rgba(0,240,255,0.15)]">
                <i className="fas fa-terminal"></i>
              </div>
              <div>
                <span className="text-[11px] sm:text-xs font-mono text-brand-primary font-semibold uppercase tracking-wider">Engineering Focus</span>
                <h3 className="text-base sm:text-xl font-bold text-white">Full-Stack Development &amp; Architecture</h3>
              </div>
            </div>

            <p className="text-xs sm:text-base text-brand-light/90 leading-relaxed font-normal">
              I'm a <strong>Software Developer</strong> with{" "}
              <strong>1.7 years of experience</strong> building modern web
              applications and digital products. I enjoy transforming ideas into
              scalable, user-focused solutions while writing clean, maintainable,
              and efficient code.
            </p>
          </div>

          {/* Interactive Code Window Preview with Live Status & Copy Action */}
          <div className="code-terminal p-3 sm:p-4 text-[10.5px] sm:text-xs leading-relaxed overflow-x-auto border border-white/10 group/terminal">
            <div className="flex items-center justify-between pb-2.5 mb-2.5 border-b border-white/10">
              <div className="flex items-center gap-1.5">
                <span className="w-2.5 h-2.5 rounded-full bg-red-500/80"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-yellow-500/80"></span>
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500/80"></span>
                <span className="text-[9.5px] sm:text-[10px] text-brand-muted font-mono ml-1.5">developer.config.ts</span>
                <span className="hidden sm:inline-flex items-center gap-1 ml-2 px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-[8.5px] font-mono border border-emerald-500/20">
                  <span className="w-1 h-1 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span>LIVE CONFIG</span>
                </span>
              </div>

              <button
                type="button"
                onClick={handleCopyConfig}
                className="px-2.5 py-0.5 rounded-md bg-white/[0.05] hover:bg-white/[0.12] text-[9.5px] sm:text-[10px] font-mono text-brand-muted hover:text-white transition-all flex items-center gap-1.5 cursor-pointer border border-white/10 active:scale-95 shadow-sm"
                title="Copy configuration snippet"
              >
                <i className={copiedConfig ? "fas fa-check text-emerald-400" : "fas fa-copy text-brand-primary"}></i>
                <span>{copiedConfig ? "Copied! ✓" : "Copy"}</span>
              </button>
            </div>

            <div className="space-y-1 font-mono">
              <p><span className="text-purple-400">const</span> <span className="text-yellow-300">softwareEngineer</span> = &#123;</p>
              <p className="pl-3 sm:pl-4"><span className="text-brand-primary">name</span>: <span className="text-emerald-400">"Swatantra Raj Kumar Singh"</span>,</p>
              <p className="pl-3 sm:pl-4"><span className="text-brand-primary">experience</span>: <span className="text-amber-400">"1.7+ Years"</span>,</p>
              <p className="pl-3 sm:pl-4"><span className="text-brand-primary">status</span>: <span className="text-emerald-400">"Building Scalable &amp; High-Impact Products"</span>,</p>
              <p className="pl-3 sm:pl-4"><span className="text-brand-primary">mindset</span>: [<span className="text-emerald-400">"Clean Code"</span>, <span className="text-emerald-400">"Modern Architecture"</span>, <span className="text-emerald-400">"User-Focused"</span>]</p>
              <p>&#125;;</p>
            </div>
          </div>
        </div>

        {/* Card 2: AI & Generative AI (1-column card) */}
        <div className="bento-card spotlight-card p-4 sm:p-6 md:p-8 flex flex-col justify-between space-y-5 sm:space-y-6">
          <div className="space-y-3.5 sm:space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-400 shrink-0 shadow-[0_0_15px_rgba(168,85,247,0.15)]">
                <i className="fas fa-robot text-lg"></i>
              </div>
              <div>
                <span className="text-[11px] sm:text-xs font-mono text-purple-400 font-semibold uppercase tracking-wider">Next-Gen Tech</span>
                <h3 className="text-base sm:text-xl font-bold text-white">AI &amp; Generative AI</h3>
              </div>
            </div>

            <p className="text-xs sm:text-base text-brand-muted leading-relaxed font-normal">
              Alongside software development, I have experience exploring <strong>AI &amp; Generative AI</strong> to build smarter
              digital experiences. I'm always learning, improving, and embracing
              new technologies that create real-world impact.
            </p>
          </div>

          <div className="p-3 sm:p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2.5">
            <div className="flex items-center justify-between text-xs text-brand-muted">
              <span className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400 animate-pulse"></span>
                <span>AI Integration Focus</span>
              </span>
              <span className="text-purple-400 font-mono text-[11px] font-semibold">Active</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {["LLMs", "Prompt Engineering", "RAG", "AI Agents", "MCP"].map((t) => (
                <span 
                  key={t} 
                  className="text-[10px] sm:text-[11px] px-2.5 py-0.5 rounded-md bg-purple-500/10 text-purple-300 border border-purple-500/25 shadow-[0_0_8px_rgba(168,85,247,0.15)] hover:border-purple-400/60 hover:bg-purple-500/20 hover:shadow-[0_0_14px_rgba(168,85,247,0.35)] active:scale-95 transition-all duration-200 cursor-default"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Card 3: Agile & Collaboration (1-column card) */}
        <div className="bento-card spotlight-card p-4 sm:p-6 md:p-8 flex flex-col justify-between space-y-5 sm:space-y-6">
          <div className="space-y-3.5 sm:space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
                <i className="fas fa-users-gear text-lg"></i>
              </div>
              <div>
                <span className="text-[11px] sm:text-xs font-mono text-emerald-400 font-semibold uppercase tracking-wider">Execution</span>
                <h3 className="text-base sm:text-xl font-bold text-white">Agile &amp; Team Delivery</h3>
              </div>
            </div>

            <p className="text-xs sm:text-base text-brand-muted leading-relaxed font-normal">
              I have experience collaborating with cross-functional teams, contributing to <strong>Agile project delivery</strong>, sprint planning, and shipping production-quality software on schedule.
            </p>
          </div>

          <div className="p-3 sm:p-3.5 rounded-2xl bg-white/[0.03] border border-white/10 space-y-2">
            <div className="flex items-center justify-between text-xs text-brand-muted">
              <span>Delivery Velocity</span>
              <span className="text-emerald-400 font-mono">100% Reliable</span>
            </div>
            <div className="w-full bg-white/10 h-1.5 rounded-full overflow-hidden relative">
              <div className="bg-gradient-to-r from-emerald-500 via-cyan-400 to-emerald-400 h-full w-[95%] rounded-full shadow-[0_0_10px_rgba(16,185,129,0.6)] relative overflow-hidden">
                {/* Autonomous flowing energy shimmer */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent w-full animate-beam"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Card 4: Four Strategic Pillars (2-column card) with Interactive Glowing Accents */}
        <div className="lg:col-span-2 bento-card spotlight-card p-4 sm:p-6 md:p-8 flex flex-col justify-between space-y-4 sm:space-y-5">
          <div>
            <span className="text-[11px] sm:text-xs font-mono text-brand-primary font-semibold uppercase tracking-wider">Core Capabilities</span>
            <h3 className="text-base sm:text-xl font-bold text-white mt-1">Four Pillars of My Engineering Process</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
            <div className="group/p p-3.5 sm:p-4 rounded-2xl bg-white/[0.03] border border-brand-primary/20 sm:border-white/10 flex items-start gap-3 hover:border-brand-primary/50 hover:bg-brand-primary/[0.04] active:scale-[0.98] transition-all duration-300">
              <div className="w-9 h-9 rounded-xl bg-brand-primary/15 border border-brand-primary/30 flex items-center justify-center text-brand-primary shrink-0 mt-0.5 shadow-[0_0_12px_rgba(0,240,255,0.25)] group-hover/p:scale-110 group-hover/p:shadow-[0_0_18px_rgba(0,240,255,0.45)] group-hover/p:bg-brand-primary/25 transition-all duration-300">
                <i className="fas fa-globe text-sm"></i>
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-white group-hover/p:text-brand-primary transition-colors">Modern Web Development</h4>
                <p className="text-[11px] sm:text-xs text-brand-muted mt-1 leading-relaxed">
                  Building scalable, responsive, and maintainable web applications with React &amp; modern JavaScript.
                </p>
              </div>
            </div>

            <div className="group/p p-3.5 sm:p-4 rounded-2xl bg-white/[0.03] border border-purple-500/20 sm:border-white/10 flex items-start gap-3 hover:border-purple-500/50 hover:bg-purple-500/[0.04] active:scale-[0.98] transition-all duration-300">
              <div className="w-9 h-9 rounded-xl bg-purple-500/15 border border-purple-500/30 flex items-center justify-center text-purple-400 shrink-0 mt-0.5 shadow-[0_0_12px_rgba(168,85,247,0.25)] group-hover/p:scale-110 group-hover/p:shadow-[0_0_18px_rgba(168,85,247,0.45)] group-hover/p:bg-purple-500/25 transition-all duration-300">
                <i className="fas fa-robot text-sm"></i>
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-white group-hover/p:text-purple-300 transition-colors">AI &amp; Generative AI</h4>
                <p className="text-[11px] sm:text-xs text-brand-muted mt-1 leading-relaxed">
                  Integrating LLMs, prompt engineering, and intelligent AI features into modern digital products.
                </p>
              </div>
            </div>

            <div className="group/p p-3.5 sm:p-4 rounded-2xl bg-white/[0.03] border border-amber-500/20 sm:border-white/10 flex items-start gap-3 hover:border-amber-500/50 hover:bg-amber-500/[0.04] active:scale-[0.98] transition-all duration-300">
              <div className="w-9 h-9 rounded-xl bg-amber-500/15 border border-amber-500/30 flex items-center justify-center text-amber-400 shrink-0 mt-0.5 shadow-[0_0_12px_rgba(245,158,11,0.25)] group-hover/p:scale-110 group-hover/p:shadow-[0_0_18px_rgba(245,158,11,0.45)] group-hover/p:bg-amber-500/25 transition-all duration-300">
                <i className="fas fa-gauge-high text-sm"></i>
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-white group-hover/p:text-amber-300 transition-colors">Performance Optimization</h4>
                <p className="text-[11px] sm:text-xs text-brand-muted mt-1 leading-relaxed">
                  High-speed rendering, 90+ Lighthouse audits, code splitting, and responsive design across all devices.
                </p>
              </div>
            </div>

            <div className="group/p p-3.5 sm:p-4 rounded-2xl bg-white/[0.03] border border-emerald-500/20 sm:border-white/10 flex items-start gap-3 hover:border-emerald-500/50 hover:bg-emerald-500/[0.04] active:scale-[0.98] transition-all duration-300">
              <div className="w-9 h-9 rounded-xl bg-emerald-500/15 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0 mt-0.5 shadow-[0_0_12px_rgba(16,185,129,0.25)] group-hover/p:scale-110 group-hover/p:shadow-[0_0_18px_rgba(16,185,129,0.45)] group-hover/p:bg-emerald-500/25 transition-all duration-300">
                <i className="fas fa-users text-sm"></i>
              </div>
              <div>
                <h4 className="text-xs sm:text-sm font-bold text-white group-hover/p:text-emerald-300 transition-colors">Agile Project Delivery</h4>
                <p className="text-[11px] sm:text-xs text-brand-muted mt-1 leading-relaxed">
                  Cross-functional collaboration, clean git workflow, sprint execution, and reliable delivery.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
