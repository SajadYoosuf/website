"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import styles from "./Courses.module.css";
import { courses } from "@/data/courses";

export default function Courses({ showAll = false }) {
  // If showAll is false, filter to show only specific key courses
  const displayedCourses = showAll 
    ? courses 
    : courses.filter(c => ["Flutter Full Stack", "MERN Stack", "Digital Marketing"].includes(c.title));

  return (
    <section className={styles.section} id="courses">
      <div className={styles.container}>
        <div className={styles.header}>
          <div>
            <h2 className={styles.title}>{showAll ? "All Professional Courses" : "Explore Our Top Courses"}</h2>
            <p className={styles.subtitle}>Job-ready programs designed to get you hired.</p>
          </div>
          
          {!showAll && (
            <Link href="/courses" className={styles.viewAllBtn}>
              View All Courses <ArrowRight size={16} />
            </Link>
          )}
          {showAll && (
             <Link href="/" className={styles.viewAllBtn}>
               <ArrowRight size={16} style={{ transform: 'rotate(180deg)' }}/> Back to Home 
             </Link>
          )}
        </div>

        <div className={styles.grid}>
          {displayedCourses.map((course, index) => (
            <motion.div
              key={course.id}
              className={styles.card}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <div className={styles.cardHeader}>
                <div className={styles.iconBox}>
                  <course.icon size={24} />
                </div>
                <span className={styles.badge}>Job-Ready</span>
              </div>

              <div>
                <h3 className={styles.cardTitle}>{course.title}</h3>
                <p className={styles.cardDesc}>{course.description}</p>
              </div>

              <div className={styles.cardFooter}>
                <span className={styles.duration}>{course.duration} • {course.outcome}</span>
                <Link 
                  href={`/courses/${course.id}`}
                  className={styles.roadmapBtn}
                >
                  View Details <ArrowRight size={14} />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
