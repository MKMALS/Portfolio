import { motion } from "framer-motion";

const CERTS = [
  {
    id: 1,
    title: "Generative AI Professional",
    issuer: "Oracle",
    image: "https://images.unsplash.com/photo-1677442135703-1787eea5ce01?w=200&q=80",
    tag: "AI",
  },
  {
    id: 2,
    title: "Claude with Anthropic API",
    issuer: "Anthropic",
    image: "https://images.unsplash.com/photo-1676299081847-824916de030a?w=200&q=80",
    tag: "AI",
  },
  {
    id: 3,
    title: "Python for Data Science",
    issuer: "IBM",
    image: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=200&q=80",
    tag: "Data",
  },
  {
    id: 4,
    title: "Technology Job Simulation",
    issuer: "Deloitte",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=200&q=80",
    tag: "Industry",
  },
  {
    id: 5,
    title: "Machine Learning Terminology & Process",
    issuer: "AWS",
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=200&q=80",
    tag: "ML",
  },
  {
    id: 6,
    title: "Data Visualisation",
    issuer: "TATA",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=200&q=80",
    tag: "Data",
  },
  {
    id: 7,
    title: "Strategic Design Simulation",
    issuer: "BCG X",
    image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=200&q=80",
    tag: "Design",
  },
  {
    id: 8,
    title: "Agile Project Management",
    issuer: "HP Foundation",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=200&q=80",
    tag: "Management",
  },
];

export default function JournalSection() {
  return (
    <section id="journal" className="bg-bg py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
        {/* Header */}
        <motion.div
          className="flex items-end justify-between mb-10 md:mb-14"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="w-8 h-px bg-stroke" />
              <span className="text-xs text-muted uppercase tracking-[0.3em]">Credentials</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-body font-light text-text-primary mb-2">
              Certificates &{" "}
              <em className="font-display italic" style={{ fontStyle: "italic" }}>
                learning
              </em>
            </h2>
            <p className="text-sm text-muted max-w-sm">
              Continuous learning across AI, cloud, data, and design domains.
            </p>
          </div>
        </motion.div>

        {/* Publication highlight */}
        <motion.div
          className="mb-8 p-6 rounded-3xl bg-surface border border-stroke relative overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div
            className="absolute top-0 right-0 w-32 h-32 rounded-full opacity-10"
            style={{ background: "radial-gradient(circle, #4E85BF, transparent)", transform: "translate(30%, -30%)" }}
          />
          <span className="text-xs text-muted uppercase tracking-[0.2em] mb-2 block">📄 Publication</span>
          <h3 className="text-text-primary font-medium mb-1">
            "An Analysis of English Proficiency Among Arts College Students Using Data Mining Approach"
          </h3>
          <p className="text-sm text-muted">
            International Journal of Computer Science and Information Security (IJCSIS) · Volume 24, No. 2 · March 2026
          </p>
        </motion.div>

        {/* Certificates */}
        <div className="flex flex-col gap-3">
          {CERTS.map((cert, i) => (
            <motion.article
              key={cert.id}
              className="group flex items-center gap-6 p-4 rounded-[40px] sm:rounded-full bg-surface/30 hover:bg-surface border border-stroke cursor-pointer transition-colors duration-300"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: i * 0.07, ease: [0.25, 0.1, 0.25, 1] }}
              viewport={{ once: true, margin: "-50px" }}
            >
              {/* Image */}
              <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              {/* Tag */}
              <span className="hidden sm:block text-xs text-muted uppercase tracking-[0.2em] w-20 flex-shrink-0">
                {cert.tag}
              </span>

              {/* Title */}
              <h3 className="flex-1 text-sm md:text-base text-text-primary/80 group-hover:text-text-primary transition-colors duration-200 line-clamp-1">
                {cert.title}
              </h3>

              {/* Issuer */}
              <div className="hidden md:flex items-center gap-4 flex-shrink-0">
                <span className="text-xs text-muted">{cert.issuer}</span>
              </div>

              {/* Arrow */}
              <span className="text-muted group-hover:text-text-primary transition-colors duration-200 flex-shrink-0 pr-2">
                →
              </span>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
