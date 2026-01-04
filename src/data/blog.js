
export const blogPosts = [
  {
    id: "flutter-vs-react-native-2026",
    title: "Flutter vs React Native in 2026: What to Choose?",
    category: "Flutter",
    author: "Alex Johnson",
    date: "Jan 12, 2026",
    image: "/api/placeholder/400/250",
    excerpt: "A comprehensive comparison of the two leading cross-platform frameworks and why Flutter might be the edge you need.",
    content: `
      <p>The debate between Flutter and React Native has been ongoing for years. As we step into 2026, the landscape has evolved significantly.</p>
      <h3>Performance</h3>
      <p>Flutter's Impeller engine has revolutionized graphic rendering, making jank a thing of the past. React Native's New Architecture is robust, but Flutter still holds a slight edge in raw rendering speed.</p>
      <h3>Developer Experience</h3>
      <p>Dart has become incredibly versatile. With macros and static metaprogramming, the boilerplate is minimal. React Native benefits from the vast JS ecosystem.</p>
      <h3>Conclusion</h3>
      <p>If you need pixel-perfect custom UI, Flutter is the winner. For deep native OS integration with existing native apps, React Native might be better.</p>
    `
  },
  {
    id: "mern-stack-scalability",
    title: "Scaling MERN Stack Applications for Millions of Users",
    category: "MERN",
    author: "Priya Sharma",
    date: "Jan 10, 2026",
    image: "/api/placeholder/400/250",
    excerpt: "Learn how to architect your Node.js and MongoDB backend to handle high concurrency and massive data loads.",
    content: `
      <p>Building a prototype with MERN is easy. Scaling it is an art. Here are the key strategies.</p>
      <h3>Database Indexing</h3>
      <p>MongoDB performance lives and dies by indexing. We discuss compound indexes and when to use sharding.</p>
      <h3>Caching with Redis</h3>
      <p>Stop hitting the database for everything. Implement a caching layer for user sessions and frequent reads.</p>
      <h3>Microservices?</h3>
      <p>Don't start with microservices. Monolithic architecture can take you very far if structured correctly.</p>
    `
  },
  {
    id: "python-ai-integration",
    title: "Integrating AI into your Python Web Apps",
    category: "Python",
    author: "David Kim",
    date: "Jan 05, 2026",
    image: "/api/placeholder/400/250",
    excerpt: "A tutorial on using LangChain and FastAPI to build smart, context-aware applications.",
    content: `
      <p>Python is the language of AI. Combining it with FastAPI gives you a powerhouse for building intelligent web services.</p>
      <h3>Setting up the Environment</h3>
      <p>We'll use Poetry for dependency management. key packages: <code>fastapi</code>, <code>langchain</code>, <code>openai</code>.</p>
      <h3>Building the RAG Pipeline</h3>
      <p>Retrieval-Augmented Generation is key for custom data. We'll show you how to vectorise your documents and query them.</p>
    `
  },
  {
    id: "ui-ux-trends-2026",
    title: "Top UI/UX Trends Defining 2026",
    category: "UI/UX",
    author: "Emily White",
    date: "Dec 28, 2025",
    image: "/api/placeholder/400/250",
    excerpt: "From spatial design to hyper-personalization, explore the design trends that are reshaping user interfaces.",
    content: `
      <p>Design never stands still. This year, we are seeing a shift back to texture and depth, moving away from flat design.</p>
      <h3>Spatial UI</h3>
      <p>With the rise of AR glasses, interfaces are becoming spatial. It's not just about 2D screens anymore.</p>
      <h3>Bento Grids</h3>
      <p>The structured, grid-based layout popularized by Apple is everywhere. It organizes complex information beautifully.</p>
    `
  },
  {
    id: "digital-marketing-seo-ai",
    title: "SEO in the Age of AI Search",
    category: "Digital Marketing",
    author: "Sarah Jenkins",
    date: "Dec 20, 2025",
    image: "/api/placeholder/400/250",
    excerpt: "How to optimize your content when Google's SGE (Search Generative Experience) is answering questions directly.",
    content: `
      <p>Keywords are losing relevance. Intent and authority are king.</p>
      <h3>E-E-A-T</h3>
      <p>Experience, Expertise, Authoritativeness, and Trustworthiness. AI can generate content, but it can't fake real human experience.</p>
      <h3>Zero-Click Searches</h3>
      <p>Optimize for being the source of the answer. Structure your data so AI models cite you.</p>
    `
  },
  {
    id: "flutter-riverpod-guide",
    title: "Mastering State Management with Riverpod",
    category: "Flutter",
    author: "Alex Johnson",
    date: "Dec 15, 2025",
    image: "/api/placeholder/400/250",
    excerpt: "Move beyond Provider. Learn how Riverpod 2.0 simplifies async operations and dependency injection.",
    content: `
      <p>Riverpod is a complete rewrite of the Provider pattern. It catches errors at compile time.</p>
      <h3>The AsyncValue Type</h3>
      <p>Handling loading and error states has never been this elegant. No need for complex if-else blocks.</p>
    `
  },
  {
    id: "react-server-components",
    title: "React Server Components: The Good, The Bad, The Ugly",
    category: "MERN",
    author: "Chris Lee",
    date: "Dec 10, 2025",
    image: "/api/placeholder/400/250",
    excerpt: "A deep dive into Next.js App Router and how RSCs change the way we think about frontend data fetching.",
    content: `
      <p>Server Components allow you to render components on the server, reducing the bundle size sent to the client.</p>
      <h3>When to use Client Components?</h3>
      <p>Use them only for interactivity: onClick, useState, useEffect. Everything else should be Server.</p>
    `
  }
];

export const categories = ["All", "Flutter", "MERN", "Python", "UI/UX", "Digital Marketing"];
