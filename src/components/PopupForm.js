"use client";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Send, User, Mail, Phone, MessageSquare, BookOpen, Clock } from "lucide-react";
import emailjs from "@emailjs/browser";
import styles from "./PopupForm.module.css";

export default function PopupForm() {
  const [isOpen, setIsOpen] = useState(false);
  const [status, setStatus] = useState("idle"); // idle, sending, success, error
  const form = useRef();

  useEffect(() => {
    // Show form after loader finishes if not already shown this session
    const hasSeenForm = sessionStorage.getItem("hasSeenForm");
    if (!hasSeenForm) {
      const timer = setTimeout(() => {
        setIsOpen(true);
        sessionStorage.setItem("hasSeenForm", "true");
      }, 3500); // Wait for BrainLoader (3s) + 0.5s buffer
      return () => clearTimeout(timer);
    }
  }, []);

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
        setTimeout(() => {
          setIsOpen(false);
          setStatus("idle");
        }, 3000);
      }, (error) => {
        console.log(error.text);
        setStatus("error");
      });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className={styles.overlay}>
          <motion.div 
            className={styles.modal}
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            <button className={styles.closeBtn} onClick={() => setIsOpen(false)}>
              <X size={24} />
            </button>

            {status !== "success" ? (
              <div className={styles.content}>
                <div className={styles.header}>
                  <h2 className={styles.title}>Secure Your <span className="text-gradient">Tech Future</span></h2>
                  <p className={styles.subtitle}>Register now for a personalized career roadmap and expert mentorship.</p>
                </div>

                <form ref={form} className={styles.form} onSubmit={handleSubmit}>
                  <div className={styles.inputGroup}>
                    <User className={styles.icon} size={18} />
                    <input type="text" name="user_name" placeholder="Full Name" required className={styles.input} />
                  </div>

                  <div className={styles.inputGroup}>
                    <Mail className={styles.icon} size={18} />
                    <input type="email" name="user_email" placeholder="Email Address" required className={styles.input} />
                  </div>

                  <div className={styles.inputGroup}>
                    <Phone className={styles.icon} size={18} />
                    <input type="tel" name="user_phone" placeholder="Phone Number" required className={styles.input} />
                  </div>

                   <div className={styles.inputGroup}>
                    <BookOpen className={styles.icon} size={18} />
                    <select name="course" className={styles.select} required defaultValue="">
                      <option value="" disabled>Select Course</option>
                      <option value="flutter">Flutter Full Stack</option>
                      <option value="mern">MERN Stack Development</option>
                      <option value="python">Python & Django</option>
                      <option value="uiux">UI/UX Design</option>
                      <option value="digital-marketing">Digital Marketing</option>
                      <option value="general">General Question</option>
                    </select>
                  </div>

                  <div className={styles.inputGroup}>
                    <MessageSquare className={styles.icon} size={18} style={{ top: '15px' }} />
                    <textarea name="message" placeholder="Your Message" className={styles.textarea} required></textarea>
                  </div>

                  <button type="submit" className={styles.submitBtn} disabled={status === "sending"}>
                    <span>{status === "sending" ? "Processing..." : "Join Novox Batch"}</span>
                    <Send size={18} />
                  </button>

                  {status === "error" && (
                     <p style={{ color: '#ef4444', fontSize: '13px', marginTop: '10px', textAlign: 'center' }}>
                         Something went wrong. Please try again or call us.
                     </p>
                  )}
                </form>
              </div>
            ) : (
              <div className={styles.success}>
                <motion.div 
                  initial={{ scale: 0 }} 
                  animate={{ scale: 1 }} 
                  className={styles.successIcon}
                >
                  <Send size={48} color="var(--primary)" />
                </motion.div>
                <h3>Request Sent Successfully!</h3>
                <p>Our mentors will contact you shortly to schedule your free session.</p>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
