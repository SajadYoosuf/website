"use client";
import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail } from "lucide-react";
import emailjs from "@emailjs/browser";
import styles from "./Contact.module.css";

export default function Contact() {
  const form = useRef();
  const [status, setStatus] = useState("idle"); // idle, sending, success, error

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("sending");

    // Replace these with your actual Service ID and Template ID from EmailJS
    const SERVICE_ID = "service_vsz6px7"; // I'll use common naming convention or user might provide later
    const TEMPLATE_ID = "template_7i7g05f"; // I'll use common naming convention or user might provide later
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
               <p style={{ color: 'var(--text-muted)' }}>novoxedtechllp@gmail.com</p>
             </div>
          </div>
        </div>

        {/* Right Side Form */}
        <div className={styles.formBox}>
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
              <label className={styles.label}>Message</label>
              <textarea name="message" className={styles.textarea} placeholder="How can we help you?" style={{ padding: '1rem', borderRadius: '12px', border: '1px solid var(--border)', background: 'var(--background)', color: 'var(--foreground)', minHeight: '100px' }} required></textarea>
            </div>
            
            <button 
              type="submit" 
              className={styles.submitBtn}
              disabled={status === "sending"}
            >
              {status === "sending" ? "Sending..." : "Book Free Counseling"}
            </button>

            {status === "success" && (
                <p style={{ color: '#10b981', marginTop: '1rem', fontWeight: '500' }}>
                    Thank you! Your request has been sent successfully.
                </p>
            )}
            {status === "error" && (
                <p style={{ color: '#ef4444', marginTop: '1rem', fontWeight: '500' }}>
                    Oops! Something went wrong. Please try again later.
                </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}
