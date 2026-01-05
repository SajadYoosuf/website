"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import { galleryImages, galleryCategories } from "@/data/gallery";
import styles from "./page.module.css";

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [carouselIndex, setCarouselIndex] = useState(0);

  const anniversaryImages = galleryImages.filter(img => img.category === "Anniversary");
  
  const filteredImages = activeCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  // Auto-play for carousel
  useEffect(() => {
    const timer = setInterval(() => {
      setCarouselIndex((prev) => (prev + 1) % anniversaryImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [anniversaryImages.length]);

  return (
    <main className={styles.galleryContainer}>
      <Navbar />
      
      <div className={styles.contentWrapper}>
        <div className={styles.header}>
            <h1 className={styles.pageTitle}>Explore Life at Novox</h1>
            <p className={styles.pageSubtitle}>A journey of learning, innovation, and celebration. Witness our community grow.</p>
        </div>

        {/* Hero Carousel - Anniversary Special */}
        <section className={styles.heroCarousel}>
          <div className={styles.carouselWrapper}>
            <AnimatePresence mode="wait">
              <motion.div
                key={anniversaryImages[carouselIndex].id}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className={styles.carouselSlide}
              >
                <Image 
                  src={anniversaryImages[carouselIndex].image} 
                  alt={anniversaryImages[carouselIndex].title} 
                  fill
                  priority
                  quality={100}
                  className={styles.carouselImage} 
                  style={{ objectFit: 'cover' }}
                />
                <div className={styles.carouselOverlay}>
                  <div className={styles.carouselContent}>
                    <motion.span 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className={styles.carouselBadge}
                    >
                      1st Anniversary Special
                    </motion.span>
                    <motion.h2 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.1 }}
                      className={styles.carouselTitle}
                    >
                      {anniversaryImages[carouselIndex].title}
                    </motion.h2>
                    <motion.p 
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className={styles.carouselDescription}
                    >
                      {anniversaryImages[carouselIndex].description}
                    </motion.p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Carousel Controls */}
            <button 
              className={`${styles.carouselBtn} ${styles.prev}`}
              onClick={() => setCarouselIndex((prev) => (prev - 1 + anniversaryImages.length) % anniversaryImages.length)}
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              className={`${styles.carouselBtn} ${styles.next}`}
              onClick={() => setCarouselIndex((prev) => (prev + 1) % anniversaryImages.length)}
            >
              <ChevronRight size={24} />
            </button>

            {/* Carousel Indicators */}
            <div className={styles.indicators}>
              {anniversaryImages.map((_, idx) => (
                <button
                  key={idx}
                  className={`${styles.indicator} ${carouselIndex === idx ? styles.activeIndicator : ""}`}
                  onClick={() => setCarouselIndex(idx)}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Filter Tabs */}
        <div className={styles.filterBar}>
            {galleryCategories.map(cat => (
                <button 
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`${styles.filterBtn} ${activeCategory === cat ? styles.activeFilter : ''}`}
                >
                    {cat}
                </button>
            ))}
        </div>

        {/* Grid Area */}
        <motion.div layout className={styles.grid}>
          <AnimatePresence>
            {filteredImages.map((img) => (
                <motion.div
                    key={img.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                    className={styles.gridItem}
                >
                    <div className={styles.card}>
                        <div className={styles.imageWrapper}>
                            <img src={img.image} alt={img.title} className={styles.image} loading="lazy" />
                        </div>
                        <div className={styles.overlay}>
                            <h3 className={styles.imageTitle}>{img.title}</h3>
                            <p className={styles.imageDesc}>{img.description}</p>
                            <span className={styles.imageCategory}>{img.category}</span>
                        </div>
                    </div>
                </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
      </div>
      <Contact />
    </main>
  );
}
