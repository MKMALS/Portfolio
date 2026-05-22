import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const MARQUEE_TEXT = "BUILDING THE FUTURE • ";

const SOCIALS = [
  { name: "LinkedIn", href: "https://linkedin.com/in/muthu-kumar-530220281" },
  { name: "GitHub", href: "#" },
  { name: "Portfolio", href: "https://muthukumarportfolio-tau.vercel.app" },
];

export default function FooterSection() {
  const marqueeRef = useRef<HTMLDivElement>(null);

  // GSAP Marquee
  useEffect(() => {
    const el = marqueeRef.current;
    if (!el) return;
    const tween = gsap.to(el, {
      xPercent: -50,
      duration: 40,
      ease: "none",
      repeat: -1,
    });
    return () => { tween.kill(); };
  }, []);

  const repeated = Array(10).fill(MARQUEE_TEXT).join("");

  return (
    <footer id="contact" className="bg-bg pt-16 md:pt-20 pb-8 md:pb-12 overflow-hidden relative border-t border-stroke">
      {/* Subtle gradient bg */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 80% 50% at 50% 100%, rgba(78,133,191,0.07) 0%, transparent 70%)",
        }}
      />

      <div className="relative z-10">
        {/* Marquee */}
        <div className="overflow-hidden mb-16 md:mb-20">
          <div ref={marqueeRef} className="whitespace-nowrap inline-block">
            <span className="text-4xl md:text-6xl lg:text-7xl font-display italic text-text-primary/10 tracking-tight">
              {repeated}
              {repeated}
            </span>
          </div>
        </div>

        {/* CTA */}
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 text-center mb-16 md:mb-20">
          <p className="text-xs text-muted uppercase tracking-[0.3em] mb-4">Let's work together</p>
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-display italic text-text-primary mb-8 leading-tight">
            Have a project in mind?
          </h2>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="relative gradient-border-wrapper group inline-block">
              <a
                href="mailto:mailtomuthukumar.j@gmail.com"
                className="relative z-10 flex items-center gap-2 text-base rounded-full px-8 py-4 bg-surface text-text-primary border border-stroke hover:border-transparent transition-all duration-300 hover:scale-105"
              >
                mailtomuthukumar.j@gmail.com ↗
              </a>
            </div>
            <a
              href="tel:+919042160283"
              className="text-sm text-muted hover:text-text-primary transition-colors px-6 py-4"
            >
              +91 9042160283
            </a>
          </div>
        </div>

        {/* Footer bar */}
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16 border-t border-stroke/50 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Socials */}
          <div className="flex items-center gap-6">
            {SOCIALS.map((s) => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs text-muted hover:text-text-primary uppercase tracking-[0.15em] transition-colors duration-200"
              >
                {s.name}
              </a>
            ))}
          </div>

          {/* Available indicator */}
          <div className="flex items-center gap-2">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
            </span>
            <span className="text-xs text-muted">Available for projects</span>
          </div>

          {/* Copyright */}
          <p className="text-xs text-muted">© 2026 Muthu Kumar J</p>
        </div>
      </div>
    </footer>
  );
}
