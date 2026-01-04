"use client";
import { motion } from "framer-motion";
import { Zap, Layers, TrendingUp, UserCheck, Briefcase } from "lucide-react";
import styles from "./Features.module.css";

const features = [
  {
    icon: Zap,
    title: "Skill Mastery",
    description: "Deep dive into core technologies with hands-on practice and master level curriculum."
  },
  {
    icon: Layers,
    title: "Project Building",
    description: "Don't just watch tutorials. Build real-world production grade applications."
  },
  {
    icon: TrendingUp,
    title: "Competitive Tracking",
    description: "Monitor your progress, complete daily challenges, and rank on the leaderboard."
  },
  {
    icon: UserCheck,
    title: "Character & Discipline",
    description: "We mold professionals with strong work ethics, soft skills, and discipline."
  },
  {
    icon: Briefcase,
    title: "Professional Branding",
    description: "LinkedIn optimization, resume building, and interview preparation from day one."
  },
];

export default function Features() {
  return (
    <section className={styles.featuresSection}>
      <div className={styles.container}>
        <div className={styles.heading}>
          <h2 className={styles.title}>Why Choose Novox EdTech Academy?</h2>
          <p className={styles.subtitle}>
            Our 5-Pillar Growth Framework transforms beginners into industry-ready professionals.
          </p>
        </div>

        <div className={styles.grid}>
          {features.map((feature, index) => (
            <motion.div 
              key={index}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className={styles.overlay} />
              <div className={styles.iconWrapper}>
                <feature.icon size={28} color="white" />
              </div>
              <h3 className={styles.cardTitle}>{feature.title}</h3>
              <p className={styles.cardDescription}>{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
