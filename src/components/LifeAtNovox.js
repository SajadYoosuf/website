"use client";
import { motion } from "framer-motion";
import styles from "./LifeAtNovox.module.css";

const sections = [
  {
    id: "anniversary",
    type: "feature",
    format: "landscape",
    title: "1 Year • One Family",
    badge: "Event Highlight",
    description: "Celebrating one year of building Tech Leaders in Kerala with unlimited energy and dedication. Our journey has just begun.",
    embedUrl: "https://www.youtube.com/embed/JGdoSPGO6FU?si=THzwIePP1rByfDNY&autoplay=1&mute=1&loop=1&playlist=JGdoSPGO6FU&controls=0&modestbranding=1&rel=0",
  },
  {
    id: "celebrations",
    type: "pair",
    format: "portrait-pair",
    title: "Novoxian Celebrations",
    badge: "Cultural Vibes",
    description: "Life at Novox is a blend of hard work and joyous moments. Witness our vibrant Onam traditional festivities and our cinematic Christmas magic.",
    items: [
      {
        id: "onam",
        type: "youtube",
        embedUrl: "https://www.youtube.com/embed/EhXjEu72Noo?autoplay=1&mute=1&loop=1&playlist=EhXjEu72Noo&controls=0&modestbranding=1&rel=0",
      },
      {
        id: "christmas",
        type: "instagram",
        embedUrl: "https://www.instagram.com/reel/DSrZTthD4xu/embed/",
      }
    ]
  },
  {
    id: "success-journey",
    type: "feature-portrait",
    format: "portrait",
    title: "From Student to UI/UX Designer",
    badge: "Student Success",
    description: "Watch Vidhu's incredible transformation from zero coding knowledge to a professional UI/UX designer within just one year at Novox Edtech.",
    embedUrl: "https://www.youtube.com/embed/3enJ5l3rcTo?autoplay=1&mute=1&loop=1&playlist=3enJ5l3rcTo&controls=0&modestbranding=1&rel=0",
  }
];

export default function LifeAtNovox() {
  return (
    <section className={styles.lifeSection}>
      <div className={styles.container}>
        <div className={styles.heading}>
          <motion.h2 
            className={styles.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            Life at Novox Edtech
          </motion.h2>
          <motion.p 
            className={styles.subtitle}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            Experience the vibrant culture and celebrations that define our community.
          </motion.p>
        </div>

        <div className={styles.list}>
          {sections.map((section, index) => (
            <motion.div 
              key={section.id}
              className={`${styles.sectionRow} ${section.type === 'pair' ? styles.pairRow : (section.format === 'portrait' ? styles.portraitSoloRow : styles.featureRow)}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className={styles.visualSide}>
                {section.type === 'pair' ? (
                  <div className={styles.pairGrid}>
                    {section.items.map((item) => (
                      <div key={item.id} className={styles.portraitWrapper}>
                        {item.type === 'instagram' ? (
                           <div className={styles.reelCrop}>
                              <iframe
                                src={item.embedUrl}
                                className={styles.reelIframe}
                                frameBorder="0"
                                scrolling="no"
                                allowTransparency="true"
                              ></iframe>
                           </div>
                        ) : (
                          <iframe 
                            width="100%" 
                            height="100%" 
                            src={item.embedUrl} 
                            title={item.id}
                            frameBorder="0" 
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                            allowFullScreen
                          ></iframe>
                        )}
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className={`${styles.embedWrapper} ${section.format === 'landscape' ? styles.landscapeWrapper : styles.portraitWrapper}`}>
                    <iframe 
                      width="100%" 
                      height="100%" 
                      src={section.embedUrl} 
                      title={section.title}
                      frameBorder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                      allowFullScreen
                    ></iframe>
                  </div>
                )}
              </div>

              <div className={styles.contentSide}>
                <div className={styles.textWrapper}>
                  <span className={styles.badge}>{section.badge}</span>
                  <h3>{section.title}</h3>
                  <p>{section.description}</p>
                  <div className={styles.decoration} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
