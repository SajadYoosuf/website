"use client";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Instagram } from "lucide-react";
import styles from "./Contact.module.css";
import Image from "next/image";

export default function Contact() {
  return (
    <section className={styles.section} id="contact">
      <div className={styles.container}>
        {/* Left Side Info */}
        <div className={styles.infoBox}>
          <h2 className={styles.title}>Start Your Career with Novox</h2>
          <p style={{ color: 'var(--text-muted)', fontSize: '18px', lineHeight: '1.6' }}>
            Book a free counseling session with our experts and get a personalized career roadmap.
          </p>
          
          <div className={styles.contactMethod}>
            <div className={styles.iconCircle}>
               <MapPin size={24} />
            </div>
            <div>
              <h4 style={{ fontWeight: 'bold' }}>Visit Us</h4>
              <p style={{ color: 'var(--text-muted)' }}>4th Floor, Emarald Mall Next to Big Bazar, Mavoor Road</p>
            </div>
          </div>

          <div className={styles.contactMethod}>
            <div className={styles.iconCircle}>
               <Phone size={24} />
            </div>
            <div>
              <h4 style={{ fontWeight: 'bold' }}>Call Us</h4>
              <p style={{ color: 'var(--text-muted)' }}>+91 9074343614</p>
            </div>
          </div>

          <div className={styles.contactMethod}>
             <div className={styles.iconCircle}>
               <Mail size={24} />
             </div>
             <div>
               <h4 style={{ fontWeight: 'bold' }}>Email Us</h4>
               <p style={{ color: 'var(--text-muted)' }}>novoxedtechllp@gmail.com
</p>
             </div>
          </div>
        </div>

        {/* Right Side Form */}
        <div className={styles.formBox}>
          <form className={styles.formGrid}>
            <div className={styles.inputGroup}>
              <label className={styles.label}>Full Name</label>
              <input type="text" className={styles.input} placeholder="John Doe" />
            </div>
            <div className={styles.inputGroup}>
              <label className={styles.label}>Phone Number</label>
              <input type="tel" className={styles.input} placeholder="+91 90000 00000" />
            </div>
            <div className={styles.inputGroup}>
              <label className={styles.label}>Message</label>
              <textarea className={styles.textarea} placeholder="How can we help you?" style={{ padding: '1rem', borderRadius: '12px', border: '1px solid var(--border)', background: 'var(--background)', color: 'var(--foreground)', minHeight: '100px' }}></textarea>
            </div>
            
            <button className={styles.submitBtn}>Book Free Counseling</button>
          </form>
        </div>
      </div>
    </section>
  );
}
