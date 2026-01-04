"use client";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle } from "lucide-react";
import styles from "./RoadmapModal.module.css";

const steps = [
  {
    title: "Phase 1: Fundamentals (Beta)",
    desc: "Master the core programming logic, syntax, and basic tools. Build your first console applications.",
    color: "#3b82f6",
    glow: "rgba(59, 130, 246, 0.4)"
  },
  {
    title: "Phase 2: Advanced Concepts",
    desc: "Deep dive into data structures, algorithms, and advanced framework features.",
    color: "#a855f7",
    glow: "rgba(168, 85, 247, 0.4)"
  },
  {
    title: "Phase 3: Real-World Projects (Zeta)",
    desc: "Collaborate on production-level projects. Learn version control with Git & GitHub.",
    color: "#f472b6",
    glow: "rgba(244, 114, 182, 0.4)"
  },
  {
    title: "Phase 4: AI Integration (Alpha)",
    desc: "Supercharge your workflow with AI tools. Automate tasks and optimize code.",
    color: "#f97316",
    glow: "rgba(249, 115, 22, 0.4)"
  },
  {
    title: "Phase 5: Placement & Branding",
    desc: "Resume building, mock interviews, and personal branding on LinkedIn.",
    color: "#10b981",
    glow: "rgba(16, 185, 129, 0.4)"
  }
];

export default function RoadmapModal({ isOpen, onClose, courseTitle }) {
  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div 
        className={styles.overlay}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
      >
        <motion.div 
          className={styles.modal}
          initial={{ scale: 0.9, opacity: 0, y: 20 }}
          animate={{ scale: 1, opacity: 1, y: 0 }}
          exit={{ scale: 0.9, opacity: 0, y: 20 }}
          onClick={(e) => e.stopPropagation()}
        >
          <div className={styles.header}>
            <h3 className={styles.title}>Roadmap for {courseTitle}</h3>
            <button className={styles.closeBtn} onClick={onClose}>
              <X size={20} />
            </button>
          </div>

          <div className={styles.content}>
            <div className={styles.timeline}>
              {steps.map((step, index) => (
                <motion.div 
                  key={index} 
                  className={styles.step}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  style={{ "--step-color": step.color, "--step-glow": step.glow }}
                >
                  <div className={styles.stepIcon} />
                  <div className={styles.stepContent}>
                    <h4 className={styles.stepTitle}>{step.title}</h4>
                    <p className={styles.stepDesc}>{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className={styles.footer}>
            <button className={styles.enrollBtn}>
              Join This Batch
            </button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
