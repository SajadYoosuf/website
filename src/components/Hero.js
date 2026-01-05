"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle, Code, Rocket, Brain } from "lucide-react";
import styles from "./Hero.module.css";

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { 
        staggerChildren: 0.1, 
        delayChildren: 0.3 
      } 
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  return (
    <section className={styles.hero}>
      <div className={styles.bgEffects} />
      
      <div className={styles.container}>
        {/* Left Content */}
        <motion.div 
          className={styles.content}
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div variants={itemVariants} className={styles.badge}>
            <Rocket size={16} />
            <span>New Batch Starting Soon</span>
          </motion.div>

          <motion.h1 variants={itemVariants} className={styles.headline}>
            Best Software Training Institute in <span className="text-gradient">Calicut</span>
            <br />
            Learn, Build & <span className="text-gradient">Get Placed</span>
          </motion.h1>

          <motion.p variants={itemVariants} className={styles.subheadline}>
            Future-ready programs in Flutter, MERN, Python, Digital Marketing, UI/UX, and more — powered by AI learning tools.
          </motion.p>

          <motion.div variants={itemVariants} className={styles.actions}>
            <Link href="/courses" className="btn-primary">
              Explore Courses
            </Link>
            <Link href="/contact" className="btn-secondary">
              Talk to a Mentor
            </Link>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div variants={itemVariants} style={{ display: 'flex', gap: '24px', marginTop: '32px', color: 'var(--text-muted)', fontSize: '14px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <CheckCircle size={16} color="var(--primary)" />
              <span>100+ Placed</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <CheckCircle size={16} color="var(--primary)" />
              <span>Real Projects</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Right Visual */}
        <motion.div 
          className={styles.visual}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <div className={styles.imageContainer}>
             <img 
               src="/hero-students.jpg" 
               alt="Novox Students Success" 
               className={styles.heroImage}
             />
             <div className={styles.imageOverlay} />
          </div>

          {/* Floating Badge */}
          <motion.div 
            className={styles.placedBadge}
            animate={{ y: [0, -10, 0] }} 
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className={styles.badgeIcon}>
              <CheckCircle size={20} color="white" />
            </div>
            <div>
              <span className={styles.badgeTitle}>100% Placement Support</span>
              <span className={styles.badgeSubtitle}>Join our success story</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
