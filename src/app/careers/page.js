"use client";
import Navbar from "@/components/Navbar";

export default function CareersPage() {
  return (
    <main style={{ minHeight: '100vh', paddingTop: '100px', background: 'var(--background)', textAlign: 'center' }}>
      <Navbar />
      <div style={{ maxWidth: '800px', margin: '100px auto', padding: '0 20px' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '20px' }}>Join the Novox Team</h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--muted-foreground)' }}>
            We're always looking for talented educators and tech enthusiasts. 
            Our careers page is currently under construction, but you can always reach out to us at <strong>novoxedtechllp@gmail.com</strong>.
        </p>
      </div>
    </main>
  );
}
