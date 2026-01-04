"use client";
import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";
import styles from "./Placements.module.css";
import { placements } from "@/data/placements";

export default function Placements() {
  // Use the placements data for marquee, ensuring enough duplicates for smooth loop
  const marqueeStudents = [...placements, ...placements, ...placements];

  return (
    <section className={styles.section} id="placements">
      <div className={styles.container}>
        <div className={styles.heading}>
          <h2 className={styles.title}>Our Success Stories</h2>
          <p className={styles.subtitle}>Join 100+ students who transformed their careers.</p>
        </div>
      </div>

      {/* Marquee Slider */}
      <div className={styles.marqueeContainer}>
        <motion.div 
          className={styles.marqueeTrack}
          animate={{ x: [0, -1000] }} 
          transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
        >
          {marqueeStudents.map((student, index) => (
            <div key={`${student.id}-${index}`} className={styles.studentCard}>
              <div className={styles.studentImg}>
                <img src={student.img} alt={student.name} className={styles.img} />
              </div>
              <div className={styles.studentInfo}>
                <h4>{student.name}</h4>
                <p>{student.role} at <span className={styles.company}>{student.company}</span></p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* We can re-use some placements as featured testimonials if needed, or keep explicit testimonials separate. 
          For now, preserving the testimonials grid layout but using data from placements array or custom. 
          The user provided new images which are placements, let's use them as "Success Stories" in the grid too? 
          The user request was "edit our placement photos and title and everything... add this to please analyze...". 
          So the detail page should use the new data. I already updated data/placements.js.
          For the testimonials section below, let's use the new placements as testimonials too because they have quotes now.
      */}
      <div className={styles.container}>
        <div className={styles.testimonialsGrid}>
          {placements.slice(0, 3).map((t, index) => (
            <motion.div 
              key={t.id}
              className={styles.testimonialCard}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
            >
              <Quote size={40} className={styles.quoteIcon} />
              <div className={styles.stars}>
                {[1,2,3,4,5].map((s) => (
                  <Star key={s} size={16} fill="#fbbf24" stroke="none" />
                ))}
              </div>
              <p className={styles.quote}>"{t.quote}"</p>
              <div className={styles.author}>
                <div>
                  <h4 style={{ fontWeight: 'bold' }}>{t.name}</h4>
                  <p style={{ fontSize: '12px', color: 'var(--primary)' }}>{t.course}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
