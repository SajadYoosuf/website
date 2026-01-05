"use client";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";
import emailjs from "@emailjs/browser";
import Navbar from "@/components/Navbar";
import styles from "./page.module.css";

export default function ContactPageContent() {
  const form = useRef();
  const [status, setStatus] = useState("idle"); // idle, sending, success, error

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    const SERVICE_ID = "service_vsz6px7"; 
    const TEMPLATE_ID = "template_7i7g05f"; 
    const PUBLIC_KEY = "XfMN7i9bFsC8KvEhr";

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then((result) => {
          console.log(result.text);
          setStatus("success");
          form.current.reset();
      }, (error) => {
          console.log(error.text);
          setStatus("error");
      });
  };

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
                  <form ref={form} onSubmit={handleSubmit} className={styles.formGrid}>
                      <div className={styles.inputGroup}>
                          <label className={styles.label}>Full Name</label>
                          <input type="text" name="user_name" className={styles.input} placeholder="John Doe" required />
                      </div>
                      <div className={styles.inputGroup}>
                          <label className={styles.label}>Phone Number</label>
                          <input type="tel" name="user_phone" className={styles.input} placeholder="+91 90000 00000" required />
                      </div>
                      <div className={styles.inputGroup}>
                          <label className={styles.label}>Email Address</label>
                          <input type="email" name="user_email" className={styles.input} placeholder="john@example.com" required />
                      </div>
                      <div className={styles.inputGroup}>
                          <label className={styles.label}>Message</label>
                          <textarea name="message" className={styles.textarea} placeholder="How can we help you?" required></textarea>
                      </div>
                      
                      <button 
                        type="submit" 
                        className={styles.submitBtn}
                        disabled={status === "sending"}
                      >
                        {status === "sending" ? "Sending..." : "Send Message"}
                      </button>

                      {status === "success" && (
                          <p style={{ color: '#10b981', marginTop: '1rem', fontWeight: '500', textAlign: 'center' }}>
                              Thank you! Your message has been sent successfully.
                          </p>
                      )}
                      {status === "error" && (
                          <p style={{ color: '#ef4444', marginTop: '1rem', fontWeight: '500', textAlign: 'center' }}>
                              Oops! Something went wrong. Please try again later.
                          </p>
                      )}
                  </form>
              </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
}
