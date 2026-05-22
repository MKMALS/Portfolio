import { motion } from "framer-motion";
import { useState } from "react";

const PROJECTS = [
  {
    id: 1,
    title: "Greenmate Pencil",
    category: "Full Stack — PHP + MySQL",
    span: "md:col-span-7",
    aspect: "aspect-[16/10]",
    image: "https://greenmatepencil.in/assets/img/hero-img.png",
    fallbackImage: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=900&q=80",
    description: "Corporate manufacturing website with product catalog, contact forms, and database integration.",
    link: "https://greenmatepencil.in/",
    tags: ["HTML", "CSS", "JS", "PHP", "MySQL"],
  },
  {
    id: 2,
    title: "Power House",
    category: "Frontend — React",
    span: "md:col-span-5",
    aspect: "aspect-[4/3]",
    image: "https://power-house-tau.vercel.app/og-image.png",
    fallbackImage: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=700&q=80",
    description: "Real estate web platform with Figma wireframes and responsive React interface.",
    link: "https://power-house-tau.vercel.app/",
    tags: ["React", "HTML", "CSS", "Figma"],
  },
  {
    id: 3,
    title: "Codoz Dataset Generator",
    category: "Developer Tool — npm Package",
    span: "md:col-span-4",
    aspect: "aspect-[4/3]",
    image: "https://images.unsplash.com/photo-1555066931-4365d14431b9?w=700&q=80",
    fallbackImage: "https://images.unsplash.com/photo-1555066931-4365d14431b9?w=700&q=80",
    description: "npm package to generate structured test data using customizable schemas. Usage: npx codoz-data",
    link: "#",
    tags: ["Node.js", "npm", "CLI"],
  },
  {
    id: 4,
    title: "Kumar Crackers",
    category: "Frontend — React · Diwali",
    span: "md:col-span-4",
    aspect: "aspect-[4/3]",
    image: "https://kumar-crackers.vercel.app/og-image.png",
    fallbackImage: "https://images.unsplash.com/photo-1467810563316-b5476525c0f9?w=700&q=80",
    description: "Celebrate Diwali with Premium Fireworks — a vibrant e-commerce landing page for firecrackers.",
    link: "https://kumar-crackers.vercel.app/",
    tags: ["React", "HTML", "CSS"],
  },
  {
    id: 5,
    title: "Karuppatti Kadai",
    category: "Frontend — HTML/CSS · Tailwind",
    span: "md:col-span-4",
    aspect: "aspect-[4/3]",
    image: "/projects/karupatti/og.png",
    fallbackImage: "https://images.unsplash.com/photo-1624525226989-9b2af3c0e8d7?w=700&q=80",
    description: "Authentic Palm Jaggery Products — a warm, earthy product site built with Tailwind CSS.",
    link: "/projects/karupatti/index.html",
    tags: ["HTML", "Tailwind", "CSS"],
    isLocal: true,
  },
  {
    id: 6,
    title: "Siva Polybags",
    category: "Business Website — Static",
    span: "md:col-span-12",
    aspect: "aspect-[21/6]",
    image: "https://siva-poly-bags.vercel.app/og-image.png",
    fallbackImage: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=900&q=80",
    description: "Responsive business website designed in Figma and Canva with HTML and CSS.",
    link: "https://siva-poly-bags.vercel.app/",
    tags: ["HTML", "CSS", "Figma", "Canva"],
  },
];

export default function WorksSection() {
  return (
    <section id="work" className="bg-bg py-12 md:py-16">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">
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
              <span className="text-xs text-muted uppercase tracking-[0.3em]">Selected Work</span>
            </div>
            <h2 className="text-3xl md:text-5xl font-body font-light text-text-primary mb-2">
              Featured{" "}
              <em className="font-display italic not-italic" style={{ fontStyle: "italic" }}>
                projects
              </em>
            </h2>
            <p className="text-sm text-muted max-w-sm">
              A selection of projects I've built — from concept and design to deployment.
            </p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-5 md:gap-6">
          {PROJECTS.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project, index }: { project: typeof PROJECTS[0]; index: number }) {
  const [hovered, setHovered] = useState(false);
  const [imgError, setImgError] = useState(false);

  return (
    <motion.div
      className={`${project.span} group relative overflow-hidden rounded-3xl bg-surface border border-stroke cursor-pointer ${project.aspect}`}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
      viewport={{ once: true, margin: "-50px" }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
    >
      <img
        src={imgError ? project.fallbackImage : project.image}
        alt={project.title}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        onError={() => setImgError(true)}
      />

      <div
        className="absolute inset-0 opacity-20 mix-blend-multiply pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #000 1px, transparent 1px)",
          backgroundSize: "4px 4px",
        }}
      />

      <motion.div
        className="absolute inset-0 bg-bg/80 backdrop-blur-lg"
        initial={{ opacity: 0 }}
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      />

      <motion.div
        className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <p className="text-xs text-muted mb-3 max-w-xs">{project.description}</p>
        <div className="flex flex-wrap gap-2 justify-center mb-4">
          {project.tags.map((tag) => (
            <span key={tag} className="text-xs px-2 py-1 rounded-full bg-surface border border-stroke text-muted">
              {tag}
            </span>
          ))}
        </div>
        {project.link !== "#" && (
          <a
            href={project.link}
            target={project.isLocal ? "_self" : "_blank"}
            rel="noopener noreferrer"
            className="relative bg-white text-bg rounded-full px-5 py-2.5 text-sm font-medium hover:bg-text-primary transition-colors"
            onClick={(e) => e.stopPropagation()}
          >
            {project.isLocal ? "View Project →" : "View Live ↗"}
          </a>
        )}
      </motion.div>

      <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/60 to-transparent">
        <p className="text-xs text-white/60 uppercase tracking-[0.2em] mb-1">{project.category}</p>
        <h3 className="text-white font-medium">{project.title}</h3>
      </div>
    </motion.div>
  );
}
