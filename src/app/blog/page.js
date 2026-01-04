"use client";
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Calendar, User } from "lucide-react";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import { blogPosts, categories } from "@/data/blog";
import styles from "./page.module.css";

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts = activeCategory === "All" 
    ? blogPosts 
    : blogPosts.filter(post => post.category === activeCategory);

  return (
    <main className={styles.mainContainer}>
      <Navbar />
      
      <div className={styles.contentWrapper}>
        <div className={styles.header}>
            <h1 className={styles.pageTitle}>Latest Insights</h1>
            <p className={styles.pageSubtitle}>Tutorials, industry trends, and career advice from our expert mentors.</p>
        </div>

        {/* Filter Tabs */}
        <div className={styles.filterBar}>
            {categories.map(cat => (
                <button 
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`${styles.filterBtn} ${activeCategory === cat ? styles.activeFilter : ''}`}
                >
                    {cat}
                </button>
            ))}
        </div>

        <motion.div layout className={styles.grid}>
          <AnimatePresence>
            {filteredPosts.map((post) => (
                <motion.div
                    key={post.id}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.2 }}
                >
                    <Link href={`/blog/${post.id}`} style={{textDecoration: 'none'}}>
                        <div className={styles.card}>
                            <div className={styles.imageWrapper}>
                                <img src={post.image} alt={post.title} className={styles.blogImage} />
                                <span className={styles.categoryTag}>{post.category}</span>
                            </div>
                            <div className={styles.cardContent}>
                                <div className={styles.meta}>
                                    <span>{post.date}</span>
                                    <span>{post.author}</span>
                                </div>
                                <h3 className={styles.cardTitle}>{post.title}</h3>
                                <p className={styles.excerpt}>{post.excerpt}</p>
                                <span className={styles.readMoreBtn}>
                                    Read Article <ArrowRight size={16} />
                                </span>
                            </div>
                        </div>
                    </Link>
                </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
        
        {filteredPosts.length === 0 && (
            <div style={{ textAlign: 'center', padding: '4rem', color: 'var(--muted-foreground)' }}>
                No articles found for this category.
            </div>
        )}

      </div>
      <Contact />
    </main>
  );
}
