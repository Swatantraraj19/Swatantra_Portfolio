import { useState, useEffect } from 'react';

const ROLES = [
  "Scalable Web Apps",
  "Intelligent AI Systems",
  "High-Performance UIs",
  "Production Architecture"
];

const Hero = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [metrics, setMetrics] = useState({ years: 0, apps: 0, quality: 0 });

  // 1. Dynamic Typewriter Effect for Hero Subtitle
  useEffect(() => {
    const currentRole = ROLES[roleIndex];
    let timer;

    if (!isDeleting) {
      if (displayedText.length < currentRole.length) {
        timer = setTimeout(() => {
          setDisplayedText(currentRole.slice(0, displayedText.length + 1));
        }, 75);
      } else {
        timer = setTimeout(() => setIsDeleting(true), 2400);
      }
    } else {
      if (displayedText.length > 0) {
        timer = setTimeout(() => {
          setDisplayedText(currentRole.slice(0, displayedText.length - 1));
        }, 35);
      } else {
        setIsDeleting(false);
        setRoleIndex((prev) => (prev + 1) % ROLES.length);
      }
    }

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, roleIndex]);

  // 2. Smooth Metric Counter Animation on Load
  useEffect(() => {
    const duration = 1400;
    const stepTime = 30;
    const totalSteps = duration / stepTime;
    let step = 0;

    const counterInterval = setInterval(() => {
      step++;
      const progress = Math.min(step / totalSteps, 1);
      const ease = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);

      setMetrics({
        years: (1.7 * ease).toFixed(1),
        apps: Math.round(7 * ease),
        quality: Math.round(100 * ease)
      });

      if (progress >= 1) clearInterval(counterInterval);
    }, stepTime);

    return () => clearInterval(counterInterval);
  }, []);

  const [viewMode, setViewMode] = useState('profile');
  const [cardTilt, setCardTilt] = useState({ x: 0, y: 0 });

  const handleCardMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setCardTilt({
      x: -(y / (rect.height / 2)) * 7,
      y: (x / (rect.width / 2)) * 7
    });
  };

  const handleCardMouseLeave = () => {
    setCardTilt({ x: 0, y: 0 });
  };

  return (
    <section 
      id="home" 
      className="min-h-[calc(100vh-2rem)] max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 pt-20 pb-8 sm:pt-24 sm:pb-14 flex flex-col md:flex-row items-center justify-center md:justify-between gap-6 sm:gap-8 lg:gap-12"
    >
      {/* Profile Image & Interactive Terminal Enclosure */}
      <div className="flex-1 flex flex-col items-center order-1 md:order-2 shrink-0 stagger-1">
        {/* Interactive Mode Pill Switcher */}
        <div className="flex items-center justify-center gap-1 p-1 mb-3 rounded-full bg-white/[0.04] border border-white/10 backdrop-blur-xl shadow-lg">
          <button
            type="button"
            onClick={() => setViewMode('profile')}
            className={`px-3 py-1 rounded-full text-[10.5px] sm:text-[11px] font-semibold transition-all duration-300 flex items-center gap-1.5 cursor-pointer ${
              viewMode === 'profile'
                ? 'bg-white/15 text-white shadow-sm border border-white/10'
                : 'text-brand-muted hover:text-white'
            }`}
          >
            <i className="fas fa-user text-[10px]"></i>
            <span>Profile</span>
          </button>
          <button
            type="button"
            onClick={() => setViewMode('code')}
            className={`px-3 py-1 rounded-full text-[10.5px] sm:text-[11px] font-semibold transition-all duration-300 flex items-center gap-1.5 cursor-pointer ${
              viewMode === 'code'
                ? 'bg-brand-primary/20 text-brand-primary shadow-sm border border-brand-primary/30'
                : 'text-brand-muted hover:text-white'
            }`}
          >
            <i className="fas fa-terminal text-[10px]"></i>
            <span>Terminal</span>
          </button>
        </div>

        <div 
          className="relative group"
          onMouseMove={handleCardMouseMove}
          onMouseLeave={handleCardMouseLeave}
          style={{
            transform: `perspective(1000px) rotateX(${cardTilt.x}deg) rotateY(${cardTilt.y}deg)`,
            transition: 'transform 0.2s ease-out'
          }}
        >
          {/* Ambient Glow Aura with breathing luminous halo pulse */}
          <div className="absolute -inset-4 sm:-inset-5 bg-gradient-to-tr from-brand-primary/40 via-cyan-400/30 to-brand-accent/40 rounded-full blur-2xl animate-halo pointer-events-none"></div>

          {/* Rounded Conic Glow Enclosure with Zero-Gravity Float */}
          <div className="conic-glow-container rounded-[2rem] sm:rounded-[2.2rem] shadow-2xl transition-transform duration-500 group-hover:scale-[1.03] animate-float">
            <div className="p-1 sm:p-1.5 bg-[#060813] rounded-[1.95rem] sm:rounded-[2.1rem]">
              <div className="relative overflow-hidden rounded-[1.75rem] sm:rounded-[1.9rem]">
                {viewMode === 'profile' ? (
                  <>
                    {/* Specular Light Beam Glint Sweep across photo glass */}
                    <div className="photo-glint"></div>
                    <img
                      src="/pro_swatantra.jpg"
                      alt="Portrait of Swatantra Raj Kumar Singh"
                      className="w-[155px] h-[155px] sm:w-[210px] sm:h-[210px] md:w-[260px] md:h-[260px] object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Subtle Bottom Vignette for Studio Blend */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#060813]/60 via-transparent to-transparent pointer-events-none"></div>
                  </>
                ) : (
                  /* Interactive Developer Terminal View */
                  <div className="w-[155px] h-[155px] sm:w-[210px] sm:h-[210px] md:w-[260px] md:h-[260px] bg-[#050814] p-2.5 sm:p-3.5 text-left font-mono text-[9px] sm:text-[11px] leading-relaxed flex flex-col justify-between overflow-hidden select-none">
                    <div>
                      <div className="flex items-center gap-1.5 pb-1.5 sm:pb-2 mb-1.5 sm:mb-2 border-b border-white/10">
                        <span className="w-2 h-2 rounded-full bg-red-500/80"></span>
                        <span className="w-2 h-2 rounded-full bg-yellow-500/80"></span>
                        <span className="w-2 h-2 rounded-full bg-emerald-500/80"></span>
                        <span className="text-[8px] sm:text-[9px] text-brand-muted ml-1 font-mono">swatantra@sde:~</span>
                      </div>
                      <div className="space-y-0.5 text-brand-light/90">
                        <p className="text-emerald-400 font-semibold">$ swatantra --status</p>
                        <p className="text-brand-muted">&#123;</p>
                        <p className="pl-1.5 sm:pl-2"><span className="text-brand-primary">role</span>: <span className="text-amber-300">"Software Developer"</span>,</p>
                        <p className="pl-1.5 sm:pl-2"><span className="text-brand-primary">exp</span>: <span className="text-amber-300">"1.7+ Years"</span>,</p>
                        <p className="pl-1.5 sm:pl-2"><span className="text-brand-primary">focus</span>: [<span className="text-cyan-300">"Web"</span>, <span className="text-purple-300">"AI"</span>],</p>
                        <p className="pl-1.5 sm:pl-2"><span className="text-brand-primary">status</span>: <span className="text-emerald-300">"Active"</span></p>
                        <p className="text-brand-muted">&#125;</p>
                      </div>
                    </div>
                    <div className="text-[8px] sm:text-[9px] text-brand-primary/80 pt-1 border-t border-white/[0.08] flex items-center justify-between">
                      <span>Live &amp; Ready to Build</span>
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Bottom-Left Floating Micro-Badge (Counter Float Down) */}
          <div className="absolute -bottom-1 -left-1 sm:-bottom-3 sm:-left-3 bento-card px-2 py-0.5 sm:px-3 sm:py-1.5 rounded-xl sm:rounded-2xl flex items-center gap-1.5 sm:gap-2.5 shadow-2xl border-white/20 z-20 animate-float-delayed backdrop-blur-xl">
            <span className="text-xs sm:text-lg">🚀</span>
            <div>
              <div className="text-[9px] sm:text-[11px] font-bold text-white leading-tight">Full-Stack &amp; AI</div>
              <div className="text-[7.5px] sm:text-[9px] text-brand-muted leading-tight">React • JavaScript • GenAI</div>
            </div>
          </div>
        </div>
      </div>

      {/* Copywriting & Conversion Elements */}
      <div className="flex-1 space-y-3.5 sm:space-y-5 text-center md:text-left order-2 md:order-1">
        {/* Status Radar Badge: Hidden on mobile to keep hero clean & non-redundant */}
        <div className="stagger-1 hidden sm:inline-flex items-center gap-2 sm:gap-2.5 px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-400 text-[11px] sm:text-xs font-semibold backdrop-blur-xl shadow-[0_0_20px_rgba(16,185,129,0.15)] transition-transform duration-300 hover:scale-105">
          <span className="radar-beacon"></span>
          <span className="hidden sm:inline">Available for Full-Time Roles &amp; High-Impact Projects</span>
          <span className="inline sm:hidden">Available for Roles &amp; High-Impact Projects</span>
        </div>

        {/* High-Contrast SaaS Title with Metallic Silver/White Gradient Text */}
        <div className="space-y-1">
          <div>
            <h1 className="stagger-2 text-2xl sm:text-4xl md:text-5xl font-black leading-tight tracking-tight">
              Hi, I'm <span className="text-white">Swatantra</span>
            </h1>
            <div className="stagger-3 metallic-text text-xl sm:text-3xl md:text-[2.5rem] font-extrabold tracking-tight leading-tight mt-0.5">
              Software Developer
            </div>
          </div>

          {/* Dynamic Typewriter Prompt Line */}
          <div className="stagger-4 font-mono text-[11px] sm:text-sm font-semibold tracking-wide flex items-center justify-center md:justify-start gap-1.5 h-6">
            <span className="text-brand-primary/60">&gt;</span>
            <span className="text-brand-muted">Engineering</span>
            <span className="text-brand-primary font-bold">{displayedText}</span>
            <span className="animate-blink text-brand-primary font-bold">|</span>
          </div>
        </div>

        <p className="stagger-5 text-xs sm:text-base text-brand-muted max-w-xl mx-auto md:mx-0 leading-relaxed font-normal px-2 sm:px-0">
          Building <strong>modern web applications</strong> and <strong>digital products</strong> that solve real-world problems through thoughtful <strong>software engineering</strong>, clean architecture, and user-focused design.
        </p>

        {/* Dual SaaS CTAs & Social Links */}
        <div className="stagger-6 space-y-3.5 sm:space-y-4 pt-1">
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-2.5 sm:gap-3.5">
            {/* Primary: Refined gradient shimmer button with hover translation */}
            <a 
              href="#projects" 
              className="btn-shimmer px-4 sm:px-6 py-2.5 sm:py-3 text-xs sm:text-sm font-bold inline-flex items-center gap-2 group shadow-lg"
            >
              <span>Explore Projects</span>
              <i className="fas fa-arrow-right text-[10px] sm:text-xs group-hover:translate-x-1 transition-transform"></i>
            </a>

            {/* Secondary: Glass outline button */}
            <a 
              href="#contact" 
              className="btn-glass px-4 sm:px-5 py-2.5 sm:py-3 text-xs sm:text-sm inline-flex items-center gap-2 group"
            >
              <span>Let's Talk</span>
              <i className="fas fa-paper-plane text-[10px] sm:text-xs text-brand-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"></i>
            </a>

            {/* Social Profiles Inline Strip */}
            <div className="flex items-center gap-1.5 sm:gap-2 pl-0.5 sm:pl-2">
              <a 
                href="https://linkedin.com/in/swatantra-raj-kumar-singh-39b3a020a" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="LinkedIn Profile"
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-white/10 bg-white/[0.03] hover:bg-white/[0.08] hover:border-brand-primary/50 text-brand-muted hover:text-brand-primary flex items-center justify-center transition-all duration-300 shadow-sm hover:-translate-y-1 hover:shadow-[0_0_12px_rgba(0,240,255,0.2)]"
              >
                <i className="fab fa-linkedin-in text-xs sm:text-sm"></i>
              </a>
              <a 
                href="https://github.com/Swatantraraj19" 
                target="_blank" 
                rel="noopener noreferrer" 
                aria-label="GitHub Profile"
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-white/10 bg-white/[0.03] hover:bg-white/[0.08] hover:border-brand-primary/50 text-brand-muted hover:text-brand-primary flex items-center justify-center transition-all duration-300 shadow-sm hover:-translate-y-1 hover:shadow-[0_0_12px_rgba(0,240,255,0.2)]"
              >
                <i className="fab fa-github text-xs sm:text-sm"></i>
              </a>
              <a 
                href="mailto:swatantrarajsingh1901@gmail.com" 
                aria-label="Send Email"
                className="w-8 h-8 sm:w-9 sm:h-9 rounded-full border border-white/10 bg-white/[0.03] hover:bg-white/[0.08] hover:border-brand-primary/50 text-brand-muted hover:text-brand-primary flex items-center justify-center transition-all duration-300 shadow-sm hover:-translate-y-1 hover:shadow-[0_0_12px_rgba(0,240,255,0.2)]"
              >
                <i className="fas fa-envelope text-xs sm:text-sm"></i>
              </a>
            </div>
          </div>
        </div>

        {/* Impact Metric Strip: Animated Numbers Count-Up */}
        <div className="stagger-7 grid grid-cols-3 gap-2 sm:gap-3.5 pt-3.5 sm:pt-4 border-t border-white/[0.08] max-w-lg mx-auto md:mx-0">
          <div className="bento-card spotlight-card p-2 sm:p-3 text-center rounded-xl sm:rounded-2xl border-white/10 hover:border-brand-primary/30 transition-colors group">
            <div className="text-base sm:text-xl font-black text-white group-hover:text-brand-primary transition-colors font-mono">
              {metrics.years}+
            </div>
            <div className="text-[9px] sm:text-[11px] text-brand-muted uppercase tracking-wider font-semibold leading-tight">Years Exp</div>
          </div>
          <div className="bento-card spotlight-card p-2 sm:p-3 text-center rounded-xl sm:rounded-2xl border-white/10 hover:border-brand-primary/30 transition-colors group">
            <div className="text-base sm:text-xl font-black text-brand-primary font-mono">
              {metrics.apps}+
            </div>
            <div className="text-[9px] sm:text-[11px] text-brand-muted uppercase tracking-wider font-semibold leading-tight">Apps Shipped</div>
          </div>
          <div className="bento-card spotlight-card p-2 sm:p-3 text-center rounded-xl sm:rounded-2xl border-white/10 hover:border-emerald-400/30 transition-colors group">
            <div className="text-base sm:text-xl font-black text-emerald-400 font-mono">
              {metrics.quality}%
            </div>
            <div className="text-[9px] sm:text-[11px] text-brand-muted uppercase tracking-wider font-semibold leading-tight">Production Ready</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
