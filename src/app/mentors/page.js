"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Mentors from "@/components/Mentors";
import Contact from "@/components/Contact";
import styles from "./page.module.css";

export default function AllMentors() {
  return (
    <main style={{ minHeight: '100vh', background: 'var(--background)' }}>
      <Navbar />
      <div style={{ paddingTop: '100px' }}>
        <Mentors showAll={true} />
      </div>
      <Contact />
    </main>
  );
}
