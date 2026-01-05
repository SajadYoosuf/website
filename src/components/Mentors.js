"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { mentors } from "@/data/mentors";
import styles from "./Mentors.module.css";
import { ArrowRight } from "lucide-react";

export default function Mentors({ showAll = false }) {
  // Split mentors into leadership and others
  const leadership = mentors.filter(m => m.isLeadership);
  const others = mentors.filter(m => !m.isLeadership);
  
  // For Homepage (!showAll), show specifically requested top mentors
  const homeMentorsIds = ["sajad-yoosuf", "muhammed-sajid", "shirl-balat"];
  const homeMentors = mentors.filter(m => homeMentorsIds.includes(m.id));

  // Determine which list to display
  // If showAll is true (Mentors Page): Show ONLY regular mentors (exclude leadership).
  // If showAll is false (Home Page): Show specific top mentors.
  
  const displayMentors = showAll ? others : homeMentors;

  return (
    <section className={styles.mentorsSection} id="mentors">
      <div className={styles.container}>
        <div className={styles.header}>
          <div>
            <h2 className={styles.title}>{showAll ? "Meet Our Mentors" : "Top Mentors"}</h2>
            <p className={styles.subtitle}>Industry experts guiding you from classroom to boardroom.</p>
          </div>
          {!showAll && (
            <Link href="/mentors" className={styles.viewAllBtn}>
              View All Mentors <ArrowRight size={16} style={{ verticalAlign: 'middle' }} />
            </Link>
          )}
        </div>

        {/* Mentors Grid */}
        <div className={styles.grid}>
             {displayMentors.map((mentor, index) => (
                <Link href={`/mentors/${mentor.id}`} key={mentor.id} style={{textDecoration: 'none'}}>
                    <motion.div 
                        className={styles.card}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 + (index * 0.1) }}
                        viewport={{ once: true }}
                    >
                        <div className={styles.imageWrapper}>
                             <img src={mentor.img} alt={mentor.name} className={styles.mentorImage} style={{ objectFit: 'cover' }} />
                        </div>
                        <div className={styles.info}>
                            <h3 className={styles.name}>{mentor.name}</h3>
                            <p className={styles.role}>{mentor.role}</p>
                            {mentor.mentoring && <p className={styles.mentoring}>{mentor.mentoring}</p>}
                            {mentor.title && <p className={styles.customTitle}>{mentor.title}</p>}
                        </div>
                    </motion.div>
                </Link>
            ))}
        </div>
        
      </div>
    </section>
  );
}
