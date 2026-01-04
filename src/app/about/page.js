import About from "@/components/About";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import styles from "./page.module.css";

export const metadata = {
  title: "About Novox Edtech | Our Vision & 5-Pillar Framework",
  description: "Discover how Novox Edtech is revolutionizing software training in Calicut. Learn about our AI-driven approach, our leadership team, and the 5-Pillar Growth Framework.",
  keywords: ["About Novox", "Software training vision", "Kerala Edtech leadership", "AI education mission"],
};

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
