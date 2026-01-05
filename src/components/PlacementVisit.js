"use client";
import { motion } from "framer-motion";
import { Play, Users, MapPin, Building2 } from "lucide-react";
import { useState, useRef } from "react";
import styles from "./PlacementVisit.module.css";

export default function PlacementVisit() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef(null);

  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <section className={styles.section}>
      <div className={styles.bgGlow} />
      <div className={styles.container}>
        <div className={styles.grid}>
          <motion.div 
            className={styles.content}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className={styles.badge}>
              <Users size={16} />
              <span>Leadership Visit</span>
            </div>
            <h2 className={styles.title}>
              CMO & Director Visit <span className="text-gradient">Cyberpark Calicut</span>
            </h2>
            <p className={styles.description}>
              Our CMO and Director recently visited Cyberpark, Calicut, to interact with our latest batch of MERN Stack placement students. We are proud to witness our students transitioning into professional environments at Kerala's premier tech hubs.
            </p>
            
            <div className={styles.features}>
              <div className={styles.featureItem}>
                <Building2 size={20} className={styles.icon} />
                <div>
                  <h4>Industry Immersion</h4>
                  <p>Students training in real corporate environments.</p>
                </div>
              </div>
              <div className={styles.featureItem}>
                <MapPin size={20} className={styles.icon} />
                <div>
                  <h4>Cyberpark, Calicut</h4>
                  <p>Connecting students with top-tier tech opportunities.</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div 
            className={styles.videoContainer}
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className={styles.videoWrapper} onClick={handlePlay}>
              <video 
                ref={videoRef}
                className={styles.video}
                controls={isPlaying}
                poster="/hero-students.jpg"
                playsInline
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
              >
                <source src="/NovoxEdtechvid.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              {!isPlaying && (
                <div className={styles.videoOverlay}>
                  <div className={styles.playButton}>
                    <Play fill="white" size={32} />
                  </div>
                  <div className={styles.overlayText}>
                    <span>Watch the Highlight</span>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
