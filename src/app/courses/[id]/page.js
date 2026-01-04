"use client";
import Link from "next/link";
import { ArrowLeft, Clock, Award, CheckCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import { courses } from "@/data/courses";
import styles from "./page.module.css";
import { motion } from "framer-motion";
import { use } from "react";

export default function CourseDetail({ params }) {
  const { id } = use(params);
  const course = courses.find(c => c.id === id);

  if (!course) {
    return (
        <div className={styles.courseContainer}>
            <Navbar />
            <div style={{textAlign: 'center', padding: '100px'}}>
                <h1>Course Not Found</h1>
                <Link href="/courses">Back to courses</Link>
            </div>
        </div>
    )
  }

  const Icon = course.icon;

  return (
    <main className={styles.courseContainer}>
      <Navbar />
      
      <div className={styles.contentWrapper}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
            <Link href="/courses" className={styles.backLink}>
            <ArrowLeft size={20} /> Back to Courses
            </Link>
        </div>

        <section className={styles.heroSection}>
          <div className={styles.iconWrapper} style={{ marginBottom: '1.5rem', display: 'inline-flex', padding: '1rem', background: 'white', borderRadius: '50%', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
            <Icon size={48} color="#2563eb" />
          </div>
          <h1 className={styles.title}>{course.title}</h1>
          <p className={styles.subtitle}>{course.description}</p>
          
          <div className={styles.infoGrid}>
            <div className={styles.infoItem}>
              <Clock size={18} /> {course.duration}
            </div>
            <div className={styles.infoItem}>
              <Award size={18} /> {course.outcome}
            </div>
          </div>
        </section>

        <div className={styles.contentContainer}>
          <div className={styles.mainContent}>
            <section className={styles.syllabusSection}>
              <h2>About the Course</h2>
              <p style={{ lineHeight: '1.8', fontSize: '1.1rem', color: 'var(--muted-foreground)', marginBottom: '3rem' }}>
                {course.longDescription}
              </p>

              <h2>What You'll Learn</h2>
              <ul className={styles.syllabusList}>
                {course.syllabus.map((item, index) => (
                  <li key={index} className={styles.syllabusItem}>
                    <CheckCircle size={20} className={styles.checkIcon} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </section>

            {/* Interactive Roadmap */}
            {course.roadmap && (
              <section className={styles.roadmapSection}>
                <h2>Learning Roadmap</h2>
                <div className={styles.roadmapTimeline}>
                  {course.roadmap.map((step, index) => (
                    <motion.div 
                      key={index} 
                      className={styles.roadmapLevel}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className={styles.levelDot}></div>
                      <div className={styles.levelContent}>
                        <span className={styles.levelTag}>{step.level}</span>
                        <h3 className={styles.levelTitle}>{step.title}</h3>
                        <p className={styles.levelDesc}>{step.description}</p>
                      </div>
                      <div className={styles.messageBox}>
                        <motion.div 
                          className={styles.messageBubble}
                          initial={{ scale: 0.8, opacity: 0 }}
                          whileInView={{ scale: 1, opacity: 1 }}
                          transition={{ delay: (index * 0.1) + 0.2 }}
                          viewport={{ once: true }}
                        >
                          {step.message}
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </section>
            )}
          </div>

          <aside className={styles.sidebar}>
            <div className={styles.enrollCard}>
              <h3>Ready to Start?</h3>
              <p className={styles.priceLabel}>Next batch starts soon</p>
              
              <button className={styles.ctaButton}>
                Book Free Demo Class
              </button>
              
              <div style={{ marginTop: '1.5rem', textAlign: 'left' }}>
                <p style={{ fontSize: '0.9rem', color: 'var(--muted-foreground)', marginBottom: '0.5rem' }}>
                    <strong>Includes:</strong>
                </p>
                <ul style={{ listStyle: 'none', padding: 0, fontSize: '0.9rem', color: 'var(--foreground)' }}>
                    <li style={{ marginBottom: '0.5rem' }}>• Live Mentorship</li>
                    <li style={{ marginBottom: '0.5rem' }}>• Real-world Projects</li>
                    <li style={{ marginBottom: '0.5rem' }}>• Placement Support</li>
                    <li>• Certification</li>
                </ul>
              </div>
            </div>
          </aside>
        </div>
      </div>
      
      <Contact />
    </main>
  );
}
