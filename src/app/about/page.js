"use client";
import About from "@/components/About";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import styles from "./page.module.css";

export default function AboutPage() {
  return (
    <main className={styles.container}>
      <Navbar />
      <div style={{ paddingTop: '80px' }}>
          <About />
      </div>
      <Contact />
    </main>
  );
}
