"use client";
import Link from "next/link";
import Image from "next/image";
import { Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.footerContent}>
          <div className={styles.footerCol}>
            <Link href="/" className={styles.logoLink}>
              <Image src="/novox-logo.png" alt="Novox" width={140} height={40} className={styles.logo} />
            </Link>
            <p className={styles.description}>
              Transforming students into industry-ready professionals with AI-powered learning.
            </p>
            <div className={styles.socialLinks}>
              <a href="#" className={styles.socialIcon}><Facebook size={20} /></a>
              <a href="#" className={styles.socialIcon}><Twitter size={20} /></a>
              <a href="#" className={styles.socialIcon}><Linkedin size={20} /></a>
              <a href="#" className={styles.socialIcon}><Instagram size={20} /></a>
            </div>
          </div>

          <div className={styles.footerCol}>
            <h4>Company</h4>
            <ul className={styles.footerLinks}>
              <li><Link href="/about">About Us</Link></li>
              <li><Link href="/careers">Careers</Link></li>
              <li><Link href="/mentors">Mentors</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className={styles.footerCol}>
            <h4>Courses</h4>
            <ul className={styles.footerLinks}>
              <li><Link href="/courses/flutter-full-stack">Flutter</Link></li>
              <li><Link href="/courses/mern-stack">MERN Stack</Link></li>
              <li><Link href="/courses/digital-marketing">Digital Marketing</Link></li>
              <li><Link href="/courses/ui-ux-design">UI/UX Design</Link></li>
            </ul>
          </div>
          
          <div className={styles.footerCol}>
            <h4>Legal</h4>
            <ul className={styles.footerLinks}>
              <li><Link href="/privacy">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>

        <div className={styles.copyright}>
          © {new Date().getFullYear()} Novox Edtech LLP. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
