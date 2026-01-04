"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Quote } from "lucide-react";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import { placements } from "@/data/placements";
import styles from "./page.module.css";

export default function AllPlacements() {
  return (
    <main className={styles.mainContainer}>
      <Navbar />
      
      <div className={styles.contentWrapper}>
        <div className={styles.header}>
            <h1 className={styles.pageTitle}>Student Success Stories</h1>
            <p className={styles.pageSubtitle}>See how our students are transforming their lives and careers.</p>
        </div>

        <div className={styles.grid}>
          {placements.map((student, index) => (
            <Link href={`/placements/${student.id}`} key={student.id} style={{textDecoration: 'none'}}>
                <motion.div 
                className={styles.card}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                >
                <div className={styles.imageWrapper}>
                    <img src={student.img} alt={student.name} className={styles.studentImage} />
                </div>
                
                <div className={styles.cardContent}>
                    <h3 className={styles.name}>{student.name}</h3>
                    <p className={styles.role}>{student.role}</p>
                    <div className={styles.companyBadge}>
                         at {student.company}
                    </div>

                    <div className={styles.quoteBox}>
                        <Quote size={20} className={styles.quoteIcon} />
                        <p className={styles.quote}>"{student.quote.substring(0, 80)}..."</p>
                    </div>
                    
                    <div className={styles.cardFooter}>
                        <span className={styles.courseTag}>{student.course}</span>
                        <span className={styles.readMore}>Read Story <ArrowRight size={14} /></span>
                    </div>
                </div>
                </motion.div>
            </Link>
          ))}
        </div>
      </div>
      <Contact />
    </main>
  );
}
