"use client";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./BrainLoader.module.css";

const phrases = [
  <>AI might replace jobs — but not <span className={styles.highlight}>human creativity</span>.</>,
  <>Critical thinking. Logical reasoning. <span className={styles.highlight}>Meta skills</span>.</>,
  <>AI supports. <span className={styles.highlight}>You lead</span>.</>
];

export default function BrainLoader() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % phrases.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.loaderContainer}>
      {/* SVG Brain */}
      <svg 
        className={styles.brainSvg} 
        viewBox="0 0 100 100" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Brain Outline */}
        <path 
          d="M50 20C35 20 20 30 20 50C20 70 35 90 50 90C65 90 80 70 80 50C80 30 65 20 50 20Z" 
          className={styles.brainPath}
          strokeOpacity="0.5"
        />
        <path 
          d="M50 20V90 M20 50H80" 
          className={styles.brainPath}
          strokeDasharray="4 4" 
        />
        <circle cx="35" cy="40" r="8" className={styles.brainPath} />
        <circle cx="65" cy="40" r="8" className={styles.brainPath} />
        <path d="M35 48Q50 65 65 48" className={styles.brainPath} />

        {/* Neural Signals (Animated) */}
        <path 
          d="M50 20C40 30 30 40 35 48" 
          className={styles.neuronPath} 
          style={{ animationDelay: '0s' }}
        />
         <path 
          d="M50 20C60 30 70 40 65 48" 
          className={styles.neuronPath} 
          style={{ animationDelay: '1s' }}
        />
        <path 
          d="M20 50C30 50 40 50 50 50" 
          className={styles.neuronPath} 
          style={{ animationDelay: '0.5s' }}
        />
         <path 
          d="M80 50C70 50 60 50 50 50" 
          className={styles.neuronPath} 
          style={{ animationDelay: '1.5s' }}
        />
      </svg>

      {/* Rotating Text */}
      <div className={styles.textWrapper}>
        <AnimatePresence mode="wait">
          <motion.p
            key={index}
            className={styles.loadingText}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.5 }}
          >
            {phrases[index]}
          </motion.p>
        </AnimatePresence>
      </div>

      {/* Loading Bar */}
      <div className={styles.progressContainer}>
        <div className={styles.progressBar}></div>
      </div>
    </div>
  );
}
