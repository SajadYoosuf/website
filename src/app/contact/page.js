"use client";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";
import Navbar from "@/components/Navbar";
import styles from "./page.module.css";

export default function ContactPage() {
  return (
    <div className={styles.pageWrapper}>
      <Navbar />
      <main className={styles.main}>
        <div className={styles.container}>
          <div className={styles.heading}>
              <h1 className={styles.title}>Get in Touch</h1>
              <p className={styles.subtitle}>We'd love to hear from you. Here's how you can reach us.</p>
          </div>

          <div className={styles.contentGrid}>
              {/* Left Side: Details + Map */}
              <motion.div 
                  className={styles.leftColumn}
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5 }}
              >
                  <div className={styles.infoBox}>
                      <div className={styles.contactMethod}>
                          <div className={styles.iconCircle}>
                              <MapPin size={24} />
                          </div>
                          <div className={styles.details}>
                              <h4>Visit Us</h4>
                              <p>4th Floor, Emarald Mall Next to Big Bazar, Mavoor Road, Calicut</p>
                          </div>
                      </div>

                      <div className={styles.contactMethod}>
                          <div className={styles.iconCircle}>
                              <Phone size={24} />
                          </div>
                          <div className={styles.details}>
                              <h4>Call Us</h4>
                              <p>+91 9074343614</p>
                          </div>
                      </div>

                      <div className={styles.contactMethod}>
                          <div className={styles.iconCircle}>
                              <Mail size={24} />
                          </div>
                          <div className={styles.details}>
                              <h4>Email Us</h4>
                              <p>novoxedtechllp@gmail.com</p>
                          </div>
                      </div>
                  </div>

                  <div className={styles.mapWrapper}>
                       <iframe 
                          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15652.129124194098!2d75.7924619!3d11.2587008!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba6599cc5870077%3A0xe54e5888e2258957!2sNovox%20Edtech!5e0!3m2!1sen!2sin!4v1736014493393!5m2!1sen!2sin" 
                          width="100%" 
                          height="100%" 
                          style={{border:0}} 
                          allowFullScreen="" 
                          loading="lazy" 
                          referrerPolicy="no-referrer-when-downgrade"
                          className={styles.mapFrame}
                      ></iframe>
                  </div>
              </motion.div>

              {/* Right Side: Form */}
              <motion.div 
                  className={styles.formBox}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
              >
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
                          <label className={styles.label}>Email Address</label>
                          <input type="email" className={styles.input} placeholder="john@example.com" />
                      </div>
                      <div className={styles.inputGroup}>
                          <label className={styles.label}>Message</label>
                          <textarea className={styles.textarea} placeholder="How can we help you?"></textarea>
                      </div>
                      
                      <button className={styles.submitBtn}>Send Message</button>
                  </form>
              </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
}
