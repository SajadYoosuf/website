"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { Home, BookOpen, Users, Award, FileText, Image as ImageIcon, Info, Phone, Menu, X } from "lucide-react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 20);
  });

  const navLinks = [
    { name: "Home", href: "/", icon: Home },
    { name: "Courses", href: "/courses", icon: BookOpen },
    { name: "Mentors", href: "/mentors", icon: Users },
    { name: "Placements", href: "/placements", icon: Award },
    { name: "Blog", href: "/blog", icon: FileText },
    { name: "Gallery", href: "/gallery", icon: ImageIcon },
    { name: "About Us", href: "/about", icon: Info },
    { name: "Contact", href: "/contact", icon: Phone },
  ];

  return (
    <>
      <motion.nav
        className={`${styles.nav} ${isScrolled ? styles.scrolled : ""}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className={styles.container}>
          <Link href="/" className={styles.logo}>
            <Image 
              src="/novox-logo.png" 
              alt="Novox Edtech" 
              width={160} 
              height={40} 
              className={styles.logoImage}
            />
          </Link>

          {/* Desktop Menu - Icon First, Text on Hover */}
          <ul className={styles.menu}>
            {navLinks.map((item) => (
              <li key={item.name} className={styles.menuItem}>
                <Link href={item.href} className={styles.iconLink}>
                  <motion.div 
                    className={styles.iconWrapper}
                    whileHover="hover"
                    initial="initial"
                  >
                    <item.icon size={20} className={styles.navIcon} />
                    <motion.span 
                      className={styles.navText}
                      variants={{
                        initial: { opacity: 0, width: 0, marginLeft: 0 },
                        hover: { opacity: 1, width: "auto", marginLeft: 8 }
                      }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    >
                      {item.name}
                    </motion.span>
                  </motion.div>
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA */}
          <button className={styles.ctaButton}>
            Book Free Counseling
          </button>

          {/* Mobile Toggle */}
          <button 
            className={styles.mobileToggle}
            onClick={() => setIsMobileOpen(!isMobileOpen)}
          >
            {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            className={styles.mobileMenu}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {navLinks.map((item) => (
              <Link 
                key={item.name} 
                href={item.href} 
                className={styles.mobileLink}
                onClick={() => setIsMobileOpen(false)}
              >
                <item.icon size={20} />
                {item.name}
              </Link>
            ))}
            <div className={styles.mobileCta}>
              <button>Book Free Counseling</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
