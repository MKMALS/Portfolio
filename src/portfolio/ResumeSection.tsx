import { motion } from "framer-motion";
import { useState } from "react";

const RESUMES = [
  {
    id: "fullstack",
    label: "Full Stack Developer",
    icon: "💻",
    file: "/resume-fullstack.pdf",
    filename: "Muthu_Kumar_J_FullStack_Resume.pdf",
    accent: "#4E85BF",
    accentBg: "from-blue-950/40 to-blue-900/10",
    skills: ["React", "PHP", "MySQL", "Node.js", "HTML/CSS/JS"],
    summary: "Scalable web apps, responsive UIs, full stack architecture",
  },
  {
    id: "designer",
    label: "Graphic & UI/UX Designer",
    icon: "🎨",
    file: "/resume-designer.pdf",
    filename: "Muthu_Kumar_J_Designer_Resume.pdf",
    accent: "#f97316",
    accentBg: "from-orange-950/40 to-orange-900/10",
    skills: ["Figma", "Canva", "UI Design", "Branding", "Posters"],
    summary: "Branding, social media creatives, UI layouts, web visuals",
  },
];

export default function ResumeSection() {
  const [preview, setPreview] = useState<string | null>(null);

  return (
    <section id="resume" className="bg-bg py-16 md:py-20 border-t border-stroke">
      <div className="max-w-[1200px] mx-auto px-6 md:px-10 lg:px-16">

        {/* Header */}
        <motion.div
          className="mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-px bg-stroke" />
            <span className="text-xs text-muted uppercase tracking-[0.3em]">Resume</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-body font-light text-text-primary mb-2">
            Download my{" "}
            <em className="font-display italic" style={{ fontStyle: "italic" }}>resume</em>
          </h2>
          <p className="text-sm text-muted max-w-md">
            I have two tailored resumes — pick the one that matches the role you're hiring for.
          </p>
        </motion.div>

        {/* Resume Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-6">
          {RESUMES.map((resume, i) => (
            <motion.div
              key={resume.id}
              className="group relative rounded-3xl bg-surface border border-stroke overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: i * 0.15 }}
              viewport={{ once: true, margin: "-50px" }}
            >
              {/* Top accent band */}
              <div className={`h-1.5 w-full`} style={{ background: resume.accent }} />

              <div className="p-7">
                {/* Icon + title */}
                <div className="flex items-start justify-between mb-5">
                  <div className="flex items-center gap-4">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl flex-shrink-0"
                      style={{ background: resume.accent + "18", border: `1px solid ${resume.accent}30` }}
                    >
                      {resume.icon}
                    </div>
                    <div>
                      <p className="text-xs text-muted uppercase tracking-[0.2em] mb-0.5">Resume</p>
                      <h3 className="text-text-primary font-medium text-base">{resume.label}</h3>
                    </div>
                  </div>
                  {/* Live dot */}
                  <div className="flex items-center gap-1.5 mt-1">
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75" style={{ backgroundColor: resume.accent }} />
                      <span className="relative inline-flex rounded-full h-2 w-2" style={{ backgroundColor: resume.accent }} />
                    </span>
                    <span className="text-[10px] text-muted">Ready</span>
                  </div>
                </div>

                {/* Summary */}
                <p className="text-sm text-muted mb-5 leading-relaxed">{resume.summary}</p>

                {/* Skills chips */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {resume.skills.map((s) => (
                    <span
                      key={s}
                      className="text-xs px-2.5 py-1 rounded-full border"
                      style={{ borderColor: resume.accent + "40", color: resume.accent }}
                    >
                      {s}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  {/* Download */}
                  <a
                    href={resume.file}
                    download={resume.filename}
                    className="flex-1 flex items-center justify-center gap-2 rounded-full py-3 text-sm font-medium text-bg transition-all hover:opacity-90 hover:scale-[1.02]"
                    style={{ background: resume.accent }}
                  >
                    ↓ Download PDF
                  </a>
                  {/* Preview */}
                  <button
                    onClick={() => setPreview(resume.file)}
                    className="flex items-center justify-center gap-1 rounded-full px-4 py-3 text-sm border border-stroke text-muted hover:text-text-primary hover:border-muted transition-colors"
                  >
                    Preview
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tip */}
        <motion.p
          className="text-xs text-muted/60 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.4 }}
          viewport={{ once: true }}
        >
          💡 Tip — Share the Full Stack resume for dev roles, Designer resume for creative/UI roles.
        </motion.p>
      </div>

      {/* PDF Preview Modal */}
      {preview && (
        <motion.div
          className="fixed inset-0 z-[100] bg-black/95 flex flex-col"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 flex-shrink-0">
            <span className="text-sm text-white/60">Resume Preview</span>
            <div className="flex items-center gap-3">
              <a
                href={preview}
                download
                className="text-sm px-4 py-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
              >
                ↓ Download
              </a>
              <button
                onClick={() => setPreview(null)}
                className="text-sm px-4 py-2 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
              >
                ✕ Close
              </button>
            </div>
          </div>
          <div className="flex-1 overflow-hidden">
            <iframe src={preview} className="w-full h-full" title="Resume Preview" />
          </div>
        </motion.div>
      )}
    </section>
  );
}
