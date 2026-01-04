import Link from "next/link";
import { ArrowLeft, Quote, Briefcase, GraduationCap, DollarSign, User } from "lucide-react";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import { placements } from "@/data/placements";
import styles from "./page.module.css";
import { notFound } from "next/navigation";

export default async function PlacementDetail({ params }) {
  const { id } = await params;
  const student = placements.find(p => p.id === id);

  if (!student) {
    notFound();
  }

  return (
    <main className={styles.detailContainer}>
      <Navbar />
      
      <div className={styles.detailWrapper}>
        <div className={styles.navBack}>
            <Link href="/placements" className={styles.backLink}>
            <ArrowLeft size={20} /> Back to Success Stories
            </Link>
        </div>

        <div className={styles.profileHeader}>
            <div className={styles.profileImageLarge} style={{overflow: 'hidden'}}>
                <img src={student.img} alt={student.name} style={{width: '100%', height: '100%', objectFit: 'cover'}} />
            </div>
            <div className={styles.headerText}>
                <h1 className={styles.detailName}>{student.name}</h1>
                <p className={styles.detailRole}>{student.role} at <span className={styles.highlight}>{student.company}</span></p>
                <div className={styles.tags}>
                    <span className={styles.tag}>
                        <Briefcase size={14} /> {student.company}
                    </span>
                    <span className={styles.tag}>
                         <GraduationCap size={14} /> {student.background}
                    </span>
                    {student.package && (
                        <span className={styles.tag}>
                            <DollarSign size={14} /> {student.package} CTC
                        </span>
                    )}
                </div>
            </div>
        </div>

        <div className={styles.storyContent}>
            <div className={styles.quoteSection}>
                <Quote size={40} className={styles.quoteIconLarge} />
                <p className={styles.fullQuote}>"{student.quote}"</p>
            </div>

            <div className={styles.journeyBox}>
                <h3>The Journey</h3>
                <p>
                    From a <strong>{student.background}</strong> background to becoming a <strong>{student.role}</strong>, 
                    {student.name}'s journey is inspiring. They mastered the <strong>{student.course}</strong> curriculum, 
                    built real-world projects, and cracked the interview at <strong>{student.company}</strong>.
                </p>
            </div>
        </div>
      </div>
      
      <Contact />
    </main>
  );
}
