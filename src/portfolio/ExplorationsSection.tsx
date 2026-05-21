import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";

// ── Figma UI/UX Projects ──────────────────────────────────────────────────────
const FIGMA_PROJECTS = [
  {
    id: "figma-1",
    title: "Fresh — Food Delivery App",
    category: "UI/UX Design · Figma",
    description: "Full food delivery platform — hero, menu categories, dish cards, checkout & payment flow.",
    tags: ["Figma", "UI Design", "Food & Delivery", "E-commerce"],
    pages: "4 screens",
    pdfPath: "/designs/food-ui.pdf",
    accent: "#f97316",
    previewBg: "from-orange-950/40 to-orange-900/10",
    icon: "🍽️",
    highlights: ["Hero landing", "Menu categories", "Dish cards", "Checkout & payment"],
  },
  {
    id: "figma-2",
    title: "Construction Co. — Corporate Site",
    category: "UI/UX Design · Figma",
    description: "Bold corporate website design with service sections, project showcase, and trust-building layout.",
    tags: ["Figma", "UI Design", "Corporate", "B2B"],
    pages: "Multi-screen",
    pdfPath: "/designs/construction-ui.pdf",
    accent: "#f59e0b",
    previewBg: "from-yellow-950/40 to-yellow-900/10",
    icon: "🏗️",
    highlights: ["Hero section", "Services grid", "Project showcase", "Contact CTA"],
  },
];

// ── Graphic Design Work (Posters, Banners, Certificates) ──────────────────────
const GRAPHIC_ITEMS = [
  {
    id: "g1",
    src: "/designs/images/poster-restaurant.jpeg",
    title: "HS Special Restaurant",
    type: "Poster · Canva",
    tag: "🍃 Restaurant",
    accent: "#16a34a",
  },
  {
    id: "g2",
    src: "/designs/images/poster-biryani.jpeg",
    title: "Menu Special — Chicken Biryani",
    type: "Poster · Canva",
    tag: "🍛 Food",
    accent: "#ea580c",
  },
  {
    id: "g3",
    src: "/designs/images/poster-fruit-salad.jpg",
    title: "Fruit Salad — Promo Banner",
    type: "Banner · Canva",
    tag: "🥗 Promo",
    accent: "#22c55e",
  },
  {
    id: "g4",
    src: "/designs/images/poster-chicken.jpeg",
    title: "Spicy Roasted Chicken",
    type: "Banner · Canva",
    tag: "🍗 Promo",
    accent: "#f97316",
  },
  {
    id: "g5",
    src: "/designs/images/certificate-participation.jpeg",
    title: "Certificate of Participation",
    type: "Certificate Design · Canva",
    tag: "🎓 Certificate",
    accent: "#d97706",
  },
  {
    id: "g6",
    src: "/designs/images/certificate-appreciation.jpeg",
    title: "Certificate of Appreciation",
    type: "Certificate Design · Canva",
    tag: "🏅 Certificate",
    accent: "#7c3aed",
  },
];

type LightboxItem =
  | { kind: "pdf"; src: string }
  | { kind: "image"; src: string; title: string };

