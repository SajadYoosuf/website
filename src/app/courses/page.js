import Navbar from "@/components/Navbar";
import Courses from "@/components/Courses";
import Contact from "@/components/Contact";

export const metadata = {
  title: "Professional Courses in Flutter, MERN & AI | Novox Edtech",
  description: "Explore our comprehensive software development courses in Calicut. Master Flutter, MERN stack, Python, UI/UX, and Digital Marketing with AI-enhanced mentorship.",
  keywords: ["Software courses Calicut", "Learn Flutter", "Full Stack development training", "Python academy", "Digital Marketing certifications"],
};

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
