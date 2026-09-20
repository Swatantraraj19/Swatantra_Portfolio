import { useState } from 'react';

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const email = "swatantrarajsingh1901@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="max-w-4xl mx-auto px-4 sm:px-8 py-16 md:py-28 text-center overflow-hidden">
      <div className="relative">
        {/* Subtle Radial Gradient Mesh Atmosphere */}
        <div className="absolute inset-0 bg-gradient-to-r from-brand-primary/10 via-brand-accent/15 to-brand-secondary/10 blur-3xl -z-10 rounded-full"></div>

        {/* Centered Glowing Card */}
        <div className="bento-card spotlight-card border-beam p-5 sm:p-12 md:p-16 border-white/[0.12] space-y-6 sm:space-y-8 shadow-[0_0_35px_rgba(0,240,255,0.08)]">
          {/* Header Status Tag */}
          <div className="inline-flex items-center gap-2 px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-white/[0.04] border border-white/10 text-[11px] sm:text-xs font-semibold text-brand-primary">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-primary animate-pulse"></span>
            <span>Get In Touch</span>
          </div>

          <div className="space-y-2.5 sm:space-y-3">
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-white tracking-tight">
              Let's Build Something <span className="metallic-text">Extraordinary</span>
            </h2>
            <p className="text-xs sm:text-base md:text-lg text-brand-muted max-w-xl mx-auto leading-relaxed font-normal px-1 sm:px-0">
              Whether you're looking to hire for a <strong>full-time software engineering role</strong> or want to discuss a <strong>custom freelance product</strong>, I'd love to hear from you.
            </p>
          </div>

          {/* Quick Availability / Response Indicators */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-[10px] sm:text-xs font-mono">
            <span className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 shadow-[0_0_12px_rgba(16,185,129,0.15)]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>⚡ Fast Response: &lt; 24h</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-2.5 sm:px-3 py-1 rounded-full bg-brand-primary/10 border border-brand-primary/20 text-brand-primary shadow-[0_0_12px_rgba(0,240,255,0.15)]">
              <i className="fas fa-globe-asia text-[10px] shrink-0"></i>
              <span>India • <span className="hidden sm:inline">Open to </span>Worldwide Remote / Hybrid</span>
            </span>
          </div>

          {/* Integrated Quick Actions: Shimmer Mail CTA & Quick Copy Button */}
          <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-4 pt-1 sm:pt-2">
            <a 
              href={`mailto:${email}`} 
              className="btn-shimmer px-5 sm:px-7 py-2.5 sm:py-3.5 text-xs sm:text-base font-bold inline-flex items-center gap-2 active:scale-95 transition-transform"
            >
              <span>Contact Me</span>
              <i className="fas fa-paper-plane text-[10px] sm:text-xs"></i>
            </a>

            <button
              type="button"
              onClick={handleCopyEmail}
              className="btn-glass px-4 sm:px-6 py-2.5 sm:py-3.5 text-xs sm:text-base font-semibold inline-flex items-center gap-2 cursor-pointer active:scale-95 transition-all"
            >
              <i className={copied ? "fas fa-check text-emerald-400 text-xs" : "fas fa-copy text-brand-primary text-xs"}></i>
              <span>{copied ? "Copied Email! ✓" : "Copy Email"}</span>
            </button>
          </div>

          {/* Social Badge Pills with Micro-Transitions */}
          <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-4 pt-6 sm:pt-8 border-t border-white/[0.08] text-xs sm:text-sm text-brand-muted">
            <a 
              href={`mailto:${email}`} 
              className="hover:text-brand-primary transition-all duration-200 flex items-center gap-1.5 sm:gap-2 px-3 py-1.5 rounded-full bg-white/[0.03] border border-white/10 hover:border-brand-primary/40 hover:bg-white/[0.06] active:scale-95 max-w-full truncate text-[11px] sm:text-xs"
            >
              <i className="fas fa-envelope text-brand-primary text-xs shrink-0"></i>
              <span className="truncate">{email}</span>
            </a>
            <a 
              href="https://linkedin.com/in/swatantra-raj-kumar-singh-39b3a020a" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-brand-primary transition-all duration-200 flex items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/10 hover:border-brand-primary/40 hover:bg-white/[0.06] active:scale-95 text-[11px] sm:text-xs"
            >
              <i className="fab fa-linkedin text-brand-primary text-xs"></i>
              <span>LinkedIn</span>
            </a>
            <a 
              href="https://github.com/Swatantraraj19" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-brand-primary transition-all duration-200 flex items-center gap-1.5 sm:gap-2 px-3 sm:px-3.5 py-1.5 rounded-full bg-white/[0.03] border border-white/10 hover:border-brand-primary/40 hover:bg-white/[0.06] active:scale-95 text-[11px] sm:text-xs"
            >
              <i className="fab fa-github text-brand-primary text-xs"></i>
              <span>GitHub</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
