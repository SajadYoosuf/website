export const blogPosts = [
  {
    id: "flutter-vs-react-native-2026",
    title: "Flutter vs React Native in 2026: What to Choose?",
    category: "Flutter",
    author: "Alex Johnson",
    date: "Jan 12, 2026",
    image: "/blog/flutter-vs-react-native.png",
    excerpt: "A comprehensive comparison of the two leading cross-platform frameworks and why Flutter might be the edge you need.",
    sections: [
      {
        heading: "Overview",
        content: "The debate between Flutter and React Native has been ongoing for years. As we step into 2026, the landscape has evolved significantly with major updates to both frameworks."
      },
      {
        heading: "Performance & Rendering",
        content: "Flutter's Impeller engine has revolutionized graphic rendering, making jank a thing of the past. React Native's New Architecture is robust, but Flutter still holds a slight edge in raw rendering speed for complex animations."
      },
      {
        heading: "Developer Experience",
        content: "Dart has become incredibly versatile. With macros and static metaprogramming, the boilerplate is minimal. React Native benefits from the vast JS ecosystem and familiar React patterns."
      },
      {
        heading: "Final Verdict",
        content: "If you need pixel-perfect custom UI, Flutter is the winner. For deep native OS integration with existing native apps, React Native might be the better choice."
      }
    ]
  },
  {
    id: "mern-stack-scalability",
    title: "Scaling MERN Stack Applications for Millions of Users",
    category: "MERN",
    author: "Priya Sharma",
    date: "Jan 10, 2026",
    image: "/blog/mern-scaling.png",
    excerpt: "Learn how to architect your Node.js and MongoDB backend to handle high concurrency and massive data loads.",
    sections: [
      {
        heading: "The Scalability Challenge",
        content: "Building a prototype with MERN is easy. Scaling it to handle millions of active users is an art that requires careful architectural planning."
      },
      {
        heading: "Database Strategy",
        content: "MongoDB performance lives and dies by indexing. We discuss compound indexes, query optimization, and when to start thinking about sharding."
      },
      {
        heading: "Caching Layer",
        content: "Stop hitting the database for everything. Implement a caching layer with Redis for user sessions, expensive calculations, and frequent reads."
      },
      {
        heading: "Architecture Choice",
        content: "Don't start with microservices immediately. A well-structured monolithic architecture can take you very far and is cheaper to maintain initially."
      }
    ]
  },
  {
    id: "python-ai-integration",
    title: "Integrating AI into your Python Web Apps",
    category: "Python",
    author: "David Kim",
    date: "Jan 05, 2026",
    image: "/blog/python-ai.png",
    excerpt: "A tutorial on using LangChain and FastAPI to build smart, context-aware applications.",
    sections: [
      {
        heading: "AI Meets Web Dev",
        content: "Python is the undisputed language of AI. Combining it with FastAPI gives you a powerhouse for building intelligent, high-performance web services."
      },
      {
        heading: "Dependency Management",
        content: "We'll use Poetry for clean dependency management. Key packages include fastapi, langchain, and openai for foundational AI capabilities."
      },
      {
        heading: "RAG Pipeline",
        content: "Retrieval-Augmented Generation is key for custom data applications. Learn how to vectorise your documents and query them efficiently."
      }
    ]
  },
  {
    id: "ui-ux-trends-2026",
    title: "Top UI/UX Trends Defining 2026",
    category: "UI/UX",
    author: "Emily White",
    date: "Dec 28, 2025",
    image: "/blog/ui-ux-trends.png",
    excerpt: "From spatial design to hyper-personalization, explore the design trends that are reshaping user interfaces.",
    sections: [
      {
        heading: "Modern Aesthetic",
        content: "Design never stands still. This year, we are seeing a shift back to texture and depth, moving away from the era of extreme flat design."
      },
      {
        heading: "Spatial Computing",
        content: "With the rise of AR glasses, interfaces are becoming spatial. Designers must now think in 3D space rather than just 2D rectangles."
      },
      {
        heading: "Bento Grids",
        content: "The structured, grid-based layout popularized by Apple is everywhere. It organizes complex information beautifully across all screen sizes."
      }
    ]
  },
  {
    id: "digital-marketing-seo-ai",
    title: "SEO in the Age of AI Search",
    category: "Digital Marketing",
    author: "Sarah Jenkins",
    date: "Dec 20, 2025",
    image: "/blog/seo-ai.png",
    excerpt: "How to optimize your content when Google's SGE (Search Generative Experience) is answering questions directly.",
    sections: [
      {
        heading: "The Shift in Search",
        content: "Keywords are losing relevance in favor of semantic meaning. In the AI age, intent and authority are the new kings of SEO."
      },
      {
        heading: "E-E-A-T Principles",
        content: "Experience, Expertise, Authoritativeness, and Trustworthiness. AI can generate content, but it cannot replicate real human experience yet."
      },
      {
        heading: "Answer Optimization",
        content: "Optimize for being the source of truth. Structure your data so AI models cite you as the primary source for their generated answers."
      }
    ]
  },
  {
    id: "flutter-riverpod-guide",
    title: "Mastering State Management with Riverpod",
    category: "Flutter",
    author: "Alex Johnson",
    date: "Dec 15, 2025",
    image: "/blog/riverpod.png",
    excerpt: "Move beyond Provider. Learn how Riverpod 2.0 simplifies async operations and dependency injection.",
    sections: [
      {
        heading: "Why Riverpod?",
        content: "Riverpod is a complete rewrite of the Provider pattern. It catches errors at compile time rather than runtime, making your app safer."
      },
      {
        heading: "AsyncValue Power",
        content: "Handling loading and error states has never been this elegant. The AsyncValue type removes the need for complex, nested if-else blocks."
      }
    ]
  },
  {
    id: "react-server-components",
    title: "React Server Components: The Good, The Bad, The Ugly",
    category: "MERN",
    author: "Chris Lee",
    date: "Dec 10, 2025",
    image: "/blog/react-server-components.png",
    excerpt: "A deep dive into Next.js App Router and how RSCs change the way we think about frontend data fetching.",
    sections: [
      {
        heading: "The RSC Concept",
        content: "Server Components allow you to render components on the server, significantly reducing the JavaScript bundle size sent to the client."
      },
      {
        heading: "Client Boundary",
        content: "Use Client Components only when necessary for interactivity like onClick, useState, or useEffect. Everything else should be a Server Component."
      }
    ]
  }
];

export const categories = ["All", "Flutter", "MERN", "Python", "UI/UX", "Digital Marketing"];
