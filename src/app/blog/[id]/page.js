import Link from "next/link";
import { ArrowLeft, Calendar, User, Clock } from "lucide-react";
import Navbar from "@/components/Navbar";
import Contact from "@/components/Contact";
import { blogPosts } from "@/data/blog";
import styles from "./page.module.css";
import { notFound } from "next/navigation";

export default async function BlogPost({ params }) {
  const { id } = await params;
  const post = blogPosts.find(p => p.id === id);

  if (!post) {
    notFound();
  }

  return (
    <main className={styles.articleContainer}>
      <Navbar />
      
      <div className={styles.articleWrapper}>
        <Link href="/blog" className={styles.backLink}>
          <ArrowLeft size={20} /> Back to Blog
        </Link>
        
        <header className={styles.articleHeader}>
            <span className={styles.category}>{post.category}</span>
            <h1 className={styles.title}>{post.title}</h1>
            
            <div className={styles.meta}>
                <div className={styles.metaItem}>
                    <User size={18} /> {post.author}
                </div>
                <div className={styles.metaItem}>
                    <Calendar size={18} /> {post.date}
                </div>
                <div className={styles.metaItem}>
                    <Clock size={18} /> 5 min read
                </div>
            </div>
        </header>

        <img src={post.image} alt={post.title} className={styles.featuredImage} />
        
        <article 
            className={styles.content}
            dangerouslySetInnerHTML={{ __html: post.content }}
        />

      </div>
      
      <Contact />
    </main>
  );
}