export default function ExplorationsSection() {
  const [lightbox, setLightbox] = useState<LightboxItem | null>(null);
  const [uploadedFiles, setUploadedFiles] = useState<{ id: number; name: string; url: string; type: string }[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    files.forEach((file) => {
      const url = URL.createObjectURL(file);
      setUploadedFiles((prev) => [
        ...prev,
        { id: Date.now() + Math.random(), name: file.name, url, type: file.type },
      ]);
    });
  };

  return (
    <section id="design" className="bg-bg py-16 md:py-24 border-t border-stroke">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">

        {/* ── Section Header ── */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-stroke" />
            <span className="text-xs text-muted uppercase tracking-[0.3em]">UI/UX & Graphic Design</span>
          </div>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <h2 className="text-3xl md:text-5xl font-body font-light text-text-primary mb-2">
                Design{" "}
                <em className="font-display italic" style={{ fontStyle: "italic" }}>showcase</em>
              </h2>
              <p className="text-sm text-muted max-w-sm">
                UI/UX projects from Figma, plus posters, banners, and certificates crafted in Canva.
              </p>
            </div>
            <div>
              <input ref={fileInputRef} type="file" accept=".pdf,image/*" multiple className="hidden" onChange={handleFileUpload} />
              <button
                onClick={() => fileInputRef.current?.click()}
                className="flex items-center gap-2 text-sm rounded-full px-5 py-2.5 border border-stroke text-muted hover:text-text-primary hover:border-muted transition-colors"
              >
                + Add more work
              </button>
            </div>
          </div>
        </motion.div>

        {/* ── Figma UI Projects ── */}
        <div className="flex items-center gap-3 mb-6">
          <span className="text-xs text-muted uppercase tracking-[0.25em]">Figma UI/UX Projects</span>
          <div className="flex-1 h-px bg-stroke" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-14">
          {FIGMA_PROJECTS.map((project, i) => (
            <motion.div
              key={project.id}
              className="group relative rounded-3xl bg-surface border border-stroke overflow-hidden cursor-pointer"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: i * 0.15 }}
              viewport={{ once: true, margin: "-50px" }}
              onClick={() => setLightbox({ kind: "pdf", src: project.pdfPath })}
              whileHover={{ y: -4 }}
            >
              <div className={`relative h-52 bg-gradient-to-br ${project.previewBg} flex items-center justify-center overflow-hidden`}>
                <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)", backgroundSize: "30px 30px" }} />
                <span className="text-7xl opacity-30 group-hover:opacity-50 group-hover:scale-110 transition-all duration-500">{project.icon}</span>
                <div className="absolute bottom-4 left-4 right-4 flex flex-wrap gap-2">
                  {project.highlights.map((h) => (
                    <span key={h} className="text-[10px] px-2.5 py-1 rounded-full bg-black/30 backdrop-blur-sm text-white/70 border border-white/10">{h}</span>
                  ))}
                </div>
                <motion.div className="absolute inset-0 flex items-center justify-center bg-black/50 backdrop-blur-sm" initial={{ opacity: 0 }} whileHover={{ opacity: 1 }} transition={{ duration: 0.2 }}>
                  <span className="text-sm font-medium text-white bg-white/20 border border-white/30 rounded-full px-5 py-2.5">View Full Design ↗</span>
                </motion.div>
              </div>
              <div className="p-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <p className="text-xs text-muted uppercase tracking-[0.2em] mb-1">{project.category}</p>
                    <h3 className="text-text-primary font-medium text-lg">{project.title}</h3>
                  </div>
                  <span className="text-xs px-2.5 py-1 rounded-full border mt-1 flex-shrink-0" style={{ borderColor: project.accent + "40", color: project.accent }}>{project.pages}</span>
                </div>
                <p className="text-sm text-muted mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-xs px-2.5 py-1 rounded-full bg-bg border border-stroke text-muted">{tag}</span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── Graphic Design Gallery ── */}
        <div className="flex items-center gap-3 mb-6">
          <span className="text-xs text-muted uppercase tracking-[0.25em]">Posters, Banners & Certificates</span>
          <div className="flex-1 h-px bg-stroke" />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
          {GRAPHIC_ITEMS.map((item, i) => (
            <motion.div
              key={item.id}
              className="group relative rounded-2xl overflow-hidden border border-stroke cursor-pointer bg-surface"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              viewport={{ once: true, margin: "-40px" }}
              onClick={() => setLightbox({ kind: "image", src: item.src, title: item.title })}
              whileHover={{ scale: 1.02 }}
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={item.src}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-bg/0 group-hover:bg-bg/60 transition-colors duration-300 flex items-center justify-center">
                <span className="opacity-0 group-hover:opacity-100 transition-opacity text-sm font-medium text-white bg-white/20 border border-white/30 rounded-full px-4 py-2">
                  View ↗
                </span>
              </div>
              {/* Label */}
              <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/70 to-transparent">
                <span className="text-[10px] font-medium" style={{ color: item.accent }}>{item.tag}</span>
                <p className="text-xs text-white font-medium line-clamp-1 mt-0.5">{item.title}</p>
                <p className="text-[10px] text-white/50">{item.type}</p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* ── User Uploaded extras ── */}
        {uploadedFiles.length > 0 && (
          <>
            <div className="flex items-center gap-3 mb-6">
              <span className="text-xs text-muted uppercase tracking-[0.25em]">More Work</span>
              <div className="flex-1 h-px bg-stroke" />
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {uploadedFiles.map((file, i) => (
                <motion.div
                  key={file.id}
                  className="group rounded-2xl bg-surface border border-stroke overflow-hidden cursor-pointer"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  onClick={() => setLightbox(
                    file.type === "application/pdf"
                      ? { kind: "pdf", src: file.url }
                      : { kind: "image", src: file.url, title: file.name }
                  )}
                >
                  {file.type === "application/pdf" ? (
                    <div className="aspect-[4/3] flex flex-col items-center justify-center gap-3 p-6">
                      <div className="w-12 h-12 rounded-xl bg-bg border border-stroke flex items-center justify-center text-xl">📄</div>
                      <p className="text-xs text-text-primary font-medium text-center line-clamp-2">{file.name}</p>
                      <a href={file.url} target="_blank" rel="noopener noreferrer" className="text-xs px-3 py-1.5 rounded-full bg-text-primary text-bg" onClick={(e) => e.stopPropagation()}>Open ↗</a>
                    </div>
                  ) : (
                    <div className="aspect-[4/3] overflow-hidden">
                      <img src={file.url} alt={file.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </>
        )}

        {/* ── Lightbox ── */}
        <AnimatePresence>
          {lightbox && (
            <motion.div
              className="fixed inset-0 z-[100] bg-black/95 flex flex-col"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setLightbox(null)}
            >
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 flex-shrink-0" onClick={(e) => e.stopPropagation()}>
                <span className="text-sm text-white/60">
                  {lightbox.kind === "image" ? lightbox.title : "Design Preview"}
                </span>
                <div className="flex items-center gap-3">
                  {lightbox.kind === "pdf" && (
                    <a href={lightbox.src} target="_blank" rel="noopener noreferrer" className="text-sm px-4 py-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors">
                      Open in new tab ↗
                    </a>
                  )}
                  <button onClick={() => setLightbox(null)} className="text-sm px-4 py-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors">
                    ✕ Close
                  </button>
                </div>
              </div>
              <div className="flex-1 overflow-hidden flex items-center justify-center p-4" onClick={() => setLightbox(null)}>
                {lightbox.kind === "pdf" ? (
                  <iframe src={lightbox.src} className="w-full h-full rounded-xl" title="Design Preview" onClick={(e) => e.stopPropagation()} />
                ) : (
                  <motion.img
                    src={lightbox.src}
                    alt={lightbox.title}
                    className="max-w-full max-h-full rounded-2xl object-contain"
                    initial={{ scale: 0.85, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.85, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    onClick={(e) => e.stopPropagation()}
                  />
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
