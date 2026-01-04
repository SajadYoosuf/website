"use client";
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import InstagramFeed from "@/components/InstagramFeed";
import LifeAtNovox from "@/components/LifeAtNovox";
import Features from "@/components/Features";
import LearningTiers from "@/components/LearningTiers";
import Courses from "@/components/Courses";
import Placements from "@/components/Placements";
import Mentors from "@/components/Mentors";
import Contact from "@/components/Contact";
import BrainLoader from "@/components/BrainLoader";
import { AnimatePresence, motion } from "framer-motion";

export default function HomePageContent() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Check if we already showed the loader in this session
    const hasVisited = sessionStorage.getItem("hasVisited");

    if (hasVisited) {
      setLoading(false);
    } else {
      const timer = setTimeout(() => {
        setLoading(false);
        sessionStorage.setItem("hasVisited", "true");
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  return (
    <main style={{ minHeight: '100vh', background: 'var(--background)' }}>
      <AnimatePresence>
        {loading && (
          <motion.div
            key="loader"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            style={{ position: 'fixed', inset: 0, zIndex: 9999 }}
          >
            <BrainLoader />
          </motion.div>
        )}
      </AnimatePresence>
      <Navbar />
      <Hero />
      <InstagramFeed />
      <LifeAtNovox />
      <Features />
      <LearningTiers />
      <Courses />
      <Placements />
      <Mentors />
      <Contact />
    </main>
  );
}
