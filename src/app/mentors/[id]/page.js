import Link from "next/link";
import { ArrowLeft, User, Linkedin, Twitter, Medal, Star } from "lucide-react";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import { mentors } from "@/data/mentors";
import styles from "./page.module.css";
import { notFound } from "next/navigation";

export default async function MentorDetail({ params }) {
  const { id } = await params;
  const mentor = mentors.find(m => m.id === id);

  if (!mentor) {
    notFound();
  }

  return (
    <main className={styles.container}>
      <Navbar />
      
      <div className={styles.contentWrapper}>
        <div className={styles.backLinkWrapper}>
            <Link href="/mentors" className={styles.backLink}>
            <ArrowLeft size={20} /> Back to Mentors
            </Link>
        </div>

        <section className={styles.heroSection}>
          <div className={styles.imageProfileWrapper}>
            <img src={mentor.img} alt={mentor.name} style={{width: '100%', height: '100%', objectFit: 'cover'}} />
          </div>
          <h1 className={styles.title}>{mentor.name}</h1>
          <p className={styles.role}>{mentor.role}</p>
          <span className={styles.exp}>{mentor.exp}</span>
          
          <div className={styles.socials}>
             <a href="#" className={styles.socialLink}><Linkedin size={20}/></a>
             <a href="#" className={styles.socialLink}><Twitter size={20}/></a>
          </div>
        </section>

        <div className={styles.contentGrid}>
            <div className={styles.bioSection}>
                <h2>About</h2>
                <p>{mentor.bio}</p>
            </div>

            <div className={styles.sidebar}>
                <div className={styles.card}>
                    <h3>Skills</h3>
                    <div className={styles.tags}>
                        {mentor.skills.map(skill => (
                            <span key={skill} className={styles.tag}>{skill}</span>
                        ))}
                    </div>
                </div>

                <div className={styles.card}>
                    <h3>Achievements</h3>
                    <ul className={styles.list}>
                        {mentor.achievements.map((ach, i) => (
                            <li key={i} className={styles.listItem}>
                                <Medal size={16} className={styles.icon} />
                                {ach}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
      </div>
      
      <Contact />
    </main>
  );
}
