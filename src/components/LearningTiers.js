"use client";
import { motion } from "framer-motion";
import { Check, Code, Briefcase, Zap } from "lucide-react";
import styles from "./LearningTiers.module.css";

const tiers = [
  {
    id: "beta",
    name: "Beta",
    label: "Foundation Program",
    color: "#3b82f6", // Blue
    glow: "rgba(59, 130, 246, 0.4)",
    icon: Code,
    features: [
      "Learn one core skill (Flutter / React / Python)",
      "Basics to Mini-Projects",
      "Perfect for Beginners",
      "Code Reviews"
    ]
  },
  {
    id: "zeta",
    name: "Zeta",
    label: "Professional Program",
    color: "#a855f7", // Purple
    glow: "rgba(168, 85, 247, 0.4)",
    icon: Briefcase,
    features: [
      "Frontend + Backend (Full Stack)",
      "Real-world Projects",
      "GitHub Portfolio Building",
      "Internship Style Practice"
    ]
  },
  {
    id: "alpha",
    name: "Alpha",
    label: "AI Mastery Program",
    color: "#f97316", // Orange
    glow: "rgba(249, 115, 22, 0.4)",
    icon: Zap,
    features: [
      "Everything in Zeta included",
      "AI-Powered Tools & Workflows",
      "Automation Agents Integration",
      "Career Branding & Mentorship"
    ]
  }
];

export default function LearningTiers() {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.heading}>
          <h2 className={styles.title}>Your Growth Journey</h2>
          <p className={styles.subtitle}>From beginner to industry leader in three stages.</p>
        </div>

        <div className={styles.tierContainer}>
          {/* Animated Connecting Timeline Line */}
          <div className={styles.timelineLine}>
            <motion.div 
              style={{ 
                height: "100%", 
                background: "linear-gradient(90deg, #3b82f6, #a855f7, #f97316)",
                width: "0%" 
              }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.5 }}
            />
          </div>

          {tiers.map((tier, index) => (
            <motion.div
              key={tier.id}
              className={styles.tierCard}
              style={{
                "--card-color": tier.color,
                "--card-glow": tier.glow
              }}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.3, duration: 0.6 }}
            >
              <div className={styles.iconWrapper}>
                <tier.icon size={32} color={tier.color} />
              </div>

              <h3 className={styles.tierName}>{tier.name}</h3>
              <div className={styles.tierLabel}>{tier.label}</div>

              <ul className={styles.featuresList}>
                {tier.features.map((feature, i) => (
                  <li key={i} className={styles.featureItem}>
                    <Check size={16} className={styles.checkIcon} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
