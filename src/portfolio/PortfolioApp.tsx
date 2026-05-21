import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import LoadingScreen from "./LoadingScreen";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import WorksSection from "./WorksSection";
import JournalSection from "./JournalSection";
import ExplorationsSection from "./ExplorationsSection";
import StatsSection from "./StatsSection";
import ResumeSection from "./ResumeSection";
import FooterSection from "./FooterSection";

export default function PortfolioApp() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    if (isLoading) return;
    const sections = ["home", "work", "design", "journal", "about", "resume", "contact"];
    const observers: IntersectionObserver[] = [];

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const obs = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { threshold: 0.3 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [isLoading]);

  return (
    <>
      <AnimatePresence>
        {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      <AnimatePresence>
        {!isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <Navbar activeSection={activeSection} />
            <main>
              <HeroSection />
              <WorksSection />
              <ExplorationsSection />
              <JournalSection />
              <StatsSection />
              <ResumeSection />
              <FooterSection />
            </main>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
