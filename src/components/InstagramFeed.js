"use client";
import { motion } from "framer-motion";
import styles from "./InstagramFeed.module.css";

const posts = [
  {
    id: "flutter-1",
    url: "https://www.instagram.com/p/DTAWKJ6D5EM/",
    title: "Why Flutter in 2026?",
  },
  {
    id: "flutter-2",
    url: "https://www.instagram.com/p/DTAWPJ0j-QA/",
    title: "Cross-Platform Power",
  },
  {
    id: "flutter-3",
    url: "https://www.instagram.com/p/DTAWdW4j3gG/",
    title: "Future of App Dev",
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
            Stay ahead with the latest in Flutter and cross-platform development trends for 2026.
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
