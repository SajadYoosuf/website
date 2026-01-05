"use client";
import { motion } from "framer-motion";
import styles from "./InstagramFeed.module.css";

const posts = [
  {
    id: "career-1",
    url: "https://www.instagram.com/p/DS2JQGcD2ep/",
    title: "Turn into Career Ready Skills",
  },
  {
    id: "career-2",
    url: "https://www.instagram.com/p/DS2JOSUD82L/",
    title: "Industry Level Projects",
  },
  {
    id: "career-3",
    url: "https://www.instagram.com/p/DS2JMRFj9EO/",
    title: "Expert Guidance",
  }
];

export default function InstagramFeed() {
  return (
    <section className={styles.feedSection}>
      <div className={styles.container}>
        <div className={styles.heading}>
          <motion.h2 
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Insights & Updates
          </motion.h2>
          <motion.p 
            className={styles.subtitle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Master industry-standard skills and build your career with Novox Edtech.
          </motion.p>
        </div>

        <div className={styles.grid}>
          {posts.map((post, index) => (
            <motion.div 
              key={post.id}
              className={styles.postCard}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <div className={styles.embedWrapper}>
                <iframe
                  src={`${post.url}embed/`}
                  className={styles.instaIframe}
                  frameBorder="0"
                  scrolling="no"
                  allowTransparency="true"
                ></iframe>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
