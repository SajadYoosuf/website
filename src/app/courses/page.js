"use client";
import Navbar from "@/components/Navbar";
import Courses from "@/components/Courses";
import Contact from "@/components/Contact";

export default function AllCourses() {
  return (
    <main style={{ minHeight: '100vh', background: 'var(--background)' }}>
      <Navbar />
      <div style={{ paddingTop: '100px' }}>
        <Courses showAll={true} />
      </div>
      <Contact />
    </main>
  );
}
