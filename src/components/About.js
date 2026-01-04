"use client";
import { motion } from "framer-motion";
import { Quote, Target, Lightbulb, TrendingUp, Users } from "lucide-react";
import styles from "./About.module.css";
import { mentors } from "@/data/mentors";

export default function About() {
  const ceo = mentors.find(m => m.id === "krishna-kumar") || {};
  const cmo = mentors.find(m => m.id === "sahyan-amal") || {};

  return (
    <section className={styles.aboutSection} id="about">
      <div className={styles.container}>
        
        {/* Header Section: Left Branding, Right Text */}
        <div className={styles.headerSection}>
            <motion.div 
                className={styles.headerLeft}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
            >
               <img src="/brand-logo.png" alt="Novox Edtech" className={styles.logoLarge} onError={(e) => {e.target.style.display='none'}} />
            </motion.div>
            
            <motion.div 
                className={styles.headerRight}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
            >
                <h1 className={styles.headline}>About Novox Edtech</h1>
                <p className={styles.subheading}>Empowering Calicut's Future Tech Leaders</p>
                <p className={styles.description}>
                    We are dedicated to transforming students in Calicut and beyond into industry-ready professionals. 
                    At Novox, we are innovating AI-driven learning through <strong>Proof of Work</strong> concepts—ensuring that every skill you learn is backed by tangible, real-world projects. 
                    Our mission is to bridge the gap between academic theory and practical application.
                </p>
            </motion.div>
        </div>

        {/* Leadership Section */}
        <div className={styles.leadershipSection}>
            <h2 className={styles.sectionTitle}>Meet Our Leadership</h2>
            
            {/* CEO Row */}
            <motion.div 
                className={styles.leaderRow}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                <div className={styles.leaderImageWrapper}>
                    <img src={ceo.img} alt={ceo.name} className={styles.leaderImage} />
                </div>
                <div className={styles.leaderContent}>
                    <h3 className={styles.leaderName}>{ceo.name}</h3>
                    <span className={styles.leaderRole}>{ceo.role}</span>
                    <div className={styles.messageBox}>
                         <p className={styles.messageText}>
                            "We don't just teach concepts—we build professionals, innovators, and changemakers ready to thrive in the fast-evolving tech world. Our mission is to transform knowledge into skills."
                        </p>
                    </div>
                </div>
            </motion.div>

            {/* CMO Row */}
            <motion.div 
                className={styles.leaderRow}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
            >
                <div className={styles.leaderImageWrapper}>
                    <img src={cmo.img} alt={cmo.name} className={styles.leaderImage} />
                </div>
                <div className={styles.leaderContent}>
                    <h3 className={styles.leaderName}>{cmo.name}</h3>
                    <span className={styles.leaderRole}>{cmo.role}</span>
                     <div className={styles.messageBox}>
                         <p className={styles.messageText}>
                            "We envision a world where every aspiring professional has access to world-class, practical tech education. Launch your tech career with us and be part of the future."
                        </p>
                    </div>
                </div>
            </motion.div>
        </div>

        {/* Mission & Vision */}
        <div className={styles.missionVisionGrid}>
            <div className={styles.card}>
                <h3 className={styles.cardTitle}> <Target className={styles.icon} /> Our Mission</h3>
                <p className={styles.cardText}>
                    To transform knowledge into skills and skills into successful careers. We believe in learning by doing—hands-on projects, typically moving beyond just theory to build real expertise.
                </p>
            </div>
            <div className={styles.card}>
                <h3 className={styles.cardTitle}> <Lightbulb className={styles.icon} /> Our Vision</h3>
                <p className={styles.cardText}>
                    A world where every aspiring professional has access to affordable, high-quality, and job-ready tech education that prepares them for a lifetime of innovation.
                </p>
            </div>
        </div>

      </div>
    </section>
  );
}
