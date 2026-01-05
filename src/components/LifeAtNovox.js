"use client";
import { motion } from "framer-motion";
import styles from "./LifeAtNovox.module.css";

const sections = [
  {
    id: "anniversary",
    type: "feature",
    format: "landscape",
    title: "1 Year • One Family",
    badge: "The Beginning",
    description: "Our journey started with a vision to build tech leaders. One year later, we are Kerala's fastest growing tech community.",
    embedUrl: "https://www.youtube.com/embed/JGdoSPGO6FU?rel=0&modestbranding=1",
  },
  {
    id: "campus-fun",
    type: "feature-portrait",
    format: "portrait",
    title: "The Energy of Novox",
    badge: "Campus Life",
    description: "Learning at Novox isn't just about code—it's about the vibe. From spontaneous fun to real connections, our campus is where enjoyment meets education.",
    embedUrl: "https://www.youtube.com/embed/Rn3YxnMuPmo?rel=0&modestbranding=1",
  },
  {
    id: "celebrations",
    type: "pair",
    format: "portrait-pair",
    title: "Cultural Traditions",
    badge: "Festivals",
    description: "We celebrate our roots. Our Onam and Christmas festivities are legendary, bringing students and mentors together in a festive bond.",
    items: [
      {
        id: "onam",
        type: "youtube",
        embedUrl: "https://www.youtube.com/embed/EhXjEu72Noo?rel=0&modestbranding=1",
      },
      {
        id: "christmas",
        type: "youtube",
        embedUrl: "https://www.youtube.com/embed/r-Bm7tVuy9k?rel=0&modestbranding=1",
      }
    ]
  },
  {
    id: "dm-creative",
    type: "feature-portrait",
    format: "portrait",
    title: "Creative Content Engine",
    badge: "DM Training",
    description: "Our Digital Marketing team doesn't just learn marketing; they create cinematic experiences. Watch how we blend movie-based content with strategic DM training.",
    embedUrl: "https://www.youtube.com/embed/CNSNljruqO4?rel=0&modestbranding=1",
  },
  {
    id: "ai-christmas",
    type: "feature-portrait",
    format: "portrait",
    title: "Creativity Meets AI",
    badge: "Tech Innovation",
    description: "Pushing boundaries with Prompt Engineering. Using Google Flow, we transformed a festive vision into an AI-powered cinematic reality.",
    embedUrl: "https://www.youtube.com/embed/Wz5gJiiqg-M?rel=0&modestbranding=1",
  },
  {
    id: "success-journey",
    type: "feature-portrait",
    format: "portrait",
    title: "The Final Win: Career Success",
    badge: "Career Milestone",
    description: "The ultimate destination of the Novox roadmap. Watch our students transform into professional UI/UX designers and secure high-paying placements.",
    embedUrl: "https://www.youtube.com/embed/3enJ5l3rcTo?rel=0&modestbranding=1",
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
              className={`${styles.sectionRow} ${section.type === 'pair' ? styles.pairRow : (section.format === 'portrait' ? styles.portraitSoloRow : styles.featureRow)} ${index % 2 !== 0 ? styles.reverseRow : ""}`}
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
