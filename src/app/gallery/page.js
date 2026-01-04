"use client";
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import { galleryImages, galleryCategories } from "@/data/gallery";
import styles from "./page.module.css";

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages = activeCategory === "All" 
    ? galleryImages 
    : galleryImages.filter(img => img.category === activeCategory);

  return (
    <main className={styles.galleryContainer}>
      <Navbar />
      
      <div className={styles.contentWrapper}>
        <div className={styles.header}>
            <h1 className={styles.pageTitle}>Campus Gallery</h1>
            <p className={styles.pageSubtitle}>A glimpse into the life at Novox Edtech. Learning, celebrating, and growing together.</p>
        </div>

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

        {/* Masonry Grid */}
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
                    {/* For now we won't link to detail page unless explicitly requested, 
                        but standard behavior for gallery is often lightbox. 
                        Given user asked for "detail page like gallery", I'll make it standard list first.
                        If they specifically want a URL for each image, we can add it. 
                        Let's wrap in Link just in case. */}
                    {/* <Link href={`/gallery/${img.id}`}> */}
                        <div className={styles.card}>
                            <div className={styles.imageWrapper}>
                                <img src={img.image} alt={img.title} className={styles.image} />
                            </div>
                            <div className={styles.overlay}>
                                <h3 className={styles.imageTitle}>{img.title}</h3>
                                <p className={styles.imageDesc}>{img.description}</p>
                            </div>
                        </div>
                    {/* </Link> */}
                </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
      </div>
      <Contact />
    </main>
  );
}
