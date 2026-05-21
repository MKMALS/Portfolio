import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const NAV_LINKS = ["Home", "Work", "Design", "About", "Resume", "Contact"];

interface NavbarProps {
  activeSection: string;
}

export default function Navbar({ activeSection }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [logoHovered, setLogoHovered] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollTo = (section: string) => {
    const id = section.toLowerCase();
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <motion.nav
      className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 md:pt-6 px-4"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
    >
      <div
        className={`inline-flex items-center rounded-full backdrop-blur-md border border-white/10 bg-surface px-2 py-2 transition-shadow duration-300 ${
          scrolled ? "shadow-md shadow-black/30" : ""
        }`}
      >
        {/* Logo */}
        <motion.button
          className="relative w-9 h-9 rounded-full flex items-center justify-center cursor-pointer"
          onHoverStart={() => setLogoHovered(true)}
          onHoverEnd={() => setLogoHovered(false)}
          whileHover={{ scale: 1.1 }}
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <div
            className="absolute inset-0 rounded-full p-[2px]"
            style={{
              background: logoHovered
                ? "linear-gradient(270deg, #89AACC 0%, #4E85BF 100%)"
                : "linear-gradient(90deg, #89AACC 0%, #4E85BF 100%)",
              transition: "background 0.3s ease",
            }}
          >
            <div className="w-full h-full rounded-full bg-bg flex items-center justify-center">
              <span className="font-display italic text-[13px] text-text-primary">MK</span>
            </div>
          </div>
        </motion.button>

        <div className="hidden sm:block w-px h-5 bg-stroke mx-1" />

        {NAV_LINKS.map((link) => {
          const isActive = activeSection === link.toLowerCase();
          return (
            <button
              key={link}
              onClick={() => scrollTo(link)}
              className={`text-xs sm:text-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 transition-colors duration-200 ${
                isActive
                  ? "text-text-primary bg-stroke/50"
                  : "text-muted hover:text-text-primary hover:bg-stroke/50"
              }`}
            >
              {link}
            </button>
          );
        })}

        <div className="hidden sm:block w-px h-5 bg-stroke mx-1" />

        <div className="relative gradient-border-wrapper group">
          <a
            href="mailto:mailtomuthukumar.j@gmail.com"
            className="relative z-10 flex items-center gap-1 text-xs sm:text-sm rounded-full px-3 sm:px-4 py-1.5 sm:py-2 bg-surface text-muted hover:text-text-primary transition-colors duration-200"
          >
            Say hi <span className="text-xs">↗</span>
          </a>
        </div>
      </div>
    </motion.nav>
  );
}
