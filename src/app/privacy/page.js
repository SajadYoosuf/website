"use client";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import styles from "./page.module.css";

export default function PrivacyPolicy() {
  return (
    <div className={styles.pageWrapper}>
      <Navbar />
      <main className={styles.main}>
        <motion.div 
            className={styles.container}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
        >
          <div className={styles.header}>
            <h1 className={styles.title}>Privacy Policy</h1>
            <p className={styles.effectiveDate}>Effective Date: November 1, 2025</p>
          </div>

          <div className={styles.content}>
            <p>
              Novox Edtech ("we," "our," "us") is committed to protecting the privacy and personal information of our users. This Privacy Policy explains how we collect, use, share, and protect your information when you visit our website or use our services. By accessing or using our website or services, you agree to the terms of this Privacy Policy.
            </p>

            <section className={styles.section}>
              <h2>1. Information We Collect</h2>
              <p>We collect information to provide better services to our users. This includes:</p>
              
              <div className={styles.subSection}>
                <h3>a. Personal Information:</h3>
                <ul>
                  <li>Name</li>
                  <li>Email address</li>
                  <li>Phone number</li>
                  <li>Billing information</li>
                  <li>Any other details you provide when signing up, registering for courses, or contacting us.</li>
                </ul>
              </div>

              <div className={styles.subSection}>
                <h3>b. Non-Personal Information:</h3>
                <ul>
                  <li>IP address</li>
                  <li>Browser type and version</li>
                  <li>Operating system</li>
                  <li>Usage data, including pages visited and time spent on the site</li>
                </ul>
              </div>

              <div className={styles.subSection}>
                <h3>c. Cookies and Tracking Technologies:</h3>
                <p>We use cookies and similar tracking technologies to enhance user experience, analyze traffic, and improve our services.</p>
              </div>
            </section>

            <section className={styles.section}>
              <h2>2. How We Use Your Information</h2>
              <p>We use the information collected for the following purposes:</p>
              <ul>
                <li>To provide and manage our services, including course enrollment and delivery.</li>
                <li>To process payments and billing.</li>
                <li>To communicate with you, including sending updates, promotions, and announcements.</li>
                <li>To improve our website, services, and user experience.</li>
                <li>To comply with legal obligations and enforce our terms of use.</li>
              </ul>
            </section>

            <section className={styles.section}>
              <h2>3. How We Share Your Information</h2>
              <p>We do not sell or rent your personal information to third parties. However, we may share your information in the following cases:</p>
              <ul>
                <li><strong>With Service Providers:</strong> To assist in providing our services, such as payment processing, hosting, and analytics.</li>
                <li><strong>For Legal Compliance:</strong> When required by law, regulation, or legal process, or to protect our rights, property, or safety.</li>
                <li><strong>Business Transfers:</strong> In the event of a merger, acquisition, or sale of assets, your information may be transferred to the new entity.</li>
              </ul>
            </section>

            <section className={styles.section}>
              <h2>4. Data Security</h2>
              <p>We implement appropriate technical and organizational measures to protect your information against unauthorized access, alteration, disclosure, or destruction. While we strive to use commercially acceptable means to protect your personal information, we cannot guarantee absolute security.</p>
            </section>

            <section className={styles.section}>
              <h2>5. Your Rights</h2>
              <p>You have the following rights regarding your personal information:</p>
              <ul>
                <li>Access, update, or delete your personal data.</li>
                <li>Opt-out of receiving promotional emails.</li>
                <li>Restrict or object to the processing of your data.</li>
                <li>Withdraw consent where processing is based on consent.</li>
              </ul>
              <p>To exercise your rights, contact us at novoxedtechllp@gmail.com.</p>
            </section>

            <section className={styles.section}>
              <h2>6. Third-Party Links</h2>
              <p>Our website may contain links to third-party websites or services. We are not responsible for the privacy practices or content of these third-party sites. We encourage you to review their privacy policies before providing any personal information.</p>
            </section>

            <section className={styles.section}>
              <h2>7. Children’s Privacy</h2>
              <p>Our services are not intended for individuals under the age of 13. We do not knowingly collect personal information from children under 13. If we become aware that we have collected such information, we will take steps to delete it.</p>
            </section>

            <section className={styles.section}>
              <h2>8. Changes to This Privacy Policy</h2>
              <p>We may update this Privacy Policy from time to time to reflect changes in our practices, technology, legal requirements, or other factors. We encourage you to review this page periodically for the latest information.</p>
            </section>

            <section className={styles.section}>
              <h2>9. Contact Us</h2>
              <p>If you have any questions or concerns about this Privacy Policy or how we handle your information, please contact us at:</p>
              <div className={styles.contactDetails}>
                <p><strong>Novox Edtech</strong></p>
                <p>4th Floor, Emarald Mall Next to Big Bazar, Mavoor Road</p>
                <p>Phone: +91 90743 43614 | +91 79947 63075</p>
                <p>Email: novoxedtechllp@gmail.com</p>
              </div>
            </section>

            <div className={styles.consent}>
              <p>By using our website or services, you consent to this Privacy Policy. If you do not agree with this policy, please discontinue the use of our website and services.</p>
            </div>
          </div>
        </motion.div>
      </main>
    </div>
  );
}
