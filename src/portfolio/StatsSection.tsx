import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

const STATS = [
  { value: 4, suffix: "+", label: "Live Projects" },
  { value: 8, suffix: "+", label: "Certificates Earned" },
  { value: 1, suffix: "", label: "Published Research" },
];

const SKILLS = [
  { category: "Languages", items: ["HTML5", "CSS3", "JavaScript"] },
  { category: "Frameworks", items: ["React", "Node.js"] },
  { category: "Backend", items: ["PHP", "MySQL"] },
  { category: "Design", items: ["Figma", "Canva", "UI/UX"] },
  { category: "Tools", items: ["Git", "GitHub", "VS Code"] },
];

function CountUp({ target, suffix }: { target: number; suffix: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 1500;
    const startTime = performance.now();
    const animate = (now: number) => {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));
      if (progress < 1) requestAnimationFrame(animate);
      else setCount(target);
    };
    requestAnimationFrame(animate);
  }, [inView, target]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}
      {suffix}
    </span>
  );
}

export default function StatsSection() {
  return (
    <section id="about" className="bg-bg py-16 md:py-24 border-t border-stroke">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-6 mb-20">
          {STATS.map((stat, i) => (
            <motion.div
              key={stat.label}
              className="text-center md:text-left"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.15, ease: [0.25, 0.1, 0.25, 1] }}
              viewport={{ once: true, margin: "-50px" }}
            >
              <div className="text-5xl md:text-6xl lg:text-7xl font-display italic text-text-primary mb-3">
                <CountUp target={stat.value} suffix={stat.suffix} />
              </div>
              <p className="text-sm text-muted uppercase tracking-[0.2em]">{stat.label}</p>
              <div className="mt-4 h-px w-16 mx-auto md:mx-0">
                <div className="h-full accent-gradient" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Skills */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="flex items-center gap-3 mb-8">
            <div className="w-8 h-px bg-stroke" />
            <span className="text-xs text-muted uppercase tracking-[0.3em]">Skills & Tools</span>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {SKILLS.map((skillGroup, i) => (
              <motion.div
                key={skillGroup.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                viewport={{ once: true }}
              >
                <p className="text-xs text-muted uppercase tracking-[0.2em] mb-3">{skillGroup.category}</p>
                <div className="flex flex-col gap-2">
                  {skillGroup.items.map((item) => (
                    <span
                      key={item}
                      className="text-sm text-text-primary/80 px-3 py-1.5 rounded-lg bg-surface border border-stroke"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
