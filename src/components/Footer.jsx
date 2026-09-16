const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full bg-[#030611] py-8 sm:py-10 px-4 text-center border-t border-white/[0.08] relative z-10">
      <p className="text-xs sm:text-sm text-brand-light/60 font-mono tracking-wide">
        &copy; {currentYear} Swatantra Raj Kumar Singh. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;

