import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const ROLES = ["Full Stack Developer", "UI/UX Designer", "React Developer", "Creative Builder"];

export default function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);

  // Role cycling
  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((i) => (i + 1) % ROLES.length);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  // GSAP entrance
  useEffect(() => {
    const tl = gsap.timeline({ ease: "power3.out" });
    tl.fromTo(
      ".name-reveal",
      { opacity: 0, y: 50 },
      { opacity: 1, y: 0, duration: 1.2, delay: 0.1 }
    ).fromTo(
      ".blur-in",
      { opacity: 0, filter: "blur(10px)", y: 20 },
      { opacity: 1, filter: "blur(0px)", y: 0, duration: 1, stagger: 0.1, delay: 0.3 },
      "<0.3"
    );
  }, []);

  return (
    <section id="home" className="relative w-full h-screen overflow-hidden flex items-center justify-center">
      {/* Animated background */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(78,133,191,0.12) 0%, transparent 70%), radial-gradient(ellipse 60% 40% at 80% 80%, rgba(137,170,204,0.08) 0%, transparent 60%)",
          }}
        />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: "linear-gradient(rgba(137,170,204,1) 1px, transparent 1px), linear-gradient(90deg, rgba(137,170,204,1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        {/* Bottom fade */}
        <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-bg to-transparent" />
      </div>

      {/* Hero content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Eyebrow */}
        <p className="blur-in text-xs text-muted uppercase tracking-[0.3em] mb-8">
          Based in Sivakasi, Tamil Nadu
        </p>

        {/* Name */}
        <h1 className="name-reveal text-6xl md:text-8xl lg:text-9xl font-display italic leading-[0.9] tracking-tight text-text-primary mb-6">
          Muthu Kumar J
        </h1>

        {/* Role line */}
        <p className="blur-in text-base md:text-lg text-muted mb-6">
          A{" "}
          <span
            key={roleIndex}
            className="font-display italic text-text-primary animate-role-fade-in inline-block"
          >
            {ROLES[roleIndex]}
          </span>{" "}
          crafting digital experiences.
        </p>

        {/* Description */}
        <p className="blur-in text-sm md:text-base text-muted max-w-md mx-auto mb-12">
          Fresher Full Stack Developer with hands-on experience building scalable web applications and responsive user interfaces. Proficient in React, PHP, and MySQL — with a sharp eye for UI/UX design.
        </p>

        {/* CTA Buttons */}
        <div className="blur-in inline-flex gap-4 flex-wrap justify-center">
          <div className="relative gradient-border-wrapper group">
            <button
              onClick={() => document.getElementById("work")?.scrollIntoView({ behavior: "smooth" })}
              className="relative z-10 rounded-full text-sm px-7 py-3.5 bg-text-primary text-bg font-medium hover:bg-bg hover:text-text-primary transition-all duration-300 hover:scale-105"
            >
              See My Work
            </button>
          </div>

          <div className="relative gradient-border-wrapper group">
            <a
              href="mailto:mailtomuthukumar.j@gmail.com"
              className="relative z-10 flex items-center rounded-full text-sm px-7 py-3.5 border-2 border-stroke bg-bg text-text-primary font-medium hover:border-transparent transition-all duration-300 hover:scale-105"
            >
              Reach out ↗
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-10">
        <span className="text-xs text-muted uppercase tracking-[0.2em]">SCROLL</span>
        <div className="relative w-px h-10 bg-stroke overflow-hidden">
          <div className="absolute inset-x-0 top-0 h-full accent-gradient animate-scroll-down" />
        </div>
      </div>
    </section>
  );
}
