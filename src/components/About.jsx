const About = () => {
  return (
    <section
      id="about"
      className="max-w-4xl mx-auto px-4 sm:px-8 py-16 md:py-32"
    >
      <h2 className="section-title">About Me</h2>

      <div className="text-center space-y-8 text-[1.1rem] leading-8 text-brand-light">

        <p>
          I'm a <strong>Software Developer</strong> with{" "}
          <strong>1.5 years of experience</strong> building modern web
          applications and digital products. I enjoy transforming ideas into
          scalable, user-focused solutions while writing clean, maintainable,
          and efficient code.
        </p>

        <p>
          Alongside software development, I have experience collaborating with
          cross-functional teams, contributing to Agile project delivery, and
          exploring <strong>AI &amp; Generative AI</strong> to build smarter
          digital experiences. I'm always learning, improving, and embracing
          new technologies that create real-world impact.
        </p>

        <ul className="flex flex-wrap justify-center gap-4 sm:gap-6 pt-6">

          <li className="bg-brand-card px-4 sm:px-6 py-2.5 sm:py-3 rounded-full flex items-center gap-3 border border-white/10 text-sm sm:text-base">
            <i className="fas fa-globe text-brand-primary"></i>
            Modern Web Development
          </li>

          <li className="bg-brand-card px-4 sm:px-6 py-2.5 sm:py-3 rounded-full flex items-center gap-3 border border-white/10 text-sm sm:text-base">
            <i className="fas fa-robot text-brand-primary"></i>
            AI &amp; Generative AI
          </li>

          <li className="bg-brand-card px-4 sm:px-6 py-2.5 sm:py-3 rounded-full flex items-center gap-3 border border-white/10 text-sm sm:text-base">
            <i className="fas fa-gauge-high text-brand-primary"></i>
            Performance Optimization
          </li>

          <li className="bg-brand-card px-4 sm:px-6 py-2.5 sm:py-3 rounded-full flex items-center gap-3 border border-white/10 text-sm sm:text-base">
            <i className="fas fa-users text-brand-primary"></i>
            Agile Project Delivery
          </li>

        </ul>
      </div>
    </section>
  );
};

export default About;
